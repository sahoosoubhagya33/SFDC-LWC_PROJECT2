import { LightningElement } from 'lwc';

export default class TimeCounterComponent extends LightningElement {

    timeVal = '0 : 0 : 0 : 0';
    showStartBtn = true;
    timemillisecond = 0;
    timeIntervalInstance;

    startHandler(event){
        this.showStartBtn = false;
        var parentThis = this;

        this.timeIntervalInstance = setInterval(function(){

            var hours= Math.floor((parentThis.timemillisecond % (24*60*60*1000)) / (60*60*1000));
            var minutes= Math.floor((parentThis.timemillisecond % (60*60*1000)) / (60*1000));
            var seconds= Math.floor((parentThis.timemillisecond % (60*1000)) / (1000));
            var milliseconds= Math.floor((parentThis.timemillisecond % (1000)));

            parentThis.timeVal = hours + " : " + minutes + " : " + seconds + " : " + milliseconds;
            parentThis.timemillisecond += 100;
        }, 100);
    }
    stopHandler(event){
        this.showStartBtn = true;
        clearInterval(this.timeIntervalInstance);
    }
    resetHandler(event){
        this.showStartBtn = true;
        this.timemillisecond = 0;
        this.timeVal = '0 : 0 : 0 : 0';
        clearInterval(this.timeIntervalInstance);
    }
}