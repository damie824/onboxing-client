import MyMenu from "../../components/me/menu";
import MyProfile from "../../components/me/profile";
import "../../styles/me/me.scss";

export default function Me() {
  return (
    <main>
      <div className="me-title">
        <h1>계정 정보를 보여드릴게요!</h1>
        <p>자신의 정보를 수정 / 확인할 수 있어요.</p>
      </div>
      <MyProfile />
      <MyMenu />
    </main>
  );
}
