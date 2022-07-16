import "./FollowBtn.scss";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import axios from "axios";

function FollowBtn({ text, size, setUser, user }) {
  const { token } = useContext(UserContext);
  const authToken = "Bearer " + token;

  function handleClick() {
    if (user.isfollow) {
      const url =
        "https://mandarin.api.weniv.co.kr/profile/" +
        user.accountname +
        "/unfollow";
      axios
        .delete(url, {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          setUser({
            ...user,
            isfollow: res.data.profile.isfollow,
            followers: res.data.profile.followerCount,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      const url =
        "https://mandarin.api.weniv.co.kr/profile/" +
        user.accountname +
        "/follow";
      axios
        .post(url, [], {
          headers: {
            Authorization: authToken,
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          setUser({
            ...user,
            isfollow: res.data.profile.isfollow,
            followers: res.data.profile.followerCount,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  return (
    <button
      type="Button"
      className={`btn ${user.isfollow} ${size}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default FollowBtn;
