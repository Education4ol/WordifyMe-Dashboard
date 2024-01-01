import React from "react";

const ViewUsers = (props) => {
  const {
    name,
    profileImage,
    email,
    contact,
    college,
    city,
    address,
    walletMoney,
    dob,
    examAspirant,
    gender,
    points,
    level_of_english,
    premiumUser,
    interest,
    topics,
    wordCategories,
    favoriteWords,
  } = props.viewData;
  return (
    <>
      <div className="view-user-icon">
        <img src={profileImage} alt="profile-picture" />
        <span>{name}</span>
      </div>
      <div className="view-user-content-wrapper">
        <div className="view-user-content">
          <span>Email :{email}</span>
          <span>Contact : {contact}</span>
          <span>College : {college}</span>
          <span>Date of Birth : {dob}</span>
          <span>City : {city}</span>
          <span>Address : {address}</span>
          <span>Wallet Money : {walletMoney}</span>
          <span>Points : {points}</span>
        </div>
        <div className="view-user-content">
          <span>Exam Aspirant : {examAspirant}</span>
          <span>Is Premium : {toString(premiumUser)}</span>
          <span>Gender : {gender}</span>
          <span>Interest : {interest}</span>
          <span>Level of English : {level_of_english}</span>
          <span>Topics : {topics.join(",")}</span>
          <span>Word Categories : {wordCategories.join(",")}</span>
          <span>Favorite Words : {favoriteWords.join(",")}</span>
        </div>
      </div>
    </>
  );
};

export default ViewUsers;
