# University Search Application

This project is a simple web application that fetches a list of universities from the [Universities API](http://universities.hipolabs.com/), based on the country entered by the user. It displays a list of universities in that country, along with their state/province, if available.

## Features

- Fetches university data using the Universities API.
- Displays universities based on the country input.
- Shows up to 10 universities per search.
- Displays a message when no data is available.
- Provides a clean and interactive UI for users to search and view universities.

## Technologies Used

- HTML
- CSS (optional, not included in the code)
- JavaScript (Vanilla)
- Asynchronous programming with `async/await` and `fetch`

## Code Breakdown

### 1. HTML Structure
- An `input` field for entering the country name.
- A `button` to trigger the search.
- A `ul` (unordered list) to display the list of universities.
- A dynamically created `h3` tag to display the title with the country name.

### 2. JavaScript Functionality

#### Variables:
- `url`: The API URL used to fetch universities based on the country.
- `btn`: The button element that triggers the search.
- `h3`: A dynamically created element that displays the title of universities in the selected country.
- `ul`: The unordered list element where the universities will be listed.

#### Functions:
- `api_call(country)`: An asynchronous function that makes an API call to fetch university data based on the provided country.
- `btn.addEventListener('click', ...)`: Event listener that listens for a button click, triggers the API call, and updates the DOM with the results.

#### Error Handling:
- The application handles errors in the API call by catching exceptions and logging them to the console, as well as returning an empty array if an error occurs.

### Example

**Input**: "India"

**Output**:
- Displays a list of 10 universities in India, showing their names and, if available, state/province.

If no data is available for the input country, the message `"NO DATA AVAILABLE"` will be displayed.

