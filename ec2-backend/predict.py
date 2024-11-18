import sys
import json
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

# Path to the model
MODEL_PATH = "/home/ec2-user/93-118CongressionalLegalBert/model"
tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
model = AutoModelForSequenceClassification.from_pretrained(MODEL_PATH)

def predict(input_text):
    # Tokenize input text
    inputs = tokenizer(input_text, return_tensors="pt", truncation=True, padding=True)
    outputs = model(**inputs)
    predictions = torch.argmax(outputs.logits, dim=1).tolist()
    return predictions

if __name__ == "__main__":
    input_data = json.loads(sys.argv[1])
    result = predict(input_data['text'])
    print(json.dumps({"prediction": result}))
