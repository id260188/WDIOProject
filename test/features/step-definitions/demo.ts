import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^user launches webbrowser$/, async function(){
    console.log('Before opening browser...');
    await browser.url("https://www.google.com");
    await browser.maximizeWindow();
    await browser.pause(5000);
    console.log('After opening browser...');
})

When(/^search with (.*)$/, async function(searchItem){
    console.log(`>> searchItem: ${searchItem}`);
    let elem = await $(`[name=q]`);
    await elem.setValue(searchItem);
    await browser.keys("Enter");
})

When(/^click on the first search result$/,async function() {
    let elem = await $(`<h3>`);
    elem.click();
})

Then(/^url should match with (.*)$/, async function(ExpectedUrl) {
    console.log(`>> Expected URL : ${ExpectedUrl}`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(ExpectedUrl);
    console.log('>>>>>>>>>>>>>Execution ends>>>>>>>>>>>');

})
