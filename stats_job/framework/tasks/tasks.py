import json

# from sqlalchemy.orm import sessionmaker
from ..celery import app
# from ../..database import model


@app.task
def process_results(data):
    print('Data processed: {}'.format(json.dumps(data, indent=2)))

#  def insert_data(data):
#      session = sessionmaker(bind=model.engine)
#      change = session.query(model.Change).filter_by(id=data['change_id']).first()
#      if not change:
#          change = model.Change(id=data['change_id'])
#      for j in data['jobs']:
#          job = session.query(model.Job).filter_by(name=j['])
