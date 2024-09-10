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
    const newWord = e.target.value;
    setUsername(newWord);
    
    if (newWord.includes("o") || newWord.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (!isInvalidLetter() && !isEmptyUsername()) {
      alert("¡Usuario registrado correctamente!");
    } else {
      alert("Usuario inválido para registrarse");
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
