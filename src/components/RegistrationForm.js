import { useState } from "react";

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwrod, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [theme, setTheme] = useState("");

  const handleNameChange = (event) => {
    const { name, value } = event.target;

    // We don't allow numbers in names
    let containsNumber = false;

    for (let character of value) {
      if (Number.isInteger(Number.parseInt(character))) {
        containsNumber = true;
      }
    }

    if (containsNumber) {
      alert("Hey you can't have a number in a name");
    } else {
      if (name === "firstName") {
        setFirstName(value);
      } else if (name === "lastName") {
        setLastName(value);
      }
    }
  };

  return (
    <form>
      <input
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={handleNameChange}
      />
      <br />
      <input
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={handleNameChange}
      />
      <br />
      <input
        name="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <input
        name="password"
        placeholder="Password"
        value={passwrod}
        onChange={(event) => setPassword(event.target.value)}
      />
      <br />
      <textarea value={bio} onChange={(event) => setBio(event.target.value)} />
      <br />
      <select value={theme} onChange={(event) => setTheme(event.target.values)}>
        <option>dark mode</option>
        <option>light mode</option>
      </select>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
