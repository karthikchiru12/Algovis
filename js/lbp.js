/*MIT License

Copyright (c) 2018 Karthik Chiranjeevi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
Developed by karthikchiru12 
*/
var step=document.getElementById('step');
var pixels=document.getElementById('pixels');
var output=document.getElementById('output');
var arr=document.getElementById('oa');
var dec=document.getElementById('dec');
var x,y=0;
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
        step.innerHTML="Selecting a pixel in the above matrix";
        pixels.rows[1].cells[1].style.backgroundColor='maroon';

    },5000);

    var step4=setTimeout(function ()
    {
        step.innerHTML="And comparing it with the neighbouring pixels";
        

    },7000);

    var step5=setTimeout(function ()
    {
        pixels.rows[0].cells[0].style.backgroundColor='indigo';
        x=Number(pixels.rows[1].cells[1].innerHTML);
        y=Number(pixels.rows[0].cells[0].innerHTML);
        step.innerHTML="Comparing (selected pixel) and (neihbouring pixel) values <br>If selected_pixel - neighbouring_pixel >=0 then we keep '1' in output array<br> Otherwise '0'";
        output.style.display='table';
        output.rows[0].cells[0].innerHTML= (x-y>=0 ? 1 :0);

        

    },9000);

    var step6=setTimeout(function ()
    {
        pixels.rows[0].cells[0].style.backgroundColor='';
        pixels.rows[0].cells[1].style.backgroundColor='indigo';
        y=Number(pixels.rows[0].cells[1].innerHTML);
        output.rows[0].cells[1].innerHTML= (x-y>=0 ? 1 :0);  
    },11000);

    var step7=setTimeout(function ()
    {
        pixels.rows[0].cells[1].style.backgroundColor='';
        pixels.rows[0].cells[2].style.backgroundColor='indigo';
        y=Number(pixels.rows[0].cells[2].innerHTML);
        output.rows[0].cells[2].innerHTML= (x-y>=0 ? 1 :0);  
    },13000);

    var step8=setTimeout(function ()
    {
        pixels.rows[0].cells[2].style.backgroundColor='';
        pixels.rows[1].cells[0].style.backgroundColor='indigo';
        y=Number(pixels.rows[1].cells[0].innerHTML);
        output.rows[1].cells[0].innerHTML= (x-y>=0 ? 1 :0);  
    },15000);

    var step9=setTimeout(function ()
    {
        pixels.rows[1].cells[0].style.backgroundColor='';
        pixels.rows[1].cells[2].style.backgroundColor='indigo';
        y=Number(pixels.rows[1].cells[2].innerHTML);
        output.rows[1].cells[2].innerHTML= (x-y>=0 ? 1 :0);  
    },17000);

    var step10=setTimeout(function ()
    {
        pixels.rows[1].cells[2].style.backgroundColor='';
        pixels.rows[2].cells[0].style.backgroundColor='indigo';
        y=Number(pixels.rows[2].cells[0].innerHTML);
        output.rows[2].cells[0].innerHTML= (x-y>=0 ? 1 :0);  
    },19000);

    var step11=setTimeout(function ()
    {
        pixels.rows[2].cells[0].style.backgroundColor='';
        pixels.rows[2].cells[1].style.backgroundColor='indigo';
        y=Number(pixels.rows[2].cells[1].innerHTML);
        output.rows[2].cells[1].innerHTML= (x-y>=0 ? 1 :0);  
    },21000);

    var step12=setTimeout(function ()
    {
        pixels.rows[2].cells[1].style.backgroundColor='';
        pixels.rows[2].cells[2].style.backgroundColor='indigo';
        y=Number(pixels.rows[2].cells[2].innerHTML);
        output.rows[2].cells[2].innerHTML= (x-y>=0 ? 1 :0);  
    },23000);

    var step13=setTimeout(function ()
    {
        pixels.rows[2].cells[2].style.backgroundColor='';
        step.style.color='aqua';
        step.innerHTML="Now either clockwise or anti-clockwise<br>Push the values into an Array";
        oa.style.display='table';
        
    },25000);

    var step14=setTimeout(function ()
    {
        output.rows[0].cells[1].style.backgroundColor='indigo';
        oa.rows[1].cells[0].innerHTML=Number(output.rows[0].cells[1].innerHTML);
    },27000);


    var step15=setTimeout(function ()
    {
        output.rows[0].cells[1].style.backgroundColor='';
        output.rows[0].cells[0].style.backgroundColor='indigo';
        oa.rows[1].cells[1].innerHTML=Number(output.rows[0].cells[0].innerHTML);
    },29000);

    var step16=setTimeout(function ()
    {
        output.rows[0].cells[0].style.backgroundColor='';
        output.rows[1].cells[0].style.backgroundColor='indigo';
        oa.rows[1].cells[2].innerHTML=Number(output.rows[1].cells[0].innerHTML);
    },31000);

    var step17=setTimeout(function ()
    {
        output.rows[1].cells[0].style.backgroundColor='';
        output.rows[2].cells[0].style.backgroundColor='indigo';
        oa.rows[1].cells[3].innerHTML=Number(output.rows[2].cells[0].innerHTML);
    },33000);

    var step18=setTimeout(function ()
    {
        output.rows[2].cells[0].style.backgroundColor='';
        output.rows[2].cells[1].style.backgroundColor='indigo';
        oa.rows[1].cells[4].innerHTML=Number(output.rows[2].cells[1].innerHTML);
    },35000);

    var step19=setTimeout(function ()
    {
        output.rows[2].cells[1].style.backgroundColor='';
        output.rows[2].cells[2].style.backgroundColor='indigo';
        oa.rows[1].cells[5].innerHTML=Number(output.rows[2].cells[2].innerHTML);
    },37000);

    var step20=setTimeout(function ()
    {
        output.rows[2].cells[2].style.backgroundColor='';
        output.rows[1].cells[2].style.backgroundColor='indigo';
        oa.rows[1].cells[6].innerHTML=Number(output.rows[1].cells[2].innerHTML);
    },39000);

    var step21=setTimeout(function ()
    {
        output.rows[1].cells[2].style.backgroundColor='';
        output.rows[0].cells[2].style.backgroundColor='indigo';
        oa.rows[1].cells[7].innerHTML=Number(output.rows[0].cells[2].innerHTML);
    },41000);

    var step22=setTimeout(function ()
    {
        output.rows[0].cells[2].style.backgroundColor='';
        output.style.display='none';
        step.innerHTML='Now caluclating the equalent Decimal<br>For the below Binary number';
    },43000);

    var step23=setTimeout(function ()
    {
       dec.innerHTML='16 + 4 + 2 + 1 = 23';
    },45000);

    var step24=setTimeout(function ()
    {
        oa.style.display='none';
        dec.style.display='none';
        for(let i=0;i<3;i++)
        {
            for(let j=0;j<3;j++)
            {
                output.rows[i].cells[j].innerHTML='&nbsp;';
            }
        }
        output.style.display='table';
        output.rows[1].cells[1].innerHTML='23';
        output.style.borderColor='aqua';
        step.innerHTML='And Construct a matrix same as size of Input matrix(3x3)<br>And replace selected pixel value with the obtained decimal value<br>In the LBP Output image<br>And repeat this procedure for all the pixels in the input image pixel array';
    },47000);

    var step25=setTimeout(function ()
    {
        document.getElementById('reload').style.display="block";
    },49000);
}

function reload()
{
    location.reload();
}
