function loadTable(){
  var headline=Object.keys(data[0]);

    var insert1="";
    headline.forEach(o=>insert1+="<th>"+o+"</th>");//document.write(insert1);
    var insert2="";

    data.forEach(function(o){
      insert3="<tr>";
      //insert2+=o['name']+' ';
      headline.forEach(ob=>insert3+="<td>"+o[ob]+"</td>");
      insert2+=insert3+"</tr>";
    });

    var str = '<table class="table table-condensed table-striped table-bordered">';
    str+='<thead><tr>';
    str+=insert1;
    str+=insert2;
    str+='</tr></thead>';
    str+='</table>';
    $(".content").html(str); 

    
    
}


$(window).load(function(){
    loadTable();
})
