import {expect} from "@playwright/test";

export const today = 0;
export const yesterday = 1;
export const past3days = 2;
export const past7days = 3;
export const past30days = 4;

export const past60days = 5;
export const past90days = 6;
export const past6Months = 7;
export const pastYear = 8;
export const login = async (page, id, pw) => {
    await page.getByRole('textbox', {name: 'Username'}).fill(id);
    await page.getByRole('textbox', {name: 'Username'}).press('Tab');
    await page.getByRole('textbox', {name: 'Password'}).fill(pw);
    await page.getByRole('button', {name: 'Log In'}).click();
    console.log(`am logged in for ${id} ?`)
    const refresher = await page.getByTitle(/^Refresh Worklist/);


    await expect.soft(refresher,`user id ${id} was not logged in`).toBeVisible();
    console.log(`---------------------------------logged in for ${id}`)
}
export const selectStudy = async (page, studyName,isLongitudinal=false) => {
    let viewMainRow = await page.getByRole('cell', {
        name: studyName,
    });
    const rowPar = await viewMainRow.locator('xpath=..');
    const rowtds = await rowPar.getByTitle('Desktop Viewer');
    //
    // CLICK THE FULL VIEWER FOR THE IDENTIFIED STUDY
    //
    await rowtds.click();
    if (isLongitudinal) {
        await page.getByRole('button', { name: 'Select None' }).click();
    }
    await page.waitForTimeout(5000);
}
export const selStudyDatesCalendar = async (page, numberYearsBack,numberMon) => {
    await page.waitForTimeout(1000);
    let matches = await page.getByText('2026').all()
    await matches[0].click();
    await page.waitForTimeout(1000);



    let calendar;
    for (let i = 0; i < numberYearsBack; i++) {
        calendar = await page.getByRole('button', {name: 'Previous year'});
        await calendar.click();
    }
    calendar = await page.getByRole('button', {name: 'Previous year'});
    await page.getByRole('button', {name: '1'}).filter({hasText: '15'}).click();
    await page.getByRole('button', {name: 'Apply Filter'}).click();

}
export const selFeb = async (page) => {
    await page.getByText('from:').click();
    await page.locator('body').press('Tab');
    await page.locator('body').click();
    await page.getByTitle('From Date').click();
    await page.waitForTimeout(1000);
    await page.getByRole('button',{name: '2/2/2026',exact:true}).click();
    await page.getByRole('button', { name: 'Apply Filter' }).click();



}
export const getPastDates = async (page, pastIndex) => {
    await page.waitForTimeout(5000);
    console.log(`now check`)
    let options = await page.getByRole('combobox').all();
    while ((options === null) || (options.length === 0)) {
        console.log(`May need to retry getting Study Dates: again`)
        await page.waitForTimeout(1000);

        options = await page.getByRole('combobox').all();
    }
    console.log(`got Study Dates: `);

    await options[0].selectOption('Past 7 days');
    await page.getByRole('button',{name: 'Apply Filter'}).click();
    await page.waitForTimeout(1000);

}
