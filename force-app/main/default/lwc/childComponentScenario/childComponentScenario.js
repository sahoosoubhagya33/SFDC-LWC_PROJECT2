import { LightningElement, api} from 'lwc';

export default class ChildComponentScenario extends LightningElement {

    @api msgfromparent;
    @api projectcode;
}