from fastapi import FastAPI

app = FastAPI()

@app.get("/models")
async def get_models():
    return [
        {"id": "medimg123", "name": "Medical Image Classifier"},
        {"id": "sent456", "name": "Text Sentiment Analyzer"}
    ]