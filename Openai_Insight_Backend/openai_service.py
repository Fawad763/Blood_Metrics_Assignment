import openai
import json
import config

def openai_insight(data):
    prompt = '''
    Digest the data and provide an overview of the health of each record and identify the patient with the highest risk. Don't make it complex. 
    
    Risk Thresholds:
    --------------
    Metric | High Risk
    ----------------|----------------
    A1C | ≥ 6.5%
    LDL | ≥ 160 mg/dL
    Glucose | ≥ 126 mg/dL
    '''
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": prompt},
            {"role": "user", "content": f"Here is the data:\n {json.dumps(data)}"}
        ],
        max_tokens=2000,
        temperature=0.1
    )

    bot_response = response.choices[0].message.content
    print(bot_response)
    return bot_response
