import { Selector, t } from 'testcafe';
import { TestcafeExamplePage } from '../pages/testcafe-example.page';
import { getWindowLocation } from '../utils';

const testcafeExamplePage = new TestcafeExamplePage();

fixture(`${TestcafeExamplePage.name}`).page(testcafeExamplePage.page);

test('Should Login with a valid user', async () => {
  await testcafeExamplePage.fillForm();

  await t.expect(getWindowLocation()).contains('thank-you.html');
  await t
    .expect(Selector('#article-header').textContent)
    .contains(testcafeExamplePage.username);
});
