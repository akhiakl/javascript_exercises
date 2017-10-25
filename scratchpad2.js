// Recursive function


//Integers between two numbers 

function range(min,max)
{
  var output = [];
  return rangeRec(min,max,output);
}
function rangeRec(min,max,output)
{
       min++;
      if (min<max)
       {
        output.push(min);
        rangeRec(min,max,output)
       }
  return output;
}

console.log(range(4,15));



//Binary Search



function sortArray(input) {
  const length = input.length;
  let temp
    for (let i = 0; i < length; i++)
      for (let j = 0; j < length-i; j++)
        if (input[j] > input[j+1])
          {
             temp = input[j];
             input[j] = input[j+1];
             input[j+1] = temp;
          }
  return input;
}

function binarySearch(array,key)
{
  let min = 0;
  let max = array.length - 1;
    array = sortArray(array);
  return searchRec(array,key,min,max);
}
function searchRec(array,key,min,max) {
   
   let currentIndex;
   let currentElement;
      currentIndex = Math.floor((min + max) / 2) ;
      currentElement = array[currentIndex];
      if (currentElement < key) {
         min = currentIndex + 1;
        return searchRec(array,key,min,max);
        }
      else if (currentElement > key) {
            max = currentIndex - 1;
            return searchRec(array,key,min,max);
        }
      else {
            return currentIndex;
        }
}

console.log(binarySearch(['asd','qwe','rty','dfg'],'asd'));

