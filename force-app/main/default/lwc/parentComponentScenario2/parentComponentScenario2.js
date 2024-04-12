import { LightningElement } from 'lwc';

export default class ParentComponentScenario2 extends LightningElement {

    handleChildEvent(event){
        const varchildCompName= event.detail.childCompName;
        const varchildCompDetails= event.detail.childCompDetails;

        alert('Event handled in parent component !');
        alert('Now data comes from child component');
        alert('Child component name = ' + varchildCompName);
        alert('Child component description i= ' + varchildCompDetails);
    }
}