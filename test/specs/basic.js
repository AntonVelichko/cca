const URL = 'https://likejean.github.io/homework-5/';




//--- Namru Sandzhiev


describe('Test RFL', () => {

    before('App URL', () => {
        browser.url(URL);
    });

    it('Verify that the header "Counters" is present', () => {
        const actualHeader = $('h1').getText();
        const expected = 'Counters';
        expect(actualHeader).toEqual(expected);
    });

    it('Verify that the Total result "Total " is present', () => {
        const actualHeader = $('h3[class="total-count"]').getText();
        const expected = /Total:\s\d+/;
        expected.test(actualHeader);
    });

    it('Verify that the Total result initially is "0"', () => {
        const actual = $('h3[class="total-count"]').getText();
        const expected = 'Total: 0';
        expect(actual).toEqual(expected);
    });

    it('Verify that the Counter name "1.Default Counter" is present', () => {
        const actual = $('//div/div/div/div//h3').getText();
        const expected = '1. Default Counter';
        expect(actual).toEqual(expected);
    });

    it('Verify that "Count value" is present', () => {
        const countValue = $('//span[@data-test="badge"]');
        const isPresent = countValue.isExisting();
        const expected = true;
        expect(isPresent).toEqual(expected);
    });

    it('Verify that "Count value" initially is "0"', () => {
        const actual = $('//span[@data-test="badge"]').getText();
        const expected = '0';
        expect(actual).toEqual(expected);
    });

    it('Verify that the Left Limit Field is present', () => {
        const lfl = $('//button[@name="negative"]');
        const isPresent = lfl.isExisting();
        const expected = true;
        expect(isPresent).toEqual(expected);
    });

    it('Verify that text in the LLF field "Change step options ?" is present', () => {
        const actual = $('//button[@name="negative"]').getText();
        const expected = 'CHANGE STEP OPTIONS?';
        expect(actual).toEqual(expected);
    });

    it('Verify that by clicking on the LLF The text "Change Step Options ? " disappeared', () => {
        const llf = $('//button[@name="negative"]');
        llf.click();
        const actualText = $('//button[@name="negative"]').getText();
        const expected = 'X';
        expect(actualText).toEqual(expected);
    });

    it('Verify that by clicking on the LLF The number by default "1" is show up', () => {
        const actualInputFieldValue = $('//input[@name="lower"]').getValue();
        const expected = '1';
        expect(actualInputFieldValue).toEqual(expected);
    });

    it('Verify that the Right Limit Field is present ', () => {
        const rfl = $('//button[@name="positive"]');
        const isPresent = rfl.isExisting();
        const expected = true;
        expect(isPresent).toEqual(expected);
    });

    it('Verify that text in the RLF field "Change step options ?" is present', () => {
        const actual = $('//button[@name="positive"]').getText();
        const expected = 'CHANGE STEP OPTIONS?';
        expect(actual).toEqual(expected);
    });

    it('Verify that by clicking on the RLF The text "Change Step Options ? " disappeared', () => {
        const rfl = $('//button[@name="positive"]');
        rfl.click();
        const actualText = $('//button[@name="positive"]').getText();
        const expected = 'X';
        expect(actualText).toEqual(expected);
    });

    it('Verify that by clicking on the RLF The number by default "3" is show up', () => {
        const actualInputFieldValue = $('//input[@name="upper"]').getValue();
        const expected = '3';
        expect(actualInputFieldValue).toEqual(expected);
    });

    it('Verify that user is able to change value in RLF which is >= LLF', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const llf = $('//button[@name="negative"]');
        llf.click();
        const inputLeft = $('//input[@name="lower"]');
        inputLeft.setValue('1');
        const rlf = $('//button[@name="positive"]');
        rlf.click();
        const inputRight = $('//input[@name="upper"]');
        inputRight.setValue('9');
        inputRight.clearValue();
        inputRight.setValue('8');
        const actual = inputRight.getValue();
        const expected = '8';
        expect(actual).toEqual(expected);
    });

    it('Verify that user is able to change value in RLF which is >= LLF', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const llf = $('//button[@name="negative"]');
        llf.click();
        const inputLeft = $('//input[@name="lower"]');
        inputLeft.setValue('1');
        const rlf = $('//button[@name="positive"]');
        rlf.click();
        const inputRight = $('//input[@name="upper"]');
        inputRight.setValue('9');
        inputLeft.clearValue();
        inputLeft.setValue('2');
        const actual = inputLeft.getValue();
        const expected = '2';
        expect(actual).toEqual(expected);
    });







    it('should Verify that RFL accepts 1', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const rfl = $('//button[@name="positive"]');
        rfl.click();
        const rflValue = $('//input[@name="upper"]');
        rflValue.setValue('1');
        const buttonActual = $('//button[@step="1"]').getText();
        expect(buttonActual).toEqual('1');
    });


    it('should Verify that RFL accepts 9', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const rfl = $('//button[@name="positive"]');
        rfl.click();
        const rflValue = $('//input[@name="upper"]');
        rflValue.setValue('9');
        const buttonActual = $('//button[@step="9"]').getText();
        expect(buttonActual).toEqual('9');
    });

    it('should Verify that RFL does not accept "e" ', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const rfl = $('//button[@name="positive"]');
        rfl.click();
        const rflValue = $('//input[@name="upper"]');
        rflValue.setValue('e');
        const alertActual = $('//div[@role="alert"]//span').getValue();
        expect(alertActual).toEqual("ERROR: Input must be an INTEGER")
    });

    it('should Verify that RFL does not accept "$" ', () => {
        browser.url('https://likejean.github.io/homework-5/');
        const rfl = $('//button[@name="positive"]');
        rfl.click();
        const rflValue = $('//input[@name="upper"]');
        rflValue.setValue('$');
        const alertActual = $('//div[@role="alert"]//span').getText();
        expect(alertActual).toEqual("ERROR: Input must be an INTEGER")
    });
});











