
function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?

 // pake insertion sort
  const result = [...cars];

  cars.forEach((j) => {
    for (let j = 1; j < cars.length; j++) {
      for (let k = j; k > 0 ; k--) {
          if (result[k-1].year < result[k].year) {     
              temp = result[k-1]                          
              result[k-1] = result[k]                     
              result[k] = temp                         
          }   
      }
    }
  });
  // Tulis code-mu disini
  console.table(result);
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
