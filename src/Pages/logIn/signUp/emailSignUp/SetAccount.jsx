import axios from "axios";
import { useState } from "react";

function SetAccount({ setIsActive, email, setEmail, password, setPassword }) {
  const [resMessageEmail, setResMessageEmail] = useState("");
  const [resMessagePassword, setResMessagePassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  // 이메일 주소 유효성 검사
  const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,5}$/i;

  // 로그인버튼 활성화 검사
  function handleKeyUp() {
    checkEmail.test(email) && password.length > 5
      ? setIsActive(true)
      : setIsActive(false);
  }

  // 이메일 검증
  function handleBlurEmail() {
    if (checkEmail.test(email)) {
      reqEmailValid();
    } else {
      setResMessageEmail("*이메일 형식이 올바르지 않습니다.");
      setIsValidEmail(false);
    }
  }

  // 비밀번호 검증
  function handleBlurPassword() {
    if (password.length > 5) {
      setIsValidPassword(true);
    } else {
      setResMessagePassword("*비밀번호는 6자 이상이어야 합니다.");
      setIsValidPassword(false);
    }
  }

  // 이메일 중복 검사 요청
  async function reqEmailValid() {
    try {
      const res = await axios.post(
        "https://mandarin.api.weniv.co.kr/user/emailvalid",
        {
          user: {
            email,
          },
        },
        {
          header: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.message === "사용 가능한 이메일 입니다.") {
        setResMessageEmail(res.data.message);
        setIsValidEmail(true);
      } else {
        setResMessageEmail("*" + res.data.message);
        setIsValidEmail(false);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="container-email">
        <label htmlFor="email" className="label-email">
          이메일
        </label>
        <input
          onKeyUp={handleKeyUp}
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
          id="input-email"
          type="email"
          placeholder="이메일 주소를 입력해 주세요."
        ></input>
        <strong className={`errorMsg email ${isValidEmail}`}>
          {resMessageEmail}
        </strong>
      </div>
      <div className="container-password">
        <label htmlFor="password" className="label-password">
          비밀번호
        </label>
        <input
          onKeyUp={handleKeyUp}
          onChange={handleChangePassword}
          onBlur={handleBlurPassword}
          id="input-password"
          type="password"
          maxLength="16"
          placeholder="비밀번호를 설정해 주세요."
        ></input>
        <strong className={`errorMsg password ${isValidPassword}`}>
          {resMessagePassword}
        </strong>
      </div>
    </>
  );
}

export default SetAccount;