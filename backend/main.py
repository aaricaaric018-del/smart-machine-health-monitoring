from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "AI Smart Machine Backend Running"
    }

@app.get("/machine-data")
def machine_data():
    return {
        "machine_id": "M001",
        "temperature": 82,
        "vibration": 0.45,
        "rpm": 1450,
        "status": "Healthy"
    }