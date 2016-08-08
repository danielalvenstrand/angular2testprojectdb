var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function GooglePlaces() {
    var gpAPIUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch";


    this.getLoc = (req,res) => {
      var fullUrl = gpAPIUrl + "/json?key=" + req.body.key + "&location=" + req.body.location + "&radius=" + req.body.radius ;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", fullUrl, true);
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

      xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            console.log(xhr.responseText);
        }
      }

      // send the collected data as JSON
      xhr.send(null);

      xhr.onloadend = function () {
        if (xhr.status == 200) res.send(JSON.parse(xhr.responseText));
            else res.send({status: 1, message: 'Place search failed'});
      }
    }

}

module.exports = new GooglePlaces();