import { LightningElement, track } from 'lwc';

import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class LWC_To_APEX_Mode_Three extends LightningElement {

    @track accounts;
    @track error;

    handledButton(){

        getAccountList()
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}