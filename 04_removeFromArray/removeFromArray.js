const removeFromArray = function(array, ...args) { //...args oznacza dowolną ilość argumentów, przechowaną w tablicy args[]
    let index;
    for(let i=0; i<args.length; i++){ //Wykonuj pętle tak wiele razy jak długa jest lista argumentów w args[]
        if(array.includes(args[i])){ //Wykonaj usunięcie tylko wtedy, jeśli dany element istnieje w tablicy array[]
            index = array.indexOf(args[i]); //Pobierz indeks argumentu, który będziemy chcieli usunąć
            array.splice(index, 1); //Usuń z tablicy array[] element o indeksie index
        }
        
    } 
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
