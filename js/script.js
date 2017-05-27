let calc = document.getElementById('calculator');
let display = document.getElementById('display');
let res = 0;
let op;

calc.onclick = (event) => {
  let target = event.target;
  if (target.tagName != 'BUTTON') return;
  	if(target.innerHTML !== '=' && target.innerHTML !== 'C') {
  		if (target.innerHTML == '+' || target.innerHTML == '-' || target.innerHTML == '*' || target.innerHTML == '/'){
  			op = target.innerHTML;
  		}
  		let val = target.innerHTML;
  		res += val;
  		display.value = res.substring(1);
  	}
  	else updateDisplay();

  if(target.innerHTML == 'C') clear();
}

let clear = () => {
  display.value = 0;
  res = 0;
}

let updateDisplay = () => {
	res = display.value.split(op)
	if (op == '+') display.value = sum(res);
	else if (op == '-') display.value = diff(res);
	else if (op == '*') display.value = mul(res);
	else display.value = div(res);
}

let sum = (arr) => arr.reduce(function (prev, next){
	return +prev + +next;
});

let diff = (arr) => arr.reduce(function (prev, next){
	return +prev - +next;
});

let mul = (arr) => arr.reduce(function (prev, next){
	return +prev * +next;
});

let div = (arr) => arr.reduce(function (prev, next){
	return +prev / +next;
});
