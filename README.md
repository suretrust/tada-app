<h1 align="center">Welcome to Tada App 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/suretrustng" target="_blank">
    <img alt="Twitter: suretrustng" src="https://img.shields.io/twitter/follow/suretrustng.svg?style=social" />
  </a>
</p>

<p>
This is a simple a simple to-do list web app built with React, Redux and Redux-Saga. This app has no authentication system.
</p>

### Details

- Users can list all their todo items.
- Users can add, edit, and delete a new a new todo item.
- Users can mark a todo item complete or incomplete.

### Backend Limitations

I am using [{JSON Placeholder}](https://jsonplaceholder.typicode.com/) which is a free fake API for testing and prototyping. This means that a user can add a new item but CANNOT update/delete/mark complete or incomplete a newly added item.

The user can, however, update/delete/mark complete or incomplete an already existing todo item.

### [Live Demo](https://tada-app.netlify.app)

![Live look](/docs/wide.png)

### Local Setup

After cloning, run the following commands:

```
npm install
npm start
```

### Running Tests

Tests are added using React Testing Library and Jest, to see the tests, run using:

```
npm run test
```
