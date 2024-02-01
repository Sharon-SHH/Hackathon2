from flask import Flask
import requests

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    api_key = 'acc_fffbff1d9c6a505'
    api_secret = 'f9b8745ab46b564e82c57aacac1e83dc'
    image_url = 'https://imagga.com/static/images/tagging/wind-farm-538576_640.jpg'
    image_url = "https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_1.png"

    response = requests.get(
        'https://api.imagga.com/v2/colors?image_url=%s' % image_url,
        auth=(api_key, api_secret))

# print(response.json())
    # response_body = {
    #     "name": "Nagato",
    #     "about" :"Hello! I'm a full stack developer that loves python and javascript"
    # }

    return response.json()