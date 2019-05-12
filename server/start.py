import falcon
from pymongo import MongoClient
from pprint import pprint

# settings API
# simulation START/STOP
# COMBINE ^ ?
# iteration

client = MongoClient('mongodb://127.0.0.1:27017')

class IterationsResource:
    def on_get(self, req, resp):
        resp.status = falcon.HTTP_200
        resp.body = "THIS WORKS YES"
        db = client.test
        db.zips.find()

app = falcon.API()
iterations = IterationsResource()
app.add_route('/iterations', iterations)