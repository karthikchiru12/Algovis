var key="";//value extracted from the input text field which is made as search key element in search function when search button is pressed//
var arr = document.getElementById('array_1d');//declaration used to access the 1-d array in the <body>//
var col_len=arr.rows[0].cells.length;//row length//
var row_len=arr.rows.length;//col length//
var r=1;c=0;//initial row and col values where row value in linear search remains constant only co value changes//
var status; //possible values={pl(play()),done(either element found or reset button pressed while playing),""(initial)}//
var found=0;//used to find whether element is found in array or not//
var fst=1;//it is a flag used to describe first element is being searched or not {1(false),0(true)}//
var msg="";//used to display current key value to the user//
var empty=0;//to check the key value is empty or not {0(empty),1(not empty}//
var temp;//used as a temporary variable//
var s;
var mid;
var first;
var last;
var firstp;
var lastp;
var midp;
var left=0;
var right=0;
var check=1;
var flag;
var pass=0;
//search function...invoked when search button is clicked//
function search()
{

    if((status!="done"&&found!=1&&status!="pl")||s==true)
	{
	  s=false;
	  key=document.getElementById('key_val').value;
	  if(key=="")
	  {
	   alert("Please enter any key value to proceed");
	  }
	  else
	  {
	  empty=1;
	  msg="";
	  msg+="Key value : "+key;
	  document.getElementById('key').innerHTML=msg;
	  msg="";
      play();
	  }
    }
	if(status=="done"&&(found==1||found==0))//if already search is done
	{
	 s=true;
	 reset();
	}
}
//search function...end//

//play function...generally invoked by search function
function play()
{
   status="pl";
   first=c;
   last=col_len-1;
   var id = setInterval(anm,2000);//we repeat anim() function for every 2500ms until clearInterval(id) is called//
   function anm()
   { 
     if(flag==0)
	 { if(pass=>3)
	  {
	   for(var i=0;i<=10;i++)
	   {
	    arr.rows[r].cells[i].style.backgroundColor="";
		arr.rows[2].cells[i].innerHTML="";
	   }
	   status="done";
	   
	  }
	   document.getElementById('output').innerHTML="The element is not found in the array";
	   document.getElementById('output').style.color="red";
	   document.getElementById('line3').style.backgroundColor="";
	   document.getElementById('line11').style.backgroundColor="red";
	   document.getElementById('line6').style.backgroundColor="";
	   document.getElementById('line7').style.backgroundColor="";
	   document.getElementById('line4').style.backgroundColor="";
	   document.getElementById('line5').style.backgroundColor="";
	   clearInterval(id);
	 }
	 
	 if(found==1&&check==0)
	 { 
		document.getElementById('line9').style.backgroundColor="green"; 
		if(mid!=first)
	   {
	    arr.rows[r].cells[first].style.backgroundColor="";
		arr.rows[2].cells[first].innerHTML="";
	   }
	   if(mid!=last)
	   {
	    arr.rows[r].cells[last].style.backgroundColor="";
		arr.rows[2].cells[last].innerHTML="";
	   }
	   if(temp!="")
	   {
	    temp="";
	    arr.rows[2].cells[mid].innerHTML="found";
	   }
	   else
	   {
	    arr.rows[2].cells[mid].innerHTML="found";
	   }
	   status="done";
	   clearInterval(id);
	 }
	 
	 if(left==1&&check==1)
	 {
	  arr.rows[r].cells[lastp].style.backgroundColor="";
	  arr.rows[2].cells[lastp].innerHTML="";
	  arr.rows[r].cells[midp].style.backgroundColor="";
	  arr.rows[2].cells[midp].innerHTML="";
	  left=0;
	 }
	 if(right==1&&check==1)
	 {
	  arr.rows[r].cells[firstp].style.backgroundColor="";
	  arr.rows[2].cells[firstp].innerHTML="";
	  arr.rows[r].cells[midp].style.backgroundColor="";
	  arr.rows[2].cells[midp].innerHTML="";
	  right=0;
	 }
	 
	 if(first<=last&&check==1)
	 {
	   if(check==1)
	   {
	    msg="";
		msg="first";
        arr.rows[r].cells[first].style.backgroundColor="red";
		arr.rows[2].cells[first].innerHTML=msg;
		msg="";
		msg="last";
		arr.rows[r].cells[last].style.backgroundColor="red";
		arr.rows[2].cells[last].innerHTML=msg;
		msg="";
	   }
	   document.getElementById('line3').style.backgroundColor="";
	   document.getElementById('line4').style.backgroundColor="";
	   document.getElementById('line5').style.backgroundColor="";
	   document.getElementById('line6').style.backgroundColor="";
	   document.getElementById('line7').style.backgroundColor="";
	   mid=Math.floor((first+last)/2);
	   document.getElementById('line3').style.backgroundColor="red";
	   midp=mid;
	   arr.rows[2].cells[mid].innerHTML="mid";
	   arr.rows[r].cells[mid].style.backgroundColor="grey";
	   //we use this to print operation log on screen//
	     msg=document.getElementById('log').innerHTML;
	     msg+=":> First = "+first+" ; Last = "+last+" ; Mid =("+first+"+"+last+")/2 => Mid = "+mid+"<br>";
	     document.getElementById('log').innerHTML=msg;
	     msg="";
	   //and concat it to the existing log//
	   if((mid==first||mid==last)&&check==1)
	   {
	    arr.rows[r].cells[last].style.backgroundColor="red";
	    arr.rows[r].cells[first].style.backgroundColor="red";
	   }
	   if(key==Number(arr.rows[r].cells[mid].innerHTML)&&check==1)
	   {
		 arr.rows[r].cells[mid].style.backgroundColor="green";
		 document.getElementById('line3').style.backgroundColor="";
		 document.getElementById('line8').style.backgroundColor="red";
		 temp="";
		 if(mid==first)
		 {
		  temp="/first";
		 }
		 else if(mid==last)
		 {
		  temp="/last";
		 }
		 else
		 {
		  temp="";
		 }
		 arr.rows[2].cells[mid].innerHTML="mid"+temp;
		 //we use this to print operation log on screen//
	     msg=document.getElementById('log').innerHTML;
	     msg+=":> The element at A["+mid+"] matched with key element :"+key+"<br>";
		 document.getElementById('output').innerHTML="The element is found in the array";
	     document.getElementById('log').innerHTML=msg;
	     msg="";
		 //and concat it to the existing log//
	     found=1;
	     check=0;
		 flag=1;
		 status="done";

		 document.getElementById('line8').style.backgroundColor="red";
		 var id2=setTimeout(function(){
			document.getElementById('line8').style.backgroundColor="";
			document.getElementById('line9').style.backgroundColor="";
		 },500);
	   }
	   if(key>Number(arr.rows[r].cells[mid].innerHTML)&&check==1)
	    {
		 
		 var id1=setTimeout(function(){
			document.getElementById('line5').style.backgroundColor="red";
			document.getElementById('line3').style.backgroundColor="";
		    document.getElementById('line4').style.backgroundColor="red";
		 },500);
		 document.getElementById('line4').style.backgroundColor="";
	     firstp=first;
	     first=mid+1;
	     right=1;
		 //we use this to print operation log on screen//
		 msg=document.getElementById('log').innerHTML;
	     msg+=":> The element at A["+mid+"] did not match with key element :"+key+"...and mid > key :making first = mid+1"+"<br>";
	     document.getElementById('log').innerHTML=msg;
	     msg="";
		 //and concat it to the existing log//
	    }
	   if(key<Number(arr.rows[r].cells[mid].innerHTML)&&check==1)
	    {
		 document.getElementById('line6').style.backgroundColor="red";
		 var id1=setTimeout(function(){
			document.getElementById('line3').style.backgroundColor="";
		    document.getElementById('line6').style.backgroundColor="red";
			document.getElementById('line7').style.backgroundColor="red";
		 },500);
		 document.getElementById('line6').style.backgroundColor="";
	     lastp=last;
	     last=mid-1;
	     left=1;
		 //we use this to print operation log on screen//
		 msg=document.getElementById('log').innerHTML;
	     msg+=":> The element at A["+mid+"] did not match with key element :"+key+"...and mid < key :making last = mid-1"+"<br>";
	     document.getElementById('log').innerHTML=msg;
	     msg="";
		 //and concat it to the existing log//
	    }
	   
	 }
	 if(first>last)
	 {
	  status="done";
	  flag=0;
	  check=0;
	 }
	 pass++;
  } 
   
}
//play function...end//

