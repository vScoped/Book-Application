import { Button } from "react-bootstrap";
import SignUpFormComponent from "./SignUpFormComponent";


function Home() {
  return (
  <>
  <h1>Home</h1>
  <Button onClick={SignUpFormComponent.handleClick}>Click Me!</Button>
  </>
  );
}

export default Home;
