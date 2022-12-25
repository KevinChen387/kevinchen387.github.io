
const kad1 = new Date(2020, 0, 18);
const kbd1 = new Date(2021, 0, 21);
const kcd1 = new Date(2020, 5, 2);
const wad1 = new Date(2021, 8, 1);

const monthName = {
    1: 'January', 2: 'February', 3: 'March',
    4: 'April', 5: 'May', 6: 'June',
    7: 'July', 8: 'August', 9: 'September',
    10: 'October', 11: 'November', 12: 'December'
}

const dayName = {
    1: 'Monday', 2: 'Tuesday', 3: 'Wednesday',
    4: 'Thursday', 5: 'Friday', 6: 'Saturday',
    0: 'Sunday'
}


// 0 means unsupport

function getKad(date) {
    var kad = (date - kad1) / 86400000 + 1;
    if (kad >= 1) {
        return kad;
    } else {
        return 0;
    }
}

function getKbd(date) {
    var kbd = (date - kbd1) / 86400000 + 1;
    if (kbd >= 1) {
        return kbd;
    } else {
        return 0;
    }
}

function getKcd(date) {
    var kcd = (date - kcd1) / 86400000 + 1;
    if (kcd >= 1) {
        return kcd;
    } else {
        return 0;
    }
}

function getWad(date) {
    var wad = (date - wad1) / 86400000 + 1;
    if (wad >= 1) {
        return wad;
    } else {
        return 0;
    }
}


function getDayInfo() {
    var year = window.prompt('Please enter a year:');
    var month = window.prompt('Please enter a month:');
    var day = window.prompt('Please enter a day:');
    var date = new Date(year, month-1, day);

    var kad = getKad(date);
    var kbd = getKbd(date);
    var kcd = getKcd(date);
    var wad = getWad(date);

    if (! kad) {kad = '-';}
    if (! kbd) {kbd = '-';}
    if (! kcd) {kcd = '-';}
    if (! wad) {wad = '-';}

    alert(
`${year}.${month}.${day}
${kad} KAD
${kbd} KBD
${kcd} KCD
${wad} WAD`
    );
}


function today() {
    var now = new Date();
    var yearNumber = now.getFullYear();
    var monthNumber = now.getMonth(); // real month - 1
    var dateNumber = now.getDate();
    var dayNumber = now.getDay();

    var today = new Date(yearNumber, monthNumber, dateNumber);
    var kad = getKad(today);
    var wad = getWad(today);

    monthNumber++ ;

    var month = monthName[monthNumber];
    var day = dayName[dayNumber];

    document.write(`${day}, ${month}.${dateNumber}, ${yearNumber}
${yearNumber}-${monthNumber}-${dateNumber}
${kad} KAD
${wad} WAD`
    );
}