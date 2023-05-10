## Linguify
Linguify is an open-source web application that utilizes React, JavaScript, Python, TailwindCSS, and Flask back-end. It serves as an excellent tool for those who want to convert text from one language to another.

## Features
- 🌍 **Internationalization** - A total of 85 languages to translate and enables real-time audio translation

- 🛸 **Files** - Compatible with various files like mp3,m4a, 

### Dependencies
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Flask](https://flask.palletsprojects.com/en/2.0.x/)
- [OpenAI Whisper](https://github.com/openai/whisper)
- [Rapid API](https://rapidapi.com/)
- [ffmpeg](https://ffmpeg.org/)
- [Python](https://www.python.org/)
- [Node](https://nodejs.org/en/)

Note: To install ffmpeg, follow the instructions below:
For Linux:

```sh
sudo apt update && sudo apt install ffmpeg
```

For MacOS:

```sh
brew install ffmpeg
```

For Windows:

```sh
choco install ffmpeg
```

### Installation
To run Linguify on your local development machine, you will need to have Node 10.16.0 or a later version installed. However, it is not a requirement on the server. We recommend using the latest Long-Term Support (LTS) version. Additionally, you will need to install OpenAI Whisper and Rapid API key to use Linguify. The installation process for OpenAI Whisper can be found here, and you can sign up for a Rapid API account here.

### Usage
To use Linguify, follow the steps below:

Clone or download the Linguify repository.
Install the required dependencies by running the following command in your terminal:

```sh
npm install
```

Once the installation is complete, start the React application by running:

```sh
npm start
```

Next, navigate to the Back-end directory and install the necessary dependencies by running:

```sh
python -m venv myenv
pip install -r requirements.txt
```

To run the Flask back-end, activate the virtual environment by running:

```sh
venv/Scripts/activate
```
Finally, start the Flask server by running:

```sh
python app.py or flask run
```

Note: The necessary API keys are not included in the repository. You will need to create a Rapid API account and add your API key to the .env file in the Back-end directory. You can find the .env.example file in the same directory.

### License
Linguify is released under the MIT License. See the LICENSE file for more information.