//reset function//
function reset()
{
    if(status=="done"&&(found==1||found==0)&&status!="pl")
    {
	 /* The Limitation of the reset function is that it cannot be invoked while
	    the anim() is running as it interferes with setInterval() and produces 
		unexpected results*/
     c=0;
     first=1;
     msg="";
     found=0;
     key="";
     empty=0;
     mid=undefined;
     first=undefined;
     last=undefined;
     firstp=undefined;
     lastp=undefined;
     midp=undefined;
     left=0;
     right=0;
     check=1;
     flag=undefined;
     pass=0;
     document.getElementById('log').innerHTML="";
     document.getElementById('key').innerHTML="";
     document.getElementById('key_val').innerHTML="";
	 document.getElementById('output').innerHTML="";
	 document.getElementById('line11').style.backgroundColor="";
	 document.getElementById('line9').style.backgroundColor="";
	 document.getElementById('output').style.color="yellow";
     for(var temp=0;temp<11;temp++)
     {
      arr.rows[1].cells[temp].style.backgroundColor="";
	  arr.rows[2].cells[temp].innerHTML="";
     }
     status="";
	 if(s==true)
	 {
	  search();
	 }
	 
     }
}

//reset function...end//

//refresh function...used to change the values in the array//
function refresh()
{
 var a=new Array();
 if(found==0&&status!="pl") //only works when the search is done //
 {
  for(var i=0;i<col_len;i++)
  {
   a[i]=Math.floor((Math.random() * 100) + 1);//random value is generated between 0 and 1 *100 +1//  
  }
  
  a.sort((a, b) => a - b); // For ascending sort//
  //numArray.sort((a, b) => b - a); For descending sort//
  for(var i=0;i<col_len;i++)
  {
   arr.rows[r].cells[i].innerHTML=a[i];
  }
 }
}
//refresh function end...