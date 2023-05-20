document.addEventListener('DOMContentLoaded',()=>{
    const eyestyleTitle=document.querySelector('#eyestyle_title_wrap')
    const eyestyleImg=document.querySelectorAll('.eyestyle_text>li')
    
    //const introduceWrap=document.querySelector('#introduce_wrap')
    const introduceText=document.querySelector('#introduce_text')
    const introduceImg=document.querySelector('#introduce')

    const newitemTitle=document.querySelector('#newitem_title_wrap')
    const newitemImg=document.querySelectorAll('#newitem_text>li')

    const accText=document.querySelector('#acc_text')
    const accView=document.querySelector('#acc_view')


//초기설정 ,포지션 잡혀있으면 top으로 가야하고 없으면 translateY값으로 바로줘
gsap.set(eyestyleTitle,{translateY:200, opacity:0})
gsap.set(eyestyleImg,{translateY:200, opacity:0}) //초기값은 css에서 조절해도 됨

gsap.set(introduceText,{translateX:-500, opacity:0})
gsap.set(introduceImg,{translateX:300, opacity:0})

gsap.set(newitemTitle,{translateY:200, opacity:0})
gsap.set(newitemImg,{translateY:200, opacity:0})

gsap.set(accText,{translateY:220, opacity:0})
gsap.set(accView,{translateY:230, opacity:0})


window.addEventListener('scroll', scrollWindow)

function scrollWindow(){
    let scrollHeight=window.pageYOffset; //윈도우를 스크롤 할 때 마다 

    if(scrollHeight>=2700){ //테스트용 하면서 나타나고 싶을때를 잡으면 됨, 값은 유동적
        //alert("2600")
        gsap.to(eyestyleTitle,{translateY:0, opacity:1, duration:1, ease:'power1.out'})

        //순번에 따라서 delay값을 주고 싶으면 이유는 한번에 나오면 재미가 없어서
        for(let i=0; i<eyestyleImg.length; i++){
            gsap.to(eyestyleImg[i],{translateY:0, opacity:1, duration:1, delay:i*0.3, ease:'power1.out'})
        }
    }

    if(scrollHeight>=420){
        //alert('550')
        gsap.to(introduceText,{translateX:0, opacity:1, duration:0.7, ease:'power1.out'})

        gsap.to(introduceImg,{translateX:0, opacity:1,duration:0.7 ,ease:'power1.out'})
    }

    if(scrollHeight>=850){
        //alert('850')
        gsap.to(newitemTitle,{translateY:0, opacity:1, duration:0.6, ease:'power1.out'})

        for(let i=0; i<newitemImg.length; i++){
            gsap.to(newitemImg[i],{translateY:0, opacity:1, duration:0.6, delay:i*0.3, ease:'power1.out'})
        }
    }

    if(scrollHeight>=3900){
        //alert('3700')
        gsap.to(accText,{translateY:0 , opacity:1, duration: 0.7, ease:'power1.out'})
        gsap.to(accView,{translateY:0 , opacity:1, duration: 0.7, ease:'power1.out'})
    }

}

})













