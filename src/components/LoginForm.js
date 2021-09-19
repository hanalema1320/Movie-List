import { useRef } from "react";

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email === "" || password === "") {
      alert("Email and Password cannot be empty");
    } else {
      console.log("Form submitted");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} name="email" placeholder="Email" />
      <br />
      <input ref={passwordRef} name="password" placeholder="Password" />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
