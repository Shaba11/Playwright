const { test, expect } = require('@playwright/test')
const LoginPage = require('../Pages/LoginPage');
const TestData = JSON.parse(JSON.stringify(require('../Test_Data/TestLoginData.json')))



test.describe("validate the login with different username", function () {

    TestData.forEach((data) => {

        if (!data.run == 'true') return;
        console.log(!data.run);

        test(`Login test ${data.username}`, async ({ page }) => {

            const login = new LoginPage(page);
            await login.LaunchApplication();
            await login.LoginApplication(data.username, data.password);

            if (data.expected === 'success') {
                await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            } else {
                await expect(login.errorMessage).toBeVisible();
            }
        });
    })
});