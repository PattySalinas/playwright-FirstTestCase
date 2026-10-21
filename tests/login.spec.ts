import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('patty@test.com');
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('patty123!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#header')).toContainText('Home');
});