

$(document).ready(function(){
  $('#search').on('click', function(event){

    var nameToSearch = $('#githubName').val();

    $.getJSON("https://api.github.com/users/colinloretz", function(data){
      console.log(data)
    $('#location').text(data.location);
    $('#name').text(data.name);
    $("#photo").attr('src',data.avatar_url);
    $("#blog_url").attr('href',data.blog);
    $("#github_url").attr('href',data.url);
    })
  })
})
