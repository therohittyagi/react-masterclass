import { createBrowserRouter, RouterProvider } from "react-router-dom";
-import { useRouteError } from "react-router-dom";

- when you use anchor (<a>) tag to nagigate over components the whole page get reloaded

- link (<Link>) component from react router dom is the prefered way  but  the whole page cannot get reloaded

# Single Page Application - 
- "A Single Page Application (SPA) is a web application that dynamically updates content on a single web page, offering a more seamless and fluid user experience. In React.js, SPAs are built using components that manage their own state and can be efficiently re-rendered without reloading the entire page, resulting in faster performance and smoother navigation."


# Two types of routing - 

- Client Side Routing - 
_________________________

Client-side routing involves navigating between different views or pages within a web application without the need to reload the entire page. In React.js, client-side routing is typically achieved using libraries like React Router, where route changes are handled by the browser without making requests to the server, resulting in faster transitions and a smoother user experience.

- Server Side Routing -
_________________________
 
Server-side routing, on the other hand, involves requesting and receiving new pages or views from the server each time navigation occurs. In React.js, server-side routing is less common for single-page applications but is still used in traditional multi-page applications. When a new route is requested, the server responds with the appropriate HTML, which can result in slower load times compared to client-side routing.
