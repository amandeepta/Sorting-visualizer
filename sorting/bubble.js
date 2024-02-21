async function bubble() {
    const element = document.querySelectorAll(".item");
    let n = element.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            element[j].style.background = 'darkblue';
            element[j+1].style.background = 'darkblue';

            if (parseInt(element[j].style.height) > parseInt(element[j+1].style.height)) {
                await waitforme(delay);
                swap(element[j], element[j+1]);
            }
            element[j].style.background = 'lightblue';
            element[j+1].style.background = 'lightblue';
        }
        element[n -1 - i].style.background = 'green';
    }
    element[0].style.background = 'green';
}


const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSorting();
    disableSizeBtn();
    disableGenerate();
    await bubble();
    enableSorting();
    enableSizeBtn();
    enableGenerate();
});