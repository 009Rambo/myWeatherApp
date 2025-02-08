# Use the official Python image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt into the container
COPY requirements.txt /app/

# Install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application
COPY . /app/

# Set the environment variable for the API key
ENV OPENWEATHER_API_KEY=043f4328cde7d9cecc8654622948723f

# Expose the port the app will run on
EXPOSE 4000

# Run the Flask application
CMD ["python", "app.py"]

