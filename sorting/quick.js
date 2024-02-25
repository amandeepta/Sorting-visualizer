async function partition(element, l, r) {
    let pivot = element[r];
    element[r].style.background = "red";
    let i = l - 1;
    for (let j = l; j < r; j++) {
        element[j].style.background = "yellow";
        await waitforme(delay);
        if (parseInt(element[j].style.height) < parseInt(pivot.style.height)) {
            i++;
            swap(element[i], element[j]);
            element[i].style.background = "lightgreen";
            if (i != j) element[j].style.background = "lightgreen";
            await waitforme(delay);
        } else {
            element[j].style.background = "orange";
        }
    }
    await waitforme(delay);
    swap(element[i + 1], element[r]);
    element[i + 1].style.background = "green";
    element[r].style.background = "orange";
    await waitforme(delay);

    for (let k = 0; k < element.length; k++) {
        if (element[k].style.background != 'green')
            element[k].style.background = 'lightblue';
    }
    return i + 1;
}

async function quicksort(element, l, r) {
    if (l <= r) {
        let p = await partition(element, l, r);
        await quicksort(element, l, p - 1);
        await quicksort(element, p + 1, r);
    } else {
        if(l >= 0 && r >= 0 && l <element.length && r <element.length){
            element[r].style.background = 'green';
            element[l].style.background = 'green';
        }
    }
}

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function () {
    let element = document.querySelectorAll(".item");
    let l = 0;
    let r = parseInt(element.length) - 1;
    disableSorting();
    disableSizeBtn();
    disableGenerate();
    await quicksort(element, l, r);
    enableSorting();
    enableSizeBtn();
    enableGenerate();
});
