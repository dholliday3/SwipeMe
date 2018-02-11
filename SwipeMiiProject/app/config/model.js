// this file will hold functions/methods used in model

function isInLocation(latA, latB, longA, longB) {
    var latitudeDiff = this.latA - this.latB;
    var longitudeDiff = this.longA - this.longB;

    var squareLat = Math.pow(latitudeDiff, 2);
    var squareLong = Math.pow(longitudeDiff, 2);

    var distance = Math.sqrt(latitudeDiff + longitudeDiff);

    if (distance <= 0.00167348){
        return true;
    }
    else {
        return false;
    }
}

//more functions

export {isInLocation};