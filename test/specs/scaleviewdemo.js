import { remote } from 'webdriverio';
import { Key } from "webdriverio";

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android',
    'appium:appPackage': 'com.davemorrissey.labs.subscaleview.sample',
    'appium:appActivity': 'com.davemorrissey.labs.subscaleview.sample.MainActivity',
};

const wdOpts = {
    hostname: 'localhost',
    port: 4723,
    logLevel: 'info',
    capabilities,
};

async function firstTest() {
    const driver = await remote(wdOpts)
    await driver.$('android=new UiSelector().resourceId("com.android.permissioncontroller:id/continue_button")').click()
    await driver.$('android=new UiSelector().resourceId("android:id/button1")').click()
    await driver.$('android=new UiSelector().resourceId("com.davemorrissey.labs.subscaleview.sample:id/basicFeatures")').click()
    await driver.pause(3000)
    const image = await driver.$('//android.widget.TextView[@resource-id="com.davemorrissey.labs.subscaleview.sample:id/advancedEventHandling"]')
    await driver.pause(5000)
    // const startPercentage = 10;
    // const endPercentage = 90;
    // const anchorPercentage = 50;
    const { width, height } = await driver.getWindowSize();
    // const anchor = height * anchorPercentage / 100;
    // const startPoint = width * startPercentage / 100;
    // const endPoint = width * endPercentage / 100;
    driver.execute('mobile: tap', { elementId: image.elementId, width: 350, height: 800 });

    // Perform the double tap
    // await driver.touchPerform([
    //     {
    //         action: 'press',
    //         options: {
    //             x: startPoint,
    //             y: anchor,
    //         },
    //     },
    //     {
    //         action: 'wait',
    //         options: {
    //             ms: 100,
    //         },
    //     },
    //     {
    //         action: 'moveTo',
    //         options: {
    //             x: endPoint,
    //             y: anchor,
    //         },
    //     },
    //     {
    //         action: 'release',
    //         options: {},
    //     },
    // ]);
}
await firstTest()