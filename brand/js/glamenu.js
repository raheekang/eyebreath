document.addEventListener('DOMContentLoaded',()=>{

    
const tabMenu=document.querySelectorAll('#shop_list>li')
const panel=document.querySelector('#panel')

let selectedTabMenu=tabMenu[0]

init()
initEvent()

function init(){
    selectedTabMenu.classList.add('selected')

    axios.get('./shoplist/test0.html').then((Response)=>{
        panel.innerHTML=Response.data
    })
}

function initEvent(){
    for(const item of tabMenu){
        item.addEventListener('click',clickTabMenu)
    }
}

function clickTabMenu(){
    let clickIndex=getIndex(this)
    //alert(clickIndex)

    activateTabMenu(clickIndex)
    showPanel(clickIndex)
}
function getIndex(checkMenu){
    let checkIndex=0;
    while((checkMenu=checkMenu.previousElementSibling)!=null){
        checkIndex++
    }
    return checkIndex;
}
function activateTabMenu(index){
    if(selectedTabMenu!=null && selectedTabMenu!=tabMenu[index]){
        selectedTabMenu.classList.remove('selected')
    }
    if(selectedTabMenu!=tabMenu[index]){
        selectedTabMenu=tabMenu[index]
        selectedTabMenu.classList.add('selected')
    }
}

function showPanel(index){
    axios.get('./shoplist/test'+index+'.html').then((response)=>{
        panel.innerHTML=response.data
    },()=>{
        panel.innerHTML='통신실패'
    })
}



















})