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

    BlockOfFiveMinute(Minutes) {
        let row = "";
        for (let i = 1; i <= parseInt(Minutes/5); i++) {
            if (i % 3 === 0) {
                row += "R"; 
            } else {
                row += "Y"; 
            }
        }
        return row;
    };

    FinalClock(hours, minutes, seconds) {
        let result = "";
        result += this.secondsLamp(seconds);
        result += "\n";
        result += this.blockOfFiveHours(hours);
        result += "\n";
        result += this.simpleHours(hours);
        result += "\n";
        result += this.BlockOfFiveMinute(minutes);
        result += "\n";
        result += this.SimpleMinute(minutes);
        return result;
    };
};
