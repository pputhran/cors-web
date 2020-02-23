function get_dbs (username) {
    $.post("https://" + username + ".cloudant.com/_all_dbs",
    {username:"ravi",pass:"124",submit:true}).done(function(data, textStatus, jqXHR) 
        {
 
        }).fail(function(jqXHR, textStatus, errorThrown) 
    {
        alert(textStatus);
    });

    // $.post({
    //   url: "https://" + username + ".cloudant.com/_all_dbs",
    //   xhrFields: {
    //     withCredentials:true
    //   }
    // }).done(function(resp) {
    //   $('#dbs').empty();
    //   $('#title').show();
  
    //   var dbs = JSON.parse(resp);
    //   dbs.map(function (db) {
    //     $('#dbs').append('<li>' + db + '</li>');  
    //   });
    // });
  }
  
  $('#username').focus();
  $('#get_dbs').submit(function (event) {
    var username = event.target[0].value;
    get_dbs(username);
    return false;
  });