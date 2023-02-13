import { test, expect } from '@playwright/test'

test.describe("This feature will make sure that the shop page is navigable and usable", async() => {
    test('User is prompted to create my Sky password when signing in with invalid credentials', async({page}) => {
        await page.goto('https://www.sky.com/signin?successUrl=https%3A%2F%2Fwww.sky.com%2F&cancelUrl=https%3A%2F%2Fwww.sky.com%2F', {waitUntil: "domcontentloaded"});
        await page.frameLocator("#sp_message_iframe_474555").locator("text=Agree").click();
        //await page.locator('[data-test-id="sign-in-link"]').click();
        
        const frames1 = await page.frames();
      
        console.log(frames1.length);
        
        const frame1 = page.frame("__zoid__sign_in_iframe__eyJ-199aWQiOiJ6b2lkLXNpZ24taW4taWZyYW1lLWM3NTZmMjU3YTJfbWphNm10ZTZudGkiLCJjb250ZXh0IjoiaWZyYW1lIiwidmVyc2lvbiI6IjlfMF8yNyIsImNoaWxkRG9tYWluIjoiaHR0cHM6Ly9hZ2cub29nd2F5LnNreS5jb20iLCJwYXJlbnREb21haW4iOiJodHRwczovL3d3dy5za3kuY29tIiwidGFnIjoic2lnbi1pbi1pZnJhbWUiLCJwYXJlbnQiOnsidHlwZSI6InBhcmVudCIsImRpc3RhbmNlIjowfSwicHJvcHMiOnsidHlwZSI6InJhdyIsInZhbHVlIjoie1wicHJvcG9zaXRpb25cIjpcIlNLWUNPTVwiLFwicHJvdmlkZXJcIjpcIlNLWVwiLFwiZGV2aWNlXCI6XCJDT01QVVRFUlwiLFwicGxhdGZvcm1cIjpcIlBDXCIsXCJ0ZXJyaXRvcnlcIjpcIkdCXCIsXCJvbkF1dGhvcml6ZWRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcImU2YzZhOTQ5NTVfbWphNm10ZTZudGlcIixcIm5hbWVcIjpcIm9uQXV0aG9yaXplZFwifX0sXCJvbklkcmlzRXJyb3JcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcImFmOWJjOGQ2MDRfbWphNm10ZTZudGlcIixcIm5hbWVcIjpcIm9uSWRyaXNFcnJvclwifX0sXCJzaG93S2VlcE1lU2lnbmVkSW5cIjp0cnVlLFwiZXZlbnRzXCI6e1wib25QYWdlVHJhbnNpdGlvblwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwiMmYzYjdhOTFmYV9tamE2bXRlNm50aVwiLFwibmFtZVwiOlwib25QYWdlVHJhbnNpdGlvblwifX0sXCJvbkFjdGlvbkNsaWNrXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCIxNWM1MzlmZjM1X21qYTZtdGU2bnRpXCIsXCJuYW1lXCI6XCJvbkFjdGlvbkNsaWNrXCJ9fX0sXCJpc0ZyYW1lZFwiOlwidHJ1ZVwiLFwiaHJlZlwiOlwiaHR0cHM6Ly93d3cuc2t5LmNvbS9zaWduaW4/c3VjY2Vzc1VybD1odHRwcyUyNTNBJTI1MkYlMjUyRnd3dy5za3kuY29tJTI1MkYmY2FuY2VsVXJsPWh0dHBzJTI1M0ElMjUyRiUyNTJGd3d3LnNreS5jb20lMjUyRlwiLFwibWluaW1hbFByZXNlbnRhdGlvblwiOmZhbHNlLFwib3JpZ2luXCI6XCJodHRwczovL3d3dy5za3kuY29tXCIsXCJjbGllbnRJZFwiOlwiU0tZQ09NXCIsXCJyZWRpcmVjdFVyaVwiOlwiaHR0cHM6Ly9hY2NvdW50cy5za3kuY29tL3NpZ24taW4vZnJhbWUtYXV0aC1kb25lXCIsXCJyZXNwb25zZVR5cGVcIjpcImNvZGVcIixcImxvY2tJZGVudGlmaWVyXCI6ZmFsc2UsXCJjbGllbnRcIjpcImRlZmF1bHRcIn0ifSwiZXhwb3J0cyI6IntcImluaXRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcImQ1NmUyNmIzMjRfbWphNm10ZTZudGlcIixcIm5hbWVcIjpcInJcIn19LFwiY2xvc2VcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcImY5ZDI0YzgxODZfbWphNm10ZTZudGlcIixcIm5hbWVcIjpcImNsb3NlXCJ9fSxcImNoZWNrQ2xvc2VcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcIjBjZjIxODlhNzFfbWphNm10ZTZudGlcIixcIm5hbWVcIjpcImNoZWNrQ2xvc2VcIn19LFwicmVzaXplXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCI1M2MwZTM2ZjNhX21qYTZtdGU2bnRpXCIsXCJuYW1lXCI6XCJyZXNpemVcIn19LFwib25FcnJvclwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwiNzY0NGVkYWZjMV9tamE2bXRlNm50aVwiLFwibmFtZVwiOlwiZVwifX19In0=__");


        await frame1?.fill("input[name='username']","fdh@gmail.com");
    });
});