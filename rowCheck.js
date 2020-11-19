export const checkRows = array => {

    let checkedOne = false;
    let checkedTwo = false;
    let checkedThree = false;
    let checkedFour = false;
    let checkedFive = false;
    let checkedSix = false;
    let checkedSeven = false;
    let checkedEight = false;
    let checkedNine = false;

    let topRow = false;
    let middleRow = false;
    let bottomRow = false;

    console.log(array);
    array.map((element, index) => {
        if (element[0].id == 1) {
            checkedOne = true;
        }
        if (element[0].id == 2) {
            checkedTwo = true;
        }
        if (element[0].id == 3) {
            checkedThree = true;
        }

    });

    array.map((element, index) => {
        if (element[0].id == 4) {
            checkedFour = true;
        }
        if (element[0].id == 5) {
            checkedFive = true;
        }
        if (element[0].id == 6) {
            checkedSix = true;
        }
    });

    array.map((element, index) => {
        if (element[0].id == 7) {
            checkedSeven = true;
        }
        if (element[0].id == 8) {
            checkedEight = true;
        }
        if (element[0].id == 9) {
            checkedNine = true;
        }

    });
    if (checkedOne && checkedTwo && checkedThree) {
        topRow = true;
        return topRow;
    } else if (checkedFour && checkedFive && checkedSix) {
        middleRow = true;
        return middleRow;
    } else if (checkedSeven && checkedEight && checkedNine) {
        bottomRow = true;
        return bottomRow;
    } else {
        return false;
    }
}