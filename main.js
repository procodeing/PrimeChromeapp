window.onload = function() {


//change the value of CN to the number you want to start at
var CN = 1;



primes = [];
var timer = Date.now();


  
 function isPrime(element){
   return (!(CN%element === 0));
 } 
  
  function testmain(){
    var prev = [];
    for(var i = 2;i<CN;i++){
      prev[prev.length]=i;
    }
    if(prev.every(isPrime)){
      primes[primes.length]=CN;
    }
   
    CN++;
    greeting.innerHTML = primes;
    pps=((primes.length-1)/((Date.now()-timer)*0.001));
    ratio.innerHTML = "average primes per second:" + pps + " <br> primes:" + (primes.length-1);
  
    //If you want to stop after whatever amount of primes, uncomment the bottom line and change the 100 to whatever you want
    //if(primes.length > 1000){clearInterval(runner);}
    
    
    
    
    
  } 

runner=setInterval(testmain,1);
//setTimeout(function(){clearInterval(runner);},3000);


  
};