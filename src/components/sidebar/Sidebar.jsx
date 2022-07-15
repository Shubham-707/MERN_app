import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data);
    }
    getCats()
  })
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://img.freepik.com/free-photo/hacker-with-laptop_23-2147985376.jpg?t=st=1657883424~exp=1657884024~hmac=a02e4fa216b06f62abe66ceb4c87e4fb987380e005cb2fad6c1cd4a8f44a0f09&w=740"
          alt=""
        />
        <span className="sidebarTitle">Shubham</span>

        There is no need to know about me. This is Blog Application made with the help of HTML, CSS, JavaScript, React, Node, Express, MongoDB. This website is for demo purpose only.

      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a href="https://www.facebook.com/profile.php?id=100058188695519" target="_blank"> <i className="sidebarIcon fab fa-facebook-square"></i></a>
          <a href="https://www.instagram.com/shubham.kumar_007/" target="_blank"> <i className="sidebarIcon fab fa-instagram-square"></i></a>
        </div>
      </div>
    </div>
  );
}