//---ANTON VELICHKO


describe('TEST RLF', () => {

    before('App URL', () => {
        browser.url('https://likejean.github.io/homework-5/');
    });

    it('Verify that the Sub Buttons by default  -1, -2, -3  in the LLF are present', () => {
        expect($('//button[@step="-3"]').getText()).toEqual('-3');
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


// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------


describe('ERRORS', () => {

    before('App URL', () => {
        browser.url(URL);
    });


    it('Verify that App throws ERROR \'Lower Limit Must be  Less than Upper Limit\'', () => {
        $('//button[@name="negative"]').click();
        $('//input[@name="lower"]').setValue('9');
        expect($('//span[contains(text(), "ERROR")]').getText()).toContain('ERROR');
    });


    //--- not finished completely
    it('Verify that App throws ERROR " Input must be an INTEGER 1"', () => {
        $('//button[@name="negative"]').click();
        $('//input[@name="lower"]').setValue('2');
        $('//input[@name="lower"]').addValue('E');
        expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(true);
    });

    browser.refresh();
    //--- doesn't work
    it('Verify that App throws ERROR " Input must be an INTEGER 2"', () => {
        $('//button[@name="negative"]').click();
        $('//input[@name="lower"]').setValue('2.');
        expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(true);
    });

});


// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------




    describe('ADD NEW COUNTER', () => {

        before('App URL', () => {
            browser.url(URL);
        });


        it('Verify that User is able to change the name of next after 1. Default Counter  by using "Edit Counter Title" field', () => {
            $('//input[@data-testid="counter-name-input"]').setValue('The second one');
            $('//button[.="Add Counter"]').click();
            const actual = $('//h3[contains(text(), "2")]').getText();
            const name = actual.split('. ')[1];
            expect(name).toEqual('The second one');
            expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(false);
        });


        it('Verify that "Enter Initial Count" for second  Counter by default is 50', () => {
            expect($('//span[contains(text(), "50")]').getText()).toEqual('50');
        });



        it('Verify that "Edit Counter Title"  field  accepts names with at least 7 letters', () => {
            $('//input[@data-testid="counter-name-input"]').setValue('Calculate');
            $('//button[.="Add Counter"]').click();
            const actual = $('//h3[contains(text(), "3")]').getText();
            const name = actual.split('. ')[1];
            expect(name).toEqual('Calculate');
            expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(false);
        });


        it('Verify that "Edit Counter Title" field  of 2 Counter accepts  letters (Uppercase and Lowercase)', () => {
            $('//input[@value="The second one"]').setValue('my NEW calculate');
            const actual = $('//h3[contains(text(), "2")]').getText();
            const name = actual.split('. ')[1];
            expect(name).toEqual('my NEW calculate');
            expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(false);
        });


        it('Verify that "Edit Counter Title" field of  2 Counter doesn\'t accept name, which contain less than 7 letters', () => {
            browser.refresh()
            $('//input[@data-testid="counter-name-input"]').setValue('Second');
            expect($('//span[contains(text(), "ERROR")]').getText()).toContain('ERROR');
            expect($('//button[.="Add Counter"]').isClickable()).toEqual(false);
            browser.pause(3000);
        });


        it('Verify that  "Enter Counter Title" field  of 2 Counter  doesn\'t accept  adding spaces seven times', () => {
            browser.refresh();
            $('//input[@data-testid="counter-name-input"]').setValue('       ');
            expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(true);
            expect($('//button[.="Add Counter"]').isClickable()).toEqual(false);
            browser.pause(2000);
        });


        it('Verify that after clicking "Add Counter" button a  Counter is created with specified title  and value', () => {
            browser.refresh();
            $('//input[@data-testid="counter-name-input"]').setValue('Second counter');
            $('//input[@data-testid="counter-value-input"]').setValue('45');
            $('//button[.="Add Counter"]').click();
            const name = $('//h3[contains(text(), "2")]').getText();
            expect(name).toEqual('2. Second counter');
        });


        it('Verify that  "Total " on the top of Counters  displays the result  of all  created counters', () => {
            const name = $('//h3[contains(text(), "Total")]').getText();
            const actual = name.split(' ')[1];
            expect(actual).toEqual('45');
        });


        it('Verify that user can create ten Counters with the same functionality', () => {
            browser.refresh();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            expect($('//h3[contains(text(), "10")]').isExisting()).toEqual(true);
        });


        it('Verify that every created Counter is independed, but  it\'s value effects the "Total" result', () => {
            browser.refresh();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            const name = $('//h3[contains(text(), "Total")]').getText();
            const actual = name.split(' ')[1];
            expect($('//h3[contains(text(), "2")]').isExisting()).toEqual(true);
            expect($('//h3[contains(text(), "3")]').isExisting()).toEqual(true);
            expect($('//h3[contains(text(), "4")]').isExisting()).toEqual(true);
            expect(actual).toEqual('150');
            browser.pause(2000);
        });


        it('Verify, that after clicking the red "Delete button", the entire Counter  is deleted', () => {
            browser.refresh();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            $('//button[@id="3"]').click();
            expect($('//h3[contains(text(), "3")]').isExisting()).toEqual(false);
        });


        it('Verify that after delete the 2 Counter from the three one , other counters have the right ascending id order (1, 2)', () => {
            expect($('//h3[contains(text(), "1")]').isExisting()).toEqual(true);
            expect($('//h3[contains(text(), "2")]').isExisting()).toEqual(true);
        });


        it('Verify, that after clicking the red "Delete button", the entire Counter  is deleted', () => {
            browser.refresh();
            $('//input[@data-testid="counter-name-input"]').setValue('Second counter');
            $('//button[.="Add Counter"]').click();
            $('//input[@data-testid="counter-name-input"]').setValue('Third counter');
            $('//button[.="Add Counter"]').click();
            $('//button[@id="2"]').click();
            expect($('//h3[contains(text(), "1")]').isExisting()).toEqual(true);
            expect($('//h3[contains(text(), "2")]').isExisting()).toEqual(true);

            const actual1 = $('//h3[contains(text(), "1")]').getText();
            const name1 = actual1.split('. ')[1];

            const actual2 = $('//h3[contains(text(), "2")]').getText();
            const name2 = actual2.split('. ')[1];

            expect(name1).toEqual('Default Counter');
            expect(name2).toEqual('Second counter');
        });


        it('Verify that after delete the 2 Counter from the three one , other counters have the right add/subb buttons  (1, 2)', () => {
            browser.refresh();
            $('//input[@data-testid="counter-name-input"]').setValue('Second counter');
            $('//button[.="Add Counter"]').click();
            $('(//button[@name="positive"])[2]').click();
            $('//input[@name="upper"]').setValue('4');
            $('(//button[@name="negative"])[2]').click();
            $('//input[@name="lower"]').setValue('2');


            $('//input[@data-testid="counter-name-input"]').setValue('Third counter');
            $('//button[.="Add Counter"]').click();
            $('((//button[@name="positive"])[3])').click();
            $('(//input[@name="upper"])[2]').setValue('6');
            $('((//button[@name="negative"])[3])').click();
            $('(//input[@name="lower"])[2]').setValue('3');


            $('//button[@id="2"]').click();

            expect($('//button[text()="-3"]').getText()).toEqual('-3');
            expect($('//button[text()="-2"]').getText()).toEqual('-2');
            expect($('//button[text()="-1"]').getText()).toEqual('-1');
            expect($('//button[text()="3"]').getText()).toEqual('3');
            expect($('//button[text()="2"]').getText()).toEqual('2');
            expect($('//button[text()="1"]').getText()).toEqual('1');

            expect($('(//button[text()="-4"])').getText()).toEqual('-4');
            expect($('(//button[text()="-3"])[2]').getText()).toEqual('-3');
            expect($('(//button[text()="-2"])[2]').getText()).toEqual('-2');
            expect($('(//button[text()="4"])').getText()).toEqual('4');
            expect($('(//button[text()="3"])[2]').getText()).toEqual('3');
            expect($('(//button[text()="2"])[2]').getText()).toEqual('2');
        });




        it('Verify that, after clicking the blue "Reset" button, count value is 0', () => {
            browser.refresh();
            $('//input[@data-testid="counter-name-input"]').setValue('Second counter');
            $('//button[.="Add Counter"]').click();
            $('(//button[contains(@class, "reset")])[2]').click();
            const name = $('//h3[contains(text(), "Total")]').getText();
            const actual = name.split(' ')[1];
            expect(actual).toEqual('0');
        });

});


// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------



describe('TESTS THAT DID NOT PASS MANUAL TESTING', () => {

    before('App URL', () => {
        browser.url(URL);
    });

    browser.refresh();
    it('Verify that LFL  doesn\'t accept "." error message "Input must be an INTEGER" will be appear below ', () => {
        $('//button[@name="negative"]').click();
        $('//input[@name="lower"]').setValue('.');
        expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(true);
    });

    browser.refresh();
    it('Verify that LFL  doesn\'t accept "1." An error message "Input must be an INTEGER"  appear below ', () => {
        $('//button[@name="negative"]').click();
        $('//input[@name="lower"]').setValue('1.');
        expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(true);
    });

    browser.refresh();
    it('Verify that LLF  doesn\'t accept "1."', () => {
        $('//button[@name="negative"]').click();
        $('//input[@name="lower"]').setValue('1.');
        expect($('//input[@name="lower"]').getValue()).toEqual('');
    });

    //--- finished here


});
