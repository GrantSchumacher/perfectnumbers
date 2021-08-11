
findPerfect(4);

function findPerfect(n){
    let k = 1;
    let total = 0;

    while(total !== n){
        let m = Math.pow(2, k) - 1;
        if(isPrime(m)){
            let perfect = Math.pow(2, k-1) * (Math.pow(2,k) - 1);
            console.log(perfect);
            total++;

        }
        k++;
    }
}

function isPrime(n){
    if(n <=1 )
        return false;
    for(let i = 2; i < n; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}