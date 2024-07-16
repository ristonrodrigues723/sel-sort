let array = [];
const container = document.getElementById('container');
const numberInput = document.getElementById('numberInput');

function renderArray() {
    container.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value * 3}px`;
        bar.title = value;
        container.appendChild(bar);
    });
}

function addNumber() {
    const value = parseInt(numberInput.value);
    if (!isNaN(value)) {
        array.push(value);
        numberInput.value = '';
        renderArray();
    }
}

function clearArray() {
    array = [];
    renderArray();
}



function runSelectionSort() {
    selectionSort();
}

// Add event listener for Enter key on input
numberInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addNumber();
    }
});

renderArray();