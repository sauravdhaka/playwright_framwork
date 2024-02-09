// import { playAudit } from 'playwright-lighthouse';
// import playwright from 'playwright';

// describe('audit example', () => {
//   it('open browser', async () => {
//     const browser = await playwright['chromium'].launch({
//       args: ['--remote-debugging-port=9222'],
//     });
//     const page = await browser.newPage();
//     await page.goto('https://angular.io/');

//     await playAudit({
//       page: page,
//       port: 9222,
//     });

//     await browser.close();
//   });
// });a