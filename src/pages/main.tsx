import MainHeader from "../components/main/header";
import { Helmet } from "react-helmet";
import "../styles/main/main.scss";

export default function Main() {
  return (
    <main>
      <Helmet>
        <title>공동 배송 연결 서비스, 온박싱</title>
      </Helmet>
      <MainHeader />
      <a href="https://www.youtube.com/watch?v=e8Skv_rQBE4" target="_blank">
        <div className="main-highlight">
          <p>
            지금 생각난 상품, <b>저렴하게 배송해드릴게요</b>.
          </p>
        </div>
      </a>
      <a href="/search?type=groups">
        <div className="main-categories">
          <h3>우리동네 주문자 찾기</h3>
          <p>더욱 싸게, 더욱 빠르게.</p>
        </div>
      </a>
      <a href="/search?type=items">
        <div className="main-categories">
          <h3>판매 중인 상품 찾기</h3>
          <p>저렴한 가격에 퀄리티 좋은 상품을 만나보세요.</p>
        </div>
      </a>
      <div className="main-recommands">
        <h3>이런 아이템은 어떠세요?</h3>
      </div>
    </main>
  );
}
