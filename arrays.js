var chocolateBars = [ "snickers", "hundred grand","kitkat","skittles"];
//var  chocolateBars1 =[];
function addElementToBeginningOfArray( array,element)
{
chocolateBars = [element,element, ...chocolateBars];
 // array[1] = element ;
   return chocolateBars;
}

