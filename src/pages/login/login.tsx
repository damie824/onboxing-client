import "../../styles/login/login.scss";

export default function Login() {
  return (
    <main className="login-body">
      <img className="login-logo" src="/brand/logo.png" />
      <h1>온박싱에 로그인하세요!</h1>
      <p>비용은 더 적게, 환경엔 더 이롭게</p>
      <a href={`http://${process.env.REACT_APP_BACKEND_URL}/auth/kakao`}>
        <img src="/assets/kakao/login.png" />
      </a>
    </main>
  );
}
