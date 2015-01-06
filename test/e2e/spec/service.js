describe('service test', function() {
  beforeEach(function () {
    browser.get('/service.html');
  });

  it('seoService change title to "New Title"', function() {
    expect(browser.executeScript('return document.title;')).toEqual('New Title');
  });
});
