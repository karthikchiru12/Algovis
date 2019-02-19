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
var nswap=0;
var eswap=0;
var n=11;
var step1="enter";
var step2="";
var step3="";
var left,right;
var s;
var nnext=0;
var enext=0;
var pc=0;
var str;
var finish=0;
var swap_count=0;
var sort=0;
var comp=0;
var exp=0;


function play_asc()
{
    var id=setInterval(anm,1000);
    function anm()
    {


        if(nnext==1)
        {
        arr.rows[r].cells[i].style.backgroundColor="";
        arr.rows[r].cells[j].style.backgroundColor="";
        arr.rows[2].cells[i].innerHTML="";
        arr.rows[2].cells[j].innerHTML="";
        left=0;
        right=0;
        temp=0;
        j++;
        nnext=0;
        document.get
        step1="enter"; 
        }

        if(nswap==1)
        { 
        //arr.rows[2].cells[i].innerHTML="swapped";
        temp=left;
        left=right;
        right=temp;
        //arr.rows[2].cells[j].innerHTML=""+left+"&"+right;
        arr.rows[r].cells[i].innerHTML=left;
        arr.rows[r].cells[j].innerHTML=right;
        nswap=0;
        next=1;

        }











        if(step1=="continue")
        {
            step1="";
            step2="enter";
            console.log("hello");
        }
        if(step1=="enter")
        {
            left=Number(arr.rows[r].cells[i].innerHTML);
            arr.rows[r].cells[i].style.backgroundColor="red";
            right=Number(arr.rows[r].cells[j].innerHTML);
            arr.rows[r].cells[j].style.backgroundColor="green";

            step1="continue";
        }


        if(step2=="clear")
        {

            step1="enter";

        }
        if(step2="expand")
        {
            j++;
            exp=1;
            step2="";
            step2="clear";
        }
        if(step2=="continue")
        {
            if(exp==1)
            {
                stepex="enter";
                step2="";
            }
            else
            {
              step3="enter";
              step2="";
            }
        }
        if(step2=="enter")
        {
            
            if(j<n)
            {  

                    if(right<left)
                    { 
                          
                          temp=left;
                          arr.rows[r].cells[j].innerHTML="";
                          arr.rows[r].cells[j].style.backgroundColor="";
                          arr.rows[r+1].cells[j].style.visibility="visible";
                          arr.rows[r+1].cells[j].innerHTML=temp;
                          step2="continue";
  

                    }
                    else
                    {
                        step2="expand";
                    }

            }
        }



        if(step3=="enter")
        {
            
            s=right;
	        arr.rows[2].cells[j].innerHTML="";
	        arr.rows[2].cells[i].innerHTML=s;
	        nswap=1;
	        s=0;
	        step3="";
        }
    }
}