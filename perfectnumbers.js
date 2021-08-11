/*
A javascript program to find n number of perfect primes using Euclid-Euler Theorem
*/
findPerfect(4);

/* A function that logs perfect numbers up to n */
function findPerfect(n){
    let k = 1; //We start with k = 1
    let total = 0; //Total number of perfect numbers found

    while(total !== n){ //If desired number of perfect numbers hasn't been found then keep searching 
        let m = Math.pow(2, k) - 1; //Calculate 2^k - 1
        if(isPrime(m)){ //If 2^k - 1 is prime then use that number to find its associated perfect number
            let perfect = Math.pow(2, k-1) * (Math.pow(2,k) - 1); 
            console.log(perfect);
            total++;
        }
        k++;
    }
}

/*A function that returns true if a number is prime */
function isPrime(n){
    if(n <=1 ) //Corner case
        return false; 
    for(let i = 2; i < n; i++){ //Exhuast all possible numbers up to n 
        if(n%i == 0){ //If any divisor is found then return false
            return false;
        }
    }
    return true;
}