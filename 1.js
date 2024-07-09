const uplodeImg = document.getElementById("upload-Img");
const uplodedInput = document.getElementById("upload-Input");

uplodedInput.addEventListener("change",function(e)
{
const file=e.target.files[0];
uplodeImg.src=URL.createObjectURL();

})