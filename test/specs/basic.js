const URL = 'https://likejean.github.io/homework-5/';



describe('Test RFL', () => {

    before('App URL', () => {
        browser.url(URL);
    });

    xit('Verify that the Sub Buttons by default  -1, -2, -3  in the LLF are present', () => {
        expect($('//button[text()="-3"]').getText()).toEqual('-3');
        expect($('//button[text()="-2"]').getText()).toEqual('-2');
        expect($('//button[text()="-1"]').getText()).toEqual('-1');
    });

    xit('Verify that the Add Buttons by default 1, 2, 3 in the right are present', () => {
        expect($('//button[text()="3"]').getText()).toEqual('3');
        expect($('//button[text()="2"]').getText()).toEqual('2');
        expect($('//button[text()="1"]').getText()).toEqual('1');
    });

    xit('Verify that the "Delete" button is present ', () => {
        expect($('//button[@id="1"]').getText()).toEqual('DELETE');
    });

    xit('Verify that the "Reset" button is present ', () => {
        expect($('//button[contains(@class, "reset")]').getText()).toEqual('RESET');
    });

    xit('Verify that \'Edit Counter Title\'  with the text "Default Counter" inside is present', () => {
        expect($('//label[contains(text(), "Edit")]').getText()).toEqual('Edit Counter Title:');
        expect($('//input[@value="Default Counter"]').getValue()).toEqual('Default Counter');
    });

    xit('Verify that \'Enter Counter Title\' field  with the text "Counter Name" inside is present', () => {
        expect($('//label[contains(text(), "Enter Counter Title")]').getText()).toEqual('Enter Counter Title:');
        expect($('//input[@value="Counter Name"]').getValue()).toEqual('Counter Name');
    });

    xit('Verify that \'Enter Initial Count\' field is present', () => {
        expect($('//label[contains(text(), "Enter Initial Count")]').getText()).toEqual('Enter Initial Count:');
    });

    xit('Verify that \'Enter Initial Count\' field  contains number \'50\'', () => {
        expect($('//input[@value="50"]').getValue()).toEqual('50');
    });

    xit('Verify that the "Add counter" button on the bottom of counter is present with the text "Add counter" inside', () => {
        expect($('//button[contains(@class, "add")]').getText()).toEqual('ADD COUNTER');
    });

});





