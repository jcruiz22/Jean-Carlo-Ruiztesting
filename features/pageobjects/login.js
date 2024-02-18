const { $ } = require('@wdio/globals');
const Page = require('./page');


class Login extends Page {

    get dropdownOrigin () {
        return $('#originInput');
    }

    get dropdownDestination () {
        return $('#destinationInput');
    }
    
    get outDate () {
        return $('#outboundDate');
    }

    get inputWay () {
        return $('#oneWayLabel');
    }   

    get nextPageBtn () {
        return $('#nextButtonCalendar');
    }

    get calendar () {
        return $('#calendarDaysTable202451');
    }

    get passengers () {
        return $('#passengersInputLabel');
    }

    get btnSubmit () {
        return $('#btnSubmitHomeSearcher');
    }


    async details (originInput, destinationInput, outboundDate) {

        await this.dropdownOrigin.click();
        await browser.keys(originInput)
        await browser.keys('\uE007'); 
        await browser.pause(1000);

    
        await browser.keys(destinationInput);
        await browser.keys('\uE007');
        await browser.pause(1000);
        await this.inputWay.click();
      

        let outDateValue = await this.outDate.getValue();
        while(outDateValue !== outboundDate) {
        await this.nextPageBtn.click();
        outDateValue = await this.outDate.getValue();
        }
        await this.calendar.click();
        await this.btnSubmit.click();
    }

}

module.exports = new Login();
