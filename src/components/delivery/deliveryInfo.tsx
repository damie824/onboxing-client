export default function DeliveryInfo() {
  return (
    <div className="delivery-info">
      <a className="delivery-info-title" href="/delivery/1">
        <div className="delivery-info-thumbnail">
          <img src="/assets/brands/musinsa.png" />
        </div>
        <div className="">
          <a>
            <h4>무신사</h4>
          </a>
          <p>워셔블 케이블 반팔 니트 세트 외 1개 64500원</p>
        </div>
      </a>
      <div className="delivery-info-buttons">
        <button>해당 상점 상품 둘러보기</button>
        <button>리뷰 작성하기 (5일 이내)</button>
      </div>
    </div>
  );
}
