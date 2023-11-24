function selectionSort(arr) {
  // Copy the original array
  let copyArr = [...arr];
  // Create an array to store the sorted values
  let sorted = [];
  // While the array is not empty...
  while (copyArr.length !== 0) {
    // Do not move this console.log
    console.log(sorted.join(','));

    // Find the index of the minimum value in the unsorted half
    let index = 0;
    let minVal = copyArr[index];
    for (let i = 0; i < copyArr.length; i++) {
      if (minVal > copyArr[i]) {
        index = i;
        minVal = copyArr[i];
      }
    }
    // Save and remove the value at the min index
    copyArr.splice(index, 1);
    // Add the min value to the end of the sorted array
    sorted.push(minVal);
  }
  return sorted;
}

function selectionSortInPlace(arr) {
  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divider = 0;

  // Repeat while the unsorted half is not empty:
  while (divider != arr.length) {
    // Do not move this console.log
    console.log(arr.join(','));

    // Find the index of the minimum value in the unsorted half
    let index = divider;
    let minVal = arr[index];
    for (let i = divider; i < arr.length; i++) {
      if (minVal > arr[i]) {
        index = i;
        minVal = arr[i];
      }
    }

    // Save the min value

    // Shift every unsorted value to the left of the min value to the right by 1
    for (let i = index; i > divider; i--) {
      arr[i] = arr[i - 1];
    }
    // Put the min value at the divider
    arr[divider] = minVal;
    // Increment the divider and repeat
    divider++;
  }
}

module.exports = [selectionSort, selectionSortInPlace];
