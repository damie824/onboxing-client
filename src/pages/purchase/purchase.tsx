import "../../styles/purchase/purchase.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import PurchaseCard from "../../components/purchase/card";
import "swiper/css";
import "swiper/css/effect-cards";
import PurchaseInfo from "../../components/purchase/info";
import NewCard from "../../components/purchase/newCard";

export default function Purchase() {
  return (
    <main>
      <div className="purchase-title">
        <h1>결제 수단 관리</h1>
        <p>결제 수단을 쉽고 빠르게 관리해 보세요.</p>
      </div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        initialSlide={1}
        className="purchase-swiper-card-container"
        onSlideChange={(swiper: any) => console.log(`${swiper.activeIndex}`)}
      >
        <SwiperSlide className="purchase-swiper-card">
          <NewCard />
        </SwiperSlide>
        <SwiperSlide className="purchase-swiper-card">
          <PurchaseCard number="4222222222422422" background="1" />
        </SwiperSlide>
        <SwiperSlide className="purchase-swiper-card">
          <PurchaseCard number="5105105105105100" background="2" />
        </SwiperSlide>
        <SwiperSlide className="purchase-swiper-card">
          <PurchaseCard number="5105105105105100" background="4" />
        </SwiperSlide>
        <SwiperSlide className="purchase-swiper-card">
          <PurchaseCard number="4111111111111111" background="5" />
        </SwiperSlide>
      </Swiper>
      <PurchaseInfo />
    </main>
  );
}
