var sum = 0;
var x;

while (sum < 100 && x != 0) {

    x = +(prompt(" enter n values ")); // convert string to number
    sum += x;
}

document.write(sum);

