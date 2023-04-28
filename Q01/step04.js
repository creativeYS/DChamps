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
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    if (minIdx >= 0) ++answer;
    return minIdx;
}

const passIfCan = (lan, height) => {
    const rest = lan - height;

    if (lan >= height) {
        if (rest > 0) {
            insertIntoSortedArray(addList, rest);
        }
        answer++;
    } else {
        let minIdx = getMinFit(addList, lan, height);
        if (minIdx >= 0) {
            addList.splice(minIdx, 1);
        }
    }
}

function solution(H, W, D) {
    for (lan of D) {
        passIfCan(lan, H);
    }

    return answer;
}
