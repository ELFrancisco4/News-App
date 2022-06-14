import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../Styles/profile.module.css";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>USER PROFILE</h1>

      {isAuthenticated && (
        <div className={styles.profile}>
          <img className={styles.img} src={user.picture} alt={user.name} />
          <div className={styles.profile_details}>
            {" "}
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
