"use client";

import { createContext } from 'react';
import { api } from "../trpc/react"; // import tRPC client

interface User {
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
};

// create the context
export const UserContext = createContext<User | null | undefined>(null);

export default function UserProvider ({ children }: { children: React.ReactNode}) {

  const user = api.user.currentUser.useQuery();

  return user.isFetched ? (
    <UserContext.Provider value={user.data}>
      { children }
    </UserContext.Provider>
  ) : <p>loading user context...</p>;

}