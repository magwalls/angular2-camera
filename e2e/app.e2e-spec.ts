import { ScanwarePage } from './app.po';

describe('scanware App', function() {
  let page: ScanwarePage;

  beforeEach(() => {
    page = new ScanwarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
