let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish

// step 2

// Log
let log = document.getElementById('log');
log.addEventListener('click',()=>{
    console.log('console log demo');
})
// Error
let error = document.getElementById('error');
error.addEventListener('click',()=>{
    console.error('console error demo');
})
// Count
let count = document.getElementById('count');
count.addEventListener('click',()=>{
    console.count('count demo');
})
// Warn
let warn = document.getElementById('warn');
warn.addEventListener('click',()=>{
    console.warn('Warn! May Day! May Day! PULL UP!')
})
// Assert
let assert = document.getElementById('assert');
assert.addEventListener('click',()=>{
    console.assert(1==true, '1 == true is correct');
})
// Clear
let clear = document.getElementById('clear');
clear.addEventListener('click',()=>{
    console.clear('console cleared');
})
// Dir
let dir = document.getElementById('dir');
dir.addEventListener('click',()=>{
    console.dir(dir);
})
// Dirxml
let dirxml = document.getElementById('dirxml');
dirxml.addEventListener('click',()=>{
    console.dirxml(dirxml);
})
// Group Start
let gStart = document.getElementById('group-start');
gStart.addEventListener('click',()=>{
    console.group('group start');
})
// Group End
let gEnd = document.getElementById('group-end');
gEnd.addEventListener('click',()=>{
    console.groupEnd('group ended');
})
// Table
let table = document.getElementById('table');
table.addEventListener('click',()=>{
    let matrix=[{first:'Finch',last:'Shi'},
                {first:'Jiayi',last:'Liang'},
                {first:'Dony',last:'Li'}];
    console.table(matrix);
})
// Start Timer
let sTimer = document.getElementById('start-timer');
sTimer.addEventListener('click',()=>{
    console.time('timer start');
})

// End Timer
let eTimer = document.getElementById('end-timer');
eTimer.addEventListener('click',()=>{
    console.timeEnd('timer ended');
})

// Trace
let trace = document.getElementById('trace');
trace.addEventListener('click',()=>{
    let start = ()=>{middle();};
    let middle = ()=>{end();};
    let end = ()=>{console.trace();};
    start();
})

// Trigger a global error
let tge = document.getElementById('tge');
tge.addEventListener('click',()=>{
    throw new Error('Global Error Demo');
})