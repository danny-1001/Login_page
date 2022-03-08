import "./Styles/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Auth0Provider } from "@auth0/auth0-react";
import Main from "./Components/Main";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        <Main></Main>
        
        <Footer/>
      </div>
   
  );
}

export default App;
