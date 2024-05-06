import DeliveryMaps from "../../components/delivery/maps";
import DeliveryMenu from "../../components/delivery/menu";
import DeliveryContact from "../../components/delivery/menu/contactInfo";
import CurrentDelivery from "../../components/delivery/menu/currentDelivery";
import "../../styles/delivery/deliveryMaps.scss";

export default function DelvieryInfo() {
  return (
    <main className="delivery-container">
      <DeliveryMaps />
      <DeliveryMenu>
        <div>
          <h1>배송 정보를 알려드릴게요!</h1>
        </div>
        <CurrentDelivery />
        <DeliveryContact />
      </DeliveryMenu>
    </main>
  );
}
