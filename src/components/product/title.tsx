export default function ProductTitle() {
  return (
    <>
      <div className="product-title-container">
        <div className="product-title-thumbnail-button"></div>
        <h1>
          (10%+10%쿠폰) 4800원~
          <br />
          춘식이/호식이/동식이/D~S급 50종
        </h1>
        <div className="price-container">
          <div className="product-title-price-old">
            <p>8600원</p>
          </div>
          <div className="product-title-price">
            <p>3650원</p>
            <a>
              쿠폰적용가
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="product-purchase-button">
        <button>구매하기</button>
      </div>
    </>
  );
}
