import { test, expect } from '@playwright/test';
import { selStudyDatesCalendar, selectStudy} from "./utils";

test('test', async ({ page }) => {
    let userNumber=5;
    test.setTimeout(300000);
    const userNumberStr = process.env.USER_NUMBER
    userNumber = Number(userNumberStr);
    let userName='tomea' + userNumber.toString();
    await page.goto('https://webviz.xyz');
    await page.waitForTimeout(1000);
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('king');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('King@2026');
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');
    await selStudyDatesCalendar(page,4,3);
    for (let i = 0;i < 10;i++) {

        await selectStudy(page,'RAMULLAMMA',false);
        await page.getByRole('button', { name: 'file x' }).click();
    }


    console.log('try scrolling now')
    await page.pause();



});
