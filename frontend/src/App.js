import "./App.css";
//Components
import Signin from "./Components/Signin/Signin"
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home"

//State
import { AuthProvider } from "./Context/AuthContext";

//Router
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
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
            </Switch>
            </AuthProvider>
          </Router>
          
        </div>
      </Container>
    
  );
}

export default App;
