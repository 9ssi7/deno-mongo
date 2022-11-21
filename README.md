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
[
  {
    "_id": "5f9f1b9b9b9b9b9b9b9b9b9b",
    "title": "My first blog",
    "body": "This is my first blog"
  },
  {
    "_id": "5f9f1b9b9b9b9b9b9b9b9b9b",
    "title": "My second blog",
    "body": "This is my second blog"
  }
]
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
        "_id": "5f9f1b9b9b9b9b9b9b9b9b9b",
        "title": "My first blog",
        "body": "This is my first blog",
    },
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
true
```
