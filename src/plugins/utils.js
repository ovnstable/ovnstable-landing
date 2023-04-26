let accounting = require("accounting-js")

let accountingConfig = {
    symbol: "",
    precision: 6,
    thousand: " ",
}

let accountingFourConfig = {
    symbol: "",
    precision: 4,
    thousand: " ",
}

let accountingSecondConfig = {
    symbol: "",
    precision: 2,
    thousand: " ",
}

let accountingFirstConfig = {
    symbol: "",
    precision: 1,
    thousand: " ",
}


let accountingZeroConfig = {
    symbol: "",
    precision: 0,
    thousand: " ",
}

let accountingSecondConfigComma = {
    symbol: "",
    precision: 2,
    thousand: ",",
}

let accountingFirstConfigComma = {
    symbol: "",
    precision: 1,
    thousand: ",",
}

let accountingZeroConfigComma = {
    symbol: "",
    precision: 0,
    thousand: ",",
}

export default {

    formatNumberToMln(num) {
        // if (num >= 500000) {
            return (num / 1000000).toFixed(2) + 'm';
        // }
        // return num.toLocaleString();
    },

    formatNumberToPercent(value, maxValue) {
        return (value / maxValue * 100).toFixed(2) + '%';
    },

    formatMoney(number = 0, count = 6) {

        if (!number) {
            return 0;
        }

        switch (count){
            case 6:
                return accounting.formatMoney(number, accountingConfig);
            case 4:
                return accounting.formatMoney(number, accountingFourConfig);
            case 2:
                return accounting.formatMoney(number, accountingSecondConfig);
            case 1:
                return accounting.formatMoney(number, accountingFirstConfig);
            case 0:
                return accounting.formatMoney(number, accountingZeroConfig);
        }
    },

    formatMoneyComma(number = 0, count = 6) {

        if (!number) {
            return 0;
        }

        switch (count){
            case 2:
                return accounting.formatMoney(number, accountingSecondConfigComma);
            case 1:
                return accounting.formatMoney(number, accountingFirstConfigComma);
            case 0:
                return accounting.formatMoney(number, accountingZeroConfigComma);
        }
    },
}
