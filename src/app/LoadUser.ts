/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react';
import { api } from "../trpc/react"; // import tRPC client

export default function useCurrentUser() {

  // store current user
  const [ currentUser, setCurrentUser ] = useState(null);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  const response = api.user.currentUser.useQuery();
  // @ts-expect-error no type definitions
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!currentUser?.isFetched && response?.isFetched) {
    // @ts-expect-error type not defined
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setCurrentUser(response);
  }

  return currentUser;

}