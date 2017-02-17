import { angular2-cameraPage } from './app.po';

describe('angular2-camera App', function() {
  let page: angular2-cameraPage;

  beforeEach(() => {
    page = new angular2-cameraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
