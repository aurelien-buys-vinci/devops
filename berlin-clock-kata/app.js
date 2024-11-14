export class Main {
    SimpleMinute(minutes) {
        if(minutes == 1) {
            return "Y";
        }else if(minutes == 2) {
            return "YY";
        }else if(minutes == 3) {
            return "YYY";
        }else if(minutes == 4) {
            return "YYYY";
        }
        return "";
    }
}