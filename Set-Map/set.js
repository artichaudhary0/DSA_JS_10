/*
Set : it is a collection of unique value, including primitive and non-primitive data type.
*/

// let mySet = new Set(); // 1 12 3 22 234 4 56

/*
    add(value) : Add a value to set
    delete(value) : removes that particular value from the set
    has(value) : checks if particular value exist or not
    clear() : Remove all the value of set.
    size : return the total no. of elements present in th set
*/

// let mySet = new Set();
// mySet.add(132);
// mySet.add(234);
// mySet.add("sgfyus");
// mySet.add("sgfyus");
// mySet.add("sgfyus");
// if (mySet.has("sgfyus")) {
//   // mySet.delete("sgfyus");
//  // mySet.clear(); // remove all the elements from the set
// }

// console.log(mySet.size);

/*
User can add and remove tag from article. no duplicate tag is allowed, union , intersection, difference of tags
*/

class TagManager {
  constructor() {
    this.tag = new Set();
  }
  addTag(tag) {
    this.tag.add(tag.toLowerCase());
  }

  removeTag(tag) {
    this.tag.delete(tag.toLowerCase());
  }

  getTags() {
    return [...this.tag];
  }

  union(otherTag) {
    return new Set([...this.tag, ...otherTag]);
  }

  intersection(otherTag) {
    return new Set([...this.tag].filter((tag) => otherTag.has(tag)));
  }
  // set([1,2,3,4,54,56])
  difference(otherTags) {
    return new Set([...this.tag].filter((tag) => !otherTags.has(tag)));
  }
}

const article = new TagManager();

article.addTag("Javascript");
article.addTag("Web development");

article.addTag("Web development");

const article2 = new TagManager();

article2.addTag("Javascript");
article2.addTag("App development");
article2.addTag("App development");
let ans = [...article.union(article2.getTags())];
console.log(ans);

// let otherValue = new Set(["grey", "black", "black"]);

// console.log();

// let mySet = new Set(
//   ["grey", "black", "black", "red", "blue", "green", "black"].filter(
//     (value) => otherValue.has(value) // true
//   )
// );
