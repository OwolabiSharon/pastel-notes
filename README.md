# pastel-notes
A full-stack notes application for creating, updating, and managing personal notes.

## About the Project

This full-stack app allows users to manage their notes. Users can create, view, update, and delete notes via a clean and intuitive user interface built with Next.js, while the backend is powered by Node.js and Express for handling data and API requests.

## Tech Stack

- **Client:** Next.js, React Icons, TailwindCSS
- **Server:** Node.js, Express
- **Database:** MongoDB, mongoose

## Run Locally
### Clone the project:

```bash
  git clone https://github.com/OwolabiSharon/pastel-notes.git
```
Go to the project directory

```bash
  cd pastel-notes
```
Create an Atlas URI connection parameter in `notes-backend/.env` with your Atlas URI:
```
MONGO_URI="mongodb+srv://<username>:<password>@cluster0.6cgz2s1.mongodb.net/?retryWrites=true&w=majority"
PORT=4000
```

Create an API URI on server enviroment variable in `notes-frontend/.env` with your hostname on server:
```
NEXT_PUBLIC_API_URL="http://localhost:4000"
```

Install dependencies

```bash
  cd notes-backend
  npm install
```

```bash
  cd notes-frontend
  npm install
```

Start the server

```bash
  cd notes-backend
  npm run dev
```
Start the Client

```bash
  cd notes-frontend
  npm run dev
```
## Features

- **Create** notes with a title and content.
- **Read** notes by displaying a list of all saved notes.
- **Update** notes with the ability to edit the title and content.
- **Delete** notes from the list.
