const inputAmount = document.getElementById('input-amount');
const inputPeople = document.getElementById('input-people');
const tipNum = document.getElementById('tip-num');
const totalNum = document.getElementById('total-num');
const sectionError = document.getElementById('section-error');
const customBtn = document.getElementById('custom-btn');

document.addEventListener('click', e => {
    if (e.target.id === '5%') {
        fivePercent();
    }
    else if (e.target.id === '10%') {
        tenPercent();
    }
    else if (e.target.id === '15%') {
        fifteenPercent();
    }
    else if (e.target.id === '25%') {
        twentyFivePercent();
    }
    else if (e.target.id === '50%') {
        fiftyPercent();
    }
    else if (e.target.id === 'custom-btn') {
        if (customBtn.type === 'button') {
            replaceCustomBtnType();
        }
        else {
            handleCustomTip();
        }
    }
    else if (e.target.id === 'reset-btn') {
        handleResetBtn();
    }
});

function calculateTip(num) {
    if(!isNaN(inputAmount.value)) {
        if (!inputPeople.value) {
            sectionError.textContent = "Can't be zero";
            return;
        }
        else {
            const tipPerPerson = inputAmount.value * num / inputPeople.value;
            const totalTipAmount = inputAmount.value / inputPeople.value + tipPerPerson;
        
            tipNum.textContent = tipPerPerson.toFixed(2);
            totalNum.textContent = totalTipAmount.toFixed(2);

            if (sectionError.textContent) {
                sectionError.textContent = '';
            }
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



function handleResetBtn() {
    inputAmount.value = '';
    inputPeople.value = '';
    customBtn.className = 'custom-btn';
    customBtn.type = 'button';
    customBtn.value = 'Custom';
    tipNum.textContent = 0;
    totalNum.textContent = 0;

    if (sectionError.textContent) {
        sectionError.textContent = '';
    }
}
