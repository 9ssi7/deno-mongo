# Deno Mongo

A MongoDB and Deno example with Docker

## Usage

```bash
docker-compose up
```

## API

### GET /blogs

Get all blogs

#### Example Request

```http
GET http://localhost:8080/blogs
```

#### Example Response

```json
{
  "success": true,
  "message": "Blog list successfully fetched",
  "data": [
    {
      "_id": "637bca1592d1c9380e7a0a4b",
      "title": "greeting",
      "body": "Hello World!"
    }
  ]
}
```

### GET /blogs/:id

Get a blog by id

#### Example Request

```http
GET http://localhost:8080/blogs/5f9f1b9b9b9b9b9b9b9b9b9b
```

#### Example Response

```json
{
  "success": true,
  "message": "Blog detail successfully fetched",
  "data": {
    "_id": "637bca1592d1c9380e7a0a4b",
    "title": "greeting",
    "body": "Hello World!"
  }
}
```

### POST /blogs

Create a blog

#### Example Request

```http
POST http://localhost:8080/blogs
Content-Type: application/json

{
    "title": "My first blog",
    "body": "This is my first blog",
}
```

#### Example Response

```json
{
  "success": true,
  "message": "Blog created successfully"
}
```
