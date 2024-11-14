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
    SimpleMinute(minutes) {
        let result = "";
        for (let i = 0; i < minutes%5; i++) {
            result += "Y";
        }
        return result;
    };

        FinalClock(hours, minutes, seconds) {
        let result = "";
        result += this.secondsLamp(seconds);
        result += "\n";
        result += this.blockOfFiveHours(hours);
        result += "\n";
        result += this.simpleHours(hours);
        result += "\n";

    }




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
