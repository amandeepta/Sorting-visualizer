let arrSize = document.querySelector("#arr_size");
let array = [];
newArr(15);
arrSize.addEventListener('input', () => {
    console.log(arrSize.value, typeof(arrSize.value));
    newArr(parseInt(arrSize.value));
})

function newArr(totalBars = 60) {
    deleteBars();

    array = [];
    for (let i = 0; i < totalBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    const graph = document.querySelector("#bars");

    for (let i = 0; i < totalBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('item');
        graph.appendChild(bar);
    }
}

function deleteBars() {
    bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

let delay = 1000;
let speed = document.querySelector("#sort_speed");

function spd() {
    delay = 400 - parseInt(speed.value);
}
speed.addEventListener('input', spd);

// Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSorting(){
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".selectionSort").disabled = true;
}

// Enables sorting buttons used in conjunction with disable
function enableSorting(){
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".selectionSort").disabled = false;
}

// Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableSizeBtn(){
    document.querySelector("#arr_size").disabled = true;
}

// Enables size slider used in conjunction with disable
function enableSizeBtn(){
    document.querySelector("#arr_size").disabled = false;
}

// Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it
function disableGenerate(){
    document.querySelector(".new").disabled = true;
}

// Enables newArray buttons used in conjunction with disable
function enableGenerate(){
    document.querySelector(".new").disabled = false;
}
let generate = document.querySelector(".new");

generate.addEventListener('click', ()=>{
    enableSorting();
    enableSizeBtn();
    newArr(arrSize.value); 

})

function swap(first, second) {
    console.log("Swaping");
    let temp = first.style.height;
    first.style.height = second.style.height;
    second.style.height = temp;
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}
