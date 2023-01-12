const inputAmount = document.getElementById('input-amount');
const inputPeople = document.getElementById('input-people');
const tipNum = document.getElementById('tip-num');
const totalNum = document.getElementById('total-num');
const sectionError = document.getElementById('section-error');
const sectionErrorBill = document.getElementById('section-error-bill');
const customBtn = document.getElementById('custom-btn');

document.addEventListener('click', e => {
    if (e.target.id === '5%') {
        fivePercent();
        isNotCustomBtn(e);
    }
    else if (e.target.id === '10%') {
        tenPercent();
        isNotCustomBtn(e);
    }
    else if (e.target.id === '15%') {
        fifteenPercent();
        isNotCustomBtn(e);
    }
    else if (e.target.id === '25%') {
        twentyFivePercent();
        isNotCustomBtn(e);
    }
    else if (e.target.id === '50%') {
        fiftyPercent();
        isNotCustomBtn(e);
    }
    else if (e.target.id === 'custom-btn') {
        if (customBtn.type === 'button') {
            replaceCustomBtnType();
        }
        else {
            handleCustomTip();
        }
    }
    else if (e.target.id != 'custom-btn') {
        resetCustomBtn();
    }
    else if (e.target.id === 'input-amount' || e.target.id === 'input-people') {
        e.target.click();
        e.target.focus();
    }

    if (e.target.id === 'reset-btn') {
        handleResetBtn();
    }


});

function calculateTip(num) {
    if(!isNaN(inputAmount.value)) {
        if (!inputAmount.value && !inputPeople.value) {
            handleNoValueError();
            return;
        }
        else if (!inputPeople.value || inputPeople.value <= 0) {
            sectionError.textContent = "Can't be zero/empty";
            inputPeople.style.border = "2px #E17457 solid";
            if (sectionErrorBill.textContent) {
                sectionErrorBill.textContent = '';
                inputAmount.style.border = "none";
            }
            return;
        }
        else if (!inputAmount.value || inputAmount.value <= 0) {
            sectionErrorBill.textContent = "Can't be zero/empty";
            inputAmount.style.border = "2px #E17457 solid";
            if (sectionError.textContent) {
                sectionError.textContent = '';
                inputPeople.style.border = "none";
            }
            return;
        }
        else {
            const tipPerPerson = inputAmount.value * num / inputPeople.value;
            const totalTipAmount = inputAmount.value / inputPeople.value + tipPerPerson;
        
            tipNum.textContent = "$" + tipPerPerson.toFixed(2);
            totalNum.textContent = "$" + totalTipAmount.toFixed(2);

            handleSectionErrors();
        }
    }
}


function fivePercent() {
    calculateTip(0.05);
}

function tenPercent() {
    calculateTip(0.10);
}

function fifteenPercent() {
    calculateTip(0.15);
}

function twentyFivePercent() {
    calculateTip(0.25);
}

function fiftyPercent() {
    calculateTip(0.50);
}

function replaceCustomBtnType() {
    customBtn.className = "custom-btn-change";
    customBtn.type = "text";
    customBtn.value = '';
}

function handleCustomTip() {
    if (customBtn.value) {
        calculateTip(customBtn.value / 100);
    }
}

function handleNoValueError() {
    sectionErrorBill.textContent = "Can't be empty";
    inputAmount.style.border = "2px #E17457 solid";
    sectionError.textContent = "Can't be empty";
    inputPeople.style.border = "2px #E17457 solid";
}

function resetCustomBtn() {
    customBtn.className = 'custom-btn';
    customBtn.type = 'button';
    customBtn.value = 'Custom';
}

function isNotCustomBtn(e) {
    if (e.target.id != customBtn) {
        resetCustomBtn();
    }
}

function handleResetBtn() {
    inputAmount.value = '';
    inputPeople.value = '';
    tipNum.textContent = "$0.00";
    totalNum.textContent = "$0.00";
    resetCustomBtn();
    handleSectionErrors();
}

function handleSectionErrors() {
    if (sectionError.textContent) {
        sectionError.textContent = '';
        inputPeople.style.border = "none";
    }
    
    if (sectionErrorBill.textContent) {
        sectionErrorBill.textContent = '';
        inputAmount.style.border = "none";
    }
}