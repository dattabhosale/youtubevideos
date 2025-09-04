import { LightningElement, api } from 'lwc';
import {FlowAttributeChangeEvent} from 'lightning/flowSupport';

export default class UploadFile extends LightningElement {
    @api myRecordId;
    @api uploadedFileNames
    
    handleUploadFinished(event) {
        const uploadedFiles = event.detail.files;
        this.uploadedFileNames = uploadedFiles.map(x=> x.name);

    }
}