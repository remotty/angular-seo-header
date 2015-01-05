describe('prefix test', function() {
  beforeEach(function () {
    browser.get('/prefix.html');
  });

  it('seo-title directive change title to "SEO | Prefix Sample"', function() {
    expect(browser.executeScript('return document.title;')).toEqual('SEO | Prefix Sample');
  });
});
