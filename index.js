// Code your solution in this file!

/*
    function return the distance from pickup location
*/
function distanceFromHqInBlocks(pickupLoc){
    const scuberLoc = 42
    return pickupLoc >= scuberLoc ? pickupLoc - scuberLoc : scuberLoc - pickupLoc
}

/*
    find out the distance by feet from the pickup location
*/
function distanceFromHqInFeet(pickupLoc){
    const sizeOfEachBlock = 264
    return distanceFromHqInBlocks(pickupLoc) * sizeOfEachBlock
}

/*
    return the distance passanger is travelling in feat
*/
function distanceTravelledInFeet(startLoc, destinationLoc){
    const distance = startLoc >= destinationLoc ? startLoc - destinationLoc : destinationLoc - startLoc
    const sizeOfEachBlock = 264
    return distance * sizeOfEachBlock
}

function calculatesFarePrice( startLoc, destinationLoc){
    const sizeOfEachBlock = 264
    const distance = (startLoc >= destinationLoc 
                        ? startLoc - destinationLoc 
                        : destinationLoc - startLoc) * sizeOfEachBlock
    let price = 0
    if (distance <= 400){
        return price
    } else if (distance > 400 && distance <= 2000){
        price += (distance - 400)  * 0.02
        return price
    } else if (distance < 2500){
        price += 25
        return price
    } else{
        return 'cannot travel that far'
    }
}
calculatesFarePrice(34, 32)