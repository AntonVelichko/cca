const URL = 'https://likejean.github.io/homework-5/';

describe('Test RFL', () => {

    before('App URL', () => {
        browser.url(URL);
    });

    it('Verify that the Sub Buttons by default  -1, -2, -3  in the LLF are present', () => {
        expect($('//button[text()="-3"]').getText()).toEqual('-3');
        expect($('//button[text()="-2"]').getText()).toEqual('-2');
        expect($('//button[text()="-1"]').getText()).toEqual('-1');
    });

    it('Verify that the Add Buttons by default 1, 2, 3 in the right are present', () => {
        expect($('//button[text()="3"]').getText()).toEqual('3');
        expect($('//button[text()="2"]').getText()).toEqual('2');
        expect($('//button[text()="1"]').getText()).toEqual('1');
    });

    it('Verify that the "Delete" button is present ', () => {
        expect($('//button[@id="1"]').getText()).toEqual('DELETE');
    });

    it('Verify that the "Reset" button is present ', () => {
        expect($('//button[contains(@class, "reset")]').getText()).toEqual('RESET');
    });

    it('Verify that \'Edit Counter Title\'  with the text "Default Counter" inside is present', () => {
        expect($('//label[contains(text(), "Edit")]').getText()).toEqual('Edit Counter Title:');
        expect($('//input[@value="Default Counter"]').getValue()).toEqual('Default Counter');
    });

    it('Verify that \'Enter Counter Title\' field  with the text "Counter Name" inside is present', () => {
        expect($('//label[contains(text(), "Enter Counter Title")]').getText()).toEqual('Enter Counter Title:');
        expect($('//input[@value="Counter Name"]').getValue()).toEqual('Counter Name');
    });

    it('Verify that \'Enter Initial Count\' field is present', () => {
        expect($('//label[contains(text(), "Enter Initial Count")]').getText()).toEqual('Enter Initial Count:');
    });

    it('Verify that \'Enter Initial Count\' field  contains number \'50\'', () => {
        expect($('//input[@value="50"]').getValue()).toEqual('50');
    });

    it('Verify that the "Add counter" button on the bottom of counter is present with the text "Add counter" inside', () => {
        expect($('//button[contains(@class, "add")]').getText()).toEqual('ADD COUNTER');
    });

});