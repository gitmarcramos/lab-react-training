import React from 'react';
import './Id-card.css';



export default function IdCard({ user }) {
  return (
    <div className="id-card">
      <img className="image" src={user.picture} alt="" />
      <div className="infos">
        <h2>
          First Name: <span>{user.firstName}</span>
        </h2>
        <h2>
          Last Name: <span> {user.lastName}</span>
        </h2>
        <h2>
          Gender: <span>{user.gender}</span>
        </h2>
        <h2>
          Height: <span>{user.height}</span>
        </h2>
        {/* <h2>birth: {user.birth}</h2> */}
      </div>
    </div>
  );
}
