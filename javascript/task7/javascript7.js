var anime ; 
function init(){  
   img = document.getElementById('img');     
   img.style.position = 'relative';    
   img.style.left = '0px'; 
}  
function Right(){  
   img.style.left = parseInt(img.style.left) + 10 + 'px';    
   anime = setTimeout(Right,50); 
}  
function stop() {     
   clearTimeout(anime);    
  img.style.left = '0px';   
}  
window.onload = init;