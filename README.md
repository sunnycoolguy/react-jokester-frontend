This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This repo is for the frontend of my first CRUD, multi-page, React app called Jokester! It's webapp that allows people to create accounts, post jokes, edit them and even deleting them. There were so many challenges in building the front-end for this, cheif among them being routing! I definitely have a better understanding of it now, though. There are several views in this app, the two high level ones are `<Login/>` and `<Jokester/>`. Depending on the current path that the client is on, `<Jokester/>` has routes that will render either `<JokeForm/>`, `<EditJoke/>`, `<JokeListSingle/>` or the more general `<JokeList/>`. `<Jokester/>` will also always render a `<NavBar/>`. I definitely intend to refactor the code once I gain a better understanding of Higher Order Components and Authentication since it doesnt fully adhere to the DRY principle and the authentication is very toyish. All things considered though, the functionality is there and it works! 

Here's the app in action: 

![Screenshot of the app](./demo.gif)