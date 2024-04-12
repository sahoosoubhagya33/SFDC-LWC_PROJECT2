import { LightningElement, track } from 'lwc';

export default class CustomValidation extends LightningElement {

    handleValidation(){

        //taking reference of component in html
        let nameCmp = this.template.querySelector(".nameCmp");
        let dateCmp = this.template.querySelector(".dateCmp");

        //fetching values
        let nameValue = nameCmp.value;
        let dateValue = dateCmp.value;

        //checking if name is blank
        if (!nameValue) {
            nameCmp.setCustomValidity("Name value is required....");
        } else {
            nameCmp.setCustomValidity(""); //clear values
        }
        nameCmp.reportValidity();

        //checking if date is blank
        if (!dateValue) {
            dateCmp.setCustomValidity("Date value is required....");
        } else {
            dateCmp.setCustomValidity(""); //clear values
        }
        dateCmp.reportValidity();
    }
}