---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---
 <script>
    $.ajax({
      type: "GET",
      url: '//api.github.com/users/{{ site.github.user }}/repos?callback=?',
      data: { type: "all", sort: "pushed", direction: "desc" },
      dataType: 'json',
      success: function(resp) {
        if (resp.data.length > 0) {
          $('#gh_repos').html('<div class="home"><ul></ul></div>');
          for (var i = 0; i < $(resp.data).length && i < {{ site.github.repo_count }}; i++) {
            $('#gh_repos > .home > ul').append(
              '<li><a href="' + resp.data[i]['html_url'] + '">' + resp.data[i]['name'] + '</a> ' +  (resp.data[i]['description'] ? resp.data[i]['description'] : '') + '</li>'
            );
          }
        } else {
          $('#gh_repos').html('<p>&#128049; LOLCODE:404. I Cant haz code</p>');
        }
      }
    });
</script>
{% include github.html %}        
