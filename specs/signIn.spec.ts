import {test, chromium, Browser, BrowserContext, Page, expect} from '@playwright/test';
import { HomePage} from '../pages/home.page';
import { SignInPage } from '../pages/signIn.page';
import * as data from '../data/test.data.json';


test.describe("This feature will make sure that the shop page is navigable and usable", async() => {
    let browser: Browser;
    let context: BrowserContext; 
    let page: Page;
    let homepage : HomePage;
    let signinpage : SignInPage;
    
    test.beforeAll(async () =>{
        browser = await chromium.launch({headless: false});
        context = await browser.newContext();
        page = await context.newPage();
        homepage = new HomePage(page);
        signinpage = new SignInPage(page);
    });

    test.afterAll(async () =>{
        await browser.close();
        await context.close();
    });

    test('Launch sky page', async() => {
        test.info().annotations.push(({
            type:'Test',
            description: 'This is test description'
        }))
        
        await homepage.navigate(); 
        expect(page.url(),"Checking page url is Sky page").toBe(data.skyhomepageurl);

        await homepage.supressalert();
       
        await signinpage.signInBtn();
        await signinpage.captureHeader(data.signinpagetitle) ;
        
        await signinpage.enterUserName(data.username);
       
        await signinpage.clickContinueBtn();
        
        await signinpage.captureHeader(data.ceatecoountpagetitle);
        // const createpwdPage = await signinpage.captureHeader();
        // expect(createpwdPage,"Create Mysky password page is displayed").toEqual(data.ceatecoountpagetitle);
       
    });

});
