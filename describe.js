function generate(url) {
    var endpoint = "https://data.cdc.gov/data.json"
    var pieces = url.split("/");
    var identifier = "https://data.cdc.gov/d/" + pieces[pieces.lngth - 1];
    var data;

    var request = new XMLHttpRequest();

    req.open("GET", endpoint, true);
    req.onreadystatechange = function () {
        if (req.readyState == XMLHttpRequest.DONE) {
            if (req.status == 200) {
                data = JSON.parse(req.responseText);
            }
        }
    }

    var output;
    data.dataset.forEach(function (d) {
        if (d.landingPage = identifier) output = d;
    });

    return output;
}