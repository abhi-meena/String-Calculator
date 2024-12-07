# String Calculator TDD Kata

This project is a simple implementation of a String Calculator, designed to demonstrate the principles of Test-Driven Development (TDD). The application uses Node.js with an MVC architecture.

## Project Structure
- **controllers/StringCalculatorController.js**: Contains the logic for handling API requests.
- **models/StringCalculator.js**: Implements the String Calculator logic.
- **routes/StringCalculatorRoutes.js**: Defines routes for the API.
- **tests/StringCalculator.test.js**: Contains unit tests for the String Calculator.
- **app.js**: The main entry point for the application.

## Requirements
- Node.js (>= 14.x)
- npm (>= 6.x)

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

## Running the Application

1. **Start the Server**
   ```bash
   npm start
   ```
   The server will start at `http://localhost:3000`.

2. **Test the API**
   Use a tool like Postman or `curl` to test the `/api/calculate/add` endpoint.

   Example:
   ```bash
   curl -X POST http://localhost:3000/api/calculate/add \
   -H "Content-Type: application/json" \
   -d '{"numbers": "1,2,3"}'
   ```
   Expected Response:
   ```json
   {
     "result": 6
   }
   ```

## Running Tests

1. **Run All Tests**
   ```bash
   npm test
   ```
   This will execute all test cases in the `tests` directory.

2. **Test Output**
   The output will indicate whether the tests passed or failed.

## Features
- Handles an empty string input (`""`) and returns 0.
- Computes the sum of numbers separated by commas or newlines.
- Supports custom delimiters (e.g., `"//;\n1;2"`).
- Throws an error for negative numbers, listing all negatives in the error message.

## Project Scripts
- **`npm start`**: Starts the application.
- **`npm test`**: Runs the unit tests using Mocha and Chai.

## Future Enhancements
- Add more advanced TDD scenarios from the [TDD Kata](https://osherove.com/tdd-kata-1).
- Implement a front-end interface for interacting with the API.

## License
This project is licensed under the MIT License.
