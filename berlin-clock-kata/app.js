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
        if(Minutes >=10){
            return "YY"
        }
        if(Minutes >= 5){
            return "Y";
        }
        return "";
    }; 
}