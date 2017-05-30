let calc = document.getElementById('calculator');
let display = document.getElementById('display');
let res = '';
let op;

calc.onclick = (event) => {
  let target = event.target;
  if (target.tagName != 'BUTTON') return;
  	if(target.dataset.value !== '=' && target.dataset.value !== 'C') {
  		if (target.dataset.value == '+' || target.dataset.value == '-' || target.dataset.value == '*' || target.dataset.value == '/'){
  			op = target.dataset.value;
  		}
  		let val = target.dataset.value;
  		res += val;
  		display.value = res;
  	}
  	else updateDisplay();
  if(target.dataset.value == 'C') clear();
}

let clear = () => {
  display.value = '';
  res = '';
}

let updateDisplay = () => {
	res = display.value.split(op)
	if (op == '+') {
    display.value = sum(res);
    res = display.value;
  }
	else if (op == '-') {
    display.value = diff(res);
    res = display.value;
  }
	else if (op == '*') {
    display.value = mul(res);
    res = display.value;
  }
	else {
    display.value = div(res);
    res = display.value;
  }
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
