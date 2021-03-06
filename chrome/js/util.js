/**
 * Created by PyCharm.
 * User: ankit
 * Date: 29/12/11
 * Time: 2:59 AM
 * To change this template use File | Settings | File Templates.
 */

function findPosition(list, key, value) {
    var listLength = list.length;
    var pos = -1;
    for (var i = 0; i < listLength; i++) {
        var h = list[i];
        if (h['key'] === value) {
            pos = i;
            break;
        }
    }

    return pos;
}

function limitStringLineWidth(string, numChars) {
    var remainingChars = string;
    var finalString = "";
    var numLeft = string.length;
    do {
        finalString += remainingChars.substr(0, numChars);
        remainingChars = remainingChars.substr(numChars);
        numLeft -= numChars;
        if (numLeft < 5) {
            numLeft -= numChars;
            finalString += remainingChars.substr(0, numChars)
        }
        else {
            finalString += "<br/>";
        }
    } while (numLeft > 0);

    return finalString;
}

function ensureProperUrl(url) {
    var a = "http";
    if (url.indexOf(a) != 0) {
        url = "http://" + url;
    }
    return url;
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function guid() {
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function getUrlVars(url, associative) {
    if (url === null) {
        return [];
    }

    var quesLocation = url.indexOf('?');
    var equalLocation = url.indexOf('=');

    if(equalLocation < 0) {
        return [];
    }

    if(quesLocation < 0) {
        quesLocation = -1;
    }

    var vars = [], hash, varsAssoc = {};
    var hashes = url.slice(quesLocation + 1).split('&');
    var element;

    for (var i = 0; i < hashes.length; i++) {
        equalLocation = hashes[i].indexOf('=');
        element = {
            "key":hashes[i].slice(0, equalLocation),
            "value":hashes[i].slice(equalLocation + 1)
        };
        (associative)?(varsAssoc[element.key] =element.value):(vars.push(element));
    }

    if (associative) {
        return varsAssoc;
    } else {
        return vars;
    }
}

function getHeaderVars(data) {
    if (data === null || data === "") {
        return [];
    }

    var vars = [], hash;
    var hashes = data.split('\n');
    var header;

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split(":");
        header = {
            "key": jQuery.trim(hash[0]),
            "value": jQuery.trim(hash[1])
        };

        vars.push(header);
    }

    return vars;
}

function valuesFollowingInputValue(value) {
    return $('input[value="' + value + '"] + input').val()
}