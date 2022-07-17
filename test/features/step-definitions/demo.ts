import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

/*
Given(/^user launches webbrowser$/, async function(){
    console.log('Before opening browser...');
    await browser.url("https://the-internet.herokuapp.com/tables");
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

})*/

Given(/^A webpage is opened$/, async function(){
    console.log('Before opening browser...');
    await browser.url("/tables");
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
    //Input data slowly
    /*
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
    */
    //Select data from dropdown
    // let elem = await $(`//select/option[@selected="selected"]`);
    // let val = await elem.getText();
    // chai.expect(val).to.equal("Please select an option");
    // await browser.pause(5000);

    //select by attribute or text or index
    //let elem = await $(`#dropdown`);
    //await elem.selectByVisibleText("Option 1");
    // await elem.selectByAttribute("value","2");
    // //await elem.selectByIndex(2);

    //Retreive all options
    // let elemArr = await $$(`//select/option`);
    // let arr = [];
    // for(let i=0;i<elemArr.length;i++){
    //         let elem = elemArr[i];
    //         let val = await elem.getText();
    //         console.log(val);
    //         arr.push(val);
    // }
    // //await browser.pause(5000);
    // console.log(`>> options array : ${arr})`);

    //Select a checkbox, assert and select all options
    // let elem = await $(`//form[@id="checkboxes"]/input[2]`);
    // let selStatus = await elem.isSelected();
    // chai.expect(selStatus).to.be.true;
    // if(selStatus){
    //     await elem.click();
    // }

    // let elemArr = await $$(`//form[@id="checkboxes"]/input`);
    // for(let i=0; i < elemArr.length;i++){
    //     let ele = elemArr[i];
    //     if(!await ele.isSelected()){
    //         ele.click();
    //     }
    // }

    //Multiple Window handling
    // await (await $(`=Click Here`)).click();
    // await (await $(`=Elemental Selenium`)).click();
    // let parentWinHandle = await browser.getWindowHandle();
    // let currWinTitle = await browser.getTitle(); 
    // console.log(`>> title : ${currWinTitle}`);
    // await browser.pause(3000);

    // let winHandles = await browser.getWindowHandles();
    // for(let i=0; i< winHandles.length; i++){
    //     console.log(`>> winHandles = ${winHandles[i]}`);
    //     await browser.switchToWindow(winHandles[i]);
    //     currWinTitle = await browser.getTitle();
    //     if(currWinTitle=="Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"){
    //         await browser.switchToWindow(winHandles[i]);
    //         let eleTitleTxt = await (await $(`<h1>`)).getText();
    //         console.log(eleTitleTxt);
    //         break;
    //     }
    // }

    // await browser.switchToWindow(parentWinHandle);
    // let parentTitle = await browser.getTitle();
    // let parentHdrTxt = await $(`<h3>`).getText();
    // console.log(`>> Parent Win Header Txt : ${parentHdrTxt}`);

    //JS alert handling
    //await (await $(`button=Click for JS Alert`)).click();
    //await (await $(`button=Click for JS Confirm`)).click();
    // await (await $(`button=Click for JS Prompt`)).click();
    // if(await browser.isAlertOpen()){
    //     //await browser.acceptAlert();
    //     let alertTxt = await browser.getAlertText();
    //     console.log(`>> Alert Text - ${alertTxt}`);
    //     await browser.sendAlertText("Hello Indradeep");
    //     await browser.acceptAlert();
    // }

    //Basic authentication validation -> just change the baseUrl in wdio.conf.ts

    //Upload function
    //await (await $(`#file-upload`)).addValue("../../data/dumy.txt");
    // await (await $(`#file-upload`)).addValue(`${process.cwd()}/data/dumy.txt`);
    // await (await $(`#file-submit`)).click();
    // await browser.pause(3000);

    /*
    Table handling
    */
   let rowCount = await $$(`//table[@id="table1"]/tbody/tr`).length;
   console.log(`>> Row Count = ${rowCount}`);
   let colCount = await $$(`//table[@id="table1"]/thead/tr/th`).length;
   console.log(`>> Row Count = ${colCount}`);
   chai.expect(rowCount).to.equal(4);
   chai.expect(colCount).to.equal(6);

   //Traverse through table rows
//    let arr = [];
//    for(let i=0;i < rowCount ; i++){
//         let personObj = {
//             lastName: "",
//             firstName: "",
//             email: "",
//             due: "",
//             website: "",
//         }
//         for(let j=0;j < colCount ;j++){
//             let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
//             //console.log(`>> Cell Value: ${cellVal}`);
//             if(j===0) personObj.lastName = cellVal;
//             if(j===1) personObj.firstName = cellVal;
//             if(j===2) personObj.email = cellVal;
//             if(j===3) personObj.due = cellVal;
//             if(j===4) personObj.website = cellVal;
       
//         }
//         arr.push(personObj);
//    }

//    console.log(`>> Entire table : ${JSON.stringify(arr)}`);

// let arr = [];
//    for(let i=0;i < rowCount ; i++){
//         let personObj = {
//             lastName: "",
//             firstName: "",
//             email: "",
//             due: "",
//             website: "",
//         }
//         for(let j=0;j < colCount ;j++){
//             let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[${j + 1}]`).getText();
//             let firstName = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText();
//             let lastName = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[1]`).getText();
//             //console.log(`>> Cell Value: ${cellVal}`);
//             if(firstName === "John" || lastName === "Bach"){
//                 if(j===0) personObj.lastName = cellVal;
//                 if(j===1) personObj.firstName = cellVal;
//                 if(j===2) personObj.email = cellVal;
//                 if(j===3) personObj.due = cellVal;
//                 if(j===4) personObj.website = cellVal;
//             }
            
       
//         }
//         if(personObj.firstName){
//             arr.push(personObj);
//         }
        
//    }

//   console.log(`>> Entire table : ${JSON.stringify(arr)}`);

/* single column iteration */
let arr = [];
for(let i=0; i< rowCount; i++){
    let cellVal = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`).getText();
    arr.push(cellVal);
}
    
console.log(`>> Column Values: ${arr}`);

//Get single value based on another cell value
let arr1 = [];
for(let i=0;i < rowCount; i++){
    let price = await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[4]`).getText();
    let firstName = await (await $(`//table[@id="table1"]/tbody/tr[${i + 1}]/td[2]`)).getText();
    if(parseFloat(price.replace("$","")) > 50){
        arr1.push(firstName);
    }
}

console.log(`>> High price items: ${arr1}`);
})
