//first Example = Sum Numbers

const calcSumBtnElm = document.querySelector('#calculator button');

function calcSum() {
    const userNumInptElm = document.getElementById('user-number');
    const enteredNum = userNumInptElm.value;

    let sumUpToNum = 0;
    for (let i = 0; i <= enteredNum; i++) {
        sumUpToNum = sumUpToNum + i;
    }

    const outptRsltElm = document.getElementById('calculated-sum');

    outptRsltElm.textContent = sumUpToNum;
    outptRsltElm.style.display = 'block';
}
calcSumBtnElm.addEventListener('click', calcSum);



//Highlight Links

const highlightLinksBtnElm = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElms = document.querySelectorAll('#highlight-links a');
    for (const anchorElm of anchorElms) {
        anchorElm.classList.add('highlight');
    }
}

highlightLinksBtnElm.addEventListener('click', highlightLinks);



//Display user data

const dumyUserData = {
    Name: 'Khadija',
    lastName: 'Farrah',
    age: '23'
};

const displayUserDataElm = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElm = document.getElementById('output-user-data');

    outputDataElm.innerHTML = '';

    for (const key in dumyUserData) {
        const newUserDataListItemElm = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dumyUserData[key];
        newUserDataListItemElm.textContent = outputText;
        outputDataElm.append(newUserDataListItemElm);
    }
}

displayUserDataElm.addEventListener('click', displayUserData);




//Statistis / roll the Dice

const rollDiceBtnElm = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function driveNumOfDiceRolls() {
    const targetNumInputElm = document.getElementById('user-target-number');
    const diceRollsListElm = document.getElementById('dice-rolls');

    const enteredNum = targetNumInputElm.value;
    diceRollsListElm.innerHTML = '';

    let hasRolledTargetNum = false;
    let numOfRolls = 0;

    while (!hasRolledTargetNum) {
        const rolledNum = rollDice();
        // if (rolledNum == enteredNum) {
        //     hasRolledTargetNum = true;
        // }
        numOfRolls++;

        const newRollListItemElm = document.createElement('li');
        const outputText = 'Roll ' + numOfRolls + ': ' + rolledNum;
        newRollListItemElm.textContent = outputText;
        diceRollsListElm.append(newRollListItemElm);
        hasRolledTargetNum = rolledNum == enteredNum;
    }

    const outputTotalRollsElm = document.getElementById('output-total-rolls');
    const outputTargetNumElm = document.getElementById('output-target-number');

    outputTargetNumElm.textContent = enteredNum;
    outputTotalRollsElm.textContent = numOfRolls;
}

rollDiceBtnElm.addEventListener('click', driveNumOfDiceRolls);