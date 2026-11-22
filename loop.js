// Loop //
//for loop // for loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition. The for loop is typically used when the number of iterations is known beforehand.;
for (let i = 0; i <= 10; i++) {
    console.log("Iteration:", i);
}

//while loop // while loop is a control flow statement that allows code to be executed repeatedly based on a given boolean condition. The while loop is typically used when the number of iterations is not known beforehand.;
let retries = 2;
while (retries > 0) {
    console.log("Retries left:", retries);
    retries--;
}
// op -: 2,1


// print table for 5

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
// Give the even number til 10 and odd number till 10
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`Even number: ${i}`);
    }
    else {
        console.log(`Odd number: ${i}`);
    }
}