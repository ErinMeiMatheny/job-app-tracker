import "./App.css";
import Signup from "./Components/Signup/Signup";
import { AuthProvider } from "./Context/AuthContext";

//Bootstrap imports

import { Container } from "react-bootstrap";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Signup />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
