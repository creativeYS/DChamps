function solution(N, W) {
    let answer = 'No';
    if (N > 100000) return answer;
    let valid = 0;
    W.reduce((prev, current) => {
        (UpperAndSpaceValid(prev) && UpperAndSpaceValid(current)) && (prev.slice(-1).lastIndexOf(current[0]) === -1) ? valid : valid++;

        return current;
    });

    return valid ? "Yes" : "No";

    function UpperAndSpaceValid(words) {
        let result = false;
        let space = /\s/g;
        if (words === words.toLowerCase() && !words.match(space)) {
            result = true;
        }
        return result;
    }
}
