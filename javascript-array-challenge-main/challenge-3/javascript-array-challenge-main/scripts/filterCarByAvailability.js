function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];
  cars.forEach((car) => car.available && result.push(car));
  // Tulis code-mu disini
  console.table(result);
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}