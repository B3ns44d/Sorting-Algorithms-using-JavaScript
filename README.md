## JavaScript Sorting Algorithm

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
<img src="https://img.shields.io/badge/Javascript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> 
</p>

List of Sorting Algorithm

 1. Bubble Sort.
 3. Selection Sort.
 4. Insertion Sort.
 6. Quick Sort.

## Bubble Sort
Let’s get started with  **Bubble Sort** , shall we. The space complexity for the algorithm is O(1) and the average time complexity is O(n²).The pseudocode is as follows:

-   Start iterating through the array, comparing 2 elements at a time.
-   Swap them as required.
-   At the end of first pass, the largest number has bubbled to the last index of the array, so ignore the last index in the next pass.
-   Continue these passes until the array is sorted.

![how bubble sort works](https://camo.githubusercontent.com/695d43f00a5e85ed337f5c11fc455815a343632dc8d3dcd227445eafa0ad3287/687474703a2f2f7777772e6f70656e746563686775696465732e636f6d2f696d616765732f686f77746f2f686f77746f5f353130312e706e67)
![how bubble sort works gif](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

## Selection Sort
**Selection Sort** is the last sorting algorithm to have a time complexity of O(n²), included in this article. The space complexity is the same as the previous two techniques i.e, O(1). The pseudocode for this algorithm is as follows.

-   Assume that the  **first element is the smallest** . (Or largest, if sorting in descending order).
-   Find the  **minimum value** from the array  **and swap** this with the first element of the array. This completes one pass, wherein the smallest element of the array is now at the 0th index.
-   Repeat this procedure for the rest of the array elements, but for the next pass do not compare the element we just placed at the 0th index.

This is usually not that useful in most situations, but still helps a beginner grasp the concepts of implementing an algorithm to solve a problem.

![selection sort](https://i.stack.imgur.com/DYIRO.gif)
![enter image description here](https://stackabuse.s3.amazonaws.com/media/selection-sort-in-javascript-1.gif)
## Insertion sort
The next sorting algorithm which has a time complexity of O(n²) is  **Insertion Sort** , it also has a space complexity of O(1). This is most useful when there is a scenario wherein you are receiving a series of numbers in real time, and need them in a sorted array.

The main concept to understand when using this technique is that, there is a  **portion of the array that is always sorted** and a section that remains unsorted.

-   Start by comparing the 2nd element with the 1st element, swap if necessary.
-   Iterate through the rest of the array. Then, for each element, iterate through the  **_sorted portion_** of the array, and  **_insert_** this element where it needs to be, by making comparisons.
-   Keep doing this until all the elements have been inserted into their correct positions.

![insertion sort](https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png)
![insertion sort gif](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

## Quick Sort

Lastly, let us see how  **quick sort** justifies its name and goes about sorting an array.

It works by  **choosing a pivot element** , and making sure that all the elements  **to the left of the pivot element is less** than the pivot(not necessarily sorted, they just need to be less than the pivot) and that all the  **elements to the right of the pivot are all greater** than it.

The only 2 tasks we need to do in order to implement quick sort’s algorithm is to  **correctly identify the index for the pivot** and place the pivot element at that index. Initially, we assume the pivot to any element in the array, in this example I shall consider the 0th element to be the initial pivot.

The pseudocode to correctly return the index for the pivot element is as follows. Note that this is also called the  **partition function** .

-   Choose a pivot,  **store its index** in a variable, let’s say  `pivotIndex` . Loop through the array, if the current element is less than than the pivot, then increment the  `pivotIndex` , and swap the current element with the element present at the new  `pivotIndex`
-   After one iteration through the array,  **swap** the pivot with the element present at the  `pivotIndex`

Once you have a helper function to do the above task, we need to r  **ecursively place all the pivot elements in their correct positions** . The pseudocode to so that is as follows.

-   Assume  `left` indicates the start of a subarray, and  `right` indicates the last index of the subarray.
-   Do the following only if the  `left` pointer is at a lesser index than the  `right` pointer:  
    — Start by calling the  **partition()** on the entire array by defaulting the  `left` and  `right` pointers to the  **first** and  **last** element of the array respectively.  
    — Then store the return value in the  `pivotIndex`  
    — Use this to recursively call  **quickSort()** with the same array, but from  `left` **up until (pivotIndex-1)** , for the left part of the array.  
    — For the right part of the array, call  **quickSort()** again, with the same array, but from (  **pivotIndex + 1)** upto  `right`
-   Once the base case becomes invalid, it means that  `left` equals  `right` , so we return the array.

![quick sort](https://stackabuse.s3.amazonaws.com/media/quicksort-in-javascript-1.jpg)

## ❤ Funding 🔝
**If you want to support me to do more projects and develop myself, I would be grateful to you** 

<br>

<a href="https://ko-fi.com/b3ns44d" target="_blank">
<img src="https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white"/>
</a>