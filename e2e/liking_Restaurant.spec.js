const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('LIKE ONE RESTAURANT', async ({ I }) => {
  I.dontSeeElement('Tidak ada restoran untuk ditampilkan', '.restaurant-item');
  I.seeElement('.content');
  I.amOnPage('/');
  I.wait(20);
  I.waitForElement('.restaurant_title a');
  const firstResto = locate('.restaurant_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.wait(20);
  I.click(firstResto);
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.waitForElement('.restaurant-item');
  const favoritedRestoTitle = await I.grabTextFrom('.restaurant_title');
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('UNLIKE ONE RESTAURANT', async ({ I }) => {
  I.dontSeeElement('Tidak ada restoran untuk ditampilkan', '.restaurant-item');
  I.seeElement('.content');
  I.amOnPage('/');
  I.wait(20);
  I.waitForElement('.restaurant_title a');
  const firstResto = locate('.restaurant_title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.wait(20);
  I.click(firstResto);
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.waitForElement('.restaurant-item');
  const favoritedRestoTitle = await I.grabTextFrom('.restaurant_title');
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item a');
  const firstFavoriteRestaurant = locate('.restaurant_title a').first();
  I.click(firstFavoriteRestaurant);
  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.dontSeeElement('Tidak ada restoran untuk ditampilkan', '.restaurant-item');
});
