const zero = 0;
const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;
var total;
var tempNum;
var opeExpresion;

function pushNumber(num) {
	if (typeof(total) === "undefined") {
		total = num.toString();
		console.log(total);
		console.log(tempNum);
	} else if (typeof(total) === "string") {
        if (total[total.length - 1] == "*" || total[total.length - 1] == "/" || total[total.length - 1] == "+" || total[total.length - 1] == "-") {
			total = total + num;
			console.log(total);
			console.log(tempNum);
		}
	};
};

function operation(operator) {
	if (typeof(total) != "undefined") {
		if (total[total.length - 1] != "*" || total[total.length - 1] != "/" || total[total.length - 1] != "+" || total[total.length - 1] != "-") {
			total = total + operator
		}
	}
};


function equal() {
	makeIt = eval(total);
	console.log(makeIt);
	total = makeIt;
	
};