var body=document.getElementsByTagName("body")[0];
var parent=document.getElementById("parent-div");
var child=document.getElementById("child-div");
body.onscroll = function(){
//console.log(documenhttps://fiddle.jshell.net/3urv0tp0/#tidyt.getElementById("child-div").style.top)
if(document.documentElement.scrollTop>=child.offsetTop)//Adjust Tolerance as you want
{
   child.style.display="block"
}

};