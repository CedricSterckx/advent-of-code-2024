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
    let inputCopy = input.slice();
    let isSafeV1 = true;
    let prevNumber = inputCopy[0];
    let tries = 0;

    for (let i = 1; i < inputCopy.length; i++) {
        const evaluatedNumber = inputCopy[i];
        if ((prevNumber > inputCopy[i]) && (Math.abs(inputCopy[i] - prevNumber) <= 3)) {
            prevNumber = inputCopy[i];
        } else {
            tries++;
            if (tries > 1) {
                isSafeV1 = false;
                break;
            }
            inputCopy.splice(i, 1);
            i = i - 1;
            prevNumber = inputCopy[i];
        }
    }
    inputCopy = input.slice();
    let isSafeV2 = true;
    tries = 0;

    for (let i = 0; i < inputCopy.length - 1; i++) {
        const evaluatedNumber = inputCopy[i];
        if (!((inputCopy[i] > inputCopy[i + 1]) && (Math.abs(inputCopy[i + 1] - inputCopy[i]) <= 3))) {
            tries++;
            if (tries > 1) {
                isSafeV2 = false;
                break;
            }
            inputCopy.splice(i, 1);
            i = i - 1;
        }
    }

    if (!isSafeV1 && !isSafeV2) {
        return false;
    }
    return true;
}

function isIncreasingSafe(input: number[]) {
    let inputCopy = input.slice();
    let isSafeV1 = true;
    let prevNumber = inputCopy[0];
    let tries = 0;
    for (let i = 1; i < inputCopy.length; i++) {
        const evaluatedNumber = inputCopy[i];
        if ((prevNumber < inputCopy[i]) && (Math.abs(prevNumber - inputCopy[i]) <= 3)) {
            prevNumber = inputCopy[i];
        } else {
            tries++;
            if (tries > 1) {
                isSafeV1 = false;
                break;
            }
            inputCopy.splice(i, 1);
            i = i - 1;
            prevNumber = inputCopy[i];
        }
    }


    inputCopy = input.slice();
    let isSafeV2 = true;
    tries = 0;
    for (let i = 0; i < inputCopy.length - 1; i++) {
        const evaluatedNumber = inputCopy[i];
        if (!((inputCopy[i] < inputCopy[i + 1]) && (Math.abs(inputCopy[i] - inputCopy[i + 1]) <= 3))) {
            tries++;
            if (tries > 1) {
                break;
            }
            inputCopy.splice(i, 1);
            i = i - 1;
            isSafeV2 = false;
        }
    }
    if (!isSafeV1 && !isSafeV2) {
        return false;
    }
    return true;
}
