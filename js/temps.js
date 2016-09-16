$(document).ready(function () {
    var d = new Date();
    var n = d.getHours();
    if (n > 19 || n < 6) {
        // If time is after 7PM or before 6AM, apply night theme to ‘body’
        //document.body.className = "nuit";
        //document.getElementsByTagName("nav").className = "nuit";
    }
    else {
        // Else use ‘day’ theme
        //document.body.className = "jour";
    }
});
