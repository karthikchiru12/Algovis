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
var arr = document.getElementById('array_1d');//declaration used to access the 1-d array in the <body>//
var col_len=arr.rows[0].cells.length;//row length//
var row_len=arr.rows.length;//col length//
var r=1;c=0;//initial row and col values where row value in linear search remains constant only co value changes//
var status; //possible values={pl(play()),done(either element found or reset button pressed while playing),""(initial)}//
var msg="";//used to display current key value to the user//
var temp;//used as a temporary variable//
var x;//extra//
var i=0,j=1,curr=0,timer=1000,p=1,q=0;
var n=11;
var step1="enter";
var step2="";
var step3="";
var stepad="";
var s;
var str;
var finish=0;
var sort=0;
var left=0,right=0;
var ad=0;
var temp_var=document.getElementById('temp_var');

//reset function
function reset()
{
    if((status=="done"||status=="")&&(finish==1||finish==0)&&status!="pl")
    {
	 /* The Limitation of the reset function is that it cannot be invoked while
	    the anim() is running as it interferes with setInterval() and produces 
		unexpected results*/
     msg="";
     finish=0;
     step1="enter";
	 step2="";
	 step3="";
	 temp=0;
     sort=0;
     left=0;
     right=0;
     i=0;j=1;
     ad=0;
     curr=0;
     p=1;
     q=0;
     document.getElementById('sort').style.visibility='visible';
     document.getElementById('line3').style.backgroundColor='';
     document.getElementById('line4').style.backgroundColor='';
     document.getElementById('line7').style.backgroundColor='';
     document.getElementById('line10').style.backgroundColor='';
     document.getElementById('line11').style.backgroundColor='';
     document.getElementById('line14').style.backgroundColor='';
     document.getElementById('line16').style.backgroundColor='';
     document.getElementById('line17').style.backgroundColor='';
     document.getElementById('line18').style.backgroundColor='';
     document.getElementById('line19').style.backgroundColor='';
     for(let p=0;p<11;p++)
     {
      arr.rows[1].cells[p].style.backgroundColor="";
	  arr.rows[2].cells[p].innerHTML="";
     }
	 
	 arr.rows[r].cells[0].innerHTML="56";
	 arr.rows[r].cells[1].innerHTML="13";
	 arr.rows[r].cells[2].innerHTML="57";
	 arr.rows[r].cells[3].innerHTML="4";
	 arr.rows[r].cells[4].innerHTML="61";
	 arr.rows[r].cells[5].innerHTML="640";
	 arr.rows[r].cells[6].innerHTML="76";
	 arr.rows[r].cells[7].innerHTML="98";
	 arr.rows[r].cells[8].innerHTML="124";
	 arr.rows[r].cells[9].innerHTML="46";
     arr.rows[1].cells[10].innerHTML="35";
	 
     status="";
	 if(s==true)
	 {
	  s=false;
	  play_asc();
	 }
	 
     }
    
}
//reset function
 
