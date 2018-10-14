var key="";//value extracted from the input text field which is made as search key element in search function when search button is pressed//
var arr = document.getElementById('array_1d');//declaration used to access the 1-d array in the <body>//
var col_len=arr.rows[0].cells.length;//row length//
var row_len=arr.rows.length;//col length//
var r=1;c=0;//initial row and col values where row value in linear search remains constant only co value changes//
var status; //possible values={pl(play()),done(either element found or reset button pressed while playing),""(initial)}//
var found=0;//used to find whether element is found in array or not//
var first=1;//it is a flag used to describe first element is being searched or not {1(false)_initial,0(true)}//
var msg="";//used to display current key value to the user//
var empty=0;//to check the key value is empty or not {0(empty),1(not empty}//
var temp;//used as a temporary variable//
var s;//variable used to indicate the search status//
var x;//extra//
var desc;

//search function...invoked when search button is clicked//
function search()
{

    if((status!="done"&&found!=1&&status!="pl")||s==true)
	{
	  s=false; //this indicates that the search is going on and search_button cannot be used//
	  key=document.getElementById('key_val').value; //extracting the key from <input> element in <body>//
	  if(key=="")//if key is empty//
	  {
	   alert("Please enter any key value to proceed");
	  }
	  else //if key value is not empty//
	  {
	  empty=1;
	  msg="";
	  msg+="Key value : "+key;
	  document.getElementById('key').innerHTML=msg;
	  msg="";
	  
      play(); //invoke the play function//
	  }
    }
	if(status=="done"&&(found==1||found==0))//if already search is done
	{
	 s=true;//indicates that reset() invoked and search() is invoked again in reset function with new search value//
	 reset();
	}
}
//search function...end

//play function...generally invoked by search function
function play()
{
   status="pl"; //status is set to playing//
   var id = setInterval(anm,2500);//we repeat anim() function for every 2500ms until clearInterval(id) is called//
   function anm()
   { 
     desc="";
	 arr.rows[2].cells[c].innerHTML=desc;
     arr.rows[r].cells[c].style.backgroundColor=""; //sets background-color of row[],cell[] to default//
	 //checking if it is first element or not
	 if(first!=1)
	 {
		 c++;
	 }
	 
	 //if first... we don`t increment col value
	 if(c>10)
	 {
	  document.getElementById('line7').style.backgroundColor="red";
	  document.getElementById('line3').style.backgroundColor="";
	  document.getElementById('line5').style.backgroundColor="";
	  status="done";
	  document.getElementById('output').innerHTML="The element was not found in the array"; //output
	  document.getElementById('output').style.color="red";
	  clearTimeout(id); //stops the continuous execution of anim() function//
	  
	 }
	  
     temp=arr.rows[r].cells[c].innerHTML; //we store the col value in temp variable//
     if(temp==key)
     {
	  //if match found//
      arr.rows[r].cells[c].style.backgroundColor="green";
	  arr.rows[r].cells[c].style.transition="1s";
	  //we use this to print operation log on screen//
	  msg=document.getElementById('log').innerHTML;
	  msg+=":> The element at A["+c+"] matched with key element :"+key+"<br>";
	  document.getElementById('output').innerHTML="The element is found in the array";
	  document.getElementById('log').innerHTML=msg;
	  document.getElementById('line4').style.backgroundColor="green";
	  document.getElementById('line3').style.backgroundColor="";
	  //and concat it to the existing log//
	  msg="";
	  status="done";
	  found=1;
      clearTimeout(id);;//used to stop continuous execution of anim() function//
	  }
      else //if match is not found we increment the col value//
      {
	  document.getElementById('line5').style.backgroundColor="red";
	  document.getElementById('line3').style.backgroundColor="";
	  var id1=setTimeout(function (){
		document.getElementById('line5').style.backgroundColor="";
		document.getElementById('line3').style.backgroundColor="green";
		},500);
	  
      arr.rows[r].cells[c].style.backgroundColor="red";
	  msg=document.getElementById('log').innerHTML;
	  msg+=":> The element at A["+c+"] did not match with key element :"+key+"<br>";
	  document.getElementById('log').innerHTML=msg;
	  msg="";
	  first=0;//indicates that we had completed first element and this is set to 0//
	  desc=arr.rows[r].cells[c].innerHTML+"≠"+key;
	  arr.rows[2].cells[c].innerHTML=desc;
	  
	  }
	  
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
     document.getElementById('log').innerHTML="";
     document.getElementById('key').innerHTML="";
     document.getElementById('key_val').innerHTML="";
	 document.getElementById('output').innerHTML="";
	 document.getElementById('output').style.color="yellow";
	 document.getElementById('line3').style.backgroundColor="";
	 document.getElementById('line4').style.backgroundColor="";
	 document.getElementById('line7').style.backgroundColor="";
     for(var temp=0;temp<11;temp++)
     {
      arr.rows[1].cells[temp].style.backgroundColor="";
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
 if(found==0&&status!="pl") //only works when the search is done //
 {
  for(var i=0;i<col_len;i++)
  {
   x=Math.floor((Math.random() * 100) + 1);//random value is generated between 0 and 1 *100 +1//
   arr.rows[r].cells[i].innerHTML=x;
  }
 }
}
//refresh function end...