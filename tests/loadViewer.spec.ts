import { test, expect } from '@playwright/test';
import { selStudyDatesCalendar, selectStudy} from "./utils";

test('test', async ({ page }) => {
    let userNumber=5;
    test.setTimeout(300000000);

    await page.goto('https://webviz.xyz');
    await page.waitForTimeout(1000);
    page.on('console',(msg)=> {
        console.log(msg);
    })
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('king');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('King@2026');
    await page.getByRole('textbox', { name: 'Password' }).press('Enter');
    await selStudyDatesCalendar(page,4,3);

    for (let i = 0;i < 10000;i++) {

        await selectStudy(page,'RAMULLAMMA',false);
        await page.waitForTimeout(2000);
        await page.locator('#iFrameDiv iframe').contentFrame().locator('div:nth-child(7) > div > div > .relative > .text-center').click();
        await page.waitForTimeout(2000);

        await page.locator('#iFrameDiv iframe').contentFrame().locator('div').filter({ hasText: /^MPR$/ }).first().click();
        for (let j=0;j< 10;j++) {
            await page.waitForTimeout(1000);
            await page.locator('#iFrameDiv iframe').contentFrame().locator('body').press('ArrowUp');
        }



        console.log(`iteration: ${i}`)

        await page.getByRole('button', { name: 'file x' }).click();
    }


    console.log('try scrolling now')
    await page.pause();



});
