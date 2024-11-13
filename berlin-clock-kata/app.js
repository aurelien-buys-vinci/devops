export class Main {
    simpleHours(hours) {
        let result = "";
        for (let i = 0; i < hours%5; i++) {
            result += "R";
        }
        return result;
    };
}