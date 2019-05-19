function Api(key) {
  this.request = function (type, callback) {
    let data = "{}";
    let requestUrl = 'https://api.themoviedb.org/3/';
    const xhr = new XMLHttpRequest();

    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        try {
          callback(JSON.parse(this.responseText));
        } catch(error) {
          console.log(error);
        }
      }
    });

    if (type === 'movie' || type === 'tv') {
      requestUrl += 'discover/' + type +
        '?include_video=false&include_adult=false&sort_by=popularity.desc&';
    } else if (type === 'people') {
      requestUrl += 'person/popular?';
    } else if (type === 'configuration') {
      requestUrl += 'configuration?';
    }
    
    requestUrl += 'language=en-US&page=1&api_key=' + key;
    xhr.open('GET', requestUrl);
    xhr.send(data);
  }
}

export default Api;
