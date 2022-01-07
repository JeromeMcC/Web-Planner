$(document).ready(function () {

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


    function timeClock() {
        var currentHour = moment().hours();
        $(".time-block").each(function () {
            var currentBlockHour = parseInt($(this).attr("id").split("-")[1])
            if (currentBlockHour < currentHour) {
                $(this).addClass("past")
            }
            else if (currentBlockHour === currentHour) {
                $(this).addClass("present")
            }

            else {
                $(this).addClass("future")
            }
        })

    }

    timeClock()

    $(".saveBtn").click(function () {
        var textContent = $(this).prev().val()
        var hourId = $(this).parent().attr("id")

        var update = JSON.parse(localStorage.getItem("description"))

        var timeSlot = {

        }

        if (update === null) {
            timeSlot[hourId] = textContent

            localStorage.setItem("description", JSON.stringify(timeSlot))
        }
        else {
            update[hourId] = textContent

            localStorage.setItem("description", JSON.stringify(update));
        }


    });
})
function schedule() {
    var storedInfo = JSON.parse(localStorage.getItem("description"))
    if ( storedInfo===null) 
        return
    
    var infoBlock = Object.entries(storedInfo)
    infoBlock.forEach(function (item) {
        var hour = item[0]
        var descr = item[1]
        var timeslotEl = $("#"+item[0])
        var textAreaEl= timeslotEl.children("textarea")

        textAreaEl.val(descr)


    })


}




schedule()


