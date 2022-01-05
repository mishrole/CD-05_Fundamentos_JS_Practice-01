const container = document.querySelector('#root');

for(let i = 1; i <= 100; i++) {
    let value = "";
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        value = "FizzBuzz";
    } else if (i % 3 === 0) {
        console.log("Fizz");
        value = "Fizz";
    } else if (i % 5 === 0) {
        console.log("Buzz")
        value = "Buzz";
    } else {
        console.log(i);
        value = i;
    }
    const p = document.createElement('p');
    p.innerHTML = value;
    container.appendChild(p);
}