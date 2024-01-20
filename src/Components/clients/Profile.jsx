import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [profil, setProfil] = useState([]);

  useEffect(() => {
    infoprofile();
  }, []);

  const infoprofile = () => {
    const token = localStorage.getItem("token");
    const url = "https://rkeneithshopbackend.herokuapp.com/api/profileInfo";
    const url1 = "http://localhost:5000/api/profileInfo";
    axios
      .get(url1, { headers: { "x-access-token": token } })
      .then((response) => {
        const info = response.data.profileinfo;
        setProfil(info);
        // console.log(profil[1]);
      });
  };
  return (
    <div>
      <p>{profil.lastName}</p>
      <p>{profil.firstName}</p>
      <p>{profil.adress}</p>
      <p>{profil.email}</p>
      <p>{profil.phoneNumber}</p>
    </div>
  );
};

export default Profile;
