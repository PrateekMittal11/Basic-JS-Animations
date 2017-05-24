alert("Some animations through JavaScript");

//coundown
function print()
{
	var d = new Date();
	var month = 11-d.getMonth();
	var day = 31-d.getDate();
	var hour = 23-d.getHours();
	var min = 59-d.getMinutes();
	var sec = 59-d.getSeconds();
	document.getElementById("yoyo").innerHTML = month+" month(s) "+day+" day(s) "+hour+" hour(s) "+min+" minute(s) "+sec+" second(s)";
}
setInterval(print, 1000);

//animation_1
window.onload = function(){
	var pos = 0;
	var box = document.getElementById("inner");
	var flag, per, p, q;
	var p = document.getElementById("text");
	var q = document.createTextNode("Position in Percentage=0%");
	p.appendChild(q);
	setInterval(move, 3);
	function move()
	{
		if(pos==0)
			flag=0;
		if(pos==1300)
			flag=1;
		if(flag==0)
			front();
		if(flag==1)
			back();
		if(pos%130==0){
			p.removeChild(q);
			per=pos/13;
			q = document.createTextNode("Position in Percentage="+per+"% ");
			p.appendChild(q);	
		}
	}
	function front()
	{
		pos=pos+2;
		box.style.marginLeft = pos+'px';
	}
	function back()
	{
		pos=pos-2;
		box.style.marginLeft = pos+'px';
	}
}

//animation_2
var m = document.getElementById("mover");
var n = document.getElementById("juke");
var p=0, i=0;
function change()
{
	m.style.height = p+'px';
	p++;
	if(i==0)
	{
		m.style.backgroundColor = 'black';
		n.style.backgroundColor = 'red';
	}
	if(i==1)
	{
		m.style.backgroundColor = 'green';
		n.style.backgroundColor = 'black';
	}
	if(i==2)
	{
		m.style.backgroundColor = 'blue';
		n.style.backgroundColor = 'green';
	}
	if(i==3)
	{
		m.style.backgroundColor = 'yellow';
		n.style.backgroundColor = 'blue';
	}
	if(i==4)
	{
		m.style.backgroundColor = 'red';
		n.style.backgroundColor = 'yellow';
	}
	if(p==300)
	{	
		if(i==4)
			i=0;
		else
			i=i+1;
		p=0;
	}
}
setInterval(change, 5);