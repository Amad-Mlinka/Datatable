$(()=>{
    //Ajax call for dummy text
    var data = $.parseJSON($.ajax({
        url:  'https://jsonplaceholder.typicode.com/todos',
        dataType: "json",
        async: false
    }).responseText);

    //Data table initialisation
    for(property in data[0]){
        table_header=$("<th></th>");
        table_header.text(property.toLocaleUpperCase())
        $("#table_header").append(table_header)
        console.log(property)
    }
    table=$('#table')
    table.DataTable({
        data:data,
        columns:[
            {data:"userId"},
            {data:"id"},
            {data:"title"},
            {data:"completed"}
        ]
    });
})



