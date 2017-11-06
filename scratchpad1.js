//cloning an array


function is_array(input) {
  return Array.isArray(input);
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

function array_Clone(input) {
  let newArray = Array.from(input);
  return newArray;
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 6, 8, 0]]));


// First element of array



function first(input, num) {
  if (num==null)
    return input[0];
  else if (num<0)
    return input.slice(num,0);
  else
  return input.slice(0,num);
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2, 6],-2));


//last elements of array


function last(input, num) {
  if (num==null)
    return input[input.length-1];
  else if (num<0)
    return input.slice(0,0);
  else
    return input.slice(-num);
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));


//join array elements into a string


function joinArray(input,sym) {
  return input.join(sym);
}
console.log(joinArray(["Red", "Green", "White", "Black"],'+'));


//add Dashes between two even numbers


function addDashes(input) {
  let output = parseInt(input);
  let string1 = output.toString();
   string1 = string1.split("");
   string1.forEach(function(element, index) {
    if ((string1[index+1]%2==0) && (element%2==0))
      string1.splice(index+1,0,'-');
   });
  string1 = string1.join("");
  console.log(string1);
    }

addDashes(03460760453);


//Sort an array


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

console.log(sortArray([ 3, 8, 7, 6, 5, -4, -3, 2, 1 ]));


//Frequent element return


function frequent(input) {
  let countArray = [];
  for (let i = 0; i < input.length; i++)
    {
      let count = 0;
      for (let j = 0; j < input.length; j++) 
        {
          if  (input[i] == input[j])
            {
              count++;
            }
        }
      countArray.push(count);
    }
  let maxm = Math.max(...countArray);
  console.log(input[countArray.indexOf(maxm)] + ' (' + maxm + ' times)');
}

frequent([3, 'asaa', 'asaa', 'asaa', 2, 3, 'asaa', 3, 'asaa', 2, 4, 9, 3]);


//Convert each alphabets Case


function caseConvert(input) {
  let output ='';
  for (let i = 0; i < input.length; i++) 
    {
      if (input[i]==input[i].toLowerCase())
        output+=input[i].toUpperCase();
      else
        output+=input[i].toLowerCase();
    }
  console.log(output);
}

caseConvert('The Quick Brown Fox');


//Print elements of array row vise


function rowPrint (input) {
  input.forEach(function(element, index) 
  {
    console.log('row '+index);
    element.forEach(function(nelement)
    {
          console.log(nelement);       
    });
  });
}

rowPrint([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]);


//Sum of squares of vector


function squareSum(input)
{
  let sum=0;
  input.forEach(function(element) {
    sum+=(element*element);
   });
 return sum;
}

console.log(squareSum([1,2,3]));


//Product and sum of elements


function sumProduct(input)
{
  let sum=0;
  let product=1;
  input.forEach(function(element) {
    sum+=element;
    product*=element;
   });
 console.log(` Sum = ${sum} & Product = ${product} `);
}

sumProduct([5,2,3]);


//Insert into arrays from input


function insertArray()
{
  for (var i = 0;; i++)
    { 
      let input = prompt("enter number to Array");
      if (input==null)
        break;
      else
        array.push(input);
    }
  console.log(array);
}

let array = [];
insertArray();


//Remove the duplicated elements



function dupeRemove(input) {
  input.forEach(function(element,index)
  {
    input.forEach(function(nelement,nindex) 
    {
      if (index!=nindex)
      {
        if (element==nelement)
          {
            console.log(nindex);
            input.splice(nindex,1);
          }
      }        
    });
  });
  console.log(input);
}

dupeRemove([1,2,3,4,5,3,7,2,3,9]);


//Print elements prefixed with th, st, nd and rd


function ordered(input) {
  let o = ["th","st","nd","rd"];
  for (let index=1;index < input.length; index++)
    {
    if(parseInt(index/10)!=1)
    {
      let i =index%10;
      if (i>0 && i<4)
        {
        ovalue = o[i];
        }
        else
        {
          ovalue = o[0];
        }
    }
    else
      {
        ovalue = o[0];
      }
    console.log(index + ovalue + ' choice is ' + input[index-1]);
  }
}

