# Events App Documentation
This documentation provides an overview of the Events App, a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. 
In this project:
* Next.js is used as the framework for the React client, enhancing the performance and SEO-friendliness of the application.
* React DOM is employed for rendering the user interface, the useSWR hook is utilized for data fetching, Firebase is used for storing events data, Postman is used for API testing, and npm serves as the package manager.


[![Mongo Badge](http://img.shields.io/badge/Database%20-MongoDB-darkgreen?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
&emsp;
[![Express Badge](http://img.shields.io/badge/Server%20-Express-black?style=for-the-badge&logo=express)](https://expressjs.com/)
&emsp;
[![Reactjs Badge](http://img.shields.io/badge/Client%20-React-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
&emsp;
[![Node Badge](http://img.shields.io/badge/Backend%20-Node-green?style=for-the-badge&logo=node.js)](https://nodejs.org/en/)
&emsp;


![6](https://github.com/umangutkarsh/nextEvents-app/assets/95426993/4d94b1f2-712d-4cfb-8712-e472eed2ac96)
<br/>

[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)


<br />

## Contents
* [Features](https://github.com/umangutkarsh/nextEvents-app/tree/main#features)
* [Advantages of using Next.js](https://github.com/umangutkarsh/nextEvents-app/tree/main#advantages-of-using-nextjs)
* [Getting started](https://github.com/umangutkarsh/nextEvents-app/tree/main#getting-started)
* [API endpoints](https://github.com/umangutkarsh/nextEvents-app/tree/main#api-endpoints)
* [Testing with Postman](https://github.com/umangutkarsh/nextEvents-app/tree/main#testing-with-postman)

<br />

## Features
The Events App offers a range of features to make event management and exploration easy and enjoyable:

**1. Register for Newsletter**:
Users can register for a newsletter to stay updated about upcoming events and receive event-related news and information.

**2. Display Featured Events**:
Featured events are prominently displayed on the app's homepage, making it easy for users to discover and explore the most exciting and important events.

**3. Explore Single Event Description**:
Users can click on an event to view detailed information, including the event's date, time, location, description, and any associated images.

**4. Write a Comment and View Comments**:
Users can leave comments on event pages, sharing their thoughts and experiences. They can also view comments left by others, fostering interaction and engagement.

**5. Filter Events by Year and Month**:
Events can be filtered by year and month, allowing users to quickly find events that match their preferences and schedules.

<br />


## Advantages of Using Next.js
Next.js offers several advantages for building the Events App:

**Server-Side Rendering (SSR):** Next.js provides SSR out of the box, improving SEO and page load times.

**Efficient Routing:** Next.js simplifies routing, making navigation between pages seamless.

**Automatic Code Splitting:** The framework automatically divides code into optimized bundles, reducing page load times.

**Static Site Generation (SSG):** Next.js supports SSG, ideal for content-based apps like this one. Pages are pre-rendered at build time, enhancing performance and reducing server load.

**Built-in CSS Support:** Next.js offers built-in support for CSS modules and styled-components, simplifying styling.

<br />


## Getting Started
To run the Events App locally, follow these steps:

* Clone this repository.
* Navigate to the project directory.
* Install dependencies using npm install.
* Configure Firebase with your credentials.
* Start the development server with npm run dev.
* Open your web browser and access the app at `http://localhost:3000`.

<br />

  
## API Endpoints
The Events App provides the following API endpoints:

* GET `/api/events`: Fetch all events.
* GET `/api/events/:id`: Fetch a single event by ID.
* POST `/api/newsletter`: Register for the newsletter.
* POST `/api/comments/:id`: Post a comment on an event.

<br />

  
## Testing with Postman
To test the API endpoints using Postman:

* Open Postman.
* Import the provided collection file for testing.
* Execute the requests to test the endpoints.
