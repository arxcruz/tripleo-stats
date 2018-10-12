import paho.mqtt.client as mqtt


def on_connect(client, userdata, flags, rc):
    print('Connected with result code {}'.format(rc))
    client.subscribe('gerrit/openstack/tripleo-quickstart/#')
    client.subscribe('gerrit/openstack/tripleo-quickstart-extras/#')
    client.subscribe('gerrit/openstack/nova/#')


def on_message(client, userdata, msg):
    print('{} {}'.format(msg.topic, msg.payload))


if __name__ == '__main__':
    client = mqtt.Client()
    client.on_connect = on_connect
    client.on_message = on_message

    client.connect('firehose.openstack.org')
    client.loop_forever()
