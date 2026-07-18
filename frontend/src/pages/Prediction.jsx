import { useEffect, useState } from "react";
import { getPrediction } from "../api/api";

function Prediction() {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    async function loadPrediction() {
      const data = await getPrediction();
      setPrediction(data);
    }

    loadPrediction();
  }, []);

  if (!prediction) {
    return <h2>Loading prediction...</h2>;
  }

  return (
    <div className="container">
      <h1>🤖 AI Predictive Analysis</h1>

      <div className="card">
        <h2>Machine: CNC-001</h2>

        <p>
          <b>Health Score:</b> {prediction.health_score}%
        </p>

        <p>
          <b>Failure Probability:</b>{" "}
          {(prediction.failure_probability * 100).toFixed(0)}%
        </p>

        <p>
          <b>Maintenance Required:</b>{" "}
          {prediction.maintenance_required ? "Yes" : "No"}
        </p>

        <p>
          <b>Recommendation:</b> {prediction.recommendation}
        </p>
      </div>
    </div>
  );
}

export default Prediction;