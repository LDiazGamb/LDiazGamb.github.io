var hmContextIds = new Array();
function hmGetContextId(query) {
    var urlParams;
    var match,
        pl = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    params = {};
    while (match = search.exec(query))
       params[decode(match[1])] = decode(match[2]);
    if (params["contextid"]) return decodeURIComponent(hmContextIds[params["contextid"]]);
    else return "";
}

hmContextIds["1020"]="getting-started-with-java.html";
hmContextIds["1026"]="classes.html";
hmContextIds["1027"]="objects.html";
hmContextIds["1025"]="features.html";
hmContextIds["1030"]="data-types.html";
hmContextIds["1028"]="operators.html";
hmContextIds["1029"]="usage.html";
hmContextIds["1036"]="string.html";
hmContextIds["1040"]="concatenation.html";
hmContextIds["1037"]="string-index.html";
hmContextIds["1041"]="text-case.html";
hmContextIds["1038"]="the-charat-method.html";
hmContextIds["1039"]="the-length-method.html";
hmContextIds["1053"]="the-startswith()-method.html";
hmContextIds["1054"]="the-endswith()-method.html";
hmContextIds["1055"]="the-isempty()-method.html";
hmContextIds["1056"]="the-indexof()-method.html";
hmContextIds["1042"]="conditional-flow.html";
hmContextIds["1043"]="if.html";
hmContextIds["1045"]="else.html";
hmContextIds["1046"]="else-if.html";
hmContextIds["1044"]="switch.html";
hmContextIds["1047"]="nested-conditjions.html";
