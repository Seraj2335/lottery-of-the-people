
const menuObject=document.querySelector('#menu');
const listObject=document.querySelector('#ulList');

listObject.addEventListener('click',()=>{
  console.log('clicked');
if(menuObject.classList.contains('hidden')){
  menuObject.classList.remove('hidden');
}else{
  menuObject.classList.add('hidden');
}
});