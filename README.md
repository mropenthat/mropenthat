from flask import Flask, request, jsonify
import pytesseract
from PIL import Image
import requests

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_image():
    image = Image.open(request.files['file'])
    # Run OCR to detect text
    text = pytesseract.image_to_string(image)
    # Extract potential book titles
    books = extract_book_titles(text)
    return jsonify({'books': books})

def extract_book_titles(text):
    # Use NLP or regex to identify probable book titles and authors in the extracted text
    # Placeholder function for now
    return text.splitlines()
