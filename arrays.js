var chocolateBars = [ "snickers", "hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray( element,array)
{
  chocolateBars[array] = element;
  return chocolateBars
}
function addElementToBeginningOfArray(element,array)
{
  chocolateBars[array].slice(element);
  return chocolateBars
}

