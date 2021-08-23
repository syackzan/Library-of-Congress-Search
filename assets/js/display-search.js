var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
  var searchParamsArr = document.location.search.split('&');
  console.log(searchParamsArr);
  // Get the query and format values
  var query = searchParamsArr[0].split('=').pop();
  var format = searchParamsArr[1].split('=').pop();
  format = format.replace("=", "");
  var queryR = query.replace("%20", "+");
  console.log(query);
  console.log(queryR);
  console.log(format);

  searchApi(queryR, format);
}

function searchApi(query, format){
  
  if (format == null){
    var srequestUrl = "https://www.loc.gov/search/?q=" + query + "&fo=json"
    fetch(srequestUrl)
    .then (function (response) {
      return response.json();
    })
    .then(function (dataAll) {
      console.log('Fetch Response \n-------------');
      console.log(dataAll);
    });
  
  } else {
      var requestUrl = "https://www.loc.gov/" + format + "/?q=" + query + "&fo=json"; 
      console.log(requestUrl);
      
      fetch(requestUrl)
        .then (function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log('Fetch Response \n-------------');
          console.log(data);
          for (var i = 0; i < data.results.length; i++){
            var searchBox = document.createElement("div");
          }
        });
    }
  }
  
  getParams()