npm start &
npx playwright install
npx playwright install-deps
npx playwright test -c ./playwright.config.ts
chmod -R 777 /dhbworkout-webapp-test-results