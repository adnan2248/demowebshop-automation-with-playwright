
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  reporter: 'list',

  use: {
    baseURL: 'https://demowebshop.tricentis.com/',
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  }
});
