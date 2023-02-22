// booking page form handlings

// ek toh glitch aa rha hai sb saath main nhi khulne chaiye per khul ri h 
function roomBooking() {
    var room = 0
    document.querySelector(".book-stay").addEventListener("click", function () {
        if (room === 0) {
            document.querySelector("#room-booking-form").style.display = "flex";
            document.querySelector("#table-booking-form").style.display = "none";
            document.querySelector("#food-ordering-form").style.display = "none";

            document.querySelector("#no-service").style.display = "none";
            room = 1
        } else {
            document.querySelector("#room-booking-form").style.display = "none";
            document.querySelector("#no-service").style.display = "block";

            room = 0
        }
    })

    document.querySelector("#room-booking-form > #close-btn").addEventListener("click", function () {
        document.querySelector("#room-booking-form").style.display = "none";
        document.querySelector("#no-service").style.display = "block";

    })
}
roomBooking();

function bookTable() {
    var tableForm = 0;
    document.querySelector(".book-table").addEventListener("click", function () {
        if (tableForm === 0) {
            document.querySelector("#table-booking-form").style.display = "flex";
            document.querySelector("#room-booking-form").style.display = "none";
            document.querySelector("#food-ordering-form").style.display = "none";

            document.querySelector("#no-service").style.display = "none";
            tableForm = 1
        } else {
            document.querySelector("#table-booking-form").style.display = "none";
            document.querySelector("#no-service").style.display = "block";

            tableForm = 0
        }
    })

    document.querySelector("#close-btn").addEventListener("click", function () {
        document.querySelector("#table-booking-form").style.display = "none";
        document.querySelector("#no-service").style.display = "block";

    })
}
bookTable();


function foodOrdering() {
    var foodFlag = 0;
    document.querySelector(".food-order").addEventListener("click", function () {
        if (foodFlag === 0) {

            document.querySelector("#food-ordering-form").style.display = "flex";
            document.querySelector("#table-booking-form").style.display = "none";
            document.querySelector("#room-booking-form").style.display = "none";

            document.querySelector("#no-service").style.display = "none";
            foodFlag = 1
        } else {
            document.querySelector("#food-ordering-form").style.display = "none";
            document.querySelector("#no-service").style.display = "block";

            foodFlag = 0
        }
        document.querySelector(" #food-ordering-form > #close-btn").addEventListener("click", function () {
            document.querySelector("#food-ordering-form").style.display = "none";
            document.querySelector("#no-service").style.display = "block";

        })

    })
}

foodOrdering();
