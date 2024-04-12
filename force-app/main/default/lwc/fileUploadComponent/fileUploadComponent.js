import { LightningElement, api } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class FileUploadComponent extends LightningElement {

    @api
    myRecordId;

    get acceptedFormats() {
        return ['.pdf', '.png'];
    }

    handleUploadFinished(event) {

        let uploadFilesName = '';
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;

        for (let i = 0; i < uploadedFiles.length; i++) {
            uploadFilesName += uploadedFiles[i].name + ', ';
            
        }
        //alert(uploadedFiles.length + ' No. of files uploaded : ' + uploadFilesName);

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: uploadedFiles.length + ' Files uploaded successfully : ' + uploadFilesName,
                variant: 'success',
            }),
        );
    }
}