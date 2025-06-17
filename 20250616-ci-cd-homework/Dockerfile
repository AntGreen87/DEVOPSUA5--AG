FROM python:3.8-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY flask_app.py .

EXPOSE 5000

CMD ["python", "flask_app.py"]