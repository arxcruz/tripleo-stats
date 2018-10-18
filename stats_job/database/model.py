from sqlalchemy import create_engine, Column, Integer, Sequence
from sqlalchemy import String, Table, ForeignKey
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()

job_run = Table('job_run', Base.metadata,
                Column('job_id', String, ForeignKey('job.job_id')),
                Column('status', String),
                Column('log_url', String),
                Column('reason', String)
                )


class Job(Base):
    __tablename__ = 'job'
    id = Column('job_id', Integer, Sequence('job_id_seq'), primary_key=True)
    name = Column('name', String)


engine = create_engine('sqlite:////:memory:', echo=True)
