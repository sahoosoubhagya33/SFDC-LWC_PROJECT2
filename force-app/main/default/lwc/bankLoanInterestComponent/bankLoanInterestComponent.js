import { LightningElement } from 'lwc';

export default class BankLoanInterestComponent extends LightningElement {

    principalAmount;
    rateOfInterest;
    duration;
    loanResult;

    principalHandler(event){
        this.principalAmount = parseInt(event.target.value);
    }
    rateOfInterestHandler(event){
        this.rateOfInterest = parseInt(event.target.value);
    }
    durationHandler(event){
        this.duration = parseInt(event.target.value);
    }
    calculateInterest(){
        this.loanResult = 'The Loan Interest is : ' + (this.principalAmount*this.rateOfInterest*this.duration)/100;
    }
}