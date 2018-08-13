
// 1. CALLBACKS

function printStringCB(string, callback) {
    setTimeout(() => {
        console.log(string)
        callback()
    }, Math.floor(Math.random() * 100) + 1);
}

function printAllSC() {
    printStringCB("A", () => {
        printStringCB("B", () => {
            printStringCB("C", () => {})
        })
    })
}

//console.log('seq callbacks');
//printAllSC()

// 2. PROMISES

function printString(string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string)
            resolve()
        }, Math.floor(Math.random() * 100) + 1);
    })
}
// Does not work
function printAllPrFailed() {
    printString("A").then(
        printString("B").then(
            printString("C")
        )
    )
}
// Works but confusing and does not take advantage of the syntax 
function printAllPr_2() {
    printString('A').then(() => {
        printString('B').then(() => {
            printString('C')
        })
    })
}
// Works well
function printAllPr(params) {
    printString('A')
    .then(() => printString('B'))
    .then(() => printString('C'))
    .then(() => console.log('I am happy now!'))
}

//console.log('promises');
//printAllPr()


// 3. ASYNC AWAIT

async function printAll() {
    await printString('A')
    await printString('B')
    await printString('C')
}

//printAll()


/**
 * RETURN VALUE
 */

// 1. CALLBACK 

function addStringCB(previous, current, callback) {
    setTimeout(() => {
        callback(previous + ' ' + current)
    }, Math.floor(Math.random() * 100) + 1);
}

function addAllCB() {
    addStringCB('', 'A', (previous) => {
        addStringCB(previous, 'B', (previous2) => {
            addStringCB(previous2, 'C', (result) => {
                console.log('new value', result)
            })
        })
    })
}

//addAllCB() 


// 2. PROMISES

function addString(previous, current) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(previous + ' ' + current)
        }, Math.floor(Math.random() * 100) + 1);
    })
}

function addAllPr() {
    addString('', 'A')
    .then((result) => addString(result, 'B'))
    .then((result) => addString(result, 'C'))
    .then(result => console.log('promise returned value: ', result))
}

//addAllPr()


// 3. ASYNC/AWAIT

async function addAll() {
    let result = await addString('', 'A')
    result = await addString(result, 'B')
    result = await addString(result, 'C')
    console.log('Async/await result: ', result);
}

addAll()
