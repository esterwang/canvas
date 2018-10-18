function startTime()
{
var today=new Date();
var h=24-today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
var ri=51-today.getDate();

m=60-checkTime(m);
s=60-checkTime(s);
document.getElementById("time").innerHTML=+ri+"天"+h+"小时"+m+"分"+s+"秒";
t=setTimeout('startTime()',500);
}

function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i
}