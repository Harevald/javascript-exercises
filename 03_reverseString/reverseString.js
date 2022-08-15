const reverseString = function(text) {
    let textReverse;
    textReverse = text.split("").reverse().join(""); //Podziel string na tablicę substringów, odwróć kolejność elementów w tej tablicy i złącz substringi w całość
                                                    //Np. dla "hello" -> 1) robimy "h", "e", "l", "l", "o" 2) odwracamy kolejność 3) łączymy litery do "olleh" zamiast liter osobno
    return textReverse;
};

// Do not edit below this line
module.exports = reverseString;
