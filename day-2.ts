import fs from 'node:fs';


const reportData = fs.readFileSync('input-day2.txt', 'utf-8').split('\n');

let safeReportCounts = 0;

reportData.forEach(report => {
    const levels = report.split('  ');

});