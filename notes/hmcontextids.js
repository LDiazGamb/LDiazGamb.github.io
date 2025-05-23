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
hmContextIds["1021"]="control-flow-statements-and-lo.html";
hmContextIds["1022"]="object-oriented-programming-ba.html";
hmContextIds["1023"]="final-project-and-assessment-i.html";
hmContextIds["1024"]="learning-points.html";
