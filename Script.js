function lightTheme()
{
    document.body.style.backgroundColor = "white";
    document.getElementById("footer").style.color="black";
    document.getElementById("footer2").style.color="black";
}
function darkTheme()
{
    document.body.style.backgroundColor="#2B3148";
    document.getElementById("footer").style.color="white";
    document.getElementById("footer2").style.color="white";
}

var w=60;
var diff=2;
var interval=0;
var deg=0;
function help()
{ 
    clearInterval(interval); 
    interval=setInterval(zoomin,40);
    
}
function zoomin()
{
 if(w<=70)
 {
  deg+=60;
  w+=diff;
  document.getElementById("heplLogo").style.width=w+"px";
  document.getElementById("heplLogo").style.height=w+"px";
  document.getElementById("heplLogo").style.transform="rotate("+deg+"deg)";
  
  console.log(deg);
  //console.log(w);
 }
 else{
 clearInterval(interval)   
 }
}


function helpout()
{   
    clearInterval(interval)
    interval=setInterval(zoomOut,40);

}
function zoomOut()
{
 if(w>60)
 {
     deg-=60;
  w-=diff;
  document.getElementById("heplLogo").style.width=w+"px";
  document.getElementById("heplLogo").style.height=w+"px";
  document.getElementById("heplLogo").style.transform="rotate("+deg+"deg)";
  
  console.log(w);
 }
 else{
    clearInterval(interval)   
    }   

}
