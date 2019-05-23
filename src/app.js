import Request from './requests';
import UI from './ui';
const request = new Request();
const ui = new UI();

// select id

const form = $("#formId")[0];

const bookName = $("#bookName")[0];
const authorName = $("#authorName")[0];
const publisherName = $("#publisherName")[0];
const numberOfPage = $("#numberOfPage")[0];
const serialNumber = $("#serialNumber")[0];

const addbutton = $("#addBtn")[0];
const updateBtn = $("#updateBtn")[0];

eventListeners();


function eventListeners(){
   

}

$(document).ready(function(){
    request.get()
    .then(data => ui.writeAll(data))
    .catch(error => console.log(error));
})
