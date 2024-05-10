//Image Recognition Backend with Amazon Rekognition

Description:
This project is a backend service built with Node.js and Express.js that utilizes Amazon Rekognition, a powerful image recognition service provided by AWS. The backend receives images, stored in an Amazon S3 bucket, via HTTP requests and sends them to Amazon Rekognition for object detection. Once the recognition process is complete, the backend formats the response and sends it back to the client application. This project aims to provide an easy-to-use API for integrating image recognition capabilities into various applications, such as mobile apps or web services.

## Installation

To use this project, follow these steps:

1. **Clone the Repository:**
2. **Navigate to the Project Directory:**
3. **Install Dependencies:**
- use command "npm i" to install all dependencies required to this application
    
4. **Configure AWS Credentials:**
- Set up your AWS credentials with access to Amazon Rekognition and S3. You can do this by creating a `.env` file in the root directory of your project and adding your AWS access key ID and secret access key:

5. **Start the Server:**
-use command "node app.js"

6. **Access the API:**
- Once the server is running, you can access the API endpoints at `http://localhost:3000` or the port configured in your environment.

7.**Also provide necessary env properties for JWT Token**

## Usage

### Authentication Routes

- **Login:** To authenticate a user, send a POST request to `/auth/login` with the user's credentials.
- For example Api `http://localhost:3000/api/auth/login` for login purpose

- **Signup:** To authenticate a user, send a POST request to `/auth/` with the user's credentials.

- **Block Or Unblock Users** To block or unblock a user, send a POST request to /blockUnblock with the user's ID and action in the request body.

- **Get Users** To retrieve a list of users, send a GET request to `/auth/users`

- **Generate Signed URL** To get a signed URL for accessing a resource in AWS S3, send a GET request to `/aws/signed-url`.

- **Get Image**: To retrieve an image, send a GET request to `/image `.

- **Upload Image**: To upload an image, send a POST request to `/image` with the image data in the request body with image URL.

- **Manual Annotation**: To manually annotate an image, send a POST request to `/image/manual-annotation` with the image ID and annotation data in the request body.

- **Get Image Lists**: To retrieve a list of images, send a GET request to `/image/image-lists`





