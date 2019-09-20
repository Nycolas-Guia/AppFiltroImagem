$(document).on("click","#camera",function(){
    navigator.camera.getPicture(onSuccess, onFail, { 
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    correctOrientation:true,
    saveToPhotoAlbum:true
  });

  function onSuccess(imageURI) {
      var image = document.getElementById('imagem');
      image.src = imageURI;
  }

  function onFail(message) {
      navigator.notification.alert('Erro ao capturar imagem: ' + message);
  }
});

$(document).on("change","#opa",function(){

 var opa = document.getElementById('opa').value;
 document.getElementById("imagem").style.filter = "opacity("+opa+"%)";

});

$(document).on("change","#sat",function(){

 var sat = document.getElementById('sat').value;
 document.getElementById("imagem").style.filter = "saturate("+sat+"%)";

});

$(document).on("change","#cinza",function(){

 var cinza = document.getElementById('cinza').value;
 document.getElementById("imagem").style.filter = "grayscale("+cinza+"%)";

});

$(document).on("change","#sat",function(){

 var sat = document.getElementById('sat').value;
 document.getElementById("imagem").style.filter = "saturate("+sat+"%)";

});

$(document).on("change","#des",function(){

 var des = document.getElementById('des').value;
 document.getElementById("imagem").style.filter = "blur("+des+"px)";

});
