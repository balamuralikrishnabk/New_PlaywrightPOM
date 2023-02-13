import {test, chromium, Browser, BrowserContext, Page} from '@playwright/test';
import { MobileShopPage} from '../pages/mobileshop.page';
import { HomePage } from '../pages/home.page';


test.describe("This feature will make sure that the shop page is navigable and usable", async() => {
    let browser: Browser;
    let context: BrowserContext; 
    let page: Page;
    let homepage : HomePage;
    let mobileshoppage : MobileShopPage;
    
    test.beforeAll(async () =>{
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        homepage = new HomePage(page);
        mobileshoppage = new MobileShopPage(page);
    });

    test.afterAll(async () =>{
        await browser.close();
        await context.close();
    });

    test('Mobile shop deals', async() => {
        await mobileshoppage.navigate(); 
        await homepage.supressalert();
 
        await mobileshoppage.captureMobiledealsDetails();
      //  await mobileshoppage.captureProductDetails();
        
    });
});