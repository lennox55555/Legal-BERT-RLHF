from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import uvicorn
from typing import Dict, Any
import json

app = FastAPI()

# Model initialization
MODEL_PATH = "/home/ec2-user/93-118CongressionalLegalBert/model"
LABEL_MAP_PATH = "/home/ec2-user/93-118CongressionalLegalBert/labelMapping/reconstructed_label_mapping.json"

# Load the model and tokenizer
tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
model = AutoModelForSequenceClassification.from_pretrained(MODEL_PATH)

# Load and reverse label mapping (swap keys and values)
try:
    with open(LABEL_MAP_PATH, 'r') as f:
        original_mapping = json.load(f)
        # Create reversed mapping where numbers are keys and labels are values
        label_mapping = {str(v): k for k, v in original_mapping.items()}
        print("Loaded label mapping:", label_mapping)
except Exception as e:
    print(f"Error loading label mapping: {e}")
    label_mapping = {}

class PredictionRequest(BaseModel):
    text: str

@app.post("/predict")
async def predict(request: PredictionRequest) -> Dict[str, Any]:
    try:
        # Tokenize input
        inputs = tokenizer(
            request.text,
            return_tensors="pt",
            truncation=True,
            max_length=512,
            padding=True
        )
        
        # Make prediction
        with torch.no_grad():
            outputs = model(**inputs)
            predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)
            predicted_label_id = torch.argmax(predictions).item()
            confidence = float(predictions[0][predicted_label_id])
        
        # Get the label name from mapping
        predicted_label_name = label_mapping.get(str(predicted_label_id), f"Unknown Label {predicted_label_id}")
        # Debug prints
        print(f"Predicted ID: {predicted_label_id}")
        print(f"Predicted Label: {predicted_label_name}")
        
       	return {
            "prediction": predicted_label_name,
            "prediction_id": predicted_label_id,
            "confidence": confidence
        }
    except Exception as e:
        print(f"Error in prediction: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="", port="")
