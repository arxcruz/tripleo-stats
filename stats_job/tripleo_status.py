import json
import logging

from gerrit import Gerrit
from openstack_mqtt import OpenstackMqtt

from framework.tasks import tasks


LOG = logging.getLogger(__name__)
logging.basicConfig(level=logging.DEBUG)


class TripleoStatus(object):
    def __init__(self):
        self.start()

    def start(self):
        self.gerrit = Gerrit(['zuul'])
        self.omqtt = OpenstackMqtt()
        self.omqtt.on_connect = self.on_connect
        self.omqtt.on_message = self.on_message
        self.omqtt.connect()
        self.omqtt.client.loop_forever()

    def subscribe(self):
        self.omqtt.add_subscribe('openstack/tripleo-quickstart')
        self.omqtt.add_subscribe('openstack/tripleo-quickstart-extras')
        self.omqtt.add_subscribe('openstack/nova')

    def on_connect(self, data):
        self.subscribe()

    def on_message(self, data):
        change = self.gerrit.get_data_from_gerrit(data['change_id'])
        LOG.debug('Change: {}'.format(json.dumps(change, indent=2)))
        tasks.process_results.apply_async(args=[change])


def main():
    TripleoStatus()


if __name__ == '__main__':
    main()
