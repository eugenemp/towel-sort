
module.exports = function towelSort (matrix) {

  //Return empty array if passed array is empty or argument is not an array
  if(!matrix || matrix.length === 0) return [];

  //Compare function for sort() method
  function cmp(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a == b) return 0;
  };

  //Result array
  let output = [];

    //Based on index number of subarray sort item in it 
    //in ascending or descending order
    matrix.forEach( (item, index) => {

      if(index % 2 === 0) {
        for(let i = 0; i < item.length; i++) {
          output.push(item.sort(cmp)[i])
        };
      };

      if(index % 2 !== 0) {
        for(let i = 0; i < item.length; i++) {
          output.push(item.sort(cmp).reverse()[i])
        };
      };
    });
  
    //Return result array
    return output;
}
