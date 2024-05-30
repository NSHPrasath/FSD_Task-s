const isEqual = (obj1, obj2) => {
  const obj1keys = Object.keys(obj1);
  const obj2keys = Object.keys(obj2);

  if (obj1keys.length !== obj2keys.length) {
    return false;
  }
  for (let objkey of obj1keys) {
    if (obj1[objkey] !== obj2[objkey]) {
      return false;
    }
  }
  return true;
};
var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

console.log(isEqual)