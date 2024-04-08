export default function MainHeader() {
  const searchItems = [
    "맨투맨",
    "바지",
    "신발",
    "교과서",
    "이어폰",
    "보조베터리",
    "스마트폰",
    "가방",
    "향수",
    "시계",
    "선글라스",
    "지갑",
    "모자",
    "스카프",
    "장갑",
    "양말",
    "넥타이",
    "벨트",
    "커피머신",
    "노트북",
    "티셔츠",
    "블라우스",
    "스웨터",
    "자켓",
    "코트",
    "운동화",
    "부츠",
    "샌들",
    "슬리퍼",
    "드레스",
    "스커트",
    "레깅스",
    "수영복",
    "선캡",
    "파자마",
    "언더웨어",
    "피트니스웨어",
    "등산복",
    "자전거",
    "헬멧",
    "안경",
    "책상",
    "의자",
    "램프",
    "알람시계",
    "커튼",
    "침대",
    "이불",
    "베개",
    "카펫",
    "거울",
  ];

  function checkName(name: string) {
    const charCode = name.charCodeAt(name.length - 1);
    const consonantCode = (charCode - 44032) % 28;

    if (consonantCode === 0) {
      return `"${name}"라고 `;
    }
    return `"${name}"이라고 `;
  }

  const randomIndex = Math.floor(Math.random() * searchItems.length);

  return (
    <header className="main-header">
      <div className="main-header-topbar">
        <h1>ONBOXING</h1>
        <div className="main-header-buttons">
          <a href="/alert">
            <svg
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
                strokeWidth="1"
                d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
              />
            </svg>
          </a>
          <a href="/cart">
            <svg
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
                strokeWidth="1"
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="main-header-searchbar">
        <input
          placeholder={`${checkName(searchItems[randomIndex])} 검색해 보세요!`}
        />
        <a>
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
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
