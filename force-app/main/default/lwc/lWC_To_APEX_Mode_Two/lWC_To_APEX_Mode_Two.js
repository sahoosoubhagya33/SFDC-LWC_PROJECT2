import { LightningElement, wire, track } from 'lwc';

import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class LWC_To_APEX_Mode_Two extends LightningElement {

    @track accounts;
    @track error;

    @wire(getAccountList)
    wiredAccount({ error, data }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            console.log(error);
            this.error = error;
        }
    }
}