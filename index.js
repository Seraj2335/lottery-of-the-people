

const menuObject=document.querySelector('#menu');
const listObject=document.querySelector('#ulList');

menuObject.addEventListener("click",()=>{
    if(listObject.contains('hidden')){
        listObject.classList.remove('hidden');
    }else{
        listObject.classList.add('hidden');
    }
});