# Weather App

This project is a **Weather Application** built using **React.js** and styled with **Tailwind CSS**. The app allows users to search for weather information for any location and provides real-time weather data, including temperature, humidity, wind speed, and more.

## Features

- **Real-time Weather Data**: Fetch current weather information for any location using a weather API.
- **Responsive Design**: Tailwind CSS ensures that the app is fully responsive on different screen sizes.
- **Search Functionality**: Users can search for the weather of any city or region.
- **Detailed Weather Information**: Includes temperature, humidity, wind speed, and weather conditions.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **API**: OpenWeatherMap API (or any other weather API)
- **State Management**: React Hooks
- **Other Libraries**: Axios for making HTTP requests

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/nvggupta/weather.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your weather API key:

    ```bash
    REACT_APP_WEATHER_API_KEY=your_api_key_here
    ```

    You can get the API key from [OpenWeatherMap](https://openweathermap.org/api).

5. Run the development server:

    ```bash
    npm start
    ```

    The project will be available at `http://localhost:3000/`.

## Usage

1. Enter the name of a city in the search bar.
2. The app will display real-time weather data, including temperature, humidity, wind speed, and conditions.
3. You can search for weather data in different cities.

## Folder Structure

```bash
src/
│
├── components/       # Reusable React components
├── pages/            # Main page files
├── assets/           # Static assets such as images
├── styles/           # Custom styles (if any)
├── App.js            # Main application component
└── index.js          # Entry point for React app
