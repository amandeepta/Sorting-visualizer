async function insertion() {
    const element = document.querySelectorAll(".item");
    let n = element.length;

    element[0].style.background = 'green';
    for (let i = 1; i < n; i++) {
        let j = i - 1;
        let key = element[i].style.height;
        element[i].style.background = 'darkblue';
        await waitforme(delay);

        while (j >= 0 && parseInt(element[j].style.height) > parseInt(key)) {
            element[j].style.background = 'darkblue';
            element[j+1].style.height = element[j].style.height;
            j--;

            await waitforme(delay);
            for (let k = i; k >= 0; k--) {
                element[k].style.background = 'green';
            }
        }
        element[j+1].style.height = key;
        element[i].style.background = 'green';
    }
}


const insertionSortbtn = document.querySelector(".insertionSort");
insertionSortbtn.addEventListener('click', async function(){
    disableSorting();
    disableSizeBtn();
    disableGenerate();
    await insertion();
    enableSorting();
    enableSizeBtn();
    enableGenerate();
});