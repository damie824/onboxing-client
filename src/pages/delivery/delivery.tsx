import DeliveryMaps from "../../components/delivery/maps";
import DeliveryMenu from "../../components/delivery/menu";
import "../../styles/delivery/delivery.scss";

export default function Delviery() {
  return (
    <main className="delivery-container">
      <DeliveryMaps />
      <DeliveryMenu>
        <div>
          <h1>배송 정보를 알려드릴게요!</h1>
        </div>
      </DeliveryMenu>
    </main>
  );
}
