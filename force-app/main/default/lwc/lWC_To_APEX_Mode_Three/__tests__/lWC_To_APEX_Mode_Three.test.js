import { createElement } from 'lwc';
import LWC_To_APEX_Mode_Three from 'c/lWC_To_APEX_Mode_Three';

describe('c-l-w-c-to-a-p-e-x-mode-three', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-l-w-c-to-a-p-e-x-mode-three', {
            is: LWC_To_APEX_Mode_Three
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});