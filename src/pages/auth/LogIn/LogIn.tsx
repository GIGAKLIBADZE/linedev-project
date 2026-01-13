import { useState, type FormEvent } from "react";
import { login } from "../../../auth/auth.service";

export const LogIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogIn = async (event: FormEvent) => {
    event.preventDefault();

    const data = await login({ email, password });
    localStorage.setItem("accessToken", data.accessToken);
  };

  return (
    <>
      <h2>Log In</h2>
      <form onSubmit={handleLogIn}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email.."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            placeholder="Enter your password.."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
