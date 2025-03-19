/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument */
import { useState } from "react";
import { api } from "../trpc/react"; // import tRPC client
import type { UseTRPCQueryResult } from "node_modules/@trpc/react-query/dist/shared/hooks/types";

interface UserData {
  streakDays: number;
  image: string | null;
  id: string;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let user: UseTRPCQueryResult<UserData | null, any> | null = null;

export default function useCurrentUser() {
  // store current user
  const [currentUser, setCurrentUser] = useState(user);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const response = api.user.currentUser.useQuery();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!currentUser?.isFetched && response?.isFetched) {
    user = response;
    setCurrentUser(response);
  }

  return currentUser;
}
