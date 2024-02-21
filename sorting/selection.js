async function selection() {
    const element = document.querySelectorAll(".item");
    let n = element.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        element[i].style.background = 'darkblue';
        for (let j = i + 1; j < n; j++) {
            element[j].style.background = 'red';
            await waitforme(delay);
            if (parseInt(element[j].style.height) < parseInt(element[min].style.height)) {
                if (min != i) element[min].style.background = 'lightblue';
                min = j;
            } else {
                    element[j].style.background = 'lightblue';
                }
            }
        await waitforme(delay);
        swap(element[i], element[min]);
        element[min].style.background = 'lightblue';
        element[i].style.background = 'green';
    }
}


const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSorting();
    disableSizeBtn();
    disableGenerate();
    await selection();
    enableSorting();
    enableSizeBtn();
    enableGenerate();
});