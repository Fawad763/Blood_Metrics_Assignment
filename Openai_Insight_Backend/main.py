import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import PatientData
from openai_service import openai_insight
import config

app = FastAPI()

origins = [
    "http://localhost:3000",
    "https://blood-metrics-assignment.vercel.app"  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/insights")
async def get_insights(patient_data: PatientData):
    try:
        insights = openai_insight(patient_data.data)
        return {"insights": insights}
    except Exception as e:
        logging.error("Error in get_insights: %s", str(e))
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")
