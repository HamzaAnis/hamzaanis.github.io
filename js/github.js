$.ajax({
    type: "GET",
    url: 'https://api.github.com/users/{{ site.github.user }}/repos?callback=?',
    data: { type: "all", sort: "pushed", direction: "desc" },
    dataType: 'json',
    success: function(resp) {
      if (resp.data.length > 0) {
        $('#gh_repos').html('<ul></ul>');
        for (var i = 0; i < $(resp.data).length && i < {{ site.github.repo_count }}; i++) {
          $('#gh_repos > ul').append(
            '<li><a href="' + resp.data[i]['html_url'] + '">' + resp.data[i]['name'] + '</a>' + '<p>' + (resp.data[i]['description'] ? resp.data[i]['description'] : '(No description)') + '</p></li>'
          );
        }
      } else {
        $('#gh_repos').html('<p>&#128049; I can haz code? </p>');
      }
    }
  });
  
  