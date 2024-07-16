let array = [];
const arrayContainer = document.getElementById('arrayContainer');
const numberInput = document.getElementById('numberInput');
const arraySizeSpan = document.getElementById('arraySize');
const comparisonsSpan = document.getElementById('comparisons');
const swapsSpan = document.getElementById('swaps');

let comparisons = 0;
let swaps = 0;

function renderArray() {
    arrayContainer.innerHTML = '';
    array.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value * 2}px`;
        bar.title = value;
        arrayContainer.appendChild(bar);
    });
    arraySizeSpan.textContent = array.length;
}

function addNumber() {
    const value = parseInt(numberInput.value);
    if (!isNaN(value) && value >= 0 && value <= 100) {
        array.push(value);
        numberInput.value = '';
        renderArray();
    } else {
        alert('Please enter a valid number between 0 and 100');
    }
}

function generateRandomArray() {
    array = Array.from({length: 20}, () => Math.floor(Math.random() * 100) + 1);
    renderArray();
}

function clearArray() {
    array = [];
    renderArray();
    resetStats();
}

function resetStats() {
    comparisons = 0;
    swaps = 0;
    updateStats();
}


numberInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addNumber();
    }
});

generateRandomArray();