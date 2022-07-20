import { Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then(/^inventory must list (.*)$/,async function(NumOfProducts){
    if(!NumOfProducts){
        throw console.error(`Invalid argument : ${NumOfProducts}`);        
    }
    let items = await $$(`.inventory_item_name`);
    chai.expect(items.length).to.equal(parseInt(NumOfProducts));  

    await browser.pause(3000);
})

/*
1. get price
2. convert to num
3. assert the value
*/
Then(/^Validate all products have valid prices$/,async function(){
    let prices = await $$(`.inventory_item_price`);
    let tempArr = [];
    for(let i=0;i < prices.length; i++){
        let price = await prices[i].getText();
        tempArr.push(price);
    }
    console.log(`>> Prices : ${tempArr}`);

    let pricesNum = tempArr.map(elem => parseFloat(elem.replace("$","")));
    console.log(`>> price list : ${pricesNum}`);

    //Prices greater than 0
    let pricesInvNum = pricesNum.filter(elem => elem<=0);
    chai.expect(pricesInvNum.length).to.equal(0);
})