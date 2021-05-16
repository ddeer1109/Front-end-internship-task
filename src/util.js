import { dom } from "./dom.js";


export const util = {
    validateData(data) {
        const emailOk = this.verifyEmail(data.email);
        const datesOk = this.verifyDates(data.internshipStart, data.internshipEnd);
        if(!emailOk) {
            dom.incorrectHighlightEmail();
        }
        if(!datesOk) {
            dom.incorrectHighlightDates();
        }
        
        console.log(emailOk, datesOk)
        
        return emailOk && datesOk;
    },
    verifyEmail(email) {
        console.log(email);
        if (email.includes("@") && email.substring(email.indexOf('@')).includes(".")) {
            return true;
        }
        return false;
    },
    verifyDates(start, end) {
        let d1 = new Date(start);
        let d2 = new Date(end);
        let datesAreCorrect = d1 < d2;
        // return false;
        return datesAreCorrect;
    }
}