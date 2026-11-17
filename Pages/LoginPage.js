const { expect } = require('@playwright/test')

exports.Loginpage = class LoginPage {

    /**
     * 
     * @param {import('@playwright/test').page} page 
     */

    constructor(page) {

        this.page = page;
        this.username = page.locator('//input[@placeholder="Username"]');
        this.password = page.locator('//input[@placeholder="Password"]');
        this.login = page.locator('//input[@id="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');


    }
    async LaunchApplication() {

        await this.page.goto("https://www.saucedemo.com/")

    }

    async LoginApplication(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.login.click();

    }
}
//module.exports = LoginPage;