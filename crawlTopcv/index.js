const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.setViewport({ width: 1280, height:720 });
  await page.goto('https://www.topcv.vn/viec-lam', { waitUntil: 'networkidle2'});
  await page.waitForSelector('.btn-outline-primary');
  await page.click('.btn-outline-primary');
  await page.waitForSelector('[name="email"]');
  await page.waitForSelector('#password');
  await page.type('[name="email"]', 'nguyenbach19122002@gmail.com');
  await page.type('#password', 'bach1912');
  await page.click('.form-group.mt-3');
  await page.waitForNavigation();
  await page.goto('https://www.topcv.vn/cai-dat-goi-y-viec-lam');
  const categories = await page.evaluate(() =>
    Array.from(document.querySelectorAll('#type_selector option')).map((element, index)=>({id: index, content: element.innerHTML})).slice(1)
  );

  //console.log(JSON.stringify(categories));
  fs.writeFile('types.json', JSON.stringify(categories), (err) => {
    if(err) {
        console.error(err); return;
    } else {
        console.log('created categories json file')
    }
  });
  await browser.close();
})();
