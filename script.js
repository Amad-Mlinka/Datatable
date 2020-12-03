$(()=>{
    //Ajax call for dummy text
    var data = $.parseJSON($.ajax({
        url:  'https://jsonplaceholder.typicode.com/todos',
        dataType: "json",
        async: false
    }).responseText);

    //Data table initialisation
    table=$('#table')

    console.log(data[0])
    for(property in data[0]){
        table_header=$("<th></th>");
        table_header.text(property.toLocaleUpperCase())
        $("#table_header").append(table_header)
        console.log(property)
    }

    data.forEach(element =>{
        table_row=$("<tr></tr>");
        for(property in element){
            table_data=$("<td></td>");
            table_data.text(element[property])
            table_row.append(table_data)

        }
        $("#table_body").append(table_row)

    })
    table.DataTable();
})



