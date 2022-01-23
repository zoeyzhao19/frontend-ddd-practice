import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticate } from "@/modules/auth/application";
import styles from "./index.module.css";

export function Auth(): JSX.Element {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const { user, authenticate } = useAuthenticate();
  if (!!user) navigate('/', {replace: true});

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();
    await authenticate(name, email);
    setLoading(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Trying to login..." : "Login"}
      </button>
    </form>
  );
}