import "./Styles/Styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Auth0Provider } from "@auth0/auth0-react";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
