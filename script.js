var isDate = function (input) {
  //   write your code here
	if (Object.prototype.toString.call(input) === '[object Date]' && !isNaN(input)) {
    return true;
  }
  
  // Check if input is a valid date string or number
  if (typeof input === 'string' || typeof input === 'number') {
    const date = new Date(input);
    return !isNaN(date.getTime());
  }
  
  return false;
};
// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
