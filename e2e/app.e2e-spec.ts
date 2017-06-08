import { ExpressTemplatePage } from './app.po';

describe('express-template App', () => {
  let page: ExpressTemplatePage;

  beforeEach(() => {
    page = new ExpressTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
