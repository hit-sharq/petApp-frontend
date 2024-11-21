import React, { useState } from "react";
import "./ProfilePage.css";





export const ProfilePage = (props) => {
    
    const [profile, setProfile] = useState({
        email: "user@example.com",
        realName: "",
        nickname: "",
        profilePicture: null,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfile((prev) => ({ ...prev, profilePicture: file }));
      };
    
      const handleSave = () => {
        alert("Profile saved! Backend integration will handle this.");
        console.log(profile); // Placeholder for actual save action
      };

    return (
        <div className="profile-container">
          <h2>Profile Page</h2>
          <div className="profile-picture-section">
            <label htmlFor="profilePicture" className="profile-picture-label">
              {profile.profilePicture ? (
                <img
                  src={URL.createObjectURL(profile.profilePicture)}
                  alt="Profile"
                  className="profile-picture-preview"
                />
              ) : (
                <span>Upload Profile Picture</span>
              )}
            </label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
    
          <div className="profile-info-section">
            <label>
              Email Address:
              <input
                type="email"
                name="email"
                value={profile.email}
                disabled
                className="disabled-input"
              />
            </label>
    
            <label>
              Real Name:
              <input
                type="text"
                name="realName"
                value={profile.realName}
                onChange={handleInputChange}
              />
            </label>
    
            <label>
              Nickname:
              <input
                type="text"
                name="nickname"
                value={profile.nickname}
                onChange={handleInputChange}
              />
            </label>
          </div>
    
          <button className="save-button" onClick={handleSave}>
            Save Profile
          </button>
        </div>
      );
    };


