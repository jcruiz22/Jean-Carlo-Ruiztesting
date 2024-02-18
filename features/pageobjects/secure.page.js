const { $ } = require('@wdio/globals');


class SecurePage  {

    get headerTitle () {
        return $('.vy-journey_header_title');
    }

    switch () {
       browser.switchWindow('https://tickets.vueling.com/ScheduleSelectNew.aspx')
    }
}

module.exports = new SecurePage();
