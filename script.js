//your JS code here. If required.


const button = document.querySelector('input[type="button"]');

button.addEventListener('click',function(){
  
  const select = document.getElementById('colorSelect');

const selectedIndex = select.selectedIndex;

select.remove(selectedIndex);

});