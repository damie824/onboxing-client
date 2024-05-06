import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

export default function ProductThumbnail() {
  const [index, setIndex] = useState(0);

  const data = [
    "https://pds.joongang.co.kr//news/component/htmlphoto_mmdata/201805/06/c339db49-4ff4-4559-88fa-df99955c35a6.jpg",
    "https://img5.yna.co.kr/etc/inner/KR/2021/10/27/AKR20211027121300004_03_i_P4.jpg",
    "https://news.nateimg.co.kr/orgImg/jt/2021/11/11/202111112126421769_LC.jpg.wm.jpg",
  ];

  return (
    <div className="product-thumbnail">
      <Swiper
        grabCursor={true}
        initialSlide={1}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="product-thumbnail-swiper"
        onSlideChange={(swiper: any) => console.log(`${swiper.activeIndex}`)}
      >
        {data.map((img, i) => {
          return (
            <SwiperSlide className="product-thumbnail-swipe">
              <img src={img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
