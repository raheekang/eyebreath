    <? include_once $_SERVER["DOCUMENT_ROOT"]."/eyebreath/inc/start.html" ?>
    <link rel="stylesheet" href="/eyebreath/css/main.css">
    
    <script src="/eyebreath/js/slidevisual.js"></script>
    <script src="/eyebreath/js/slide_contents.js"></script>

    <script>
        let ua = window.navigator.userAgent.toLowerCase();
        //let mobileWindowWidth
        if(/iphone/.test(ua) || /android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) || /ipad/.test(ua) || /windows ce/.test(ua)) {
        document.location.replace("http://kangrahee.dothome.co.kr/eyebreath/mobile/index.html");
        }else{
            window.addEventListener('resize', ()=>{
            let windowSize=window.innerWidth;
                if(windowSize<=768){
                    window.location.replace("http://kangrahee.dothome.co.kr/eyebreath/mobile/index.html")
                }
            })
        }
        
    </script>
</head>

<body>
    <? include_once $_SERVER["DOCUMENT_ROOT"]."/eyebreath/inc/header.html" ?>
    <!--비쥬얼영역시작-->
    <div id="visual_wrap">
        <ul id="visual_list">
            <li>
                <section class="visual">
                    <h2 class="hidden">메인비주얼1</h2>
                    <div class="visual_text">
                        <p class="main_text">EYE MAKER 01</p>
                        <p class="sub_text">
                            상상을 현실로 지금 바로 경험해보세요.<br>
                            오프라인 매장이 아닌 온라인 매장에서 쉽고 간편하게
                        </p>
                        
                    </div>
                        <button class="btn_visual">지금 시작하기</button>
                </section>
            </li>
            <li>
                <section class="visual">
                    <h2 class="hidden">메인비주얼2</h2>
                    <div class="visual_text">
                        <p class="main_text">EYE MAKER 02</p>
                        <p class="sub_text">
                            상상을 현실로 지금 바로 경험해보세요.<br>
                            오프라인 매장이 아닌 온라인 매장에서 쉽고 간편하게
                        </p>
                    </div>
                        <button class="btn_visual">지금 시작하기</button>
                </section>
            </li>
            <li>
                <section class="visual">
                    <h2 class="hidden">메인비주얼3</h2>
                    <div class="visual_text">
                        <p class="main_text">EYE MAKER 03</p>
                        <p class="sub_text">
                            상상을 현실로 지금 바로 경험해보세요.<br>
                            오프라인 매장이 아닌 온라인 매장에서 쉽고 간편하게
                        </p>
                    </div>
                        <button class="btn_visual">지금 시작하기</button>
                </section>
            </li>
        </ul>
        <button id="prev_btn"><i class="fa-solid fa-chevron-left fa-4x"></i></button>
        <button id="next_btn"><i class="fa-solid fa-chevron-right fa-4x"></i></button>
    </div>
     <!--비쥬얼영역끝-->
     <!--콘텐츠영역시작-->
    <div id="contents_wrap">
        <div id="introduce_wrap">
            <section id="introduce">
                <h2 class="hidden">아이메이커 광고</h2>
                <div id="introduce_text">
                    <p class="contents_main_text">우리가 아이메이커를 <br>만든 이유 궁금하지 않아?</p>
                    <p class="contents_sub_text">오프라인으로 방문하지않고 온라인으로 편하게 사용으로 편의성을 제공합니다.복잡한 설치과정 불필요한 정보제공을 지양합니다. <br>지금 바로 경험해보세요 !</p>
                    <button class="btn_text">자세히 보기</button>
                </div>                
            </section>
        </div>

        <div id="newitem_wrap">
            <section id="newitem">
                <h2 class="hidden">신상품</h2>
                <div id="newitem_title_wrap">
                    <p class="newitem_title">NEW ARRIVALS</p>
                    <p class="newitem_subtitle">같은 스타일의 안경이 질렸다면 새로운 변화는 어떠세요?</p>
                </div>
                <div id="newitem_list">
                    <ul id="newitem_text">
                        <li>
                            <p class="newitem_image">
                                <a href="#"><img src="/eyebreath/images/main_img/newitem_001.jpg" alt="이미지설명"></a>
                            </p>
                            <p class="newitem_brand">
                                <a href="#">PARANOID</a>
                            </p>
                            <p class="newitem_name">
                                <a href="#">다온 베타티타늄 - DAON M4909</a>
                            </p>
                            <p class="newitem_price">
                                <a href="#">183,000원</a>
                            </p> 
                        </li>
                        <li>
                            <p class="newitem_image">
                                <a href="#"><img src="/eyebreath/images/main_img/newitem_002.jpg" alt="이미지설명"></a>
                            </p>
                            <p class="newitem_brand">
                                <a href="#">ROUNZ ABSOLUTE</a>
                            </p>
                            <p class="newitem_name">
                                <a href="#">다온 베타티타늄 - DAON M4909</a>
                            </p>
                            <p class="newitem_price">
                                <a href="#">248,000원</a>
                            </p>
                        </li>
                        <li>
                            <p class="newitem_image">
                                <a href="#"><img src="/eyebreath/images/main_img/newitem_003.jpg" alt="이미지설명"></a>
                            </p>
                            <p class="newitem_brand">
                                <a href="#">NINE ACCORD</a>
                            </p>
                            <p class="newitem_name">
                                <a href="#">다온 베타티타늄 - DAON M4909</a>
                            </p>
                            <p class="newitem_price">
                                <a href="#">204,250원</a>
                            </p>
                        </li>
                        <li>
                            <p class="newitem_image">
                                <a href="#"><img src="/eyebreath/images/main_img/newitem_004.jpg" alt="이미지설명"></a>
                            </p>
                            <p class="newitem_brand">
                                <a href="#">NINE ACCORD</a>
                            </p>
                            <p class="newitem_name">
                                <a href="#">다온 베타티타늄 - DAON M4909</a>
                            </p>
                            <p class="newitem_price">
                                <a href="#">204,250원</a>
                            </p>
                        </li>
                        <li>
                            <p class="newitem_image">
                                <a href="#"><img src="/eyebreath/images/main_img/newitem_005.jpg" alt="이미지설명"></a>
                            </p>
                            <p class="newitem_brand">
                                <a href="#">NINE ACCORD</a>
                            </p>
                            <p class="newitem_name">
                                <a href="#">다온 베타티타늄 - DAON M4909</a>
                            </p>
                            <p class="newitem_price">
                                <a href="#">204,250원</a>
                            </p>
                        </li>
                        <li>
                            <p class="newitem_image">
                                <a href="#"><img src="/eyebreath/images/main_img/newitem_006.jpg" alt="이미지설명"></a>
                            </p>
                            <p class="newitem_brand">
                                <a href="#">NINE ACCORD</a>
                            </p>
                            <p class="newitem_name">
                                <a href="#">다온 베타티타늄 - DAON M4909</a>
                            </p>
                            <p class="newitem_price">
                                <a href="#">204,250원</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <div id="item_ad_wrap">
            <div id="item_ad">
                <div id="item_ad_sun">
                    <section id="item_text">
                        <h2 class="hidden">선글라스 광고</h2>
                        <p class="item_ad_title">햇빛말고 선글라스</p>
                        <p class="item_ad_sub">피부만큼 눈도 자외선으로 보호 받아야 하는 사실을 알고 계셨나요?</p>
                        <button class="item_ad_btn">SHOP</button>
                    
                    </section>
                </div>
                <div id="item_ad_gla">
                    <section id="item_text2">
                        <h2 class="hidden">안경 광고</h2>
                        <p class="item_ad_title">렌즈보단 안경</p>
                        <p class="item_ad_sub">색다른 안경 착용으로 분위기 전환 해보시는건 어떨까요?</p>
                        <button class="item_ad_btn">SHOP</button>
                    </section>
                </div> 
            </div>
        </div>
        <div id="eyestyle_wrap">
            <section id="eyestyle">
                <h2 class="hidden">룩북 추천</h2>
                <div id="eyestyle_title_wrap">
                    <p class="eyestyle_title">EYE STYLE</p>
                    <p class="eyestyle_subtitle">한 주의 시작이 어렵다면 EYE STYLE 의 LOOK BOOK을 통하여 다앙한 컨텐츠를 감상해보세요.</p>
                </div>
                <div id="eyestyle_list">
                    <div id="eyestyle_list_001">
                        <ul class="eyestyle_text">
                            <li>
                                <p class="eyestyle_image">
                                    <a href="#"><img src="/eyebreath/images/main_img/eyestyle_001.jpg" alt="안경설명"></a>
                                </p>
                                <p class="eyestyle_brand">RECLOW</p>
                                <p class="eyestyle_name">RC E386 BLACK SILVER 청광렌즈 VER 안경</p>
                            </li>
                            <li>
                                <p class="eyestyle_image">
                                    <a href="#"><img src="/eyebreath/images/main_img/eyestyle_002.jpg" alt="안경설명"></a>
                                </p>
                                <p class="eyestyle_brand">RECLOW</p>
                                <p class="eyestyle_name">RC E386 BLACK SILVER 청광렌즈 VER 안경</p>
                            </li>
                        </ul>
                    </div>
                    <div id="eyestyle_list_002">
                        <ul class="eyestyle_text">
                            <li>
                                <p class="eyestyle_image">
                                    <a href="#"><img src="/eyebreath/images/main_img/eyestyle_003.jpg" alt="안경설명"></a>
                                </p>
                                <p class="eyestyle_brand">RECLOW</p>
                                <p class="eyestyle_name">RC E386 BLACK SILVER 청광렌즈 VER 안경</p>
                            </li>
                        </ul>
                    </div>
                    <div id="eyestyle_list_003">
                        <ul class="eyestyle_text">
                            <li>
                                <p class="eyestyle_image">
                                    <a href="#"><img src="/eyebreath/images/main_img/eyestyle_004.jpg" alt="안경설명"></a>
                                </p>
                                <p class="eyestyle_brand">RECLOW</p>
                                <p class="eyestyle_name">RC E386 BLACK SILVER 청광렌즈 VER 안경</p>
                            </li>
                            <li>
                                <p class="eyestyle_image">
                                    <a href="#"><img src="/eyebreath/images/main_img/eyestyle_005.jpg" alt="안경설명"></a>
                                </p>
                                <p class="eyestyle_brand">RECLOW</p>
                                <p class="eyestyle_name">RC E386 BLACK SILVER 청광렌즈 VER 안경</p>
                            </li>
                        </ul>
                    </div> 
                </div>
            </section>
        </div>
        <div id="acc_wrap">
            <section id="acc">
                <h2 class="hidden">악세서리 광고</h2>
                <div id="acc_text">
                    <p class="acc_title">ACC</p>
                    <p class="acc_sub">오늘 하루 고생한 나의 안경에 휴식을 주는건 어떨까요? <br>휴대 시 매번 같은 안경 케이스가 질렸다면 새로운 변화는 어떨까요.</p>
                </div>
                <div id="acc_view">
                    <p class="acc_sub2">다양한 액세서리 둘러보기</p>
                    <button class="acc_btn">Shop</button>
                </div>
            </section>
        </div>   
    </div>
    <!--컨텐츠영역끝-->

    <? include_once $_SERVER["DOCUMENT_ROOT"]."/eyebreath/inc/footer.html" ?>



</body>
</html>