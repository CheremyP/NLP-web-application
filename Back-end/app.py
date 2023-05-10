from flask import Flask, jsonify,  request
from flask_cors import CORS

import whisper
import requests

# Initializing flask app
app = Flask(__name__)
app.app_context().push()
CORS(app)

@app.route('/transcribe', methods=['POST'])
def transcribe():
    # Getting audio file from reactjs .wav .mp3 .m4a
    audio = request.files['audio']
    language = request.form['language']

    # Transcribing audio file
    model = whisper.load_model("base")
    result = model.transcribe(audio.filename)

    # Translating transcript
    url = "https://google-translator9.p.rapidapi.com/v2"

    payload = {"q": result['text'],"source": "en","target": str(language)}
    
    headers = {
	"content-type": "application/json",
	"X-RapidAPI-Key": "Your API Key goes here", # Enter your API key here
	"X-RapidAPI-Host": "google-translator9.p.rapidapi.com"}

    response = requests.post(url, json=payload, headers=headers)

    #
    translation = response.json()['data']['translations'][0]['translatedText']

    url_speech = "https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize"

    payload = {
        "voice_code": "en-US-1",
        "text": str(translation),
        "speed": "1.00",
        "pitch": "1.00",
        "output_type": "audio_url"
    }
    headers = {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": 'Enter your API key here', # Enter your API key here
        "X-RapidAPI-Host": "cloudlabs-text-to-speech.p.rapidapi.com"
    }

    response = requests.post(url_speech, data=payload, headers=headers)
    audio_url = response.json()['result']['audio_url']
    print(audio_url)

    # Returning an API result for  displaying in React.js
    return jsonify({
        "Transcript": result['text'],
        "Translation": translation,
        "Audio": audio_url
    })


# Running app
if __name__ == '__main__':
	app.run(debug=True, port=5000)
