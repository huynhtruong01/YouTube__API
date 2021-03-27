const apiKey = "AIzaSyCh-2jMBWpn1xb7nIEv-SE1K4Cg2Mp_Wso";
const showVideo = "";
const form = document.querySelector("#form");
const videos = document.querySelector("#videos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const search = document.querySelector("#search");
  search.value;

  videoSearch(apiKey, search, 30);
});

function videoSearch(key, search, maxResult) {
  var request = new XMLHttpRequest() || ActiveXObject();

  request.onreadystatechange = () => {
    if (this.readyState === 4 && this.status === 200) {
      addData(this.responseXML);
    }
  };

  request.open(
    "GET",
    "https://www.googleapis.com/youtube/v3/search?key=" +
      key +
      "&type=video&part=snippet&maxResults=" +
      maxResult +
      "&q=" +
      search,
    true
  );

  request.send('data=true');
}

function addData(data) {
  console.log(data);
  data.items.forEach((item) => {
    showVideo = `
          <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
        `;
    videos.append(showVideo);
  });
}
