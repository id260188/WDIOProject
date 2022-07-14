import { Given } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Login to saucedemo.com webpage$/,async function(){
    /* Launch browser */
    await browser.url("https://www.saucedemo.com/");
    await browser.setTimeout({implicit:15000,pageLoad:10000});
    await browser.maximizeWindow();
    
    /* Login to the webpage*/
    await (await $(`#user-name`)).setValue("standard_user");
    await (await $(`#password`)).setValue("secret_sauce");
    await $(`#login-button`).click();

    await browser.pause(3000);

})
