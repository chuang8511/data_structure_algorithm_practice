averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

function pointerAverage(arr, avg) {
  let left_ind = 0;
  let right_ind = arr.length - 1;
  let result = [];

  while (right_ind > left_ind) {
    let sum = arr[left_ind] + arr[right_ind];
    if (sum === avg * 2) {
      result.push([arr[left_ind], arr[right_ind]]);
      left_ind++;
      right_ind--;
    } else if (sum > avg * 2) {
      right_ind--;
    } else if (sum < avg * 2) {
      left_ind++;
    }
  }
  console.log(result);
}

pointerAverage([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (right > left) {
    let temp_avg = (arr[right] + arr[left]) / 2;
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else if (temp_avg == avg) {
      result.push([arr[right], arr[left]]);
      right--;
      left++;
    }
  }

  console.log(result);
  return result;
}
