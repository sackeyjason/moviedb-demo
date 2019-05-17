function Api(key) {
    this.key = key;
    this.request = function (type, callback) {
        var data = "{}";
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === this.DONE) {
            callback(JSON.parse(this.responseText));
          }
        });

        if (type === 'people') {
            xhr.open("GET", "https://api.themoviedb.org/3/person/popular?language=en-US&page=1&api_key=" + this.key);
        } else {
            xhr.open("GET", "https://api.themoviedb.org/3/discover/" + type + "?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=" + this.key);
        }
        xhr.send(data);
    }
}

export default Api;
