import DeliveryInfo from "../../components/delivery/deliveryInfo";
import "../../styles/delivery/delivery.scss";

export default function Delivery() {
  return (
    <main className="delivery-body">
      <div className="delivery-title">
        <h1>주문 정보를 보여드릴게요!</h1>
        <p>완료된 주문은 보여지지 않아요.</p>
      </div>
      <div className="delivery-info-container">
        <DeliveryInfo />
        <DeliveryInfo />
        <DeliveryInfo />
        <DeliveryInfo />
        <DeliveryInfo />
      </div>
    </main>
  );
}
