import { Key } from "webdriverio";
describe('Flipkart Test', () => {
    it('should open Flipkart homepage', async () => {
        // await browser.url('https://www.flipkart.com');
        // try {
        //     const pageTitle = await browser.getTitle();
        //     console.log(`Page title is: ${pageTitle}`);
        //     expect(pageTitle).toContain('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
        // } catch (error) {
        // }
        // await browser.pause(5000)
        // let searchBar = await $("input[name='q']")   
        // await searchBar.waitForDisplayed()
        // await searchBar.
        // await searchBar.setValue("Iphone")
        // await browser.keys(Key.Enter)
        const searchBarSelector = 'new UiSelector().resourceId("com.flipkart.android:id/iv_checkbox").instance(3)'
        const languageButton =await $(`android=${searchBarSelector}`)
        await languageButton.click()
        await $('//android.widget.Button[@resource-id="com.flipkart.android:id/select_btn"]').click()
        await driver.pause(4000)
    });
});