import { LightningElement, wire } from 'lwc';

import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';

export default class LWC_To_APEX_Mode_One extends LightningElement {

    @wire(getAccountList)
    accounts;
}