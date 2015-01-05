describe('default test', function() {
  beforeEach(function () {
    browser.get('/test1.html');
  });

  it('seo-title directive change title to "Change Title"', function() {
    expect(browser.executeScript('return document.title;')).toEqual('Change Title');
  });

  it('seo-title E directive remove element', function() {
    expect(element(by.tagName('seo-title')).isPresent()).toEqual(false);
  });
});
