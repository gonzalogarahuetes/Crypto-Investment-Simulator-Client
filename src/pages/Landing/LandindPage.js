import React from "react";

import FlexDiv from "../../components/atoms/FlexDiv";
import LogIn from "../../components/organisms/LogIn/LogIn";
import SignUp from "../../components/organisms/SignUp/SignUp";

import "./Landing.scss";

export default function LandindPage() {
  return (
    <>
      <FlexDiv style={{ margin: "10rem 15rem 9rem 6rem" }}>
        <h1 className="intro-title">
          Learn to manage your cryptowallet and take the next step
        </h1>
        <PhoneImg />
      </FlexDiv>
      <FlexDiv>
        <LogIn />
        <SignUp />
      </FlexDiv>
    </>
  );
}
