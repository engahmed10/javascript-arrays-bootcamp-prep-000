var chocolateBars = [ "snickers", "hundred grand","kitkat","skittles"];
var  chocolateBars1 =[];
function addElementToBeginningOfArray( array,element)
{
  
  chocolateBars[array] = element;
  return chocolateBars
}

function destructivelyAddElementToBeginningOfArray( array,element)
{
  chocolateBars1=chocolateBars
  chocolateBars1[array] = element;
  return chocolateBars1
}
