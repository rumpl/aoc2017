/*
17  16  15  14  13
18   5   4   3  12
19   6   1   2  11
20   7   8   9  10
21  22  23---> ...
*/

let input = 289326;

let n = 1;
let dbl = 0;
let result = 0;

while(input > dbl) {
    n += 2;
    dbl = Math.pow(n, 2);

    let tt = dbl;
    while(input < tt) {
        tt = tt - (n - 1);
    }

    tt = tt + (n - 1);

    let half = input - (tt - Math.floor(n / 2));

    result = half + (Math.floor(n / 2));
}

console.log(result);