import os
import joblib
import pandas as pd

from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier

# -------------------------------------------------
# Load Dataset
# -------------------------------------------------
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
csv_path = os.path.join(BASE_DIR, "ai4i2020.csv")

df = pd.read_csv(csv_path)

# -------------------------------------------------
# Drop Unnecessary Columns
# -------------------------------------------------
df = df.drop(columns=[
    "UDI",
    "Product ID",
    "TWF",
    "HDF",
    "PWF",
    "OSF",
    "RNF"
])

# -------------------------------------------------
# Encode Categorical Column
# -------------------------------------------------
le = LabelEncoder()
df["Type"] = le.fit_transform(df["Type"])

# -------------------------------------------------
# Rename Columns (XGBoost does not allow [ ] < >)
# -------------------------------------------------
df.columns = [
    "Type",
    "Air_temperature",
    "Process_temperature",
    "Rotational_speed",
    "Torque",
    "Tool_wear",
    "Machine_failure"
]

# -------------------------------------------------
# Features and Target
# -------------------------------------------------
X = df.drop("Machine_failure", axis=1)
y = df["Machine_failure"]

# -------------------------------------------------
# Train/Test Split
# -------------------------------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# -------------------------------------------------
# Train XGBoost Model
# -------------------------------------------------
model = XGBClassifier(
    n_estimators=100,
    learning_rate=0.1,
    max_depth=5,
    random_state=42,
    eval_metric="logloss"
)

model.fit(X_train, y_train)

# -------------------------------------------------
# Save Model and Label Encoder
# -------------------------------------------------
joblib.dump(model, os.path.join(BASE_DIR, "xgboost_model.pkl"))
joblib.dump(le, os.path.join(BASE_DIR, "label_encoder.pkl"))

print("✅ Model saved successfully!")
print("📁 xgboost_model.pkl")
print("📁 label_encoder.pkl")