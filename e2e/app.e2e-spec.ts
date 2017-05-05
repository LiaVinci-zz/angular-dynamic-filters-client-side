import { FieldBuddyCasePage } from './app.po';

describe('field-buddy-case App', () => {
  let page: FieldBuddyCasePage;

  beforeEach(() => {
    page = new FieldBuddyCasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
