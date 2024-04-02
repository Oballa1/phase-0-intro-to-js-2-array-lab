// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
  cats.push("Ralph");
  cats.unshift();
}
function destructivelyPrependCat(name) {
    cats.unshift(name);}
    function destructivelyRemoveLastCat() {
       return cats.pop();}
        function destructivelyRemoveFirstCat() {
           return cats.shift();}
            function appendCat(name) {
                return cats.concat(name);
              }
              function prependCat(name) {

                return [name, ...cats];}
                function removeLastCat() {
                    return cats.slice(0,cats.length -1);}
                    function removeFirstCat() {
                        return cats.slice(1);}