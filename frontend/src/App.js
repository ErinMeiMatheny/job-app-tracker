import "./App.css";
import Signup from "./Components/Signup/Signup";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

//Bootstrap imports

import { Container } from "react-bootstrap";

function App() {
  return (
    
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
            <Switch>
              <Route path="/signup" component={Signup} />
            </Switch>
            </AuthProvider>
          </Router>
          
        </div>
      </Container>
    
  );
}

export default App;
