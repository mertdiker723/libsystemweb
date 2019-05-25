export default class UI {
    constructor() {
        this.bookList = $("#book_list")[0];
        this.tableBook = $("#tableId")[0];
        this.tbody = $("#tbody");

        this.bookName = $("#bookName");
        this.authorName = $("#authorName");
        this.publisherName = $("#publisherName");
        this.numberOfPage = $("#numberOfPage");
        this.serialNumber = $("#serialNumber");
    }

    writeAll(data) {
        $.each(data, (index, element) => {
            $(this.tbody).append(`
                    <tr>
                        <td>${element.id}</td>
                        <td>${element.name}</td>
                        <td>${element.author}</td>
                        <td>${element.publisher}</td>
                        <td>${element.pageNumber}</td>
                        <td>${element.serialNumber}</td>
                        <td><a href="#" id="update-book" class="btn btn-success">Edit</a></td>
                        <td><a href="#" id="delete-book" class="btn btn-danger">Delete</a></td>
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
                <td><a href="#" id="update-book" class="btn btn-success">Edit</a></td>
                <td><a href="#" id="delete-book" class="btn btn-danger">Delete</a></td>
            </tr>
        `);
        this.inputClearAll();
    }

    deleteOneBookFromUI(target) {
        target.remove();
    }

    inputClearAll() {
        this.bookName.val("");
        this.authorName.val("");
        this.publisherName.val("");
        this.numberOfPage.val("");
        this.serialNumber.val("");
    }

    writeSelectedBookIntoTextBoxes(tr) {
        this.bookName.val(tr.name);
        this.authorName.val(tr.author);
        this.publisherName.val(tr.publisher);
        this.numberOfPage.val(tr.pageNumber);
        this.serialNumber.val(tr.serialNumber);
    }

    updateSelectedBook(data,tr){

        tr.innerHTML = `  
        <tr>
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.author}</td>
            <td>${data.publisher}</td>
            <td>${data.pageNumber}</td>
            <td>${data.serialNumber}</td>
            <td><a href="#" id="update-book" class="btn btn-success">Edit</a></td>
            <td><a href="#" id="delete-book" class="btn btn-danger">Delete</a></td>
        </tr>
    `;
        this.inputClearAll();
    }

} 