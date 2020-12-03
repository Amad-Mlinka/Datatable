$(()=>{
    var data = $.parseJSON($.ajax({
        url:  'https://jsonplaceholder.typicode.com/todos',
        dataType: "json",
        async: false
    }).responseText);

    for(property in data[0]){
        table_header=$("<th></th>");
        table_header.text(property)
        $("#table_header").append(table_header)
        console.log(property)
    }

    table=$('#table')
    table.dataTable( {
        data: data
    } );
})



