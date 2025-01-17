# REST API to handle posting blogs

This is a REST Api of a blooging Application using express js framework

## Installation Instructions

1. Clone the repository:
   ```
   git clone https://github.com/hamzaaitbenyissa/blogsapi.git
   ```
2. Navigate to the project directory:
   ```
   cd blogsapi
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage Instructions

1. Start the server:
   ```
   npm start
   ```
2. The server will be running at `http://localhost:3000`

## API Endpoints

- `GET /articles`: Get all articles
- `GET /articles/published`: Get all published articles
- `GET /articles/pagination/:limit/:offset`: Get articles with pagination
- `GET /articles/:id`: Get an article by ID
- `POST /articles`: Add a new article
- `PUT /articles/:id`: Update an article
- `DELETE /articles/:id`: Delete an article

## Contributing Guidelines

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request
