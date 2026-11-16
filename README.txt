연세 오늘안과 홈페이지 시안 (정적 HTML)

사용 방법
1. 압축을 풀고 index.html 을 더블클릭하면 브라우저에서 열립니다.
2. PC에서는 "병원소개"에 마우스를 올리면 하위 메뉴가 나타납니다.
   모바일에서는 오른쪽 위 ☰ 버튼으로 메뉴를 열고, 화면 아래 진료시간·전화 예약·오시는길 버튼이 고정됩니다.

파일 구성
- index.html       메인
- about.html       오늘안과 · 의료진 소개 (하나로 합침)
- clinics.html     주요진료 (망막 · 황반 · 합병 백내장 클리닉)
- surgery.html     수술/치료안내
- facility.html    병원 시설 및 장비 (병원 둘러보기 + 장비 소개)
- directions.html  진료안내 · 오시는길
- fees.html        비급여 비용 안내
- assets/style.css 스타일, assets/site.js 사진 확대 기능
- assets/photos/   병원 사진

채워 넣을 곳
- 네이버 지도: 네이버 클라우드 플랫폼(Maps)에서 Web Dynamic Map + Geocoding 을 신청해
  Client ID 를 받으면, directions.html 의 data-key="" 안에 넣으면 지도가 표시됩니다.
  (신청할 때 홈페이지 주소를 "Web 서비스 URL"로 등록해야 합니다.)

참고
- 글꼴(Noto Sans KR 등)은 인터넷에 연결되어 있을 때 불러옵니다.
- 진료시간은 병원 입구 사진에 적힌 시간으로 넣었습니다.
