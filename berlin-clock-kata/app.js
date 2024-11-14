export class Main {
    SimpleMinute(minutes) {
        let result = "";
        for (let i = 0; i < minutes%5; i++) {
            result += "Y";
        }
        return result;
    };
    }
