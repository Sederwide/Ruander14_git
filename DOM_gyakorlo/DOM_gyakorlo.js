function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+' characters';
}
document.getElementById('hideButton').addEventListener('click', function() { 
    document.querySelectorAll('img').forEach(function(img) { 
      img.classList.add('hidden'); 
    }); 
  }); 