ordered([2,34,421,'sd',323,3423,23423,42345,2342,32423,534,2342,234532,43534,23452345,435345,345345,5634,43,3,2,6546,67,3434,56456,564564])


//Print leap years between two years



function leapYears(min,max) {
  let leapYear = [];
  for (let i = min; i < max; i++)
    {
      
      if (i%4==0)
        {
          if(i%100==0)
          {
            if(i%400==0)
              leapYear.push(i);
          }
          else
            leapYear.push(i);
        }
      
    }
  console.log(leapYear.length);
  return leapYear;
}

console.log(leapYears(1680,2000));



//Shuffle elements in an array



function shuffle(input) {
  for (let i = 0; i < input.length; i++)
    {
      let rvalue = Math.floor(Math.random() * input.length);
      let temp = input[i];
      input[i] = input[rvalue];
      input[rvalue] = temp;

    }
  console.log(input);
}

shuffle([1,67,45,4,5,12,7,2,3,9]);


//Sum two given arrays



function sumArrays(input1,input2) {
  let output = [];
  let min = [];
  let max = [];
  if (input1.length>input2.length)
    {
       max = input1;
       min = input2;
    }
  else
    {
       max = input2;
       min = input1;
    }
  for (let i = 0; i < max.length; i++)
    {
      if (i >= min.length)
        output[i]=max[i];
      else
        output[i]=max[i]+min[i];
    }
  return output;
}

console.log(sumArrays([1,0,2,3,4],[3,5,6,7,8,13]));



//print duplicated elements



function dupe(input) {
  let output = [];
  input.forEach(function(element,index)
  {
    input.forEach(function(nelement,nindex) 
    {
      if (index!=nindex)
      {
        if (element==nelement)
          {
            if(!output.includes(nelement))
              output.push(nelement);
          }
      }        
    });
  });
  return output;
}

console.log(dupe([1,2,3,4,5,3,7,2,3,9]));




//Union two array sets




function union(input1,input2)
{
  let output = input1;
  input2.forEach(function(element){
    if(!output.includes(element))
       output.push(element);
  });
  return output;
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));



//difference of two arrays



function difference(input1,input2)
{
  let output = [];
  input1.forEach(function(element){
    if(!input2.includes(element))
       output.push(element);
  });
  input2.forEach(function(element){
    if(!input1.includes(element))
       output.push(element);
  });
  return output;
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));



//add Delimiter between elements




function addDelimiter(array,delimiter) {
  let output = '';
  for(let i = 0; i < array.length; i++)
    {
      if (i!=array.length-1)
        output+=array[i]+delimiter;
      else
        output+=array[i];
    }
  return output;
}

console.log(addDelimiter(['asd','qwe','rty','dfg'],'#'));


//Flatten arrays in the given array


function flatten(input,shallow)
{ 
  let output = [];
  return flattenrec(input,shallow,output);
}
function flattenrec(input,shallow,output){
  for(let i = 0; i < input.length; i++)
  {
    if (Array.isArray(input[i]))
      {
        flattenrec(input[i]);
        if (!shallow==true)
      {
        continue;  
      }
      }

    else
      output.push(input[i]);
  }
  return output;
}
console.log(flatten([1, [2], [3, [[4]]],[5,6]],true));



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




function binarySearch(array, key) {
   array = sortArray(array);
   let min = 0;
   let max = array.length - 1;
   let currentIndex;
   let currentElement;
   while (min <= max) {
      currentIndex = Math.floor((min + max) / 2) ;
      currentElement = array[currentIndex];
      if (currentElement < key) {
         min = currentIndex + 1;
        }
      else if (currentElement > key) {
            max = currentIndex - 1;
        }
      else {
            return currentIndex;
        }
  }
}

console.log(binarySearch(['asd','qwe','rty','dfg'],'rty'));
