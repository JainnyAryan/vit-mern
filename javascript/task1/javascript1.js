let number = 32243;
const earlier = document.getElementById('earlier');
const after = document.getElementById('after');
earlier.innerHTML='The number earlier was: '+number;
let result = 0;

while(number>0){
    rightmost = number%10;
    
    result = result*10 + rightmost;
    
    number = Math.floor(number/10);
}
console.log("Reversed number is : " + result)

after.innerHTML='The number after was: '+result;
