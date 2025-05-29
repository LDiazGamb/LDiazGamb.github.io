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

hmContextIds["1021"]="control-flow-statements-and-lo.html";
hmContextIds["1022"]="object-oriented-programming-ba.html";
hmContextIds["1023"]="final-project-and-assessment-i.html";
hmContextIds["1024"]="learning-points.html";
hmContextIds["1020"]="getting-started-with-java.html";
hmContextIds["1026"]="classes.html";
hmContextIds["1027"]="objects.html";
hmContextIds["1025"]="features.html";
hmContextIds["1030"]="data-types.html";
hmContextIds["1028"]="operators.html";
hmContextIds["1029"]="usage.html";
hmContextIds["1033"]="primitive.html";
hmContextIds["1036"]="string.html";
hmContextIds["1037"]="string-index.html";
hmContextIds["1038"]="the-charat-method.html";
hmContextIds["1039"]="the-length-method.html";
hmContextIds["1040"]="concatenation.html";
hmContextIds["1041"]="text-case.html";
hmContextIds["1034"]="reference.html";
hmContextIds["1035"]="array.html";
hmContextIds["1031"]="data-structures.html";
