import { LightningElement } from 'lwc';

//importing custom label from organization
import WelcomeLabelPage from '@salesforce/label/c.WelcomeLabelPage';
import ClientLabelPage from '@salesforce/label/c.ClientLabelPage';
import HomePageLabel from '@salesforce/label/c.HomePageLabel';

export default class CustomLabelComponent extends LightningElement {
    //container
    labelList = {
        WelcomeLabelPage,
        ClientLabelPage,
        HomePageLabel
    };

    newClientHandler(){
        alert('Entry done for data !!');
    }
}