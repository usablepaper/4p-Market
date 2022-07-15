import EditProfileBtn from "../../../components/button/EditProfileBtn";
import FollowBtn from "../../../components/button/FollowBtn";
import PostProductBtn from "../../../components/button/UploadProductBtn";
import "./ProfileHeader.scss";

function ProfileHeader({
  from,
  accountname,
  username,
  intro,
  followers,
  followings,
  image,
}) {
  const imgStyle = {
    backgroundImage: `url(${image})`,
  };
  return (
    <>
      <header className="header-mypage">
        <div className="wrapper-author-m">
          <div className="wrapper-follow">
            <div className="img-author-m" style={imgStyle}></div>
            <div className="text-follow follower">
              <span className="text-follow-num">{followers}</span>
              followers
            </div>
            <div className="text-follow followings">
              <span className="text-follow-num">{followings}</span>
              follwings
            </div>
          </div>
          <h2 className="text-username">{username}</h2>
          <span className="text-accountname">@{accountname}</span>
          <p className="text-profile-info">{intro}</p>
        </div>
        {from === "userProfile" ? (
          <FollowBtn text="팔로우" name="follow" size="btn-m" />
        ) : (
          <>
            <EditProfileBtn key="button1" />
            <PostProductBtn key="button2" />
          </>
        )}
      </header>
    </>
  );
}

export default ProfileHeader;