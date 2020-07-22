var a=document.querySelector('span');
var b=document.querySelector('#p2score');
var s=document.querySelector('button');
var d=document.querySelector('#p2');
var f=document.querySelector('#reset')
var g=document.querySelector('input')
var h=document.querySelector('#game')
var count1=0;
var count2=0;
var winnigScore=5;
var isgame=true;
g.addEventListener('change',function(){
	winnigScore=g.value
	h.textContent=winnigScore
	reset()
})
s.addEventListener('click',function(){	
	if (isgame === true){
		count1++;
		if(count1==winnigScore){
			a.classList.add('clr');
			isgame = !isgame
		}
		a.textContent=count1;
	}
	
});
d.addEventListener('click',function(){	
	if (isgame === true){
		count2++;
		if(count2==winnigScore){
			b.classList.add('clr');
			isgame = !isgame
		}
		b.textContent=count2;
	}
});
f.addEventListener('click',function(){
	reset()
})
function reset(){
	isgame=true;
	count1=0;
	a.textContent=count1;
	count2=0;
	b.textContent=count2;
	a.classList.remove('clr');
	b.classList.remove('clr');
}
