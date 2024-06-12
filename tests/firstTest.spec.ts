import {test} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('localhost:4200')
})

test.describe.skip('suite1', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Charts').click()
    })
    test('the first test', async ({ page }) => {
        await page.getByText('Form Layouts').click()
    })

    test('date picker check', async ({ page }) => {
        await page.getByText('Date Picker').click()
    })
})

test.describe('suite1', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByText('Forms').click()
    })
    test('the first test', async ({ page }) => {
        await page.getByText('Form Layouts').click()
    })

    test('date picker check', async ({ page }) => {
        await page.getByText('Date Picker').click()
    })
})
