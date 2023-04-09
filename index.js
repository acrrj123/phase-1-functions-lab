// Code your solution in this file!

function distanceFromHqInBlocks(pickup) {
    const result = pickup - 42
    const convertNegative = Math.abs(result)
    return convertNegative
}

function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264
}

function distanceTravelledInFeet(pickup, destination) {
    const resultFt = (pickup - destination) * 264
    const convert = Math.abs(resultFt) 
    return convert
}

function calculatesFarePrice(pickup, destination) {
    const foot = distanceTravelledInFeet(pickup, destination)
    if (foot <= 400) {
        return 0
    }
    else if (foot > 400 && foot <= 2000) {
        return ((foot - 400) * 2) / 100
    }    
    else if (foot > 2000 && foot < 2500) {
        return 25
    }  
    else {
        return 'cannot travel that far'
    }  
}
