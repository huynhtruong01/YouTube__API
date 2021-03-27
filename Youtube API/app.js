$(document).ready(function(){

  var API_KEY = 'AIzaSyCh-2jMBWpn1xb7nIEv-SE1K4Cg2Mp_Wso';
  var video = '';

  $("#form").submit(function(event){
    event.preventDefault();
    // console.log("form is submit");
    var search = $("#search").val();
    videoSearch(API_KEY, search, 40);
  })

  function videoSearch(key, search, maxResult){
    $.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+maxResult+"&q="+search, function(data){
      console.log(data);
      data.items.forEach(item => {
        video = `
          <iframe width="270px" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0"></iframe>
        `

        $("#videos").append(video);
      })
    })
  }
})