import { Key } from "webdriverio";
import { remote } from 'webdriverio';

const capabilities = {
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'narzo 50A',
    "appium:browserName": "chrome",
};

const wdOpts = {
    hostname: 'localhost',
    port: 4723,
    logLevel: 'info',
    capabilities,
};

async function firstTest() {
    const driver = await remote(wdOpts)
    await driver.unlock()
    await driver.url('https://www.ajio.com/')
    const frame=await driver.$('//iframe[@id="wiz-iframe-intent"]')
    await driver.switchToFrame(frame)
    await driver.$('//div[@class="CT_Interstitial"]//span[@class="CT_InterstitialClose"]').click()
    await driver.switchToParentFrame()
    await driver.$('(//img[@alt="ajio"])[1]').click()
    await driver.$('(//div[@role="button"])[1]').click()
    await driver.$('.header-search-text').click()
    await driver.$('input[id=searchBox]').addValue('Mens shirt')
    await driver.keys(Key.Enter)
    await driver.$('//a[@href="/campus-sutra-men-ribbed-regular-fit-shirt/p/467293008_brown"]').click()
    await driver.$('//strong[text()="+ More"]').click()
    await driver.pause(10000)
    const questions = await driver.$$('//div[@class="_3oP6G"]/descendant::strong')
}
firstTest()