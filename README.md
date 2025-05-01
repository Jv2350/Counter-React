# Simple Counter App

A simple React counter application built with Vite. This app demonstrates basic state management and user interaction in React, with additional features like value limits, reset, halving, and doubling.

## Features

- Increment and decrement the counter (min: 0, max: 100)
- Reset counter to default value (10)
- Halve or double the counter value
- Alerts when trying to exceed limits
- Responsive and minimal UI

## Getting Started

### Installation

1. Clone the repository or download the source code.
2. Open a terminal in the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and go to the URL shown in the terminal (usually http://localhost:5173).

## Project Structure

```
├── public/           # Static assets
├── src/              # Source code
│   ├── App.jsx       # Main React component
│   ├── main.jsx      # Entry point
│   └── ...           # Other assets and styles
├── index.html        # HTML template
├── package.json      # Project metadata and scripts
├── vite.config.js    # Vite configuration
└── README.md         # Project documentation
```
