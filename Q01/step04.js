let answer = 0;
let addList = []

const insertIntoSortedArray = (arr, newItem) => {
    const index = binarySearch(arr, newItem);
    arr.splice(index, 0, newItem);
    return arr;
};

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

const getMinFit = (arr, lan, height) => {
    let minIdx = -1;
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const total = lan + arr[mid];
        if (total >= height) {
            minIdx = mid;
            high = mid - 1; // continue binary search on the left half
        } else {
            low = mid + 1; // continue binary search on the right half
        }
    }
    return minIdx;
}

class Student {
    constructor(lan) {
        this.lan = lan;
    }

    passIfCan = (student, height) => {
        const rest = this.lan - height;

        if (this.lan >= height) {
            if (rest > 0) {
                insertIntoSortedArray(addList, rest);
            }
            answer++;
        } else {
            let minIdx = getMinFit(addList, this.lan, height);
            if (minIdx >= 0) {
                addList.splice(minIdx, 1);
                answer++;
            }
        }
    }
}

function solution(H, W, D) {
    const students = D.map(d => new Student(d));
    for (let i = 0; i < D.length - 1; i++) {
        students[i].passIfCan(students[i + 1], H);
    }

    const lastStudent = students[D.length - 1];
    const idx = getMinFit(addList, lastStudent.lan, H);
    if (idx >= 0) answer++;

    return answer;
}
