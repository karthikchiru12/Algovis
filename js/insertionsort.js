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
var fst=1;//it is a flag used to describe first element is being searched or not {1(false)_initial,0(true)}//
var msg="";//used to display current key value to the user//
var temp;//used as a temporary variable//
var x;//extra//
var i=0,j=1;
var pass=0;
var swap=0;
var n=11;
var step1="enter";
var step2="";
var step3="";
var left,right;
var s;
var next=0;
var pc=0;
var str;
var finish=0;
var swap_count=0;
var sort=0;
var comp=0;
var exp=0;
var k,l=0;


function play_asc()
{
    k=i;
    l=j;
    var id=setInterval(anm,1000);
    function anm()
    {



        if(next==1)
        {
            i=0;
            j++;
            step1="enter";
            arr.rows[r].cells[i].style.backgroundColor="";
            arr.rows[r].cells[j].style.backgroundColor="";
            arr.rows[r+1].cells[i].innerHTML="";
            arr.rows[r+1].cells[j].innerHTML="";
        }




        if(swap==1)
        { 
        document.getElementById('line3').style.backgroundColor="";
        document.getElementById('line4').style.backgroundColor="red";
        msg="";
        document.getElementById('swap').innerHTML="";
        msg="swapped :"+left+" & "+right+" ;";
        document.getElementById('swap').innerHTML=msg;
        msg="";
        //arr.rows[2].cells[i].innerHTML="swapped";
        temp=left;
        left=right;
        right=temp;
        //arr.rows[2].cells[j].innerHTML=""+left+"&"+right;
        arr.rows[r].cells[i].innerHTML=left;
        arr.rows[r].cells[j].innerHTML=right;
        swap=0;
        next=1;
        swap_count++;
        document.getElementById('swap_count').innerHTML="Number of swaps : "+swap_count;

        }
     
      if(step1=="continue")
      {
          step1="";
          step2="enter";
      }
      if(step1=="enter")
      {
            if(exp==2)
            {
                i++;
                arr.rows[r].cells[i].style.backgroundColor="";
                arr.rows[r].cells[j].style.backgroundColor="";
                
            }
            if(exp==1)
            {
                j++;
                i=0;
                arr.rows[r].cells[i].style.backgroundColor="";
                arr.rows[r].cells[j].style.backgroundColor="";
            
            }
            left=Number(arr.rows[r].cells[i].innerHTML);
            right=Number(arr.rows[r].cells[j].innerHTML);
            arr.rows[r].cells[i].style.backgroundColor="green";
            arr.rows[r].cells[j].style.backgroundColor="red";
            step1="continue";
          
      }

      if(step2=="continue")
      {
          step2="";
          step3="enter";
      }
      if(step2=="enter")
      {
          if(i<j)
          {
              
                  if(right<left)
                  {
                    temp=right;
                    arr.rows[2].cells[j].innerHTML=temp;
                    arr.rows[r].cells[i].style.backgroundColor="black";
                    arr.rows[r].cells[j].style.backgroundColor="black";
                    arr.rows[r].cells[j].innerHTML="";
                    comp++;
                    if(exp!=1&&exp!=2)
                    {
                     step2="continue";
                    }
                    if(exp==1)
                    {
                        stepex="enter";
                    }

                  }
                  else
                  {
                      if(exp==1)
                      {
                          exp=2;
                          step2="";
                          step1="enter";
                      }
                      else
                      {
                          exp=1;
                          step2="";
                          step1="enter";
                      }

                  }
          }
          else
          {
              exp=1;

          }
      }

      if(step3=="enter")
	 {
	  s=right;
	  arr.rows[2].cells[j].innerHTML="";
	  arr.rows[2].cells[i].innerHTML=s;
	  swap=1;
	  s=0;
	  step3="";
	 }







        
    }
}