import { Key } from "webdriverio";
// import { remote } from 'webdriverio';

// const capabilities = {
//     platformName: 'Android',
//     'appium:automationName': 'UiAutomator2',
//     'appium:deviceName': 'Android',
//     "appium:browserName": "chrome",
// };

// const wdOpts = {
//     hostname: 'localhost',
//     port: 4723,
//     logLevel: 'info',
//     capabilities,
// };

// async function launch() {
//     const driver = await remote(wdOpts)
//     await driver.url("https://www.flipkart.com/")
//     await driver.pause(5000)
//     const searchBar = await driver.$('//input[@placeholder="Search for Products, Brands and More"]')
//     await searchBar.click()
//     await searchBar.addValue('Iphone')
//     await driver.pause(5000)
//     // await driver.
// }
// launch()
describe('Mobile Web Test', () => {
    it('should search for an item on Flipkart', async () => {
        if (browser.isLocked) {
            await browser.unlock()   
        }
        await browser.url('https://www.flipkart.com');
        await browser.$("//div[text()='Search for Products, Brands and More']").click()
        await browser.$("//input[@placeholder='Search for Products, Brands and More']").addValue('realme narzo 50a')
        await browser.keys(Key.Enter)
        await browser.pause(10000)
        const mobileEle = await browser.$("(//div[@class='css-175oi2r'])[129]")
        // const priceEleLoc = await priceEle.getLocation()
        // await browser.execute(
        //     (x,y) => {
        //      window.scrollTo(x,y);
        //     }, priceEleLoc.x,priceEleLoc.y
        // )
        // await browser.pause(4000)
        await mobileEle.click()
        const processor = await browser.$("//div[text()='RAM | ROM ']/following-sibling::div").getText()
        console.log(`*********************************${processor}*********************************************`);
        await browser.$("//div[text()='All Details']").click()
        await browser.pause(5000)
    });
});