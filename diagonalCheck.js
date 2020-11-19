export const checkDiagonal = array => {

    let checkedOne = false;
    let checkedThree = false;
    let checkedFive = false;
    let checkedSeven = false;
    let checkedNine = false;

    let valid_Left_To_Right = false;
    let valid_Right_To_Left = false;

    console.log(array);
    array.map((element, index) => {
        if (element[0].id == 5) {
            checkedFive = true;
        }
        if(element[0].id == 1 ){
            checkedOne = true;
        }
        if(element[0].id == 9){
            checkedNine = true;
        }
        if(element[0].id == 3){
            checkedThree = true;
        }
        if(element[0].id == 3){
            checkedSeven = true;
        }
    });

    if(checkedOne && checkedFive && checkedNine){
        valid_Left_To_Right =  true;
        return valid_Left_To_Right;
    }
    else if(checkedThree && checkedFive && checkedSeven){
        valid_Right_To_Left =  true;
        return valid_Right_To_Left;
    }
   else{
       return false;
   }
}