describe('Errors', () => {

    before('App URL', () => {
        browser.url(URL);
    });

    xit('Verify that App throws ERROR \'Lower Limit Must be  Less than Upper Limit\'', () => {
        $('//button[@name="negative"]').click();
        $('//input[@name="lower"]').setValue('9');
        expect($('//span[contains(text(), "ERROR")]').getText()).toContain('ERROR');
    });


    //--- not finished completely
    xit('Verify that App throws ERROR " Input must be an INTEGER"', () => {
        $('//button[@name="negative"]').click();
        $('//input[@name="lower"]').setValue('2');
        $('//input[@name="lower"]').addValue('E');
        expect($('//span[contains(text(), "ERROR")]').getText()).toContain('ERROR');
    });

    //--- doesn't work
    xit('Verify that App throws ERROR " Input must be an INTEGER"', () => {
        $('//button[@name="negative"]').click();
        $('//input[@name="lower"]').setValue('2.');
        $('//input[@name="lower"]').addValue('2');
        expect($('//span[contains(text(), "ERROR")]').getText()).toContain('ERROR');
    });





    describe('ADD NEW COUNTER', () => {

        before('App URL', () => {
            browser.url(URL);
        });


        xit('Verify that User is able to change the name of next after 1. Default Counter  by using "Edit Counter Title" field', () => {
            $('//input[@data-testid="counter-name-input"]').setValue('The second one');
            $('//button[.="Add Counter"]').click();
            const actual = $('//h3[contains(text(), "2")]').getText();
            const name = actual.split('. ')[1];
            expect(name).toEqual('The second one');
            expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(false);
        });


        xit('Verify that "Enter Initial Count" for second  Counter by default is 50', () => {
            expect($('//span[contains(text(), "50")]').getText()).toEqual('50');
        });


        xit('Verify that "Edit Counter Title"  field  accepts names with at least 7 letters', () => {
            $('//input[@data-testid="counter-name-input"]').setValue('Calculate');
            $('//button[.="Add Counter"]').click();
            const actual = $('//h3[contains(text(), "3")]').getText();
            const name = actual.split('. ')[1];
            expect(name).toEqual('Calculate');
            expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(false);
        });


        xit('Verify that "Edit Counter Title" field  of 2 Counter accepts  letters (Uppercase and Lowercase)', () => {
            $('//input[@value="The second one"]').setValue('my NEW calculate');
            const actual = $('//h3[contains(text(), "2")]').getText();
            const name = actual.split('. ')[1];
            expect(name).toEqual('my NEW calculate');
            expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(false);
        });


        xit('Verify that "Edit Counter Title" field of  2 Counter doesn\'t accept name, which contain less than 7 letters', () => {
            browser.refresh()
            $('//input[@data-testid="counter-name-input"]').setValue('Second');
            expect($('//span[contains(text(), "ERROR")]').getText()).toContain('ERROR');
            expect($('//button[.="Add Counter"]').isClickable()).toEqual(false);
            browser.pause(3000);
        });


        xit('Verify that  "Enter Counter Title" field  of 2 Counter  doesn\'t accept  adding spaces seven times', () => {
            browser.refresh();
            $('//input[@data-testid="counter-name-input"]').setValue('       ');
            expect($('//span[contains(text(), "ERROR")]').isExisting()).toEqual(true);
            expect($('//button[.="Add Counter"]').isClickable()).toEqual(false);
            browser.pause(2000);
        });


        xit('Verify that after clicking "Add Counter" button a  Counter is created with specified title  and value', () => {
            browser.refresh();
            $('//input[@data-testid="counter-name-input"]').setValue('Second counter');
            $('//input[@data-testid="counter-value-input"]').setValue('45');
            $('//button[.="Add Counter"]').click();
            const name = $('//h3[contains(text(), "2")]').getText();
            expect(name).toEqual('2. Second counter');
        });


        xit('Verify that  "Total " on the top of Counters  displays the result  of all  created counters', () => {
            const name = $('//h3[contains(text(), "Total")]').getText();
            const actual = name.split(' ')[1];
            expect(actual).toEqual('45');
        });


        xit('Verify that user can create ten Counters with the same functionality', () => {
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


        xit('Verify that every created Counter is independed, but  it\'s value effects the "Total" result', () => {
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


        xit('Verify, that after clicking the red "Delete button", the entire Counter  is deleted', () => {
            browser.refresh();
            $('//button[.="Add Counter"]').click();
            $('//button[.="Add Counter"]').click();
            $('//button[@id="3"]').click();
            expect($('//h3[contains(text(), "3")]').isExisting()).toEqual(false);
        });


        xit('Verify that after delete the 2 Counter from the three one , other counters have the right ascending id order (1, 2)', () => {
            expect($('//h3[contains(text(), "1")]').isExisting()).toEqual(true);
            expect($('//h3[contains(text(), "2")]').isExisting()).toEqual(true);
        });


        xit('Verify, that after clicking the red "Delete button", the entire Counter  is deleted', () => {
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




        xit('Verify that, after clicking the blue "Reset" button, count value is 0', () => {
            browser.refresh();
            $('//input[@data-testid="counter-name-input"]').setValue('Second counter');
            $('//button[.="Add Counter"]').click();
            $('(//button[contains(@class, "reset")])[2]').click();
            const name = $('//h3[contains(text(), "Total")]').getText();
            const actual = name.split(' ')[1];
            expect(actual).toEqual('0');
        });





});



});