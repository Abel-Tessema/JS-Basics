
let primes = [];

function storePrimes(limit) {
    for (let number = 2; number <= limit; number++) {
        if (isPrime(number))
            primes.push(number);
    }
}

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0)
            return false;
    return true;
}

storePrimes(20);
console.log(primes);
