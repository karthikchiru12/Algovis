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
var i=0,j=0,curr=0,timer=1000,p=0,q=0;
var n=11;
var step1="enter";
var step2="";
var step3="";
var s;
var str;
var finish=0;
var swap_count=0;
var sort=0;
var a=[];
var min=0;
var min_index=0;

//reset function
function reset()
{
    if((status=="done"||status=="")&&(finish==1||finish==0)&&status!="pl")
    {
	 /* The Limitation of the reset function is that it cannot be invoked while
	    the anim() is running as it interferes with setInterval() and produces 
		unexpected results*/
     c=0;
     msg="";
     finish=0;
     step1="enter";
	 step2="";
	 step3="";
	 swap_count=0;
	 temp=0;
	 sort=0;
     a=0;
     b=0;
     min=0;
     min_index=0;
     a=[];
     curr=0;
     p=0;
     q=0;
     document.getElementById('swap_count').innerHTML="";
     document.getElementById('swap').innerHTML="";
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
     
     document.getElementById('line4').style.backgroundColor='';
     document.getElementById('line6').style.backgroundColor='';
     document.getElementById('line8').style.backgroundColor='';
     document.getElementById('line10').style.backgroundColor='';
     document.getElementById('sort').style.visibility='visible';
	 
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
            
            
        

        


        if(step3=="complete")
        {

            step3="";
            step1="enter";
        }
        if(step3=="enter")
        {
            arr.rows[r].cells[curr].style.backgroundColor='indigo';
            arr.rows[r+1].cells[curr].innerHTML='';
            arr.rows[r+1].cells[min_index].innerHTML='';
            curr++;
            temp=min_index;
            arr.rows[r].cells[temp].style.backgroundColor='';
            document.getElementById('line8').style.backgroundColor='red';
            document.getElementById('line6').style.backgroundColor='';
            document.getElementById('line4').style.backgroundColor='';
   
            a=[];
            step3="complete";

        }


        if(step2=="complete")
        {
            if(min_index!=curr)
            {
                document.getElementById('line4').style.backgroundColor='';
                document.getElementById('line6').style.backgroundColor='red';
                arr.rows[r].cells[curr].style.backgroundColor='blue';
                arr.rows[r].cells[min_index].style.backgroundColor='blue';
                a=Number(arr.rows[r].cells[curr].innerHTML);
                arr.rows[r+1].cells[curr].innerHTML='&#8593;';
                b=Number(arr.rows[r].cells[min_index].innerHTML);
                arr.rows[r+1].cells[min_index].innerHTML='&#8593;';
                temp=a;
                a=b;
                b=temp;
                swap_count++;
                document.getElementById('swap_count').innerHTML="Number of swaps : "+swap_count;
                document.getElementById('swap').innerHTML="Swapped "+a+" & "+b;
                arr.rows[r].cells[min_index].innerHTML=b;
                arr.rows[r].cells[curr].innerHTML=a;
                step2="";
                step3="enter";
            }
            else
            {
                document.getElementById('line8').style.backgroundColor='red';
                document.getElementById('line4').style.backgroundColor='';
                
                arr.rows[r].cells[curr].style.backgroundColor='indigo';
                step2="";
                step3="complete";
                curr++;
                a=[];

            }
        }
        if(step2=="enter")
        {
                arr.rows[r].cells[min_index].style.backgroundColor='green';
                step2="complete";
        }

        if(step1=="complete")
        {       i=curr;
                document.getElementById('temp_var').style.visibility='visible';
                temp=Number(arr.rows[r].cells[i].innerHTML);
                document.getElementById('temp_var').rows[1].cells[1].innerHTML=temp;
                
                var tr=setInterval(function(){
                    if(i<n)
                    {
                        document.getElementById('line4').style.backgroundColor='red';
                        arr.rows[r].cells[i].style.backgroundColor='red';
                        p=Number(arr.rows[r].cells[i].innerHTML);
                        q=Number(document.getElementById('temp_var').rows[1].cells[1].innerHTML);
                        if(p<q)
                        {
                            document.getElementById('temp_var').rows[1].cells[1].innerHTML=p;
                            
                        }
                        i++;
                    }
                    else
                    {
                        for(j=curr;j<n;j++)
                        {   
                            arr.rows[r].cells[j].style.backgroundColor='';
                            if(Number(arr.rows[r].cells[j].innerHTML)==min)
                            {
                                arr.rows[r].cells[j].style.backgroundColor='green';
                                min_index=j;
                                console.log(j);
                            }
                        }
                        
                        clearInterval(tr);
                        step1="";
                        step2="enter";
                    }
                },timer);

                
        }
        if(step1=="enter")
        {
            if(curr==n)
            {
                
                sort=1;
                status="done";
                finish=1;
                step1="";
                document.getElementById('temp_var').style.visibility='hidden';
                document.getElementById('line10').style.backgroundColor='green';
                clearInterval(id);
            }
           try
           { 
            for(i=curr;i<n;i++)
            {
                a.push(Number(arr.rows[r].cells[i].innerHTML));
            }
           }
           catch(err)
           {
               console.log(err.message);
           }
           min= Math.min.apply(null, a);
           console.log(a);
           console.log("min = "+min);
           document.getElementById('line4').style.backgroundColor='';
           document.getElementById('line8').style.backgroundColor='';
           document.getElementById('sort').style.visibility='hidden';
           step1="complete";
            
        }

        
        

    }

  }
}
//refresh function//
function refresh()
{
 if((finish==0&&status!="pl")||(finish==1&&status=="done"))
 {
     
     c=0;
     msg="";
     finish=0;
     step1="enter";
	 step2="";
	 step3="";
	 swap_count=0;
	 temp=0;
	 sort=0;
     a=0;
     b=0;
     min=0;
     min_index=0;
     a=[];
     curr=0;
     p=0;
     q=0;
     status="";
     document.getElementById('swap').innerHTML="";
     document.getElementById('swap_count').innerHTML="";
     document.getElementById('line4').style.backgroundColor='';
     document.getElementById('line6').style.backgroundColor='';
     document.getElementById('line8').style.backgroundColor='';
     document.getElementById('line10').style.backgroundColor='';
     document.getElementById('sort').style.visibility='visible';
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
