
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const five = await $('//android.widget.Button[@resource-id="com.coloros.calculator:id/digit_5"]')
        const eight = await $('//android.widget.Button[@resource-id="com.coloros.calculator:id/digit_8"]')
        const plus = await $('//android.widget.Button[@content-desc="Add"]')
        const equal = await $('//android.widget.Button[@resource-id="com.coloros.calculator:id/img_eq"]')
        const output = await $('//android.widget.TextView[@resource-id="com.coloros.calculator:id/result"]')

        await five.click()
        await plus.click()
        await eight.click()
        await equal.click()
        const result = await output.getText()
        console.log(`******************************************${result}**********************************************`);
        console.log("APP LAUCHED SUCCESSFULLY");
        
    })
})