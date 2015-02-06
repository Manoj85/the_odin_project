var prime = 2;
var sum = 600851475143;

while (sum != prime) {
	if (sum % prime === 0) {
		sum = sum/prime;
	} else {
		prime++;
	}
}

console.log(prime);