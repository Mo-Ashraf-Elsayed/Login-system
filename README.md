# Smart Login System

## Overview

This project implements a simple login system using **HTML**, **CSS**, **Bootstrap**, and **JavaScript**. The system consists of three pages:

1. **SignUp Page**: Allows users to create an account by entering their name, email, and password.
2. **SignIn Page**: Allows users to log in using their credentials (email and password).
3. **Home Page**: Displays a personalized welcome message using the user's name after successful login.

### Features

- **User Registration**: Users can create an account by providing their name, email, and password. The account data is stored in the browser's local storage.
- **Login Verification**: The system checks whether the entered email and password match an existing account.
- **Personalized Welcome**: After logging in, users are redirected to a home page that displays a personalized welcome message.
- **Log Out**: Users can log out, which will clear the session and redirect them back to the sign-in page.

## Pages

### 1. **SignUp Page**

- Allows users to create a new account by providing the following details:
  - **Name**
  - **Email**
  - **Password**
- Data is validated before storing in local storage by RegExp in JavaScript.
- If the entered data is valid, the account is created and saved in local storage.
- If any input is invalid, an error message is displayed and no account is created by SweetAlert2 library.

### 2. **SignIn Page**

- Users can log in by entering their email and password.
- The system checks if the provided credentials match any stored account information.
- If the credentials are correct, the user's name is stored in the localStorage under the property `"name"`, and the user is redirected to the home page.
- If the credentials are incorrect, an error message is displayed by SweetAlert2 library.

### 3. **Home Page**

- After a successful login, users are redirected to the home page.
- The page displays a personalized welcome message using the user's name stored in the localStorage.
- A "Log Out" button is available, which clears the session and redirects the user back to the sign-in page.

## Usage

1. **Sign Up**:

   - Click the **"Sign Up"** link on the sign-in page to access the registration page.
   - Fill out the registration form with your name, email, and password.
   - Click **"Sign Up"** to create your account.

2. **Sign In**:

   - Click the **"Log in"** link on the sign-up page to access the sign-in page.
   - Enter the email and password you used during registration.
   - Click **"Sign In"** to log into your account.

3. **Home Page**:

   - After successful login, you'll be redirected to the home page, where your name will be displayed in the welcome message.

4. **Log Out**:
   - On the home page, click the **"Log Out"** button to log out and return to the sign-in page.

## Technologies Used

- **HTML**: For the structure of the pages.
- **CSS**: For styling the pages and making them visually appealing.
- **Bootstrap**: For responsive design and UI components.
- **JavaScript**: For form validation, user authentication, and session management using localStorage.

## Conclusion

This is a simple login system built with a focus on front-end technologies. It demonstrates how to handle user authentication with **localStorage** and provides a seamless experience with personalized user messages.

### [LinkedIn](https://www.linkedin.com/in/mohammed-ashraf0/)

### [Live Demo](https://mo-ashraf-elsayed.github.io/Login-system/)
