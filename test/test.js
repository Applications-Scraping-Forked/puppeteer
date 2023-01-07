const puppeteer = require('puppeteer');
const { join } = require('path');
let fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://news.ycombinator.com', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({ path: 'test.pdf', format: 'a4' });
  
  let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};

  
fs.writeFile ("input.json", JSON.stringify(student), function(err) {
    if (err) throw err;
    console.log('complete');
    console.log(fs.readFileSync("input.json", "utf8"));
} 
);

  await browser.close();
})();
