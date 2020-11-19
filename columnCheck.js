export const checkColumn = array => {

    let checkedOne = false;
    let checkedTwo = false;
    let checkedThree = false;
    let checkedFour = false;
    let checkedFive = false;
    let checkedSix = false;
    let checkedSeven = false;
    let checkedEight = false;
    let checkedNine = false;

    let leftColumn = false;
    let middleColumn = false;
    let rightColumn = false;

    console.log(array);
    array.map((element, index) => {
        if (element[0].id == 1) {
            checkedOne = true;
        } else if (element[0].id == 2) {
            checkedTwo = true;
        } else if (element[0].id == 3) {
            checkedThree = true;
        } else if (element[0].id == 4) {
            checkedFour = true;
        } else if (element[0].id == 5) {
            checkedFive = true;
        } else if (element[0].id == 6) {
            checkedSix = true;
        } else if (element[0].id == 7) {
            checkedSeven = true;
        } else if (element[0].id == 8) {
            checkedEight = true;
        } else if (element[0].id == 9) {
            checkedNine = true;
        }
    });

    if (checkedOne && checkedFour && checkedSeven) {
        leftColumn = true;
        return leftColumn;
    } else if (checkedTwo && checkedFive && checkedEight) {
        middleColumn = true;
        return middleColumn;
    } else if (checkedThree && checkedSix && checkedNine) {
        rightColumn = true;
        return rightColumn;
    } else {
        return false;
    }
}