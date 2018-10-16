import json
import logging
import paho.mqtt.client as mqtt
import re


LOG = logging.getLogger(__name__)
logging.basicConfig(level=logging.DEBUG)


class OpenstackMqtt(object):
    def __init__(self, connection='firehose.openstack.org'):
        self.client = mqtt.Client()
        self.connection = connection
        self._on_connect = None
        self._on_message = None
        self.client.on_connect = self.on_client_connect
        self.client.on_message = self.on_client_message

        self.client.connect(self.connection)

    @property
    def on_connect(self):
        return self._on_connect

    @on_connect.setter
    def on_connect(self, value):
        self._on_connect = value

    @property
    def on_message(self):
        return self._on_message

    @on_message.setter
    def on_message(self, value):
        self._on_message = value

    # TODO(arxcruz): Need to get these values from a conf file
    def on_client_connect(self, client, userdata, flags, rc):
        LOG.debug('Connected with result code ' + str(rc))
        if self.on_connect:
            self.on_connect('Connected to {}'.format(self.connection))

            self.add_subscribe('openstack/tripleo-quickstart')
        #  self.add_subscribe('openstack/tripleo-quickstart-extras')
        #  self.add_subscribe('openstack/nova')

    def add_subscribe(self, project):
        self.client.subscribe('gerrit/{}/change-abandoned'.format(project))
        self.client.subscribe('gerrit/{}/change-merged'.format(project))
        self.client.subscribe('gerrit/{}/comment-added'.format(project))
        # self.client.subscribe('gerrit/{}/topic-changed'.format(project))
        self.client.subscribe('gerrit/{}/merge-failed'.format(project))

    def on_client_message(self, client, userdata, msg):
        LOG.debug('New message received: {}'.format(msg.topic))

        payload = json.loads(str(msg.payload))
        #  topic = msg.topic[msg.topic.rfind('/')+1:]
        #  info = None
        # LOG.debug('Content: {}'.format(
        #    json.dumps(payload, indent=4, sort_keys=True)))
        if self.is_verified(payload):
            LOG.debug('Change was verified')
        if self.on_message:
            return_dict = {'change_id': payload['change']['id'],
                           'commit_message': payload['change']['commitMessage']
                           }
            self.on_message(return_dict)

    def is_verified(self, payload):
        comment = payload.get('comment', None)
        author = payload.get('author', {}).get('username', None)

        if not comment or not author:
            return False

        if 'Verified+1' in comment and author == 'zuul':
            LOG.debug('Verified')
            return True
        else:
            return False

    def parse_commit_message(self, commit_message):
        new_message = re.sub(r'^.*\n', '', commit_message)
        new_message = re.sub(r'\nChange-Id.*', '', new_message)
        return new_message

    def start(self):
        self.client.loop_start()
