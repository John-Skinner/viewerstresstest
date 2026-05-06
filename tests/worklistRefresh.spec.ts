import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';
import * as utils from './utils'
import {getPastDates,selFeb} from "./utils";
async function worklistRefresh(ith) {
    const browser = await chromium.launch();

    let ctxt = await browser.newContext();

    const page = await ctxt.newPage();



    await page.goto('https://pacsviz.xyz/landing/index.html');
    await page.getByRole('link', { name: 'Login' }).click();
    console.log('clicked login');
    const pw = 'King@2026';
    const userIds = [
        'king',
        'maany451',
        'many201',
        'many202',
        'many203',
        'many204',
        'many205',
        'many206',
        'many207',
        'many208',
        'many209',
        'many210',
        'many211'];


    let randIndex = (ith % userIds.length);
    console.log(`logging in with user: ${userIds[randIndex]}`);

    await utils.login(page,userIds[randIndex],pw);
    let startListTime=Date.now();
    await selFeb(page);
    let endListTime=Date.now();
    console.log(`time secs: ${(endListTime-startListTime-5000)/1000}`) // subtract 5000 from waitForTimeout in getPastDates
    await page.waitForTimeout(1000);
    for (let i = 0;i < 200;i++) {
        console.log('try refresh')
        await page.getByRole('button', { name: 'arrow clockwise' }).click();
        await page.waitForTimeout(1000);
        let time = await page.getByTitle(/^Last Updated:/).getAttribute('title');
        console.log(`time: ${time}`);
    }
}
test( 'test',async () => {

    console.log('hi');
    let refreshList = [];
    for (let i = 0; i < 30; i++) {
        refreshList.push(worklistRefresh(i));
    }
    await Promise.all(refreshList);
    console.log('done with all');
});





