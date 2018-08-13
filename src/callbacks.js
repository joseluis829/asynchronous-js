
function getUserPreferences(cbFn) {
    setTimeout(() => {
        cbFn({
            theme: 'dusk',
        });
    }, 1000);
}

function log(value) {
    return console.log(value);
}

const callback = preferences => {
    return log(preferences);
}

//EXECUTION
log('starting: ');
getUserPreferences(callback);
getPost();
log('ending.');




function callbackPrint (newData) {
    log(newData);
}

function getPost() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(data => {
        return data.json();
    })
    .then(callbackPrint);
}

function printString(string) {
    let time = Math.floor(Math.random() * 20) + 1;
    setTimeout(() => {
        console.log(string)
    }, time);
}

function printAll() {
    printString('A')
    printString('B')
    printString('C')
}

printAll()


