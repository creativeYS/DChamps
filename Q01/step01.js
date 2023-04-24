class Desk {
    h;
    w;

    constructor(h, w) {
        this.h = h;
        this.w = w;
    }

    get height() {
        return this.h;
    }
    get width() {
        return this.w;
    }
}

function solution(H, W, D) {
    let desk = new Desk(H, W);
    var answer = D.reduce((pv, cv) => cv >= desk.height ? pv + 1 : pv, 0);
    return answer;
}
