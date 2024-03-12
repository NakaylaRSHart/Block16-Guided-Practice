console.log(`test`);

const items = [
  { id: 1, name: 'foo', price: 7 },
  { id: 2, name: 'bar', price: 6 },
  { id: 3, name: 'bazz', price: 9 },
  { id: 3, name: 'quq', price: 13 }
];

const name = prompt(`Enter a name of an item, we will try to find it`, `foo`);

const found = items.find(items => items.name === name);
if(found){
  console.log(`We found it!!`)
  console.log(found)
} else {
  console.log(`We could not find that item with the name ${name}`);
};

//MAP
const forMap = prompt(`Choose a key, either id, name, or price, so that we may us the map to display the values.`, `price`);

const mappedValues = items.map(item => item[forMap]);
console.log(`Mapped Values: `, mappedValues);

//REDUCE
const forReduce = prompt(`Choose a key, id, name, or price so that we may sum up the values for that key`, `price`);

const reducedValues = items.reduce((acc, item) => {
  acc = acc + item[forReduce];
  return acc;
}, 0); //<---- Starting Value

console.log(`Reduced Values: `, reducedValues);
