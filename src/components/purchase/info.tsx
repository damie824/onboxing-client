export default function PurchaseInfo() {
  return (
    <div className="purchase-card-info-body">
      <div className="purchase-card-info-title">
        <h1>VISA</h1>
        <p>2028/01 까지</p>
      </div>
      <div className="purchase-card-inputs">
        <h4>청구 주소</h4>
        <input defaultValue={"이규연"} />
        <input defaultValue={"대한민국"} />
        <input defaultValue={"경기도 수원시 팔달구 화산로 24"} />
        <input defaultValue={"111동 2001호"} />
      </div>
      <button className="purchase-card-button">수정하기</button>
      <button className="purchase-card-button purchase-card-delete-button">
        삭제
      </button>
    </div>
  );
}
