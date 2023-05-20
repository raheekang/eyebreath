# Eyebrath

<aside>
💡 기획의도

</aside>

eyebreath의 기획의도는 오프라인으로 구매하기엔 시간적, 공간적 제약이 너무 크고 온라인 쇼핑몰 사이트엔
제품의 갯수가 한정적이라 이를 보완하고자 '안경'을 중점적으로한 사이트를 제작하게 되었습니다.

<aside>
✔️ 적응형 구현

</aside>

웹 페이지를 768px 사이즈까지 제작하였으며 이후엔 모바일 앱으로 사용할 수 있게 하였습니다.
적응형으로 구현 시  사용자의 디바이스에 따라 pc, mobile 접속을 용이하게 할 수 있습니다.

<aside>
✔️ 반응형 하드코딩

</aside>

반응형은 하드코딩을 하였으며 탬플릿이나 라이브러리 소스를 사용한 것이 아닌 직접 코딩하였습니다.
자바스크립트 es6버전을 사용하여 바닐라 스크립트로 하였습니다.

<aside>
✔️ 사용성 구현

</aside>

- 스토리보드 작성, 와이어 프레임 기획, 프로토타입 개발
- 반응형 및 모바일 UIUX 디자인
- 일러스트레이터 드로잉을 활용한 아이콘 및 SVG 파일 제작
- 포토샵툴을 활용한 비쥬얼 디자인 및 시네마 그래프 제작
- Figma 툴을 활용한 모바일 UIUX 디자인 및 프로토타입 개발

<aside>
✔️ PC 유튜브 링크 및 이미지

</aside>

[https://youtu.be/hDLC-8g9JQQ](https://youtu.be/hDLC-8g9JQQ)

<img width="1788" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/34645dae-d3ce-4f55-88d0-87ddb97e5a8a">

- visual 부분은 setinterval을 통하여 자동슬라이드가 가능하게 하였으며, 비주얼에 마우스를 enter했을시 clearinterval을 통해 움직이지 않게 했습니다. 또한 이전버튼, 다음버튼을 통해 보고싶은 비주얼 이미지를 볼 수 있게 하였으며 이 또한 매개변수를 통해 순번을 구했습니다.

<img width="1782" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/6aec9d3c-c511-4c54-a7dc-b96cc06830e3">

- header 부분을 보시면 .selected라는 가상요소를 css에 삽입하여 자바스크립트로 코드를 작성하였으며, header의 전체 높이를 계산한 후 mouseenter 했을때의 높이와 leave 했을때의 높이를 계산하여 사용자의 선택에 따라 보여지게 했습니다.

<img width="1786" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/506a8fd4-4094-4987-bd3e-dbd5dc885752">

- 서브페이지의 경우 html에 작성한 코드를 ajax의 axios함수를 사용하여 불러와 사용자의 편의성을 고려하였습니다.

<aside>
✔️ MOBILE 유튜브 링크 및 이미지

</aside>

[https://youtube.com/shorts/59QCH8fZDNk](https://youtube.com/shorts/59QCH8fZDNk)

<img width="419" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/08083c8f-65db-4711-b44f-0e6940142ab1">

- 메인 화면에서 class를 추가하여 visual을 swiper 시 다음 이미지로 넘어가게 하였습니다.

<img width="423" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/78c61211-1446-4c5b-ad1f-047bd0b624cf">

- 좌측 menu icon click 이벤트 발생 시 if조건문의 selectedMenu 값에 조건에 따라 아코디언 형태로 메뉴가 나오게 되며, remove를 통해 서브메뉴 비활성화까지 가능하게 하였습니다.

<img width="429" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/31ad3496-15e6-4a54-bedf-7a7087ff51bf">

- 모바일 서브페이지의 경우 이벤트 클릭 시 이동하게 되며 visual 위주의 이미지로 구성하였으며, css에서 flex를 통해 이미지를 동일한 간격으로 나열하였습니다. 
