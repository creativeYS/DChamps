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
    addList;

    constructor(lan) {
        this.lan = lan;
        this.add = 0;
        this.addList = [];
    }

    get lan() {
        return this.lan;
    }
    get add() {
        return this.add;
    }
    setAddList = (addList) => {
        this.addList = addList;        
    }

    passIfCan = (student, height) => {
        const rest = this.lan - height;
        let ret = false;

        let addList = this.addList;
        this.addList = [];

        if (this.lan >= height) {
            if (rest > 0) {
                addList.push(rest)
                this.lan -= rest; 
            }
            ret = true;
        } else {
            let minIdx = -1;
            let minTotal = 0;
            for (let i = 0; i < addList.length; i++) {
                const total = this.lan + addList[i];
                if (total >= height) {
                    if (minIdx < 0 || total < minTotal) {
                        minTotal = total;
                        minIdx = i;                        
                    }
                }
            }
            if (minIdx >= 0) {
                this.add = addList[minIdx];
                addList = addList.filter((v, idx) => idx != minIdx);
                ret = true;
            } else {
                this.lan = 0;
                addList.push(this.lan);                
            }
        }

        //console.log(addList);
        student.setAddList(addList);
        return ret;
    }

    isEnough = (height) => {
        if ((this.lan + this.add) >= height) return true;

        for (let i = 0; i < this.addList.length; i++) {
            const total = this.lan + this.addList[i];
            if (total >= height) return true;
        }

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
