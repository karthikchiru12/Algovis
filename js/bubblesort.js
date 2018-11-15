var arr = document.getElementById('array_1d');//declaration used to access the 1-d array in the <body>//
var col_len=arr.rows[0].cells.length;//row length//
var row_len=arr.rows.length;//col length//
var r=1;c=0;//initial row and col values where row value in linear search remains constant only co value changes//
var status; //possible values={pl(play()),done(either element found or reset button pressed while playing),""(initial)}//
var fst=1;//it is a flag used to describe first element is being searched or not {1(false)_initial,0(true)}//
var msg="";//used to display current key value to the user//
var temp;//used as a temporary variable//
var x;//extra//
var i=0,j=0;
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

//reset function
function reset()
{
    if(status=="done"&&(finish==1||finish==0)&&status!="pl")
    {
	 /* The Limitation of the reset function is that it cannot be invoked while
	    the anim() is running as it interferes with setInterval() and produces 
		unexpected results*/
     c=0;
     msg="";
     finish=0;
     left=0;
     right=0;
     check=1;
     step1="enter";
	 step2="";
	 step3="";
     pass=0;
	 swap=0;
	 next=0;
	 pc=0;
	 swap_count=0;
	 temp=0;
	 sort=0;
	 comp=0;
     document.getElementById('pass').innerHTML="";
     document.getElementById('swap').innerHTML="";
     document.getElementById('swap_count').innerHTML="";
     document.getElementById('comp').innerHTML="";
	 document.getElementById('line7').style.backgroundColor="";
     for(var temp=0;temp<11;temp++)
     {
      arr.rows[1].cells[temp].style.backgroundColor="";
	  arr.rows[2].cells[temp].innerHTML="";
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
 

  
  var id = setInterval(anm,100);//we repeat anim() function for every 2500ms until clearInterval(id) is called//
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
    if(pass<10)
	{
	
	 
	 if(next==1)
	 {
	  arr.rows[r].cells[i].style.backgroundColor="";
	  arr.rows[r].cells[j].style.backgroundColor="";
	  arr.rows[2].cells[i].innerHTML="";
	  arr.rows[2].cells[j].innerHTML="";
	  left=0;
	  right=0;
	  temp=0;
	  i++;
	  j=0;
	  next=0;
	  document.get
	  step1="enter"; 
	  msg="";
	  document.getElementById('comp').innerHTML="";
	  msg="No of comparisions : "+comp;
	  document.getElementById('comp').innerHTML=msg;
	  msg="";
	  if(i>=10)
	  {
	  step1="";
	  pc=1;
	  }
	 }
	 if(pc==1)
	 {
	  document.getElementById('line3').style.backgroundColor="";
	  document.getElementById('line4').style.backgroundColor="";
	  arr.rows[r].cells[i].style.backgroundColor="";
	  arr.rows[r].cells[j].style.backgroundColor="";
	  arr.rows[2].cells[i].innerHTML="";
	  arr.rows[2].cells[j].innerHTML="";
	  left=0;
	  right=0;
	  temp=0;
	  i=0;
	  j=0;
	  next=0;
	  swap=0;
	  pass++;
	  str="Number of passes completed :"+pass;
	  document.getElementById('pass').innerHTML=str;
	  str="";
	  pc=0;
	  step1="enter";
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
	
	 if(step1=="complete")
	 {
	 step1="";
	 step2="enter";
	 }
	 if(step1=="enter")
	 {
	  document.getElementById('sort').style.visibility="hidden";
	  j=i+1;
	  arr.rows[r].cells[i].style.backgroundColor="green";
	  arr.rows[r].cells[j].style.backgroundColor="green";
	  step1="complete";
	  if(i==n&&j>n)
	  {
	   pc=1;
	   step3="";
	   step1="";
	   step2="";
	  }
	 }
	 
	 
	 
	 
	 if(step2=="complete")
	 {
	  step2="";
	  step3="enter";
	 }
	 if(step2=="enter")
	 {
	  document.getElementById('line3').style.backgroundColor="red";
	  document.getElementById('line4').style.backgroundColor="";
	  left=Number(arr.rows[r].cells[i].innerHTML);
	  right=Number(arr.rows[r].cells[j].innerHTML);
	  if(i<n)
	  {
	   if(j<n)
	   {
	     if(left>right)
		 {
		  
		  temp=right;
		  arr.rows[2].cells[j].innerHTML=temp;
		  arr.rows[r].cells[i].style.backgroundColor="red";
		  arr.rows[r].cells[j].style.backgroundColor="black";
		  arr.rows[r].cells[j].innerHTML="";
		  comp++;
		  step2="complete";
		 }
		 else
		 {
		  comp++;
		  msg="";
	      document.getElementById('swap').innerHTML="";
	      msg="No need to swap";
	      document.getElementById('swap').innerHTML=msg;
	      msg="";
		  step2="abort";
		 }
	   }
	  }
	 
	 }
	 if(step2=="abort")
	 {
	  next=1;
	  step2="";
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
	
	if(pass==10)
	{
	  arr.rows[r].cells[i].style.backgroundColor="";
	  arr.rows[r].cells[j].style.backgroundColor="";
	  finish=1;
	  status="done";
	  document.getElementById('line3').style.backgroundColor="";
	  document.getElementById('line4').style.backgroundColor="";
	  document.getElementById('line7').style.backgroundColor="green";
	  sort=1;
	  document.getElementById('sort').style.visibility="visible";
	  
	  clearInterval(id);
	}
  }
  }
}
  
function refresh()
{
 if((finish==0&&status!="pl")||(finish==1&&status=="done"))
 {
  c=0;
     msg="";
     finish=0;
     left=0;
     right=0;
     check=1;
     step1="enter";
	 step2="";
	 step3="";
     pass=0;
	 swap=0;
	 next=0;
	 pc=0;
	 swap_count=0;
	 temp=0;
	 sort=0;
	 comp=0;
  document.getElementById('pass').innerHTML="";
  document.getElementById('swap').innerHTML="";
  document.getElementById('comp').innerHTML="";
  document.getElementById('swap_count').innerHTML="";
  document.getElementById('line7').style.backgroundColor="";
  for(var i=0;i<col_len;i++)
  {
   x=Math.floor((Math.random() * 100) + 1);//random value is generated between 0 and 1 *100 +1//
   arr.rows[r].cells[i].innerHTML=x;
  }
 }
}
//refresh function end...