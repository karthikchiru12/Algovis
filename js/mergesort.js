var row1=document.getElementById('row1');
var row21=document.getElementById('row2-1');
var row22=document.getElementById('row2-2');
var row31=document.getElementById('row3-1');
var row32=document.getElementById('row3-2');
var row33=document.getElementById('row3-3');
var row34=document.getElementById('row3-4');
var row41=document.getElementById('row4-1');
var row42=document.getElementById('row4-2');
var row43=document.getElementById('row4-3');
var row44=document.getElementById('row4-4');
var row45=document.getElementById('row4-5');
var row46=document.getElementById('row4-6');
var row47=document.getElementById('row4-7');
var row48=document.getElementById('row4-8');
var temp;
var first=0;
var last=9;
var mid=Math.floor((first+last)/2);
var i,j;
var arr=new Array();
var r;
var status;
var x;
var sort=0;
var res;
         
         
        function play_asc()
        {
          if(sort!=1)
          {

           var step1=setTimeout(
           function()
           {
            status="pl";
            document.getElementById('sort').style.visibility="hidden";
            document.getElementById('reset').style.visibility="hidden";
            document.getElementById('refresh').style.visibility="hidden";
            row1.rows[1].cells[first].style.backgroundColor="green";
            row1.rows[2].cells[first].innerHTML="first";
            row1.rows[1].cells[last].style.backgroundColor="green";
            row1.rows[2].cells[last].innerHTML="last";
            row1.rows[1].cells[mid].style.backgroundColor="red";
            row1.rows[2].cells[mid].innerHTML="mid";
            document.getElementById('phase').innerHTML="DIVIDING THE ARRAY";
         
           }
           ,1000);
         
           var step2=setTimeout(
             function()
             {
               for(i=0;i<=mid;i++)
               {
                 row1.rows[1].cells[i].style.backgroundColor="maroon";
               }
             }
             ,2000);
         
            var step3=setTimeout(
            function()
            {
              for(i=0;i<=mid;i++)
              {
                temp=Number(row1.rows[1].cells[i].innerHTML);
                row21.rows[0].cells[i].innerHTML=temp;
                row21.rows[0].cells[i].style.visibility="visible";
              }
         
              for(i=0;i<=mid;i++)
              {
                row1.rows[1].cells[i].style.backgroundColor="";
                
              }
            }
            ,3000);
         
         
            var step4=setTimeout(
            function()
            {
              for(i=mid+1;i<=last;i++)
               {
                 row1.rows[1].cells[i].style.backgroundColor="maroon";
               }
            }
            ,4000);
         
            var step5=setTimeout(
            function()
            {
              for(i=mid+1,j=0;i<=last,j<=4;i++,j++)
              {
                temp=Number(row1.rows[1].cells[i].innerHTML);
                row22.rows[0].cells[j].innerHTML=temp;
                row22.rows[0].cells[j].style.visibility="visible";
              }
         
              for(i=mid+1;i<=last;i++)
              {
                row1.rows[1].cells[i].style.backgroundColor="";
                
              }
         
              row1.rows[2].cells[first].innerHTML="";
              row1.rows[2].cells[last].innerHTML="";
              row1.rows[2].cells[mid].innerHTML="";
            }
            ,5000);
         
            var step6=setTimeout(
            function()
            {
              first=0;
              last=4
              mid=Math.floor((first+last)/2);
              row21.rows[1].cells[first].style.visibility="visible";
              row21.rows[1].cells[first].innerHTML="first";;
              row21.rows[1].cells[last].innerHTML="last";
              row21.rows[1].cells[last].style.visibility="visible";
              row21.rows[1].cells[mid].innerHTML="mid";
              row21.rows[1].cells[mid].style.visibility="visible";
         
              for(i=0;i<=mid;i++)
              {
               row21.rows[0].cells[i].style.backgroundColor="maroon";
              }
            }
            ,6000);
         
         
         
            var step7=setTimeout(
            function()
            {
              for(i=0;i<=mid;i++)
              {
                temp=Number(row21.rows[0].cells[i].innerHTML);
                row31.rows[0].cells[i].style.visibility="visible";
                row31.rows[0].cells[i].innerHTML=temp;
              }
            }
            ,7000);
         
         
         
         
            var step8=setTimeout(
            function()
            {
              for(i=0;i<=mid;i++)
              {
                row21.rows[0].cells[i].style.backgroundColor="";
              }
              
              for(i=mid+1;i<=last;i++)
              {
                row21.rows[0].cells[i].style.backgroundColor="maroon";
              }
            }
            ,8000);
         
         
         
            var step9=setTimeout(
            function()
            {
              for(i=mid+1,j=0;i<=last,j<=1;i++,j++)
              {
                temp=Number(row21.rows[0].cells[i].innerHTML);
                row32.rows[0].cells[j].style.visibility="visible";
                row32.rows[0].cells[j].innerHTML=temp;
              }
         
              for(i=mid+1;i<=4;i++)
              {
                row21.rows[0].cells[i].style.backgroundColor="";
              }
              row21.rows[1].cells[first].innerHTML="";
              row21.rows[1].cells[mid].innerHTML="";
              row21.rows[1].cells[last].innerHTML="";
            }
            ,9000);
         
         
            var step10=setTimeout(
            function()
            {
              row22.rows[1].cells[first].innerHTML="first";
              row22.rows[1].cells[first].style.visibility="visible";
              row22.rows[1].cells[last].innerHTML="last";
              row22.rows[1].cells[last].style.visibility="visible";
              row22.rows[1].cells[mid].innerHTML="mid";
              row22.rows[1].cells[mid].style.visibility="visible";
         
         
              for(i=0;i<=mid;i++)
              {
                row22.rows[0].cells[i].style.backgroundColor="maroon";
              }
            }
            ,10000);
         
         
            var step11=setTimeout(
              function()
              {
                for(i=0,j=0;i<=mid,j<=2;i++,j++)
                {
                 temp=Number(row22.rows[0].cells[i].innerHTML);
                 row33.rows[0].cells[j].innerHTML=temp;
                 row33.rows[0].cells[j].style.visibility="visible";
                }
         
                for(i=0;i<=mid;i++)
              {
                row22.rows[0].cells[i].style.backgroundColor="";
              }
              }
            ,11000);
         
         
         
            var step12=setTimeout(
            function()
            {
              
         
              for(i=mid+1;i<=4;i++)
              {
                row22.rows[0].cells[i].style.backgroundColor="maroon";
              }
            }
            ,12000);
         
         
         
         
            var step13=setTimeout(
              function()
              {
                for(i=mid+1,j=0;i<=4,j<=1;i++,j++)
                {
                 temp=Number(row22.rows[0].cells[i].innerHTML);
                 row34.rows[0].cells[j].innerHTML=temp;
                 row34.rows[0].cells[j].style.visibility="visible";
                }
         
              for(i=mid+1;i<=4;i++)
              {
                row22.rows[0].cells[i].style.backgroundColor="";
              }
         
              row22.rows[1].cells[first].innerHTML="";
              row22.rows[1].cells[mid].innerHTML="";
              row22.rows[1].cells[last].innerHTML="";
              }
            ,13000);
         
         
            var step14=setTimeout(
            function()
            {
              last=2; first=0;
              mid=Math.floor((first+last)/2);
              row31.rows[1].cells[first].innerHTML="first";
              row31.rows[1].cells[first].style.visibility="visible";
              row31.rows[1].cells[mid].innerHTML="mid";
              row31.rows[1].cells[mid].style.visibility="visible";
              row31.rows[1].cells[last].innerHTML="last";
              row31.rows[1].cells[last].style.visibility="visible";
         
              for(i=0;i<=mid;i++)
              {
                temp=Number(row31.rows[0].cells[i].innerHTML);
                row41.rows[0].cells[i].style.visibility="visible";
                row41.rows[0].cells[i].innerHTML=temp;
                row31.rows[0].cells[i].style.backgroundColor="maroon";
         
              }
              
            }
            ,14000);
         
         
         
            var step15=setTimeout(
            function()
            {
         
              for(i=0;i<=mid;i++)
              {
                row31.rows[0].cells[i].style.backgroundColor="";
              }
         
              for(i=mid+1,j=0;i<=2,j<=0;i++)
              {
                row31.rows[0].cells[i].style.backgroundColor="maroon";
                temp=Number(row31.rows[0].cells[i].innerHTML);
                row42.rows[0].cells[j].style.visibility="visible";
                row42.rows[0].cells[j].innerHTML=temp;
         
              }
            }
            ,15000);
         
         
            var step16=setTimeout(
            function()
            {
              for(i=mid+1;i<=2;i++)
              {
                row31.rows[0].cells[i].style.backgroundColor="";
              }
         
              row31.rows[1].cells[first].innerHTML="";
              row31.rows[1].cells[mid].innerHTML="";
              row31.rows[1].cells[last].innerHTML="";
         
              temp=Number(row32.rows[0].cells[0].innerHTML);
              row32.rows[0].cells[0].style.backgroundColor="maroon";
              row43.rows[0].cells[0].style.visibility="visible";
              row43.rows[0].cells[0].innerHTML=temp;
         
              temp=Number(row32.rows[0].cells[1].innerHTML);
              row32.rows[0].cells[1].style.backgroundColor="maroon";
              row44.rows[0].cells[0].innerHTML=temp;
              row44.rows[0].cells[0].style.visibility="visible";
            }
            ,16000);
           
         
           var step17=setTimeout(
           function()
           {
             row32.rows[0].cells[0].style.backgroundColor="";
             row32.rows[0].cells[1].style.backgroundColor="";
           }
           ,17000);
         
         
           var step18=setTimeout(
         
           function()
           {
             last=2; first=0;
             mid=Math.floor((first+last)/2);
         
             row33.rows[1].cells[first].innerHTML="first";
             row33.rows[1].cells[first].style.visibility="visible";
             row33.rows[1].cells[mid].innerHTML="mid";
             row33.rows[1].cells[mid].style.visibility="visible";
             row33.rows[1].cells[last].innerHTML="last";
             row33.rows[1].cells[last].style.visibility="visible";
             
         
           }   
             
             
             
          ,18000);
         
           var step19=setTimeout(
           function()
           {
         
             for(i=0;i<=mid;i++)
             {
               row33.rows[0].cells[i].style.backgroundColor="maroon";
               temp=Number(row33.rows[0].cells[i].innerHTML);
               row45.rows[0].cells[i].style.visibility="visible";     
               row45.rows[0].cells[i].innerHTML=temp;  
               
               
             }
         
           }  
           ,19000);
         
         
         
          var step20=setTimeout(
            
          function()
          {
         
         
            for(i=0;i<=mid;i++)
             {
               row33.rows[0].cells[i].style.backgroundColor="";
             }
         
         
             for(i=mid+1;i<=2;i++)
             {
               row33.rows[0].cells[i].style.backgroundColor="maroon"; 
             }

             for(i=mid+1,j=0;i<=2,j<=0;i++)
             {
              temp=Number(row33.rows[0].cells[i].innerHTML);
              row46.rows[0].cells[j].style.visibility="visible";     
              row46.rows[0].cells[j].innerHTML=temp;
        
             } 
         
              
         
            
          }  
          ,20000);
         
           
           var step21=setTimeout(
             function()
             {
         
              for(i=mid+1;i<=2;i++)
             {
               row33.rows[0].cells[i].style.backgroundColor=""; 
             }
             
         
             row33.rows[1].cells[first].innerHTML="";
             row33.rows[1].cells[mid].innerHTML="";
             row33.rows[1].cells[last].innerHTML="";
              
         
             }
           ,21000);
         
            var step22=setTimeout(
         
            function()
            {
             row34.rows[0].cells[0].style.backgroundColor="maroon";
             row34.rows[0].cells[1].style.backgroundColor="maroon";
            }
         
         
         
            ,22000);
         
         
         
            var step23=setTimeout(
              function()
              {
               temp=Number(row34.rows[0].cells[0].innerHTML);
               row47.rows[0].cells[0].style.visibility="visible";
               row47.rows[0].cells[0].innerHTML=temp;
         
               temp=Number(row34.rows[0].cells[1].innerHTML);
               row48.rows[0].cells[0].style.visibility="visible";
               row48.rows[0].cells[0].innerHTML=temp;
         
         
               row34.rows[0].cells[0].style.backgroundColor="";
               row34.rows[0].cells[1].style.backgroundColor="";
              }
            ,23000);
         
          //here ends the division part//
         
           var step24=setTimeout(
             function()
             {
              document.getElementById('phase').innerHTML="SORTING AND MERGING";
              row41.rows[0].cells[0].style.backgroundColor="blue";
              row41.rows[0].cells[1].style.backgroundColor="blue";
             for(i=0;i<2;i++)
             {
               temp=Number(row41.rows[0].cells[i].innerHTML);
               arr[i]=temp;
             }
             arr.sort(function(a, b){return a-b});
             
             }
           ,24000);
         
         
           var step25=setTimeout(
         
           function()
           {
              
              row41.rows[0].cells[0].style.backgroundColor="";
              row41.rows[0].cells[1].style.backgroundColor="";
              for(i=0;i<2;i++)
             {
               temp=arr[i];
               row41.rows[0].cells[i].innerHTML=temp;
             }
           }
           ,25000);
         
           
           var step26=setTimeout(
             function()
             {
              row41.rows[0].cells[0].style.backgroundColor="blue";
              row41.rows[0].cells[1].style.backgroundColor="blue";
              row42.rows[0].cells[0].style.backgroundColor="blue";
              for(i=0;i<2;i++)
             {
               temp=Number(row41.rows[0].cells[i].innerHTML);
               arr[i]=temp;
             }
              temp=Number(row42.rows[0].cells[0].innerHTML);
              arr[2]=temp;
              arr.sort(function(a, b){return a-b});
         
             }
           ,26000);
         
         
           var step27=setTimeout(
             function()
             {
               for(i=0;i<3;i++)
               {
                 temp=arr[i];
                 row31.rows[0].cells[i].innerHTML=temp;
                 row31.rows[0].cells[i].style.backgroundColor="blue";
         
               }
         
               for(i=0;i<2;i++)
             {
               row41.rows[0].cells[i].style.backgroundColor="";
               row41.rows[0].cells[i].style.visibility="hidden";
               
             }
             row42.rows[0].cells[0].style.backgroundColor="";
             row42.rows[0].cells[0].style.visibility="hidden";
         
             }
           ,27000);
         
         
         
           var step28=setTimeout(
             function()
             {
              
              for(i=0;i<3;i++)
               {
                 row31.rows[0].cells[i].style.backgroundColor="";
               }
         
               arr[0]=Number(row43.rows[0].cells[0].innerHTML);
               row43.rows[0].cells[0].style.backgroundColor="blue";
               arr[1]=Number(row44.rows[0].cells[0].innerHTML);
               row44.rows[0].cells[0].style.backgroundColor="blue";
               arr.sort(function(a, b){return a-b});
         
             }
           ,28000);
         
         
           var step29=setTimeout(
             function()
             {
              for(i=0;i<2;i++)
              {
                temp=arr[i];
                row32.rows[0].cells[i].innerHTML=temp;
              }
         
             row43.rows[0].cells[0].style.backgroundColor="";
             row43.rows[0].cells[0].style.visibility="hidden";
             row44.rows[0].cells[0].style.backgroundColor="";
             row44.rows[0].cells[0].style.visibility="hidden";
             }
           ,29000);
         
         
           var step30=setTimeout(
             function()
             {
               for(i=0;i<2;i++)
               {
                 temp=Number(row45.rows[0].cells[i].innerHTML);
                 arr[i]=temp;
                 row45.rows[0].cells[i].style.backgroundColor="blue";
               }
               arr[2]=undefined;
               arr.sort(function(a, b){return a-b});
             }
           ,30000);
         
         
           var step31=setTimeout(
             function()
             {
               
              for(i=0;i<2;i++)
               {
                 temp=arr[i];
                 row45.rows[0].cells[i].innerHTML=temp;
                 row45.rows[0].cells[i].style.backgroundColor="";
               }
               
             }
           ,31000);
         
         
           var step32=setTimeout(
             function()
             {
              for(i=0;i<2;i++)
               {
                 row45.rows[0].cells[i].style.backgroundColor="blue";
               }
               row46.rows[0].cells[0].style.backgroundColor="blue";
         
         
              for(i=0;i<2;i++)
               {
                 temp=Number(row45.rows[0].cells[i].innerHTML);
                 arr[i]=temp;
               }
         
               temp=Number(row46.rows[0].cells[0].innerHTML);
               arr[2]=temp;
               arr.sort(function(a, b){return a-b});
         
         
             }
           ,32000);
         
            var step33=setTimeout(
              function() 
              {
               for(i=0;i<3;i++)
               {
                 temp=arr[i];
                 row33.rows[0].cells[i].innerHTML=temp;
                 row33.rows[0].cells[i].style.backgroundColor="blue";
               }
         
               for(i=0;i<2;i++)
               {
                row45.rows[0].cells[i].style.backgroundColor="";
                row45.rows[0].cells[i].style.visibility="hidden";
               }
         
               row46.rows[0].cells[0].style.backgroundColor="";
               row46.rows[0].cells[0].style.visibility="hidden";
              }
            ,33000);
         
         
         
           var step34=setTimeout(
             function()
             {
         
              for(i=0;i<3;i++)
               {
                 row33.rows[0].cells[i].style.backgroundColor="";
               }
         
               temp=Number(row47.rows[0].cells[0].innerHTML);
               arr[0]=temp;
         
               temp=Number(row48.rows[0].cells[0].innerHTML);
               arr[1]=temp;
         
               row47.rows[0].cells[0].style.backgroundColor="blue";
               row48.rows[0].cells[0].style.backgroundColor="blue";
         
               arr.sort(function(a, b){return a-b});
         
         
               
             }
           ,34000);
         
         
            var step35=setTimeout(
         
            function()
            {
             
               row47.rows[0].cells[0].style.backgroundColor="";
               row48.rows[0].cells[0].style.backgroundColor="";
               row47.rows[0].cells[0].style.visibility="hidden";
               row48.rows[0].cells[0].style.visibility="hidden";
         
               for(i=0;i<2;i++)
               {
                 temp=arr[i];
                 row34.rows[0].cells[i].innerHTML=temp;
               }
            }
            ,35000);
         
         
            var step36=setTimeout(
              function()
              {
               for(i=0;i<3;i++)
               {
                 row31.rows[0].cells[i].style.backgroundColor="blue";
                 temp=Number(row31.rows[0].cells[i].innerHTML);
                 arr[i]=temp;
               }
         
               for(i=0,j=3;i<2;i++,j++)
               {
                row32.rows[0].cells[i].style.backgroundColor="blue";
                temp=Number(row32.rows[0].cells[i].innerHTML);
                arr[j]=temp;
               }
         
               arr.sort(function(a, b){return a-b});
         
         
              }
            ,36000);
         
         
            var step37=setTimeout(
              function()
              {
                for(i=0;i<3;i++)
               {
                 row31.rows[0].cells[i].style.backgroundColor="";
                 row31.rows[0].cells[i].style.visibility="hidden";
               }
               for(i=0;i<2;i++)
               {
                 row32.rows[0].cells[i].style.backgroundColor="";
                 row32.rows[0].cells[i].style.visibility="hidden";
               }
         
         
               for(i=0;i<5;i++)
               {
                 temp=arr[i];
                 row21.rows[0].cells[i].innerHTML=temp;
                 row21.rows[0].cells[i].style.backgroundColor="blue";
               }
              }
            ,37000);
         
         
            var step38=setTimeout(
              function()
              {
               
                for(i=0;i<5;i++)
               {
                 row21.rows[0].cells[i].style.backgroundColor="";
               }
         
         
               for(i=0;i<=2;i++)
               {
                row33.rows[0].cells[i].style.backgroundColor="blue";
                temp=Number(row33.rows[0].cells[i].innerHTML);
                arr[i]=temp;
         
               }
         
               for(i=0,j=3;i<=1,j<=4;i++,j++)
               {
                row34.rows[0].cells[i].style.backgroundColor="blue";
                temp=Number(row34.rows[0].cells[i].innerHTML);
                arr[j]=temp;
               }
         
               
              }
            ,38000);
         
         
            var step39=setTimeout(
              function()
              {
                arr.sort(function(a, b){return a-b});
         
               for(i=0;i<3;i++)
               {
                row33.rows[0].cells[i].style.backgroundColor="blue";
                row33.rows[0].cells[i].style.visibility="hidden";
               }
         
               for(i=0;i<2;i++)
               {
                row34.rows[0].cells[i].style.backgroundColor="";
                row34.rows[0].cells[i].style.visibility="hidden";
               }
         
         
                for(i=0;i<5;i++)
                {
                  temp=arr[i];
                  row22.rows[0].cells[i].innerHTML=temp;
                  row22.rows[0].cells[i].style.backgroundColor="blue";
                }
              }
            ,39000);
         
         
            var step40=setTimeout(
            function()
            {
              for(i=0;i<5;i++)
                {
                  row22.rows[0].cells[i].style.backgroundColor="";
                }
            }
            ,40000);
         
         
            var step41=setTimeout(
              function()
              {
                for(i=0;i<5;i++)
                {
                  temp=Number(row21.rows[0].cells[i].innerHTML);
                  arr[i]=temp;
                  row21.rows[0].cells[i].style.backgroundColor="blue";
                }
         
                for(i=0,j=5;i<5,j<10;i++,j++)
                {
                  temp=Number(row22.rows[0].cells[i].innerHTML);
                  arr[j]=temp;
                  row22.rows[0].cells[i].style.backgroundColor="blue";
                }
         
                arr.sort(function(a, b){return a-b});
              }
            ,41000);
         
         
           var step42=setTimeout(
             function()
             {
              for(i=0;i<5;i++)
                {
                  row21.rows[0].cells[i].style.backgroundColor="";
                  row21.rows[0].cells[i].style.visibility="hidden";
                }
         
                for(i=0;i<5;i++)
                {
                  row22.rows[0].cells[i].style.backgroundColor="";
                  row22.rows[0].cells[i].style.visibility="hidden";
                }
         
                for(i=0;i<10;i++)
                {
                  temp=arr[i];
                  row1.rows[1].cells[i].innerHTML=temp;
                  row1.rows[1].cells[i].style.backgroundColor="green";
                }
                sort=1;
                status="done";
                document.getElementById('result').innerHTML="Array is sorted...";
                document.getElementById('sort').style.visibility="visible";
                document.getElementById('reset').style.visibility="visible";
                document.getElementById('refresh').style.visibility="visible";

             }
           ,42000);

           

        }
            else
            {
              alert("array is already sorted please refresh");
            }
      }


      function refresh()
      {
        if((sort==1||sort==0)&&status!="pl")
        {
          var r = "true";
          localStorage.setItem("ref",r);
          reset();
          
        }
      }


      function reset()
      {
          location.reload();

      }

      function st()
      {
        res=localStorage.getItem("ref");
        if((res.toString())=="true")
        {
         for(let k=0;k<10;k++)
         {
          x=Math.floor((Math.random() * 100) + 1);//random value is generated between 0 and 1 *100 +1//
          row1.rows[1].cells[k].innerHTML=x;
         }
         r="false";
         localStorage.setItem("ref",r);
        }
      }