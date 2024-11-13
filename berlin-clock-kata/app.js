export class Main {
    simpleHours(hours) {
        if (hours === 1) {
            return "R";
        }
        if (hours === 2) {
            return "RR";
        }
        if (hours === 4) {
            return "RRRR";
        }
        return "";
    };
}