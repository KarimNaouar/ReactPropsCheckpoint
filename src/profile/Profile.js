import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          margin: "auto",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "12px solid #efefef",
          padding: "30px",
        }}
      >
        <div
          style={{
            fontFamily: "Roboto, sans-serif",
            color: "black",
            borderBottom: "2px solid #cecece",
          }}
        >
          {props.data.fullName}
        </div>
        <div
          style={{
            fontFamily: "Roboto, sans-serif",
            color: "black",
            borderBottom: "2px solid #cecece",
          }}
        >
          {props.data.bio}
        </div>
        <div
          style={{
            fontFamily: "Roboto, sans-serif",
            color: "black",
            borderBottom: "2px solid #cecece",
          }}
        >
          {props.data.profession}
        </div>
        <div>{props.handleName(props.data.fullName)}</div>
        <div>{props.children}</div>
      </div>
    </>
  );
};

Profile.defaultProps = {
  data: {
    fullName: "Default name",
    bio: "Default bio",
    profession: "Default profession",
    children: "./mymage.png",
  },
  handleName: (x) => alert("hello " + x),
};

Profile.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
  }),
};

export default Profile;
