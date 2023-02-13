import {expect, FrameLocator, Locator, Page } from '@playwright/test';
import { BasePage} from '../pages/base.page';

export class MobileShopPage extends BasePage{
    readonly poductgrid: string;
    readonly mobileimage: string;
    readonly phonetitle: string;
    readonly phoneprice: string;
    readonly iteration:number;
    
    
    constructor(page:Page){
        super(page);

        this.poductgrid = '//*[@class="c-product-grid__item"]';
        this.mobileimage = 'img';
        this.phonetitle = '//span[@data-test-id="selection-heading-text"]';
        this.phoneprice = '//*[@class="c-linear-costing__main"]';

    }
    async navigate(){
        await super.navigate('https://www.sky.com/shop/mobile/deals');
    }


    async captureMobiledealsDetails(){
       const list =  await this.page.$$(this.poductgrid);
       expect(list.length).toBeGreaterThanOrEqual(3);
        
    //}
   
    

    //async captureProductDetails(){
        for (let iteration=0; iteration<3; iteration++){
            //console.log('list'+i, await mobiledealslist[i].innerText());
            const images = await list[iteration].$(this.mobileimage);
            await images?.screenshot({path : 'image'+iteration+'.png'});
            const phonetitle = await list[iteration].$(this.phonetitle);
            const phoneprice = await list[iteration].$(this.phoneprice);
            console.log('list'+iteration, await phoneprice?.innerText());
            console.log('list'+iteration, await phonetitle?.innerText());
            expect.soft(await phonetitle?.innerText()).not.toBeNull();
         }

    }

}