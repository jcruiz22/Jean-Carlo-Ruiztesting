const { browser } = require('@wdio/globals')

module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.vueling.com/es`)
    }

    async cookieBanner() {
        const cookieAcceptButtonSelector = '#onetrust-accept-btn-handler'
        const cookieAcceptButton = await $(cookieAcceptButtonSelector)
        if (cookieAcceptButton.isDisplayed()) {
            await cookieAcceptButton.click()
        }
    }

    
}
