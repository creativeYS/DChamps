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
class Student {
    lan;
    add;

    constructor(lan) {
        this.lan = lan;
        this.add = 0;
    }

    get lan() {
        return this.lan;
    }
    get add() {
        return this.add;
    }
    set add(add) {
        this.add = add;
    }    

    pass = (student, height) => {
        const rest = this.lan - height;
        this.lan -= rest;
        student.add = rest;
    }

    isEnough = (height) => {
        if ((this.lan + this.add) >= height) return true;
        return false;
    }
}

function solution(H, W, D) {
    let desk = new Desk(H, W);
    const students = D.map(d => new Student(d));
    console.log(students);
    for (let i = 0; i < D.length - 1; i++) {
        if (students[i].lan > desk.height) {
            students[i].pass(students[i + 1], desk.height);
        }
    }
    var answer = students.reduce((pv, cv) => cv.isEnough(desk.height) ? pv + 1 : pv, 0);
    return answer;
}
