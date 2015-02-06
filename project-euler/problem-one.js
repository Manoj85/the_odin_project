var sum = 0;
var i = 0;

for (i; i < 1000; i++) {
	if (i % 3 === 0 || i % 5 === 0) {
		sum += i;
	}
}

console.log(sum);