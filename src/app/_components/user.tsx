"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export function LatestUser() {
  const [latestUser] = api.user.getLatest.useSuspenseQuery();

  const utils = api.useUtils();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = api.user.create.useMutation({
    onSuccess: async () => {
      await utils.user.invalidate();
      setName("");
      setEmail("");
      setPassword("");
    },
  });

  return (
    <div>
      {latestUser ? (
        <p>
          Most recent user: {latestUser.name}, {latestUser.email},{" "}
          {latestUser.password}
        </p>
      ) : (
        <p>You have no users created yet.</p>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUser.mutate({ name, email, password });
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={createUser.isPending}>
          {createUser.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
