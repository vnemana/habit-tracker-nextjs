'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import React from 'react';

const ProfileClient: React.FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user)
    console.log("user is undefined");
  else
    console.log("user is: ", user.name);
  return (
    user && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default ProfileClient;