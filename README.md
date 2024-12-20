# CRUD Application - Front-End Only

## Project Overview

This is a simple CRUD (Create, Read, Update, Delete) project built with pure HTML, CSS, and JavaScript, using `localStorage` for data persistence. It allows users to add, edit, and delete records of user information, including name and email, directly from the browser.

## Features

- **Add User**: Input fields for entering a user name and email, with a submit button to add the data to a table.
- **View Users**: Users are displayed in a table format showing ID, name, and email.
- **Edit User**: Modify existing user information with the "Edit" button.
- **Delete User**: Remove user data from the table using the "Delete" button.
- **Persistent Data**: Data is saved to `localStorage` so it is retained even after a page refresh.

## Project Structure

```
crud-frontend-project/
│
├── index.html       # Main HTML structure
├── css/
│   └── style.css    # Custom styling for the project
├── js/
│   └── script.js    # JavaScript logic for CRUD operations
└── bootstrap-5.0.2-dist/  # Bootstrap library for styling
```

## How to Use

1. **Add a User**:

   - Fill in the "User Name" and "E-mail Address" fields.
   - Click the "Submit" button to add the entry to the table.

2. **Edit a User**:

   - Click the "Edit" button next to a user entry to populate the input fields.
   - Modify the data and click the "Update" button to save changes.

3. **Delete a User**:

   - Click the "Delete" button next to a user entry to remove it from the table.

4. **Success and Error Messages**:
   - Appropriate messages will display based on actions for better user feedback.

## Technologies Used

- **HTML** for the structure of the web page.
- **CSS** and **Bootstrap 5** for styling.
- **JavaScript** for logic and interactivity.
- **localStorage** for data storage and persistence.

## License

This project is open-source and can be freely modified or expanded upon for personal or educational use.

---

Feel free to explore and use this project to learn about front-end development and CRUD operations.
