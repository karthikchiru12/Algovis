var step=document.getElementById('step');
var pixels=document.getElementById('pixels');
function play()
{
    document.getElementById('play').style.display="none";
    var step1=setTimeout(function ()
    {
        pixels.style.display="table";
        step.innerHTML="This is an 3x3 matrix on which we are going to work on";

    },1000);

    var step2=setTimeout(function ()
    {
        step.innerHTML="And lets start";

    },3000);

    var step3=setTimeout(function ()
    {
        step.innerHTML="Selecting the center pixel in the above matrix";
        pixels.rows[1].cells[1].style.backgroundColor='maroon';

    },5000);

    var step4=setTimeout(function ()
    {
        step.innerHTML="And comparing it with the neighbouring pixels";
        

    },7000);

    var step4=setTimeout(function ()
    {
        pixels.rows[0].cells[0].style.backgroundColor='indigo';
        

    },9000);
}