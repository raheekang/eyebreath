window.addEventListener('load',()=>{

    const visualWrap=document.querySelector('#visual_wrap')
    const visual=document.querySelectorAll('#visual_list>li')
    const visualTitle=document.querySelectorAll('.main_text')
    const visualText=document.querySelectorAll('.sub_text')
    const visualBtn=document.querySelectorAll('.btn_visual')
    const nextBtn=document.querySelector('#next_btn')
    const prevBtn=document.querySelector('#prev_btn')

    let visualWidth=window.innerWidth; 
    let currentIndex=0; //현재들어온순번
    let nextIndex=null; //뭘 눌렀는지 모르니까 null값
    let timer=null;
    let isSlide=false; //자동슬라이드를 처음엔 비활성화

    gsap.set(visual, {left:visualWidth, opacity:0})
    gsap.set(visual[0],{left:0, opacity:1})

    //처음 홈페이지 들어갔을때 text애니메이션 효과
    gsap.set(visualTitle[0],{translateX:40, opacity:0})
    gsap.to(visualTitle[0],{translateX:0, opacity:1, duration:0.7, ease:'power1.out'})

    gsap.set(visualText[0],{translateX:40, opacity:0})
    gsap.to(visualText[0],{translateX:0, opacity:1,delay:0.3, duration:0.7, ease:'power1.out'})

    gsap.set(visualBtn[0],{translateX:40, opacity:0})
    gsap.to(visualBtn[0],{translateX:0, opacity:1,delay:0.4, duration:0.7, ease:'power1.out'})

    //gsap.set(visualTitle[0],{display:'block', opacity:1})
    //gsap.set(visualText[0],{display:'block',opacity:1})
    //gsap.set(visualBtn[0],{display:'block', opacity:1})

    nextBtn.addEventListener('click',slideNextVisual)
    prevBtn.addEventListener('click',slidePrevVisual)

    visualWrap.addEventListener('mouseenter', stopVisual)
    visualWrap.addEventListener('mouseleave',autoSlide)

    window.addEventListener('resize',()=>{
        visualWidth=window.innerWidth;     
        
    })

    autoSlide();

    function autoSlide(){
        timer=setInterval(slideNextVisual,3000)
    }
    function stopVisual(){
        clearInterval(timer)
    }

    function slideNextVisual(){
        if(isSlide==false){
            isSlide=true
            nextIndex=currentIndex+1;
            if(nextIndex>=visual.length){
                nextIndex=0;
            }
            
            gsap.to(visual[currentIndex], {left:-visualWidth, opacity:0, duration:0.5, ease:'power1.out'})
            
            gsap.set(visual[nextIndex],{opacity:1, left:visualWidth, scale:1.1})           
            gsap.set(visualTitle[nextIndex], {translateX:20, opacity:0})            
            gsap.set(visualText[nextIndex], {translateX:20, opacity:0})
            gsap.set(visualBtn[nextIndex],{translateX:20, opacity:0})
    
            gsap.to(visual[nextIndex], {left:0, opacity:1, duration:0.5, ease:'power1.out',onComplete:()=>{
                gsap.to(visual[nextIndex], {scale:1, duration:0.5, ease:'power1.out', onComplete:()=>{
                    gsap.to(visualTitle[nextIndex], {translateX:0, opacity:1, duration:0.5, ease:'power1.out'})
                    gsap.to(visualText[nextIndex],{translateX:0, opacity:1, delay:0.2, duration: 0.5, ease:'power1.out'})
                    gsap.to(visualBtn[nextIndex], {translateX:0, opacity:1, delay:0.3, duration:0.5, ease:'power1.out'})
                    isSlide=false
                }})
               
            }})
    
            currentIndex=nextIndex;
            
        }
    }
    
    function slidePrevVisual(){
        if(isSlide==false){
            isSlide=true
            nextIndex=currentIndex-1
            if(nextIndex<0){
                nextIndex=visual.length-1;
            }
            
            gsap.to(visual[currentIndex], {left:visualWidth, opacity:0, duration:0.5, ease:'power1.out'})
            
            gsap.set(visual[nextIndex],{opacity:1, left:-visualWidth, scale:1.5})           
            gsap.set(visualTitle[nextIndex], {translateY:100, opacity:0})            
            gsap.set(visualText[nextIndex], {translateY:100, opacity:0})
            gsap.set(visualBtn[nextIndex],{translateY:100, opacity:0})
    
            gsap.to(visual[nextIndex], {left:0, opacity:1, duration:0.5, ease:'power1.out',onComplete:()=>{
                gsap.to(visual[nextIndex], {scale:1, duration:0.5, ease:'power1.out', onComplete:()=>{ //scale값을 위에서 주면 굉장히 부자연스러워서 다시줌
                    gsap.to(visualTitle[nextIndex], {translateY:0, opacity:1, duration:0.5, ease:'power1.out'})
                    gsap.to(visualText[nextIndex],{translateY:0, opacity:1, delay:0.2, duration: 0.5, ease:'power1.out'})
                    gsap.to(visualBtn[nextIndex], {translateY:0, opacity:1, delay:0.3, duration:0.5, ease:'power1.out'})
                    isSlide=false
                }})
               
            }})
    
            currentIndex=nextIndex;
            
        }
    }






})