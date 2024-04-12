import { LightningElement } from 'lwc';

export default class HtmlToJSComponent extends LightningElement {

    letterhandler(event){
        var VarvalueFromHtmlToJs = event.target.value;
        alert('Hi ' + VarvalueFromHtmlToJs + '!')
    }

    fullName = 'Soubhagya';
    
    changeNameHandler(event){
        this.fullName = 'Harry';
    }
}