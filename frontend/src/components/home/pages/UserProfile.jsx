import React from "react";
import Navigation from "../Navigation";
import Nav from "../Nav";
import Suggest from "../Suggest";
import './userpro.css';
import { Avatar } from "@mui/material";

const UserProfile = () => {
  return (
    <div className="home-container">
      <Nav />
      <div className="main-content">
        <div className="navbar-section">
          <Navigation />
        </div>
        <div className="profile-section">
            <div className="profile-header">
            <div className="profile-info">
              <div className="profile-picture">
                <Avatar></Avatar>
                <h2>YourSelf</h2>
              </div>
              <div className="profile-details">
                <p className="username">@Yourname</p>
                <p className="bio">Bio: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim modi ratione ipsam, ea vel molestias corrupti dolore maxime aspernatur rerum quasi quae architecto iste deleniti quod distinctio blanditiis nesciunt quaerat!</p>
                <p className="location">Location: New York, USA</p>
                <p className="joined">Joined: January 2020</p>
                <div className="profile-stats">
                  <span><strong>123</strong> Following</span>
                  <span><strong>456</strong> Followers</span>
                </div>
                <a href="/">Edit Profile</a>
              </div>
            </div>
          </div>
        </div>
        <div className="suggest-section">
          <Suggest />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
