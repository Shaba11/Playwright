const { test, expect } = require('@playwright/test');
const LoginPage = require('../Pages/LoginPage');
const fs=require('fs');
const path=require('path');
const {parse}=require('csv-parse/sync')

const csvPath = path.join(__dirname, '../Test_Data/LoginData.csv');

const records = parse(
    fs.readFileSync(csvPath, 'utf-8'),
    {
        columns: true,
        skip_empty_lines: true,
        trim: true
    }
)
for (const data of records) {

    test.only(`Login test ${data.username}`, async ({page }) => {
        
        const login = new LoginPage(page);
        await login.LaunchApplication();
        await login.LoginApplication(data.username, data.password);

        if (data.expected === 'success') {
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        } else {
            await expect(login.errorMessage).toBeVisible();
        }
    });
};

