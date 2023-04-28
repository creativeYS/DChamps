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

    passIfCan = (student, height) => {
        const rest = this.lan - height;        
        if (this.lan >= height) {
            if (rest > this.add) {
                this.lan -= rest;
                student.add = rest;                
            } else {                
                student.add = this.add;
                this.add = 0;
            }
            return true;
        } else if (this.lan + this.add >= height) {
            return true;
        } else if(this.add > 0) {
            student.add = this.add;
            this.add = 0;
        }
        return false;
    }

    isEnough = (height) => {
        console.log((this.lan + this.add))
        if ((this.lan + this.add) >= height) return true;
        return false;
    }
}

function solution(H, W, D) {
    let desk = new Desk(H, W);
    const students = D.map(d => new Student(d));
    var answer = 0
    for (let i = 0; i < D.length - 1; i++) {
        if (students[i].passIfCan(students[i + 1], desk.height)) {
            answer++;
        }
    }
    if (students[D.length - 1].isEnough(desk.height)) answer++;

    return answer;
}
