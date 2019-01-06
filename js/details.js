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

	var mlOption = document.getElementsByClassName("options");
	var selectedAmount = document.getElementById("selectedAmount");

	for (var i = 0; i < mlOption.length; i++) {
		mlOption[i].onclick = function () {
			for ( var j = 0; j < mlOption.length; j++){
				mlOption[j].classList.remove("active");
			}
			this.classList.add("active");
			selectedAmount.innerText = this.innerText;
		}
	}

	var sub =  document.getElementById("sub");
	var add =  document.getElementById("add");
	var buyAmountInput =  document.getElementById("buy-amount-input");
	var stock =  Number(document.getElementById("stock").innerText); // 库存数

	sub.onclick = function () {
		var amount = --buyAmountInput.value;
		if (amount <= 1) {
			sub.style.cursor = "not-allowed";
			buyAmountInput.value = 1;
		} else {
			if (amount < stock) { 
				add.style.cursor = "pointer";
			}
			sub.style.cursor = "pointer";
		}
	}
	add.onclick = function () {
		var amount = ++buyAmountInput.value;
		if (amount >= stock) {
			add.style.cursor = "not-allowed";
			buyAmountInput.value = stock;
		} else {
			if (amount > 1) {
				sub.style.cursor = "pointer";
			}
			sub.style.cursor = "pointer";
		}
	}

	var showImg =  document.getElementById("showImg");
	var bigImg =  document.getElementById("bigImg");
	
	var imgList =  document.getElementsByClassName("imgList");
	for (var i = 0; i < imgList.length; i++) {
		imgList[i].onclick = function() {
			for (var j = 0; j < imgList.length; j++){
				imgList[j].classList.remove("active");
			}
			this.classList.add("active");
			showImg.src = this.dataset['src'];
			bigImg.src = this.dataset['src'];
		}
	}


	var imgBox = document.getElementsByClassName("good-img-box")[0];
	var small = document.getElementsByClassName("good-img")[0];
	var slider = document.getElementsByClassName("slider")[0];
	var big = document.getElementById("big");
	var bigImg = document.getElementById("bigImg");

	small.onmousemove = function(e) {
	    var even = e || window.event; 
	    var x = even.clientX - imgBox.offsetLeft - slider.offsetWidth/2;
	    var y = even.clientY - imgBox.offsetTop - slider.offsetHeight/2;
	    var xMax = small.clientWidth - slider.clientWidth;
	    var yMax = small.clientHeight - slider.clientHeight;
		
		x = x > xMax ? xMax : x < 0 ? 0 : x;
		y = y > yMax ? yMax : y < 0 ? 0 : y;
	    
	    slider.style.top = y + "px";
	    slider.style.left = x + "px";
	    big.scrollLeft = x/xMax * (bigImg.clientWidth - big.clientWidth);
	    big.scrollTop = y/yMax * (bigImg.clientHeight -big.clientHeight);
	};

	small.onmouseenter = function(){
		slider.style.display = "block";
		big.style.display = "block";
	};
	small.onmouseleave = function(){
		slider.style.display = "none";
		big.style.display = "none";
	};
	var continue1 =  document.getElementById("continue");
	var closeLayer =  document.getElementById("closeLayer");
	var layer =  document.getElementById("layer");
	var addShopping =  document.getElementsByClassName("add-shopping")[0];
	addShopping.onclick = function () {
		layer.style.display = "block";
	}

	continue1.onclick = function () {
		layer.style.display = "none";
	}
	closeLayer.onclick = function () {
		layer.style.display = "none";
	}
	
}