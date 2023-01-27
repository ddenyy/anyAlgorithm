let testArr: number[] = [10, 89, 123, 1, 23, 13, 31];

function insertSort(testArr: number[]): number[] {
    for (let i = 0; i < testArr.length; i++) {
        let j = i;
        while (j > 0 && testArr[j] < testArr[j-1]) {
            let buf = testArr[j];
            testArr[j] = testArr[j - 1];
            testArr[j-1] = buf;
            j--;
        }
    }
    return testArr;
}


console.log(insertSort(testArr))
