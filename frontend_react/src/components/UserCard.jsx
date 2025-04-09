import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => (
  <Link to={`/user/${user.id}`} className="border p-4 rounded shadow hover:shadow-lg">
    <img src={user.image} alt="avatar" className="w-20 h-20 mx-auto rounded-full" />
    <div className="text-center mt-2">
      <h3>{user.firstName} {user.lastName}</h3>
      <p>{user.email}</p>
    </div>
  </Link>
);

export default UserCard;