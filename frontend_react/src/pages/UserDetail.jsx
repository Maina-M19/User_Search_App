import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../services/api";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then(res => setUser(res.data)).catch(() => alert("Not found"));
  }, [id]);

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="text-center p-6">
      <img src={user.image} className="w-32 h-32 mx-auto rounded-full" alt="avatar" />
      <h2 className="text-2xl mt-4">{user.firstName} {user.lastName}</h2>
      <p>{user.email}</p>
      <p>SSN: {user.ssn}</p>
    </div>
  );
};

export default UserDetail;
