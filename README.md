# Blog-Website-using-MERN

This is a full-stack blog application built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to create, view, and delete blog posts.

## Technologies Used

*   **MongoDB**: NoSQL database for storing blog post data.
*   **Express.js**: Backend framework for building the API.
*   **React**: Frontend library for building the user interface.
*   **Node.js**: JavaScript runtime environment for the backend.

## API Endpoints

### Create Post
*   **Method**: `POST`
*   **Path**: `/compose`
*   **Description**: Creates a new blog post.
*   **Request Body**:
    *   `postTitle` (String): The title of the post.
    *   `postBody` (String): The main content of the post.
    *   `postTags` (String): Comma-separated tags for the post.
*   **Response**: JSON object of the request body (`{ postTitle, postBody, postTags }`).

### Get All Posts
*   **Method**: `GET`
*   **Path**: `/posts`
*   **Description**: Retrieves a list of all blog posts.
*   **Request Body**: None.
*   **Response**: JSON array of post objects. Each post object contains:
    *   `_id` (String): The unique ID of the post.
    *   `title` (String): The title of the post.
    *   `content` (String): The main content of the post.
    *   `tags` (String): Comma-separated tags for the post.

### Get Single Post
*   **Method**: `GET`
*   **Path**: `/posts/:postId`
*   **Description**: Retrieves a single blog post by its ID.
*   **Request Body**: None.
*   **URL Parameters**:
    *   `postId` (String): The ID of the post to retrieve.
*   **Response**: Renders an EJS template (`post.ejs`) displaying the post's `title`, `content`, and `tags`. Returns a 404 if the post is not found.

### Delete Post
*   **Method**: `POST`
*   **Path**: `/posts/:postId/delete`
*   **Description**: Deletes a blog post by its ID.
*   **Request Body**: None.
*   **URL Parameters**:
    *   `postId` (String): The ID of the post to delete.
*   **Response**: JSON object with a success message (`{ message: "Post deleted successfully" }`).

## Frontend Components

### `app.jsx`
*   **Location**: `client/src/components/app.jsx`
*   **Purpose**: Main application component.
*   **Functionality**:
    *   Sets up client-side routing using `react-router-dom`.
    *   Manages the overall layout (Header, Footer, and page content).
    *   Routes defined: `/`, `/About`, `/Contact`, `/Compose`, `/post/:id`.

### `Home.jsx`
*   **Location**: `client/src/components/Home.jsx`
*   **Purpose**: Displays the homepage with a list of blog posts.
*   **Functionality**:
    *   Fetches all posts from the API (`GET /posts`) on component mount.
    *   Displays each post's title, a snippet of content, tags, and a "Read More" link.
    *   Includes a "Delete" button for each post, which calls the `POST /posts/:postId/delete` API endpoint.
    *   Provides a link to navigate to the `/Compose` page.

### `Compose.jsx`
*   **Location**: `client/src/components/Compose.jsx`
*   **Purpose**: Provides a form for creating new blog posts.
*   **Functionality**:
    *   Includes input fields for title, content, and tags.
    *   Submits the new post data to the API (`POST /compose`).
    *   Displays success or error alerts to the user.

### `Post.jsx`
*   **Location**: `client/src/components/Post.jsx`
*   **Purpose**: Intended to display a single, full blog post.
*   **Functionality**:
    *   Receives post data (title, content, tags) as props and displays them.
    *   (Note: Current routing in `app.jsx` and linking in `Home.jsx` might not correctly pass data to this component for displaying individual posts fetched from the API.)

### `Header.jsx`
*   **Location**: `client/src/components/Header.jsx`
*   **Purpose**: Displays the navigation bar/header for the application.
*   **Functionality**: Contains links to Home, About, Contact, and Compose pages.

### `Footer.jsx`
*   **Location**: `client/src/components/Footer.jsx`
*   **Purpose**: Displays the footer content for the application.

### `About.jsx`
*   **Location**: `client/src/components/About.jsx`
*   **Purpose**: Displays static information about the blog/website.

### `Contact.jsx`
*   **Location**: `client/src/components/Contact.jsx`
*   **Purpose**: Displays static contact information.

## Setup and Running Instructions

### Prerequisites

*   **Node.js and npm**: Ensure you have Node.js installed, which includes npm (Node Package Manager). You can download it from [https://nodejs.org/](https://nodejs.org/).
*   **MongoDB**: Make sure you have MongoDB installed and running. You can find installation instructions at [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community). The application connects to a default MongoDB URI `mongodb://localhost:27017/blogDB`.

### Backend Setup & Execution (API)

1.  **Navigate to the API directory**:
    ```bash
    cd api
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the server**:
    ```bash
    node app.js
    ```
    The API server will start on `http://localhost:4000`.

### Frontend Setup & Execution (Client)

1.  **Navigate to the client directory** (from the project root):
    ```bash
    cd client
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run the React development server**:
    ```bash
    npm start
    ```
    The React application will open in your browser at `http://localhost:3000` (usually).