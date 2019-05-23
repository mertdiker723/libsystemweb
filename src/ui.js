export default class UI{
     constructor(){
         this.bookList = $("#book_list")[0];
         this.tableBook = $("#tableId")[0];
         this.tbody = $("#tbody")[0];
     }
     
     writeAll(data){
        let html = "";
        data.forEach(element => {
            html +=
            `   <tr>
                    <td>${element.name}</td>
                    <td>${element.author}</td>
                    <td>${element.publisher}</td>
                    <td>${element.pageNumber}</td>
                    <td>${element.serialNumber}</td>
                    <td><a href="#" id="update-employee" class="btn btn-success">Güncelle</a></td>
                    <td> <a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
                </tr>
            `;
        });

        tbody.innerHTML = html;
        
     }
} 