const myLabel = document.getElementById("time");

update();
setInterval(update, 1000);

function update(){

    let date = new Date();
    time.innerHTML = formatTime(date);

    function formatTime(date){
        let year = date.getFullYear();
        year = "năm " + year;
        let month = date.getMonth();
        month = "tháng " + (month + 1);
        let day = date.getDate();
        day = "ngày " + day;
        let weekday = date.getDay();
        weekday = "thứ " + (weekday + 1);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "chiều" : "sáng";

        hours = (hours % 12) || 12;

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);

        return `Bây giờ là ${hours}:${minutes}:${seconds} ${amOrPm}, ${weekday} ${day} ${month} ${year} `;
    }
    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}