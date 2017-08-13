import { DglistPage } from './app.po';

describe('dglist App', () => {
  let page: DglistPage;

  beforeEach(() => {
    page = new DglistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
