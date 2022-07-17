const puppeteer = require('puppeteer');
const credentials = require('./config/credentials.json');
const textForPublication = require('./config/publish_my_certificate.json');
const socialProfile = textForPublication.socialProfile;

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://linkedin.com');
    await page.click('#session_key');
    await page.keyboard.type(credentials.email);
    await page.click('#session_password');
    await page.keyboard.type(credentials.password);
    await page.keyboard.press('Enter');
    await page
        .waitForSelector('.share-box-feed-entry__trigger')
        .then(() => console.log('...Botão de publicação carregado'));

    await page.focus('.share-box-feed-entry__trigger');
    await page.keyboard.press('Enter');
    await page
        .waitForSelector('.ql-editor')
        .then(() => console.log('...Modal Prontito!'));
    await page.keyboard.type(textForPublication.textA);
    await page.keyboard.type(socialProfile);
    await page
        .waitForSelector('.editor-typeahead-fetch')
        .then(() => console.log('...Tooltip Deu Brasil!'));
    await page.waitForTimeout(2000);
    await page.keyboard.press('ArrowDown');
    await page.waitForTimeout(2000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    await page.keyboard.type(textForPublication.textB);
    await page.waitForTimeout(4000);
    await page.keyboard.type(textForPublication.imageURI);
    await page.waitForTimeout(7000);


    await page.click('.share-box_actions button');

    // await browser.close();
})();

async function sleep(ms) {
    console.log('Esperando...')
    return new Promise(resolve => setTimeout(resolve, ms));
}