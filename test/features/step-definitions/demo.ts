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

Given(/^A webpage is opened$/, async function(){
    console.log('Before opening browser...');
    await browser.url("/inputs");
    await browser.setTimeout({implicit:15000,pageLoad: 10000}); //wait for 15 seconds for the element to appear & pageload applicable to entire page
    await browser.maximizeWindow();
    await browser.pause(5000);
    //await browser.closeWindow();
    //await browser.pause(5000);
    console.log('After opening browser...');
})

When(/^perform web interactions$/,async function(){
    /*
        Actions:
        1. Click on the input hyperlink
        2. Type into input box
        3. click and type
        4. Slow Typing
    */
    let num = 12345
    let strNum = num.toString();
    let elem = await $(`input[type=number]`);
    await elem.click();
    //await elem.setValue(num);

    for(let i=0; i<strNum.length; i++){
        let numChar = strNum.charAt(i);
        await browser.pause(1000);
        await browser.keys(numChar);
    }
    
    //await browser.debug();
})
