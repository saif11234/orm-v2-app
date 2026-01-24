# ORM V2 Application

## Overview
ORM V2 is a versatile application designed to provide assessment tools and reference materials. It can be deployed as a web application, a Progressive Web App (PWA), or a desktop application using Electron.

## Project Structure
The project is organized as follows:

```
orm-v2-app
├── src
│   ├── web
│   │   ├── index.html          # Main entry point for the web application
│   │   ├── assessment.html     # Assessment-related content
│   │   ├── reference.html      # Reference material
│   │   ├── main.js             # Main JavaScript logic
│   │   └── styles.css          # Styles for the web application
│   ├── electron
│   │   ├── main.js             # Main entry point for the Electron application
│   │   └── preload.js          # Preload script for secure API exposure
│   └── pwa
│       ├── manifest.json       # Metadata for the Progressive Web App
│       └── service-worker.js    # Service worker for offline capabilities
├── package.json                 # npm configuration file
├── forge.config.js              # Configuration for the Forge tool
├── capacitor.config.json         # Configuration for Capacitor
└── README.md                    # Project documentation
```

## Installation
To get started with the ORM V2 application, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd orm-v2-app
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Build the application:
   ```
   npm run build
   ```

## Running the Application
### Web Application
To run the web application, use:
```
npm start
```

### Electron Application
To run the Electron application, use:
```
npm run electron
```

### Progressive Web App
To serve the PWA, you can use a static server or deploy it to a web server.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.