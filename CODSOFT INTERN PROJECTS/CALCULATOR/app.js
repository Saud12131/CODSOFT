function append(value) {
    document.getElementById('input_id').value += value;
}

function clearDisplay() {
    document.getElementById('input_id').value = '';
}

function changeSign() {
    let currentValue = parseFloat(document.getElementById('input_id').value);
    document.getElementById('input_id').value = -currentValue;
}

function calculate() {
    let expression = document.getElementById('input_id').value;
    try {
        let result = eval(expression);
        document.getElementById('input_id').value = result;
    } catch (error) {
        document.getElementById('input_id').value = 'Error';
    }
}