function play_asc()
{
 

  
  var id = setInterval(anm,1000);//we repeat anim() function for every 2500ms until clearInterval(id) is called//
  function anm()
  {
      
        if(sort==1)
        {
            alert("The array is already sorted, please refresh to sort a new array...!");
            clearInterval(id);
        }
        
        if(sort!=1)
        {
            
            if(finish==1&&status=="done")
            {
            s=true;
            reset();
            clearInterval(id);
            
            }
            status="pl";
            document.getElementById('sort').style.visibility='hidden';
            
            
        

        


        if(stepad=="oncemore")
        {
            stepad="";
            i=0;
            step1="enter";
            document.getElementById('line18').style.backgroundColor='';
        }
        
        if(stepad=="complete")
        {
            arr.rows[r+1].cells[i].innerHTML="";
            arr.rows[r].cells[j].innerHTML=Number(arr.rows[r].cells[i].innerHTML);
            arr.rows[r].cells[i].innerHTML=temp;
            arr.rows[r].cells[j].style.backgroundColor="";
            j++;
            arr.rows[r].cells[i].style.backgroundColor='';
            document.getElementById('line5').style.backgroundColor='';
            document.getElementById('line18').style.backgroundColor='red';
            stepad="oncemore";
        }

         if(stepad=="enter")
        {       
            arr.rows[r+1].cells[i].innerHTML=temp;
            arr.rows[r+1].cells[j].innerHTML="";
            stepad="complete";

        }    
       


        if(step1=="abort2")
        {
            document.getElementById('line17').style.backgroundColor='';
            step1="enter";
            
        }
        if(step1=="abort1")
        {
            step1="abort2";
            arr.rows[r].cells[i].style.backgroundColor='';
            document.getElementById('line3').style.backgroundColor='';
            document.getElementById('line17').style.backgroundColor='red';
            i++;      
        }
        if(step1=="complete")
        {       
            if(ad==1)
            {
                ad=0;
                arr.rows[r].cells[j].innerHTML="";
                arr.rows[r+1].cells[j].innerHTML=temp;
                step1="";
                stepad="enter";
                document.getElementById('line5').style.backgroundColor='red';
                document.getElementById('line4').style.backgroundColor='';
            }
            else
            {
                document.getElementById('line7').style.backgroundColor='red';
                document.getElementById('line4').style.backgroundColor='';
                document.getElementById('line18').style.backgroundColor='';
                step1="";
                step2="enter";
                
                
            }
                
        }
        if(step1=="enter")
        {
            document.getElementById('line18').style.backgroundColor='';
            document.getElementById('line10').style.backgroundColor='';
            document.getElementById('line3').style.backgroundColor='';
            
            if(j>10)
            {
                sort=1;
                status="done";
                finish=1;
                step1="";
                document.getElementById('line19').style.backgroundColor='green';
                clearInterval(id);
            }
            arr.rows[r].cells[j].style.backgroundColor='red';
            arr.rows[r].cells[i].style.backgroundColor='gray';
            left=Number(arr.rows[r].cells[i].innerHTML);
            right=Number(arr.rows[r].cells[j].innerHTML);
            if(left>right)
            {
               if(i+1==j)
               {
                    document.getElementById('line4').style.backgroundColor='red';
                    temp=Number(arr.rows[r].cells[j].innerHTML);
                    ad=1;
                    step1="complete";
               }
               else
               {
                   step1="complete";
               }
                    
            }
            else
            {
                if(i!=j)
                {
                 step1="abort1";
                 document.getElementById('line3').style.backgroundColor='red';
                }
                else
                {
                    arr.rows[r].cells[i].style.backgroundColor='';
                    i=0;j++;
                }
            }
            
        }


        if(step2=="end")
        {
            i=0;
            j++;
            p=1;
            step2="";
            document.getElementById('line14').style.backgroundColor='';
            document.getElementById('line10').style.backgroundColor='';
            document.getElementById('line18').style.backgroundColor='red';
            step1="enter";
        }
        if(step2=="oncemore")
        {
            if(i!=0)
            {
              p++;
              q--;
              document.getElementById('line11').style.backgroundColor='';
              document.getElementById('line10').style.backgroundColor='red';
              step2="complete";
            }
            else
            {
                if(Number(temp_var.rows[r].cells[1])!=0)
                {
                    temp=Number(temp_var.rows[r].cells[1].innerHTML);
                    arr.rows[r].cells[0].innerHTML=temp;
                    temp_var.style.display='none';
                    document.getElementById('line14').style.backgroundColor='red';
                    document.getElementById('line11').style.backgroundColor='';
                    step2="end";
                }
            }
        }
        if(step2=="swap")
        {
            if(right>left)
            {
                arr.rows[r+1].cells[i].innerHTML='';
                arr.rows[r].cells[q].innerHTML=right;
                arr.rows[r].cells[i].innerHTML='';
                arr.rows[r].cells[i].style.backgroundColor='';
                document.getElementById('line10').style.backgroundColor='';
                document.getElementById('line11').style.backgroundColor='red';
                step2="oncemore";
                

            }
            else
            {
                temp=Number(temp_var.rows[r].cells[1].innerHTML);
                arr.rows[r].cells[i+1].innerHTML=temp;
                temp_var.rows[r].cells[1].innerHTML="";
                arr.rows[r].cells[i].style.backgroundColor='';
                arr.rows[r+1].cells[i].innerHTML='';
                temp_var.style.display='none';
                step2="end";
            }
        }
        if(step2=="complete")
        {
            i=j-p;
            arr.rows[r].cells[i].style.backgroundColor='gray';
            temp_var.rows[1].cells[1].style.backgroundColor='blue';
            left=Number(temp_var.rows[1].cells[1].innerHTML);
            right=Number(arr.rows[r].cells[i].innerHTML);
            arr.rows[r+1].cells[i].innerHTML='&uarr;';
            step2="swap";
            document.getElementById('line10').style.backgroundColor='red';
            document.getElementById('line7').style.backgroundColor='';


        }
        if(step2=="enter")
        {
            q=j;
            arr.rows[r].cells[i].style.backgroundColor='';
            temp_var.style.display='table';
            temp_var.rows[1].cells[1].innerHTML=right;
            arr.rows[r].cells[j].innerHTML="";
            arr.rows[r].cells[j].style.backgroundColor='';
            step2="complete";

        }


        
        

    }

  }
}
//refresh function//
function refresh()
{
 if((finish==0&&status!="pl")||(finish==1&&status=="done"))
 {
     
     msg="";
     finish=0;
     step1="enter";
	 step2="";
	 step3="";
	 temp=0;
	 sort=0;
     curr=0;
     p=1;
     q=0;
     i=0;j=1;
     ad=0;
     left=0;
     right=0;
     status="";
     document.getElementById('sort').style.visibility='visible';
     document.getElementById('line3').style.backgroundColor='';
     document.getElementById('line4').style.backgroundColor='';
     document.getElementById('line7').style.backgroundColor='';
     document.getElementById('line10').style.backgroundColor='';
     document.getElementById('line11').style.backgroundColor='';
     document.getElementById('line14').style.backgroundColor='';
     document.getElementById('line16').style.backgroundColor='';
     document.getElementById('line17').style.backgroundColor='';
     document.getElementById('line18').style.backgroundColor='';
     document.getElementById('line19').style.backgroundColor='';
  for(var i=0;i<col_len;i++)
  {
   x=Math.floor((Math.random() * 100) + 1);//random value is generated between 0 and 1 *100 +1//
   arr.rows[r].cells[i].innerHTML=x;
   arr.rows[r].cells[i].style.backgroundColor='';
  }
 }
}
//refresh function end...

//pause function
function pause()
{
    if(status=='pl')
    {
        confirm('Visualization Paused...Press OK or Cancel to Resume');
    }
}
//pause function
