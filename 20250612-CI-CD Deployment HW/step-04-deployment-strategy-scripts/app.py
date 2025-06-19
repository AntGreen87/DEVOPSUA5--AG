from flask import Flask
import os

app = Flask(__name__)

@app.route("/")
def home():
    return f"This is the {os.getenv('VERSION', 'default')} version of the app."

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
