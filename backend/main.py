from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend to access FastAPI backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

class SensorData(BaseModel):
    temperature: float
    vibration: float
    rpm: int

@app.post("/predict")
def predict(data: SensorData):

    if data.temperature > 90:
        return {
            "health_score": 60,
            "failure_probability": 0.75,
            "maintenance_required": True,
            "recommendation": "Inspect machine immediately"
        }

    return {
        "health_score": 95,
        "failure_probability": 0.05,
        "maintenance_required": False,
        "recommendation": "Machine operating normally"
    }