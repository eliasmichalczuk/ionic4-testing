import { browser, element, by, ExpectedConditions } from 'protractor';

export class Timeline {

    navigateTo() {
        browser.get('/');
    }

    viewPost() {
        browser.wait(ExpectedConditions.elementToBeClickable(element(by.className('test-viewPost'))), 500);
        element.all(by.className('test-viewPost')).first().click();
    }

    isPostPresent() {
        return element(by.className('test-post-content')).isPresent();
    }
}
