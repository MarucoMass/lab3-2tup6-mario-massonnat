import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const isInvalidLetter = () => {
    return username.toLowerCase().includes("o");
  };

  const isEmptyUsername = () => {
    return username === "";
  };

  const handleUsername = (e) => {
    // if (isInvalidLetter(e.target.value)) {
    //   alert("Please, usernames with no o/O");
    // }
    setUsername(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (!isInvalidLetter() && !isEmptyUsername()) {
      alert("User registered successfully");
    } else {
      alert("Invalid username");
    }
  };

  return (
    <form className="form" onSubmit={handleForm}>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleUsername}
        value={username}
      />
      <p>{username}</p>
      <button type="submit">Send</button>
    </form>
  );
};

export default Login;
