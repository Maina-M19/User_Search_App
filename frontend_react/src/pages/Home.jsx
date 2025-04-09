import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserGrid from "../components/UserGrid";
import { searchUsers } from "../services/api";

const Home = () => {
  const [users, setUsers] = useState([]);

  const handleSearch = async (query) => {
    try {
      const res = await searchUsers(query);
      setUsers(res.data);
    } catch (err) {
      alert("Search failed");
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <UserGrid users={users} />
    </div>
  );
};

export default Home;