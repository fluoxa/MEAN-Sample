import { TestProjektPage } from './app.po';

describe('test-projekt App', () => {
  let page: TestProjektPage;

  beforeEach(() => {
    page = new TestProjektPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
