// // /src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom'; // Import Router here
// import './index.css'; // Your global styles
// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router> 
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// Import React and the createRoot method from react-dom/client
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Your main App component
import './index.css'; // Import global styles if any
import { BrowserRouter } from 'react-router-dom';

// Get the root element from your HTML
const container = document.getElementById('root');

// Create a root using the container
const root = createRoot(container);

// Render the App component inside the root
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
