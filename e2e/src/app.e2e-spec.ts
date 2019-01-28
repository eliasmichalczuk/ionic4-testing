import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   browser.waitForAngularEnabled(false);
  //   page.navigateTo();
  //   expect(page.getPageTitle()).toContain('Tab One');
  // });
});
