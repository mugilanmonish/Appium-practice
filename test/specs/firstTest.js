import { remote } from 'webdriverio';

describe('Calculator App Test', () => {
    const wdOpts = {
        capabilities: {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Android',
            'appium:appPackage': 'com.android.settings',
            'appium:appActivity': '.Settings',
        }
    };

    it('should add two numbers', async () => {
        const driver = await remote(wdOpts);
        driver.pause(5000)
        // const five = await driver.$('//android.widget.Button[@resource-id="com.coloros.calculator:id/digit_5"]')
        // const eight = await driver.$('//android.widget.Button[@resource-id="com.coloros.calculator:id/digit_8"]')
        // const plus = await driver.$('//android.widget.Button[@content-desc="Add"]')
        // const equal = await driver.$('//android.widget.Button[@resource-id="com.coloros.calculator:id/img_eq"]')
        // const output = await driver.$('//android.widget.TextView[@resource-id="com.coloros.calculator:id/result"]')

        // await five.click()
        // await plus.click()
        // await eight.click()
        // await equal.click()
        // const result = await output.getText()
        // console.log(`******************************************${result}**********************************************`);
        // console.log("APP LAUCHED SUCCESSFULLY");
    });

});