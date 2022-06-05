let numbers = [
  9, 12, 15, 18, 19, 20, 22, 25, 26, 26, 33, 37, 38, 41, 47, 47, 50, 55, 57, 60,
  68, 80, 87, 90, 98, 100, 103, 108, 109, 109, 116, 120, 120, 124, 127, 128,
  131, 135, 135, 139, 143, 145, 151, 155, 156, 158, 163, 164, 165, 169, 169,
  173, 174, 176, 177, 178, 181, 182, 182, 183, 184, 189, 192, 195, 200, 201,
  203, 204, 207, 213, 217, 222, 222, 222, 227, 228, 233, 235, 237, 239, 239,
  243, 248, 251, 252, 257, 260, 260, 263, 268, 270, 271, 271, 276, 281, 284,
  285, 295, 297, 298,
];

// console.log(Math.floor(3 / 2));

function bSearch(arr, n) {
  let min_index = 0;
  let max_index = arr.length - 1;
  let step = 0;

  while (min_index <= max_index) {
    step++;
    let middle_index = Math.floor((max_index + min_index) / 2);
    if (n === arr[middle_index]) {
      console.log("step is :" + step);
      return middle_index;
    } else if (n < arr[middle_index]) {
      max_index = middle_index - 1;
    } else if (n > arr[middle_index]) {
      min_index = middle_index + 1;
    }
  }
  console.log("Cannot find the number");
  return -1;
}

console.log(bSearch(numbers, 7));

function binarySearch(arr, n) {
  let min = 0;
  let max = arr.length - 1;
  let step = 0;

  while (min <= max) {
    step++;
    let middle = Math.floor((max + min) / 2);
    if (n > arr[middle]) {
      min = middle + 1;
    } else if (n < arr[middle]) {
      max = middle - 1;
    } else if (n === arr[middle]) {
      console.log("Found number " + n + " at position " + middle);
      console.log("Found it after " + step + " steps.");
      return middle;
    }
  }

  console.log("Cannot find number " + n);
  return -1;
}

binarySearch(numbers, 7); // 6 - 7
