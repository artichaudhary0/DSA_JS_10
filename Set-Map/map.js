/*
Map : stores the key value and allows key of any data type.


    set(key , value) : Add a value to map
    get(key) : removes that particular value from the map
    has(key) : checks if particular value exist or not (boolean)
    delete(key) : delete that paroicular key data from map.
    clear() : Remove all the value of map.
    size : return the total no. of elements present in th map
*/

let map = new Map();

map.set(1, "Arti");
map.set(12, "Singh");
map.set(13, "Chaudhary");
map.get(11);
map.delete(12);

console.log(map.size);
