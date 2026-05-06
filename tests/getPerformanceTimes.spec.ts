import { test, expect } from '@playwright/test';
import {getPastDates} from "./utils";
test('test', async ({ page }) => {
  await page.goto('https://pacsviz.xyz/landing/index.html');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('king');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('King@2026');
  await page.getByRole('button', { name: 'Log In' }).click();
  await getPastDates(page,1);
  console.log(`try to apply filter text`)

  let time = await page.getByTitle(/^Last Updated:/).getAttribute('title');
  console.log(`time: ${time}`);
});
