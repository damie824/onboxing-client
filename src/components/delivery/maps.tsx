import { useEffect, useState } from "react";
import { Map, useKakaoLoader } from "react-kakao-maps-sdk";

export default function DeliveryMaps() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [loading, error] = useKakaoLoader({
    appkey: `${process.env.REACT_APP_KAKAO_CLIENT_ID}`, // 발급 받은 APPKEY
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  if (error) {
    return (
      <div className="delivery-map delivery-map-error">
        <div className="error-svg">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <p>지도를 불러올 수 없었어요..</p>
      </div>
    );
  }

  return (
    <div className="delivery-map">
      <Map
        center={{ lat: position.latitude, lng: position.longitude }}
        style={{ width: "100%", height: "100%" }}
      ></Map>
    </div>
  );
}
