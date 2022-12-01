// $0 is used to refer to a specific element of a page
// $1 is for accessing an element just before
// $0 = $1 this will update the $0 node
/**
 * Siblings: siblings of the children of same parent nodes
 *** head and body tags are siblings and both have the same parent html 
*/

console.log(document.body.firstChild);
let a = document.body.firstChild
console.log(a.parentNode)       // node returns anything that is node
console.log(a.parentElement)    // element is like <html>, <body>, <div>, <p>
console.log(a.firstChild.nextSibling)   //REMEMBER TO COUNT THE TEXT NODE AS ONE OF THE NODES


/*
remember when you go for the element accessing you have to consider the text nodes as well
 */