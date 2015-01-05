describe('postfix test', function() {
  beforeEach(function () {
    browser.get('/postfix.html');
  });

  it('seo-title directive change title to "Postfix Sample | SEO"', function() {
    expect(browser.executeScript('return document.title;')).toEqual('Postfix Sample | SEO');
  });
});
