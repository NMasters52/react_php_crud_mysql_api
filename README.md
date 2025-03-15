# React PHP CRUD MySQL API

This is a CRUD (Create, Read, Update, Delete) application built using React for the frontend and PHP for the backend, with a MySQL database to store data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/NMasters52/react_php_crud_mysql_api.git
    cd react_php_crud_mysql_api
    ```

2. **Backend Setup with XAMPP:**

    - Download and install [XAMPP](https://www.apachefriends.org/index.html).
    - Start Apache and MySQL from the XAMPP Control Panel.
    - Move the backend files to the `htdocs` directory of your XAMPP installation.
    - Create a MySQL database for the project using phpMyAdmin or the MySQL command line.
    - Import the provided SQL file (if any) to set up the database schema and initial data.
    - Configure your database settings in the backend PHP files as needed.

3. **Frontend Setup:**

    - Navigate to the frontend directory:
        ```sh
        cd frontend
        ```

    - Install dependencies:
        ```sh
        npm install
        ```

## Usage

1. **Start the backend server:**
    - Ensure Apache and MySQL are running in XAMPP.
    - Access the backend via `http://localhost/<your-backend-directory>`.

2. **Start the frontend server:**
    ```sh
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Features

- Create, Read, Update, Delete operations for managing data.
- Responsive user interface built with React.
- RESTful API built with PHP and MySQL.

## Technologies

- **Frontend:** React, JavaScript, CSS, HTML
- **Backend:** PHP, MySQL
- **Tools:** Composer, npm, XAMPP

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
