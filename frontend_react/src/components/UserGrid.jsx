import React from "react";
import UserCard from "./UserCard";

const UserGrid = ({ users }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
    {users.map(user => <UserCard key={user.id} user={user} />)}
  </div>
);

export default UserGrid;