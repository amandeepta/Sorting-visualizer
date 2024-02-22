async function merge(element, l, mid, r) {
    let n1 = mid - l + 1;
    let n2 = r - mid;
    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i <n1; i++) {
        await waitforme(delay);
        element[l+i].style.background = "orange";
        L[i] = element[l + i].style.height;
    }
    for (let i = 0; i <n2; i++) {
        await waitforme(delay);
        element[mid+1+i].style.background = "pink";
        R[i] = element[mid+1+i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (parseInt(L[i]) <= parseInt(R[j])) {
            if((n1 + n2) === element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            }

            element[k++].style.height = L[i++];
        } else {
            if((n1 + n2) === element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            }

            element[k++].style.height = R[j++];
        }
    }

    while (i < n1) {
        if((n1 + n2) === element.length){
            element[k].style.background = 'green';
        }
        else{
            element[k].style.background = 'lightgreen';
        }

        element[k++].style.height = L[i++];
    }

    while (j < n2) {
        if (parseInt(L[i]) <= parseInt(R[j])) {
            if((n1 + n2) === element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            }

            element[k++].style.height = L[i++];
        } else {
            if((n1 + n2) === element.length){
                element[k].style.background = 'green';
            }
            else{
                element[k].style.background = 'lightgreen';
            }

            element[k++].style.height = R[j++];
        }
    }
}

async function mergesort(element, l, r) {
    if (l < r) {
        let mid = Math.floor((l + r) / 2);
        await mergesort(element, l, mid);
        await mergesort(element, mid + 1, r);
        await merge(element, l, mid, r);
    }
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let element = document.querySelectorAll(".item");
    let l = 0;
    let r = parseInt(element.length) - 1;
    disableSorting();
    disableSizeBtn();
    disableGenerate();
    await mergesort(element, l, r);
    enableSorting();
    enableSizeBtn();
    enableGenerate();
});