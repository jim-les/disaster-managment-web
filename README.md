# Disaster Management System with Gemini Pro Integration

## Overview

This project aims to develop a disaster management system that utilizes artificial intelligence to assist in disaster response and mitigation efforts. The system integrates with Gemini Pro, an AI chatbot powered by Google's GenerativeAI, to provide users with real-time support and information during disasters.

## Features

- **User Authentication**: Users can sign up and log in securely to access the system.
- **Disaster AI Chatbot**: Integration with Gemini Pro AI chatbot allows users to interact with a virtual assistant specialized in disaster management.
- **Real-time Assistance**: Users can ask questions, seek guidance, and receive instant responses from the AI chatbot.
- **Role-based Access Control**: Different user roles may have varying levels of access and permissions within the system.

## Technologies Used

- **FastAPI**: Python framework for building web APIs, used for backend development.
- **Streamlit**: Python library for building interactive web applications, used for frontend development.
- **Google GenerativeAI (Gemini Pro)**: AI platform for natural language processing and generation, used for building the disaster management chatbot.
- **Pydantic**: Python library for data validation and modeling, used for defining data schemas.
- **dotenv**: Python library for loading environment variables from a `.env` file, used for storing sensitive information like API keys.
- **Google Cloud Platform (GCP)**: Cloud services used for hosting the application and accessing the GenerativeAI API.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your_username/disaster-management.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd disaster-management
    ```

3. **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Set up environment variables:**
   
    - Create a `.env` file in the project directory.
    - Add your Google API key:

        ```
        GOOGLE_API_KEY=your_api_key_here
        ```

## Usage

1. **Run the FastAPI backend:**

    ```bash
    uvicorn app:app --reload
    ```

2. **Run the Streamlit frontend:**

    ```bash
    streamlit run frontend.py
    ```

3. **Access the application in your web browser at `http://localhost:8501`.**

4. **Sign up or log in to the system to interact with the Disaster AI chatbot and explore its features.**

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a new branch (`git checkout -b feature/improvement`).
- Make your changes and commit them (`git commit -am 'Add new feature'`).
- Push your changes to your fork (`git push origin feature/improvement`).
- Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
