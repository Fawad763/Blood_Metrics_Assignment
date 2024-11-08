from pydantic import BaseModel

class PatientData(BaseModel):
    data: dict
