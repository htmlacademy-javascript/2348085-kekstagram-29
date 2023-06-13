function checkStringLength(str, maxLength) {
    return str.length <= maxLength;
    }

function isPalindrome(str) {
    str = str.toLowerCase(); // приводим всю строку к нижнему регистру
    str = str.replace(/\s/g, ''); // убираем все пробелы в строке
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
    return false;
            }
        }
    return true;
    }

function extractNumber(str) {
    const regex = /\d/g;
    const matches = str.match(regex);
    if (matches === null) {
        return NaN;
        }
    return parseInt(matches.join(''), 10);
    }
wefwefwefwefwegqercgqrfg
