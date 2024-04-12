import { LightningElement } from 'lwc';

export default class ForEachLoopComponent extends LightningElement {

    ceoList;

    showCeoList(){
        this.ceoList = [
            {
                id: 1,
                name: 'Mark Zukerbag',
                title: 'CEO of Facebook',
            },
            {
                id: 2,
                name: 'Mark Benioff',
                title: 'CEO of Salesforce',
            },
            {
                id: 3,
                name: 'Sundar Pichae',
                title: 'CEO of Google',
            },
            {
                id: 4,
                name: 'Satya Nadella',
                title: 'CEO of Microsoft',
            },
            {
                id: 5,
                name: 'Aman Dhatrwal',
                title: 'CEO of Boat',
            },
            {
                id: 6,
                name: 'Mukesh Ambani',
                title: 'CEO of Reliance',
            }
        ]
    }
}