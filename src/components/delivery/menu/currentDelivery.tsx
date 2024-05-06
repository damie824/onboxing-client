export default function CurrentDelivery() {
  return (
    <div>
      <p className="delivery-level">요청하신 곳으로 열심히 달려가고 있어요.</p>
      <div className="delivery-status-info">
        <div className="delivery-brand-thumbnail">
          <img src="/assets/brands/musinsa.png" />
        </div>
        <div className="delivery-info-contents">
          <h3>무신사</h3>
          <p>워셔블 케이블 반팔 니트 세트 외 1개</p>
          <div className="delivery-info-current">
            <p>주문일시 : 2024년 04월 10일 오후 15시 17분</p>
            <p>주문번호 : IJUSTREALLYWANNAGOHOME</p>
            <p>수령장소 : 집 앞</p>
          </div>
        </div>
      </div>
    </div>
  );
}
