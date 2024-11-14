export class Main {
    simpleHours(hours) {
        let result = "";
        for (let i = 0; i < hours%5; i++) {
            result += "R";
        }
        return result;
    };

    blockOfFiveHours(hours) {
        let result = "";
        for (let i = 0; i < parseInt(hours/5); i++) {
            result += "R";
        };
        return result;
    };

    secondsLamp(seconds) {
        if(seconds % 2 === 0) {
            return "R";
        }
        return "";
    };    


    BlockOfFiveMinute(Minutes) {
        let row = "";
        for (let i = 1; i <= parseInt(Minutes/5); i++) {
          // For every third lamp, use 'R' for quarters, otherwise use 'Y'
            if (i % 3 === 0) {
                row += "R"; // Red lamp for quarters
            } else {
                row += "Y"; // Yellow lamp for other five-minute blocks
            }
        }
        return row;
    }
}