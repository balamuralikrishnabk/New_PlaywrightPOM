
import {expect, FrameLocator, Locator, Page,test } from '@playwright/test';
import { BasePage} from '../pages/base.page';
import * as data from '../data/test.data.json';

export class SignInPage extends BasePage{
    readonly signinBtn: string;
    readonly signinIframe: string;
    
    readonly username: string;
    readonly continueBtn: string;
    readonly newpageHeader: string;
    
    constructor(page:Page){
        super(page);
    
   //locator
    this.signinBtn =' [data-test-id="sign-in-link"]';
    this.signinIframe ="//iframe[@title='iFrame containing Sky Sign-In application']";
    this.username ="//*[@id='username']";
    this.continueBtn = "//button[text()='Continue']";
    this.newpageHeader = "//h1";
    }


    //page methods

    async signInBtn(){
        
        await this.page.locator(this.signinBtn).click();
        await this.page.waitForTimeout(10000);
        expect(this.page.url(),"Sign in button is clicked").toContain("signin?successUrl");
    }
    async enterUserName(userid:string){
       
        const elemUsername = await this.page.frameLocator(this.signinIframe).locator(this.username);
        await elemUsername.fill(userid);
    }

    async clickContinueBtn(){
        await this.page.frameLocator(this.signinIframe).locator(this.continueBtn).click();
        await this.page.waitForTimeout(10000);  
        expect(this.page.frameLocator(this.signinIframe).locator(this.continueBtn),"Continue is clicked").toBeDisabled();
    }

    async captureHeader(expectedtitle:string){
        const headertext= await this.page.frameLocator(this.signinIframe).locator(this.newpageHeader).innerText();
        expect(headertext,"Page header is :"+headertext).toEqual(expectedtitle);
    }
    // async SignInmethod(userid:any){
    //     await this.page.locator(this.signinBtn).click();
    //     await this.page.waitForTimeout(10000);  
    //     await this.page.frameLocator(this.signinIframe).locator(this.username).fill(userid);
    //     await this.page.frameLocator(this.signinIframe).locator(this.continueBtn).click();
    //     await this.page.waitForTimeout(10000);  
    //     console.log(await this.page.frameLocator(this.signinIframe).locator(this.newpageHeader).innerText());
        
    // }

}