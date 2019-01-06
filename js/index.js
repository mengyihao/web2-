window.onload = function(){

	var header = document.getElementsByClassName('header')[0];
	var zhanwei = document.getElementById('zhanwei');
	window.onscroll = function(){

		var st = document.documentElement.scrollTop||document.body.scrollTop;
		if (st>180) {
			header.style.position = 'fixed';
			header.style.top = "0px";
			zhanwei.style.height = "153px"
		}
		else{
			header.style.position = 'static';
			zhanwei.style.height = "0px"
		}
	}

	window.onload = roll(50);

	function roll(t){
		var ul1 = document.getElementById("ul1");
    	var ul2 = document.getElementById("ul2");
    	var z42 = document.getElementById("z42");
    	ul2.innerHTML = ul1.innerHTML;
    	z42.scrollTop = 0;
    	var timer = setInterval(rollStart, 50);
    	z42.onmouseover = function () {
        	    clearInterval(timer)
        	}
    	z42.onmouseout = function () {
        	    timer = setInterval(rollStart, 50);
        	}
}

function rollStart() {
    if (z42.scrollTop >= ul1.scrollHeight) {
        z42.scrollTop = 0; 
    }else {
        z42.scrollTop++;
    }
}

}
 function getStyle(obj, attr) { 
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
  		return getComputedStyle(obj, null)[attr];
  	}
  }

  function animate(obj, json, callback) {
  	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); 
  		}
  	}, 30);
  }

var box = document.getElementById('box');
var left = document.getElementById('prev');
var right = document.getElementById('next');
var navList = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var index = 1;
var timer;
var flag = false;
box.onmouseover = function(){
	animate(left, {
				opacity: 0.8
			})
			animate(right, {
				opacity: 0.8
			})
	clearInterval(timer)
}
box.onmouseout = function(){
	animate(left, {
				opacity: 0
			})
			animate(right, {
				opacity: 0
			})
	timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for (var i = 0; i < navList.length; i++) {
			navList[i].index = i;
			navList[i].onclick = function () {
				index = this.index + 1;
				navmove();
				animate(slider, {
					left: (-800 * index)
				});
			}

		}
function navmove() {
			for (var i = 0; i < navList.length; i++) {
				navList[i].className = "";
			}
			if (index > 6) {
				navList[0].className = "active";
			} else if (index <= 0) {
				navList[5].className = "active";
			} else {
				navList[index - 1].className = "active";
			}
		}
function next(){
	if(flag){
		return;
	}
	flag = true;
	index++;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		flag = false;
	});
}
function prev(){
	if(flag){
		return;
	}
	flag = true;
	index--;
	navmove();
	animate(slider,{left:-800*index},function(){
		if(index==0){
			slider.style.left = '-4800px';
			index = 6;
		}
		flag = false;
	});
}
function navmove(){
	for( var i=0; i<navList.length; i++ ){
		navList[i].className = "";
	}
	if(index >6 ){
		navList[0].className = "active";
	}else if(index<=0){
		navList[5].className = "active";
	}else {
		navList[index-1].className = "active";
	}
}
timer = setInterval(next, 3000);



var select=document.getElementById("select");
var p=document.getElementById("p");
select.onchange=function(){
	p.innerHTML="￥"+""+select.value;
}
