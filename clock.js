
var myVar = setInterval(function(){myTimer()},10);	
function myTimer(){
	var date=new Date();
	var milli=new Date().getTime();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	//Date().toLocaleTimeString()
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	var millisecond = date.getMilliseconds()
	var monthdisplay=checkTime(month);
	var daydisplay=checkTime(day);
	var hourdisplay=checkTime(hour);
	var minutedisplay=checkTime(minute);
	var seconddisplay=checkTime(second);
	function checkTime(i){
		if (i<10){
			i="0" + i;
		}
			return i;
	}
	document.getElementById("displaytime").innerHTML=year+"年"+monthdisplay+"月"+daydisplay+"日"+" "+hourdisplay+":"+ minutedisplay+":"+seconddisplay;
	var millihand = time(millisecond,1000)
	var secondhand = time(second,60)
	var minutehand = time(minute,60)
	//var ma = milli/1000;
//	var mb = milli/1000;
//	var a = Math.floor(ma);
//	var dd = mb-a;
	var hours = milli/1000/60/60/12-1/3;
	var hourhand = time(hours,1)
	function time(a,b){
		var se = (360/b)*a+180;
		var s = se+"deg";
		return s;
	}
	var ss = document.getElementById("secondhand");
	ss.style.transform = "rotate("+ secondhand +")";
	var mm = document.getElementById("minutehand");
	mm.style.transform = "rotate("+ minutehand +")";
	var hh = document.getElementById("hourhand");
	hh.style.transform = "rotate("+ hourhand +")";
	var ms = document.getElementById("millisecondhand");
	ms.style.transform = "rotate("+ millihand +")";
	var dia = milli/1000/10;
	var dial = time(dia,1)
	var dl = document.getElementById("dial");
	dl.style.transform = "rotate("+ dial +")";

}

//document.write("123")
//window.οnlοad=function(){
//	let scale1 = document.querySelector('.box2').querySelectorAll('li');
//		console.log(scale1.length);
//		for(let i = 0;i<scale1.length;i++){
//			let a = i*30+"deg"
//			scale1[i].style.transform = "rotate("+ a +")";
//		}
//let scale2 = document.querySelectorAll('span')
//			console.log(scale2.length);
//		for(let i = 0;i<scale2.length;i++){
//			let a = i*-90+"deg"
//			scale2[i].style.transform = "rotate("+ a +")";
//	}
//}
