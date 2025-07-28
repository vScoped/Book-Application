import { useState } from "react";
import { useNavigate } from "react-router-dom";
/*
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log("Name: " + profile.getName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
}
*/

function SignUpFormComponent() {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  // to redirect to main page afterwards
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <h1>Sign-Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name-input">Username</label>
          <input
            className="form-control"
            id="name-input"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email-input">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email-input"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            className="form-control"
            id="password-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>

      <small id="googleForm" className="form-text text-muted">
        Or, sign-in with google
      </small>
      {/* <div class="g-signin2" data-onsuccess="onSignIn"></div>*/}
    </>
  );
}

export default SignUpFormComponent;
