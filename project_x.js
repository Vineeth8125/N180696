function nav(){
	if(document.getElementById("hnav").style.display=="none"){
		document.getElementById("hnav").style.display="block"
		document.getElementById("vnav").style.display="none"
	}
	else{
		document.getElementById("hnav").style.display="none"
		document.getElementById("vnav").style.display="block"
		var x=window.matchMedia("(max-width:600px)")
		if(x.matches){
			document.getElementById("vnav").style.display="none"	
		}
	}
}
// let img_a=["KBXW.gif","5Sz.gif","72c7.gif","F7zk.gif","b1.gif","b2.gif"]
n_slider()
let img_a=["b1.gif","b2.gif","b3.gif","b4.gif","b5.gif","b6.gif"]
let i=0;
function imgslider(){
	document.getElementById("slider").src=img_a[i]
	if(i==5){
		i=0
	}
	else
		i++

	setTimeout(imgslider,5000)
}
// 
// 
function sliderprev(){
	if(i==0){
		i=5
	}
	else{
		i--
	}
	document.getElementById("slider").src=img_a[i]
}
function slidernex(){
	if(i==5){
		i=0
	}
	else{
		i++
	}
	document.getElementById("slider").src=img_a[i]
}
function currentSlide(k){
	document.getElementById("slider").src=img_a[k]

}
function contact(){
	document.getElementById("maindiv").style.display="none"
	document.getElementById("login").style.display="none"
		document.getElementById("register").style.display="none"
	document.getElementById("frame").style.display="block"
	document.getElementById("student").style.display="none"
	document.getElementById("faculty").style.display="none"
}
function home(){
		document.getElementById("maindiv").style.display="block"
		document.getElementById("login").style.display="none"
		document.getElementById("register").style.display="none"
		document.getElementById("student").style.display="none"
			document.getElementById("frame").style.display="none"
			document.getElementById("faculty").style.display="none"
}
function register(){
	document.getElementById("maindiv").style.display="none"
	document.getElementById("register").style.display="block"
	document.getElementById("login").style.display="none"
	document.getElementById("frame").style.display="none"
	document.getElementById("student").style.display="none"
	document.getElementById("faculty").style.display="none"
}
function login(){
	document.getElementById("register").style.display="none"
	document.getElementById("frame").style.display="none"
	document.getElementById("login").style.display="block"
	document.getElementById("maindiv").style.display="none"
	document.getElementById("student").style.display="none"
	document.getElementById("faculty").style.display="none"
}
function std(){
		document.getElementById("register").style.display="none"
	document.getElementById("frame").style.display="none"
	document.getElementById("login").style.display="none"
	document.getElementById("maindiv").style.display="none"
	document.getElementById("student").style.display="block"
	document.getElementById("faculty").style.display="none"
}
function fid(){
	document.getElementById("register").style.display="none"
	document.getElementById("frame").style.display="none"
	document.getElementById("login").style.display="none"
	document.getElementById("maindiv").style.display="none"
	document.getElementById("student").style.display="none"
	document.getElementById("faculty").style.display="block"
}
function imgch(){
	document.getElementById("img").style.display="none"
	document.getElementById("label").style.display="block"
}
function img1(){
	document.getElementById("img").style.display="block"
	document.getElementById("label").style.display="none"
}
var x=window.matchMedia("(max-width:600px)")
		if(x.matches){
			document.getElementById("vnav").style.display="none"	
		}

function login(){
	document.getElementById("register").style.display="none"
	document.getElementById("login").style.display="block"
}
function n_slider(){
	let f=document.getElementById("tab").firstElementChild
	f.remove()
	f=document.getElementById("tab").append(f)
	// alert(f)
	setTimeout(n_slider,5000)

}