fetch(`https://fakestoreapi.com/products`).then((data)=>{
    return data.json();
}).then((objectdata)=>{
    console.log(objectdata[0].title);
    let tableData=" " ;
    objectdata.Map((values)=>{
        tableData += ` <tr>
        <td>${Values.id}</td>
        <td>${values.title}</td>
        <td>${values.description}
        <td>${values.price}</td>
      </tr>`;
    });
    document.getElementById("TABLE-BODY").innerHTML=tableData;
})