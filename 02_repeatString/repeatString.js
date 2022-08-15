const repeatString = function(text, num) {
    if(num<0){
        return "ERROR";
    }
    else{
        let temp = "";
        for(let i = 0; i<num; i++){
            temp = temp + text;
        }
        return temp;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
