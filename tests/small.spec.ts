import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webviz.xyz');
      await page.waitForTimeout(1000);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Admin@2026');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.pause();
});
