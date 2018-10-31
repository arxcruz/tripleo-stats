from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import abort
from flask_restful import fields
from flask_restful import marshal_with
from flask_restful import reqparse
from flask_restful import Api
from flask_restful import Resource

from sqlalchemy import func

from database import model

import datetime
import json


__version__ = '0.1'

# Initialize Flask
app = Flask(__name__)
app.config.from_object('websiteconfig')
app.secret_key = 'a6ac0d63-abbc-4bb4-9702-8408392f9dff'

# Initialize database
db = SQLAlchemy(app)

# Initialize flask-restful
api = Api(app)


class JobList(Resource):
    def get(self, category_id=None):
        query_category = db.session.query(model.Category).filter(
                            model.Category.category_id == category_id).first()
        query_type = db.session.query(model.JobType).all()
        return_value = {}

        return_value['category_id'] = category_id
        return_value['category_description'] = query_category.description
        return_value['jobs'] = []

        for row_type in query_type:
            jobs = []
            for row_job in query_category.jobs:
                if int(row_job.job_type_id) == int(row_type.job_type_id):
                    jobs.append({'job_id': row_job.job_id,
                                 'job_name': row_job.name})

            return_value['jobs'].append(
                    {'job_type': row_type.description, 'jobs': jobs})

        return return_value


category_list = {
        'category_id': fields.Integer,
        'description': fields.String
        }


class CategoryList(Resource):
    @marshal_with(category_list)
    def get(self):
        query = db.session.query(model.Category).all()
        return query


job_type_list = {
        'job_type_id': fields.Integer,
        'description': fields.String
        }


class JobTypeList(Resource):
    @marshal_with(job_type_list)
    def get(self):
        query = db.session.query(model.JobType).all()
        return query


class ChartDataReport(Resource):
    def get(self):
        today = datetime.datetime.today()
        yesterday = today - datetime.timedelta(1)
        last_week = today - datetime.timedelta(7)

        chart_data = []

        query = db.session.query(func.count().label('count'),
                                 model.JobRun.failure_type).group_by(
                                         model.JobRun.failure_type)

        f_query = query.filter(func.date(model.JobRun.date) == func.date(today)
                               ).all()

        data = []
        for row in f_query:
            data.append({'name': row.failure_type, 'value': row.count})

        chart_data.append({'status_type': 'today', 'data': data})

        f_query = query.filter(
                func.date(model.JobRun.date) == func.date(yesterday)
                               ).all()

        data = []
        for row in f_query:
            data.append({'name': row.failure_type, 'value': row.count})

        chart_data.append({'status_type': 'yesterday', 'data': data})

        data = []
        f_query = query.filter(
                func.date(model.JobRun.date) <= func.date(today),
                func.date(model.JobRun.date) >= func.date(last_week)
                               ).all()

        for row in f_query:
            data.append({'name': row.failure_type, 'value': row.count})

        chart_data.append({'status_type': 'week', 'data': data})

        data = []
        f_query = query.all()
        for row in f_query:
            data.append({'name': row.failure_type, 'value': row.count})

        chart_data.append({'status_type': 'overall', 'data': data})

        return chart_data


api.add_resource(ChartDataReport, '/api/chartdata',
                 endpoint='chartdata')
api.add_resource(JobTypeList, '/api/jobtypes', endpoint='jobtypes')
api.add_resource(CategoryList, '/api/categories', endpoint='categories')
api.add_resource(JobList, '/api/joblist/<int:category_id>', endpoint='joblist')

# End api


@app.teardown_request
def remove_db_session(exception):
    db.session.remove()


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET,PUT,POST,DELETE')
    return response
