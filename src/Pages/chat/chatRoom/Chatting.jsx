import React from "react";
import "./ChatRoom.scss";
import GetMessage from "./GetMessage";
import SendMessage from "./SendMessage";
import LogoImg from "../../../assets/L-profile.svg";

// 프로필이미지, 채팅내용, 시간 유저데이터 가져와야 함

function Chatting() {
  return (
    <>
      <section>
        <h2 className="a11y-hidden">채팅창</h2>
        <GetMessage
          userProfileImg={LogoImg}
          chat="안녕하세요 고양이 캣타워 아직 파나요? 혹시 에눌 되나요?"
          time="17:23"
        />
        <SendMessage chat="아니요~" time="17:30" />
      </section>
    </>
  );
}

export default Chatting;