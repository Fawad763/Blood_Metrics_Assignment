import os
from dotenv import load_dotenv
import openai  

load_dotenv()

openai.api_key = os.getenv("openai_api")
