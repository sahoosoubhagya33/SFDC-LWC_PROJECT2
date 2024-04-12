import { LightningElement } from 'lwc';

export default class PatientDetailComponent extends LightningElement {

    showFlagvalue = false;

    showform(){
        this.showFlagvalue = true;
    }

    hideform(){
        this.showFlagvalue = false;
    }
}