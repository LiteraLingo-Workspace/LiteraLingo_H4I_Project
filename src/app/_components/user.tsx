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
        <p>Most recent name: {latestUser.name}</p>
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
          placeholder="Title"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" disabled={createUser.isPending}>
          {createUser.isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
