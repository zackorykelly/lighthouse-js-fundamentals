function merge(list1, list2) {
  for (let i = 0; i < list2.length; i++) {
    list1.push(list2[i]);
  }
  return list1.sort();
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);