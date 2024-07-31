import { remote } from 'webdriverio';
import { Key } from "webdriverio";
const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  // "appium:browserName": "chrome",
  'appium:appPackage': 'com.myntra.android',
  'appium:appActivity': 'com.myntra.android.activities.react.ReactActivity',

};

const wdOpts = {
  hostname: 'localhost',
  port: 4723,
  logLevel: 'info',
  capabilities,
};

(async function () {
  const driver = await remote(wdOpts);
  await driver.unlock()
  await driver.$('//android.widget.Button[@resource-id="com.myntra.android:id/closeDialog"]').click()
  await driver.$('//android.widget.ImageView[@content-desc="search"]').click()
  const searchBar = await driver.$('//android.widget.EditText[@content-desc="search_default_search_text_input"]')
  await searchBar.setValue('Shirt')
  await driver.keys(Key.Enter)
  const filter = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().className("android.view.View").instance(0))';
  await driver.$(`android=${filter}`)
  const menSrollable = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Men"))';
  const men = await driver.$(`android=${menSrollable}`);
  await men.click()
  const applyFilterScrollable = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("APPLY FILTERS"))'
  await driver.$(`android=${applyFilterScrollable}`).click()
  await driver.pause(5000)
  await driver.deleteSession()
})();  