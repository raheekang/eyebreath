window.addEventListener('load',()=>{

    const header=document.querySelector('header')
    const mobileMenuWrap=document.querySelector('#mobilemenu')
    const menuBtn=document.querySelector('.menu')
    const closeBtn=document.querySelector('#mobileclose_btn')

    const grayLayer=document.createElement('div')
    grayLayer.id='mobile_graylayer'

    const mobileMenu=document.querySelectorAll('#mobile_menu_list>li>a')
    const mobileSubMenu=document.querySelectorAll('.mobile_submenu_list>li>a')



    let selectedMenu=null; 
    let closeHeight=60; 
    let openHeight=null;
    let mobileMenuWidth=window.innerWidth*0.8;
    let subMenuHeight=50;

    init()
    initEvent()

    function init(){
        let vh = window.innerHeight * 0.01; 
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        gsap.set(mobileMenuWrap, {width:mobileMenuWidth, height:window.innerHeight, left:-mobileMenuWidth, display:'none'})
    }

    function initEvent(){
        menuBtn.addEventListener('click', mobileMenuOpen)
        closeBtn.addEventListener('click', mobileMenuClose)

        for(const item of mobileMenu){
            item.addEventListener('click',subMenuOpen)
        }
        for(const item of mobileSubMenu){
            item.addEventListener('click',subMenuClose)
        }

    }

    function mobileMenuOpen(){
        gsap.set(grayLayer, {display:'block'})
        header.append(grayLayer)

        gsap.set('body,html', {overflow:'hidden'})
        gsap.set(mobileMenuWrap,{display:'block'})
        gsap.to(mobileMenuWrap, {left:0, duration:0.5, ease:'power1.out'})
    }
    
    function mobileMenuClose(){
        if(selectedMenu!=null && selectedMenu!=this){
            gsap.set(selectedMenu.parentElement,{height:closeHeight})
            selectedMenu.nextElementSibling.classList.remove('mobile_selected')
        }
            selectedMenu=null;

        gsap.set(grayLayer, {display:'none'})
        gsap.to(mobileMenuWrap, {left:-mobileMenuWidth, duration:0.5, ease:'power1.out', onComplete:()=>{
            gsap.set(mobileMenuWrap,{display:'none'})
            gsap.set('body,html',{overflow:'visible'})
        }})

    }

    function subMenuOpen(){
       
       if(selectedMenu!=null && selectedMenu!=this){
            gsap.to(selectedMenu.parentElement,{height:closeHeight, duration:0.3, ease:'power1.out'}) 
            selectedMenu.nextElementSibling.classList.remove('mobile_selected')
        }
        if(selectedMenu!=this){
            selectedMenu=this;
            openHeight=closeHeight + (subMenuHeight * selectedMenu.nextElementSibling.nextElementSibling.children.length) 
            gsap.to(selectedMenu.parentElement,{height:openHeight, duration:0.3, ease:"power1.out"})
            selectedMenu.nextElementSibling.classList.add('mobile_selected')
        }
    }

    function subMenuClose(){

        if(selectedMenu!=null && selectedMenu!=this){
            gsap.to(selectedMenu.parentElement,{height:closeHeight, duration:0.3, ease:'power1.out'}) 
            selectedMenu.nextElementSibling.classList.remove('mobile_selected')
        }
        
    }


    
    



})