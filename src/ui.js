export default class UI {
    constructor() {
        this.bookList = $("#book_list")[0];
        this.tableBook = $("#tableId")[0];
        this.tbody = $("#tbody");
    }

    writeAll(data) {
        // let html = "";
        // data.forEach(element => {
        //     html +=
        //         `   <tr>
        //             <td>${element.id}</td>
        //             <td>${element.name}</td>
        //             <td>${element.author}</td>
        //             <td>${element.publisher}</td>
        //             <td>${element.pageNumber}</td>
        //             <td>${element.serialNumber}</td>
        //             <td><a href="#" id="update-employee" class="btn btn-success">Güncelle</a></td>
        //             <td> <a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
        //         </tr>
        //     `;
        // });

        // tbody.innerHTML = html;
        $.each(data,(index,element) => {
            $(this.tbody).append(`
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.publisher}</td>
                        <td>${element.pageNumber}</td>
                        <td>${element.serialNumber}</td>
                        <td><a href="#" id="update-employee" class="btn btn-success">Güncelle</a></td>
                        <td> <a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
                    </tr>
                `);
            });
    }

    writeOneBook(data) {
        this.tbody.append(`  
            <tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.author}</td>
                <td>${data.publisher}</td>
                <td>${data.pageNumber}</td>
                <td>${data.serialNumber}</td>
                <td><a href="#" id="update-employee" class="btn btn-success">Güncelle</a></td>
                <td> <a href="#" id="delete-employee" class="btn btn-danger">Sil</a></td>
            </tr>
        `);
    }
} 