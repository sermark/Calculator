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
  	else calc.updateDisplay();
  if(target.dataset.value == 'C') calc.clear();
}

calc.clear = () => {
  display.value = '';
  res = '';
}

calc.updateDisplay = () => {
	res = display.value.split(op)
  switch (op){
	case ('+'):
    display.value = calc.sum(res);
    res = display.value;
    break;
	case ('-'):
    display.value = calc.diff(res);
    res = display.value;
    break;
	case ('*'):
    display.value = calc.mul(res);
    res = display.value;
    break;
	case ('/'):
    display.value = calc.div(res);
    res = display.value;
    break;
  }
}

calc.sum = (arr) => arr.reduce(function (prev, next){
	return +prev + +next;
});

calc.diff = (arr) => arr.reduce(function (prev, next){
	return +prev - +next;
});

calc.mul = (arr) => arr.reduce(function (prev, next){
	return +prev * +next;
});

calc.div = (arr) => arr.reduce(function (prev, next){
	return +prev / +next;
});
