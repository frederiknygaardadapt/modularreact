import { FormEvent, useRef } from "react";
import { useLoginMutation } from "./auth.query";

export const LoginForm = () => {
  const [login, data] = useLoginMutation();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = e.currentTarget.querySelector('[name="email"]');
    const password = e.currentTarget.querySelector('[name="password"]');

    console.log(email, password);

    if (!email || !password) return;

    login({ email, password });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        ref={emailRef}
        id="email"
        name="email"
        type="email"
        placeholder="Email"
      />
      <label htmlFor="password">Password</label>
      <input
        ref={passwordRef}
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <button>Login</button>
    </form>
  );
};
