import { test, expect } from '@playwright/test';
import {wait} from "@testing-library/user-event/dist/utils";

test('has title', async ({ page }) => {
  await page.goto("https://www.dhbworkout.de/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DHBWorkout/);
  await expect(page).toHaveURL("https://www.dhbworkout.de/login")
});

test('loading message', async ({ page }) => {
  await page.goto('https://www.dhbworkout.de/');
  await page.getByPlaceholder('E-Mail-Adresse').click();
  await page.getByPlaceholder('E-Mail-Adresse').fill('king@king.com');
  await page.getByPlaceholder('Passwort').click();
  await page.getByPlaceholder('Passwort').fill('King');
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await page.getByRole('button', { name: 'Anmelden' }).click();
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await expect(page.getByText('Loading...')).toHaveText("Loading...")
});

test('wrong password', async ({ page }) => {
  await page.goto('https://www.dhbworkout.de/');
  await page.getByPlaceholder('E-Mail-Adresse').click();
  await page.getByPlaceholder('E-Mail-Adresse').fill('king@king.com');
  await page.getByPlaceholder('Passwort').click();
  await page.getByPlaceholder('Passwort').fill('Ling');
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await page.getByRole('button', { name: 'Anmelden' }).click();
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await expect(page.getByText('passwords do not match')).toHaveText('passwords do not match')
});

test('no email', async ({ page }) => {
  await page.goto('https://www.dhbworkout.de/');
  await page.getByPlaceholder('Passwort').click();
  await page.getByPlaceholder('Passwort').fill('King');
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await page.getByRole('button', { name: 'Anmelden' }).click();
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await expect(page.getByText('Bitte geben Sie Ihre E-Mail-Adresse ein')).toHaveText('Bitte geben Sie Ihre E-Mail-Adresse ein')
});

test('invalid email', async ({ page }) => {
  await page.goto('https://www.dhbworkout.de/');
  await page.getByPlaceholder('E-Mail-Adresse').click();
  await page.getByPlaceholder('E-Mail-Adresse').fill('test');
  await page.getByPlaceholder('Passwort').click();
  await page.getByPlaceholder('Passwort').fill('King');
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await page.getByRole('button', { name: 'Anmelden' }).click();
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await expect(page.getByText('Bitte geben Sie eine gültige E-Mail-Adresse ein')).toHaveText('Bitte geben Sie eine gültige E-Mail-Adresse ein')
});

test('unused email', async ({ page }) => {
  await page.goto('https://www.dhbworkout.de/');
  await page.getByPlaceholder('E-Mail-Adresse').click();
  await page.getByPlaceholder('E-Mail-Adresse').fill('dfghjk@lkjhgfd.de');
  await page.getByPlaceholder('Passwort').click();
  await page.getByPlaceholder('Passwort').fill('King');
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await page.getByRole('button', { name: 'Anmelden' }).click();
  // eslint-disable-next-line testing-library/prefer-screen-queries
  await expect(page.getByText('a user with the email dfghjk@lkjhgfd.de does not exist')).toHaveText('a user with the email dfghjk@lkjhgfd.de does not exist')
});