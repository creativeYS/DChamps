function solution(N, W) {
    let answer = 0;
    let arr = W.map(value => value[0] + value[value.length - 1]);

    let firstN = arr.shift();
    let checkIdx = N - 1;
    check();

    if (checkIdx == 0 && arr.length > 0) check();



    return checkIdx <= 0 && arr.length == 0 ? "Yes" : "No";

    function check() {
        for (let i = 0; i < arr.length; i++) {
            let value = arr[i];

            if (value[0] == firstN[firstN.length - 1]) {
                firstN = firstN[0] + value[1];
                arr.splice(i, 1);
                checkIdx--;
                i--;
                continue;
            }
            if (value[1] == firstN[0]) {
                firstN = value[0] + firstN[1];
                arr.splice(i, 1);
                checkIdx--;
                i--;
                continue;
            }
            checkIdx--;
        }
    }
}
