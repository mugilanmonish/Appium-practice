import { remote } from 'webdriverio';
import { Key } from "webdriverio";
const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  'appium:appPackage': 'com.hm.goe',
  'appium:appActivity': '.app.home.HomeActivity',

};

const wdOpts = {
  hostname: 'localhost',
  port: 4723,
  logLevel: 'info',
  capabilities,
};

async function firstTest() {
  const driver = await remote(wdOpts);
  await driver.unlock()
  const languageSrollable = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Australia/English"))';
  const languageEle = await driver.$(`android=${languageSrollable}`);
  await languageEle.click()
  await driver.$('new UiSelector().resourceId("com.hm.goe:id/btn_accept_cookies")').click()
  await driver.$('new UiSelector().resourceId("android:id/button2")').click()
}
async function swipe() {
  const driver = await remote(wdOpts);
  const languageSrollable = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Australia/English"))';
  const languageEle = await driver.$(`android=${languageSrollable}`);
  await languageEle.click()
  await driver.$('//android.widget.Button[@resource-id="com.hm.goe:id/btn_accept_cookies"]').click()
  await driver.$('//android.widget.Button[@resource-id="android:id/button2"]').click()
  await driver.$('android=new UiSelector().className("android.widget.ImageButton").instance(0)').click()
}
// await firstTest()
await swipe()