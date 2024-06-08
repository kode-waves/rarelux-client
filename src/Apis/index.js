require('dotenv').config();

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
const appApi = (path) => `http://localhost:4043/${path}`;

console.log("🚀 ~ http://localhost:4043:", `http://localhost:4043`)
console.log("🚀 ~ appApi:", appApi)   

// API call routes
export const endpoints = () => ({
  // User API Routes
  
  userAPI: appApi("login"),

});
