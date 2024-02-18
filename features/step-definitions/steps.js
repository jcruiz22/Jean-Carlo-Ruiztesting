const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const Login = require('../pageobjects/login');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: Login
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await pages[page].cookieBanner()
});

When(/^I select (.*), (.*) and (.*)$/, async (originInput, destinationInput, outboundDate) => {
    await Login.details(originInput, destinationInput, outboundDate)
    
});

Then(/^I should see a page with the available flights and the following message: (.*)$/, async (message) => {

    SecurePage.switch();
    await expect(SecurePage.headerTitle).toBeExisting();
    await expect(SecurePage.headerTitle).toHaveTextContaining(message);
});

