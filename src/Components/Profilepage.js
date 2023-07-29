import React, { useState, useEffect } from "react";
import axios from "axios";


const Profilepage = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/users/${userId}`);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching user data. Please try again later.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const { username, firstName, lastName, email, gender, age, address, image } = user;

  return (
    <div className="profile">
      <h2>Profile Page</h2>
      <div className="content">
        <div className="left">
          <p>
            <b>Username:</b> {username}
          </p>
          <p>
            <b>Name:</b> {firstName} {lastName}
          </p>
          <p>
            <b>Email:</b> {email}
          </p>
          <p>
            <b>Gender:</b> {gender}
          </p>
          <p>
            <b>Age:</b> {age}
          </p>
          <p>
            <b>Address:</b> {address.address}, {address.city}
          </p>
        </div>
        <div className="right">
          <img src={image} alt={firstName} />
        </div>
      </div>
    </div>
  );
};

export default Profilepage;
