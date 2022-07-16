

function fizzBuzz(n) {
    for (i = 0; i < n; i++){
        if (i % 3 === 1){
            console.log('fizz')
        } else if (i % 5 === 1){
            console.log('buzz')
        } else if (i % 3 === 1 && i % 5 === 1){
            console.log('fizzbuzz')
        } else {
            console.log(i)
        }
    }
};

fizzBuzz(100)
