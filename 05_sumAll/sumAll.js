const sumAll = function(start, end) {
    let sum = 0;
    if(start < 0 || end < 0){ //Jeśli start albo end są mniejsze od 0 to wyrzuć ERROR
        return "ERROR"; 
    }
    else if(typeof(start)!="number" || typeof(end)!="number" ){ //Jeśli start albo end nie są numerami to wyrzuć ERROR
        return "ERROR";
    }
    else{
        if(start<end){ //Jeśli start jest mniejszy od end, to dodawaj po kolei liczby z przedziału start-end
            for(let i=start; i<=end; i++){
                sum+=i;
            }
        }
        else{ //Jeśli end jest mniejsze od start, to dodawaj liczby z przedziału end-start
            for(let i=end; i<=start; i++){
                sum+=i;
            }
        }
        
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
