function mapToNegativize(sourceArray){
    for(let i = 0 ; i<sourceArray.length;i++ ){
        sourceArray[i]= sourceArray[i]*-1;
    } 
    return sourceArray;
}

function mapToNoChange(sourceArray){
    let tmp=[];
    for(let i = 0 ; i<sourceArray.length;i++ ){
        tmp.push(sourceArray[i]);
    } 
    
    return tmp;
}

function mapToDouble(sourceArray){
    for(let i = 0 ; i<sourceArray.length;i++ ){
        sourceArray[i]= sourceArray[i]*2;
    } 
    return sourceArray;
}
function mapToSquare(sourceArray){
    for(let i = 0 ; i<sourceArray.length;i++ ){
        sourceArray[i]= sourceArray[i]* sourceArray[i];
    } 
    return sourceArray;
}

function reduceToTotal(sourceArray, startingPoint=0){
    let total=startingPoint;
    for(let i = 0 ; i<sourceArray.length;i++ ){
        total += sourceArray[i];
    } 
    return total;
}

function reduceToAllTrue(sourceArray){
    let boolean;
    for(let i = 0 ; i<sourceArray.length;i++ ){
        if(sourceArray[i]===false){
            return false;
        }
        else if(sourceArray[i]===true){
            boolean =  true;
        }
    }
    return boolean;
}


function reduceToAnyTrue(sourceArray){
    let boolean = false;
    for(let i = 0 ; i<sourceArray.length;i++ ){
       if(sourceArray[i]===true){
           return true;
       }
    } 
    return boolean;
}

