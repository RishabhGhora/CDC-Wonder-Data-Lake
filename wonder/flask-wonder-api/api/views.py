from flask import Blueprint, jsonify, request
from . import db
from .models import Movie

main = Blueprint('main', __name__)

@main.route('/add_movie', methods=['POST'])
def add_movie():
    movie_data = request.get_json()

    new_movie = Movie(title=movie_data['title'], rating=movie_data['rating'])
    db.session.add(new_movie)
    db.session.commit()

    return 'Done', 201

@main.route('/get_data')
def movies():
    import findspark
    findspark.init("spark-3.0.0-preview2-bin-hadoop2.7/")
    import pyspark
    from pyspark.sql import SparkSession
    spark = SparkSession.builder.appName('Basics').getOrCreate()
    #sc = pyspark.SparkContext(appName="myAppName") 
    #sqlContext = pyspark.SQLContext(sc)
    #data = sqlContext.read.csv("../wonder/flask-wonder-api/CaseCounts.csv")
    df = spark.read.load("../wonder/flask-wonder-api/CaseCounts.csv",
                        format='com.databricks.spark.csv',
                        header='true',
                        inferSchema='true')
    newdf = df.select(df['year reported'], df['case counts']).groupBy('year reported').sum()
    newdf.show()
    #newDict = {"year reported": [], "case counts": []}
    newDict = dict(newdf.rdd.map(lambda x: (x['year reported'], x['sum(case counts)'])).collect())
    data = newdf.rdd.map(list)
    #data = data.toJSON()
    #print(data.collect())
    #print('data: ')
    #print(data)

    movies_list = Movie.query.all()
    movies = []

    for movie in movies_list:
        movies.append({'title' : movie.title, 'rating' : movie.rating})


    return newDict

