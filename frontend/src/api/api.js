const API_URL = "http://127.0.0.1:8000";

export async function getMachineData() {
  const response = await fetch(`${API_URL}/machine-data`);
  return response.json();
}

export async function getPrediction() {
  const response = await fetch(`${API_URL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      temperature: 80,
      vibration: 0.5,
      rpm: 1500
    })
  });

  return response.json();
}