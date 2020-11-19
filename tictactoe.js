import { checkDiagonal } from "./diagonalCheck.js";
import { checkRows } from "./rowCheck.js";
import { checkColumn } from "./columnCheck.js";
$(() => {
    let root = $("#root");
    $(".container").append(
        $("<div></div>", {
            class: "row",
        })
    );

    let gridArray = [];
    let gridCounter = 10;

    for (let i = 1; i < gridCounter; i++) {
        gridArray[i] = $("<div></div>", {
            id: i,
            class: "col-4 text-center false"
        })
    }

    let bingoArray = [];
    let clicker = 1;
    $(".row").append(gridArray);
    $("#PlayerChange").css("background-color", "#188CA3");
    $(".row div").on("click", function() {

        if ($(this).attr("class") === "col-4 text-center false") {
            if (clicker % 2 == 0) {
                $(this).css("background-color", "#5E1965");
                $("#PlayerChange").css("background-color", "#188CA3");
                $(this).removeClass("false");
                $(this).addClass("blue")
                clicker++;
            } else {
                $(this).css("background-color", "#188CA3");
                $("#PlayerChange").css("background-color", "#5E1965");
                $(this).removeClass("false");
                $(this).addClass("green")
                clicker++;
            }
        }


        // now we need to perform the checks to see who has won

        bingoArray = gridArray.filter(element => $(element).attr("class") == $(this).attr("class"));

        // find the id's that cna determine a win
        // there are 8 possibilities

        let copyArray = [];
        let diagonal3 = false;
        let rows = false;
        let columns = false;
        if (bingoArray.length >= 3) {
            copyArray = [...bingoArray];

            diagonal3 = checkDiagonal(copyArray);
            console.log(`The diagonal status is ${diagonal3}`);
            rows = checkRows(copyArray);
            console.log(`The row status is ${rows}`);
            columns = checkColumn(copyArray);
            console.log(`The column status is ${columns}`);
        }
        if (diagonal3 || rows || columns) {
            console.log("We have a winner")

            alert("We have a winner!!!");
            location.reload();
        } else {
            if (clicker > 9) {
                alert("No winners");
                location.reload();
            }
        }
    });

});