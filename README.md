#Linguify
Linguify is an open-source web application that utilizes React, JavaScript, Python, TailwindCSS, and Flask back-end. It serves as an excellent tool for those who want to convert text from one language to another.

###Installation
To run Linguify on your local development machine, you will need to have Node 10.16.0 or a later version installed. However, it is not a requirement on the server. We recommend using the latest Long-Term Support (LTS) version. Additionally, you will need to install OpenAI Whisper and Rapid API key to use Linguify. The installation process for OpenAI Whisper can be found here, and you can sign up for a Rapid API account here.

###Usage
To use Linguify, follow the steps below:

Clone or download the Linguify repository.
Install the required dependencies by running the following command in your terminal:
sh'''
Copy code
npm install
'''

Once the installation is complete, start the React application by running:
sh'''
Copy code
npm start
'''
Next, navigate to the Back-end directory and install the necessary dependencies by running:
sh'''
Copy code
pip install -r requirements.txt
'''

To run the Flask back-end, activate the virtual environment by running:
sh'''
Copy code
venv/Scripts/
'''

Finally, start the Flask server by running:
sh'''
Copy code
python ap.py
System Requirements
Node 10.16.0 or later version
OpenAI Whisper
Rapid API key
Python 3.6 or later version
ffmpeg
'''
Note: To install ffmpeg, follow the instructions below:

For Linux:
sh'''
Copy code
sudo apt update && sudo apt install ffmpeg
'''
For MacOS:
sh'''
Copy code
brew install ffmpeg
For Windows:
sh'''
Copy code
choco install ffmpeg
License
Linguify is released under the MIT License. See the LICENSE file for more information.