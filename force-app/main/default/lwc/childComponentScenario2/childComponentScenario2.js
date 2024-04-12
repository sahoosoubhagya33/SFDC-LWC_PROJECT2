import { LightningElement, api } from 'lwc';

export default class ChildComponentScenario2 extends LightningElement {

    @api childCompName = 'Intelogik Child Component';
    @api childCompDetails = 'This component will be given discount';

    // handleClickEvent(){
    //     const evt = new CustomEvent('mycustomevent', {

    //         detail: 
    //         {
    //             childCompName:this.childCompName,
    //             childCompDetails:this.childCompDetails
    //         }
    //     });

    //         this.dispatchEvent(evt);
    // }

    handlebuttonEvent(){
        const evt = new CustomEvent('mycustomevent',{

            detail:
            {
                childCompName:this.childCompName,
                childCompDetails:this.childCompDetails
            }
        });

        this.dispatchEvent(evt);
    }
}