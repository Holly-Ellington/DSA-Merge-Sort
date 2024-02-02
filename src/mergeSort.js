function mergeSort(compare, elements) {
  if (Array.isArray(elements)) {
    if (elements.length <= 1) {
      return elements;
    }

    
    // Split the array into two halves
    const middle = Math.floor(elements.length / 2);
    const leftElements = elements.slice(0, middle);
    const rightElements = elements.slice(middle);
    
    // Recursively apply mergeSort to both halves
    const leftElementsSorted = mergeSort(compare, leftElements);
    const rightElementsSorted = mergeSort(compare, rightElements);
    
    // Merge the sorted halves
    return merge(compare, leftElementsSorted, rightElementsSorted);
  }
  return elements;
}


   // Function to merge two sorted arrays into a single sorted array


function merge(compare, left, right) {
  const sorted = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const comparison = compare(left[leftIndex], right[rightIndex]);

    if (comparison <= 0) {
      sorted.push(left[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(right[rightIndex]);
      rightIndex++;
    }
  }

   // Append the remaining elements from either left or right array
  return sorted.concat(
    leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex)
  );
}
module.exports = mergeSort;
