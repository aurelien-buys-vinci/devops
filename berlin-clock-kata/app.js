export class Main {
    simpleHours(hours) {
        let result = "";
        for (let i = 0; i < hours%5; i++) {
            result += "R";
        }
        return result;
    };

    blockOfFiveHours(hours) {
        if(hours >= 20) {
            return "RRRRR";
        }
        if(hours >= 15) {
            return "RRR";
        }
        if(hours >= 10) {
            return "RR";
        }
        if(hours >= 5) {
            return "R";
        }
        return "";
    }
}