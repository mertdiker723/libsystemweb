import Request from './requests';
import UI from './ui';

const request = new Request();
const ui = new UI();

// select id

const form = $("#formId")[0];

const bookName = $("#bookName");
const authorName = $("#authorName");
const publisherName = $("#publisherName");
const numberOfPage = $("#numberOfPage");
const serialNumber = $("#serialNumber");

const addbutton = $("#addBtn")[0];
const updateBtn = $("#updateBtn")[0];
const cancelBtn = $("#cancelBtn")[0];

eventListeners();

function eventListeners(){
   
}

$(document).ready(function(){
    request.get()
    .then(data => ui.writeAll(data))
    .catch(error => console.log(error));
});

$("#addBtn").on("click",(e)=> {
    const bookN =  bookName.val();
    const author = authorName.val();
    const publisher = publisherName.val();
    const numberPage = numberOfPage.val();
    const serialNum = serialNumber.val();
    request.post({
        name:bookN,
        author:author,
        publisher:publisher,
        pageNumber:numberPage,
        serialNumber:serialNum
    })
    .then(data => {
        ui.writeOneBook(data);
    })
    .catch(error => console.log(error));
    e.preventDefault();
})
