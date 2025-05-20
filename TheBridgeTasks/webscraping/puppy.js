import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250
    });

    const page = await browser.newPage();
    await page.goto('https://tienda.consum.es/es/c/ofertas-supermercado/99999?showRecommendations=false&orderById=1&page=1');

    const searchNameSelector = '.u-no-link ng-tns-c1280268831-8 ng-star-inserted'
    await page.waitForSelector(searchNameSelector);
    
})();