document.addEventListener('DOMContentLoaded',()=>{

    const headerWrap=document.querySelector('#header_wrap')
    const mainMenu=document.querySelectorAll('#mainmenu_list>li>a')
    const subMenuList=document.querySelectorAll('.submenu_list')

    let selectedMenu=null;

    initEvent();

    function initEvent(){
        for(const item of mainMenu){
            item.addEventListener('mouseenter', showSubMenu)
            item.addEventListener('focus', showSubMenu)
        }
        for(const item of subMenuList){
            item.addEventListener('mouseenter', showSubMenu)
        }
        headerWrap.addEventListener('mouseleave', hideSubMenu)

        window.addEventListener('mousewheel', activateHeaderWrap)
    }

    function activateHeaderWrap(e){ 
        if(e.wheelDelta<=-120){ //작으면 아래 크면 위
            gsap.to(headerWrap,{top:-145, opacity:0, duration:0.5, ease:'power1.out'}) //135는 해더랩이 닫혔을때높이
        }else if(e.wheelDelta>-120){ //위로 휠
            gsap.to(headerWrap,{top:0, opacity:1, duration:0.5, ease:'power1.out'})
        }
    }

    function showSubMenu(){
        if(selectedMenu!=null && selectedMenu!=this){
            selectedMenu.parentElement.classList.remove('selected')
        }

        if(selectedMenu!=this){
            selectedMenu=this;
            selectedMenu.parentElement.classList.add('selected')
        }

        gsap.to(headerWrap, {height:320, duration:0.3, ease:'power1.out'})
        gsap.set(subMenuList, {display:'block'})
        gsap.to(subMenuList, {opacity:1, delay:0.1, duration:0.3, ease:'power1.out'})

        
    }
    
    function hideSubMenu(){

        if(selectedMenu!=null && selectedMenu!=this){
            selectedMenu.parentElement.classList.remove('selected')
        }       

        gsap.to(headerWrap, {height:145, duration:0.3, ease:'power1.out'})
        gsap.set(subMenuList, {opacity:0, display:'none'})

        selectedMenu=null; 
        
    }



})












