
function getNthFib(n) { 
    let F0 = 0;
    let F1 = 1;
    let Fib = 0;
    for(let i = 0; i < n; i++){
        Fib = F0 + F1; // 0 + 1
        F0 = Fib // 1
    }
    return console.log(F1) ;
  }
  getNthFib(7);
  