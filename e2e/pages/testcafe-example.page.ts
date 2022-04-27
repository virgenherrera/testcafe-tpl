import { Selector, t } from 'testcafe';
import { Credentials } from '../models/credentials.model';
import { SetCredentials, SetPage } from '../utils';

export class TestcafeExamplePage {
  @SetPage('TESTCAFE_EXAMPLE_PAGE')
  public page: string;

  @SetCredentials('TESTCAFE_EXAMPLE_USER', 'TESTCAFE_EXAMPLE_PASS')
  private credentials: Credentials;
  private developerField = Selector('#developer-name');
  private windowsRadio = Selector('label[for="windows"]');
  private interfaceSelector = Selector('#preferred-interface');
  private featuresSelector = Selector('.col-1 label');
  private haveTriedSelector = Selector(
    '#tried-section label[for="tried-test-cafe"]',
  );
  private sliderSelector = Selector('#slider span');
  private sliderValueSelector = Selector(
    '.slider-values .slider-value:nth-child(9)',
  );
  private submitButtonSelector = Selector('#submit-button');

  get username() {
    return this.credentials.username;
  }

  async fillForm() {
    await t.maximizeWindow();
    await this.fillName();
    await this.pickOs();
    await this.pickInterface();
    await this.pickInterface();
    await this.pickOptions();
    await this.checkTried();
    await this.setSlider();
    await this.clickSubmit();
  }

  private async fillName() {
    await t.typeText(this.developerField, this.credentials.username);
  }

  private async pickOs() {
    await t.click(this.windowsRadio);
  }

  private async pickInterface() {
    await t.click(this.interfaceSelector);
    await t.click(this.interfaceSelector.child(2));
  }

  private async pickOptions() {
    const labelCount = await this.featuresSelector.count;

    for (let idx = 0; idx < labelCount; idx++) {
      const element = await this.featuresSelector.nth(idx);

      await t.click(element);
    }
  }

  private async checkTried() {
    await t.click(this.haveTriedSelector);
  }

  private async setSlider() {
    await t.dragToElement(this.sliderSelector, this.sliderValueSelector);
  }

  private async clickSubmit() {
    await t.click(this.submitButtonSelector);
  }
}
