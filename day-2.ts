import fs from 'node:fs';

const reportData = fs.readFileSync('input-day2.txt', 'utf-8').split('\n');

let countValidReports = 0;

for (let i = 0; i < reportData.length; i++) {
    const levels: number[] = reportData[i].split(' ').map(item => parseInt(item.trim()));
    if (isDecreasingSafe(levels)) {
        countValidReports++;
    } else if (isIncreasingSafe(levels)) {
        countValidReports++;
    }
}

console.log(countValidReports);

function isDecreasingSafe(input: number[]) {
    let isSafe = true;
    let prevNumber = input[0];

    for (let i = 1; i < input.length; i++) {
        if ((prevNumber > input[i]) && (Math.abs(input[i] - prevNumber) <= 3)) {
            prevNumber = input[i];
        } else {
            isSafe = false;
            break;
        }
    }
    return isSafe;
}

function isIncreasingSafe(input: number[]) {
    let isSafe = true;
    let prevNumber = input[0];

    for (let i = 1; i < input.length; i++) {
        if ((prevNumber < input[i]) && (Math.abs(prevNumber - input[i]) <= 3)) {
            prevNumber = input[i];
        } else {
            isSafe = false;
            break;
        }
    }
    return isSafe;
}