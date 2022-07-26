import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login to saucedemo.com webpage$/,async function(){
    console.log(`>> User Name : ${process.env.TEST_STD_USERNAME}`);
    console.log(`>> Password : ${process.env.TEST_STD_PASSWORD}`);
    /* Launch browser */
    //@ts-ignore
    await browser.url(browser.config.sitURL);
    //console.log(`>> demo url ->> ${JSON.stringify(browser.config)}`);
    await browser.setTimeout({implicit:15000,pageLoad:10000});
    await browser.maximizeWindow();
    
    /* Login to the webpage*/
    await (await $(`#user-name`)).setValue(process.env.TEST_STD_USERNAME);
    await (await $(`#password`)).setValue(process.env.TEST_STD_PASSWORD);
    await $(`#login-button`).click();

    await browser.pause(3000);

})
