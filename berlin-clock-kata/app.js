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


