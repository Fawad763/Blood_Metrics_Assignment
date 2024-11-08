# Blood_Metrics_Assignment


# Blood_Metrics_Assignment


# OpenAI Insight Backend

This project includes a backend built with FastAPI and a frontend built with React. The backend integrates OpenAI's API to analyze patient health data based on risk thresholds and provides insights.

## Getting Started

### Prerequisites

- Python 3.8 or higher
- Node.js and npm (for the frontend)
- OpenAI API key

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Navigate to the backend directory:
    ```bash
    cd Openai_Insight_Backend
    ```

3. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

4. Set up environment variables:
    - Create a `.env` file in the `Openai_Insight_Backend` folder with the following line:
        ```env
        openai_api=YOUR_OPENAI_API_KEY
        ```

5. Run the backend server:
    ```bash
    uvicorn main:app --reload
    ```
   The backend should now be running at `http://localhost:8000`.

6. To run the frontend, navigate to the `React-Frontend` folder:
    ```bash
    cd React-Frontend
    ```

7. Install the frontend dependencies:
    ```bash
    npm install
    ```

8. Start the frontend:
    ```bash
    npm start
    ```
   The frontend should now be running at `http://localhost:3000`.

## Code Overview

### Backend

The backend is structured as follows:

- **`main.py`**: Sets up the FastAPI application with CORS middleware and defines an endpoint (`/api/insights`) that receives patient data and returns health insights.
- **`config.py`**: Loads the OpenAI API key from environment variables.
- **`models.py`**: Defines the `PatientData` schema used for validating incoming data.
- **`openai_service.py`**: Contains the function `openai_insight` that calls OpenAI's API to process health data and returns insights based on defined risk thresholds (A1C, LDL, and Glucose levels).

### Frontend

The frontend is a React application that communicates with the backend to send patient data and display insights. 

## Sample Data

The backend includes a sample JSON file (`sampleData.json`) with patient records, illustrating how data should be structured for analysis.

### Risk Thresholds Used

The `openai_service.py` script uses the following risk thresholds to assess health:
- **A1C**: ≥ 6.5%
- **LDL**: ≥ 160 mg/dL
- **Glucose**: ≥ 126 mg/dL

## Usage

- Send a POST request to `http://localhost:8000/api/insights` with patient data in the following format:
    ```json
    {
      "data": {
          "patient_1": { "a1c": 5.6, "ldl": 120, "glucose": 98 },
          "patient_2": { "a1c": 6.1, "ldl": 145, "glucose": 110 },
          "patient_3": { "a1c": 6.4, "ldl": 160, "glucose": 126 }
      }
    }
    ```
- The backend will analyze this data and provide an overview indicating which patients have high risk for specific metrics.

## License

This project is licensed under the MIT License.

