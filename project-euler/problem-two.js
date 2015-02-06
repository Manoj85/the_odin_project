var i = 1;
var j = 2;
var n = 0;
var sum = 2;

while (n < 4000000) {
	n = i + j;
	i = j;
	j = n;
	if (n % 2 === 0) {
		sum = sum + n;
	}
}

console.log(sum);