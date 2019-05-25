import Request from './requests';
import UI from './ui';

const request = new Request();
const ui = new UI();

const bookName = $("#bookName");
const authorName = $("#authorName");
const publisherName = $("#publisherName");
const numberOfPage = $("#numberOfPage");
const serialNumber = $("#serialNumber");

let selectedBookId;
let parentTr = "";

// Sayfa Yüklendiğinde Gelen Veriler
$(document).ready(function () {
    request.get()
        .then(data => ui.writeAll(data))
        .catch(error => console.log(error));
});

// Ekleme İşlemi
$("#addBtn").on("click", (e) => {
    const bookN = bookName.val();
    const author = authorName.val();
    const publisher = publisherName.val();
    const numberPage = numberOfPage.val();
    const serialNum = serialNumber.val();

    if (bookN !== "" & author !== "" & publisher !== "" & numberPage !== "" & serialNum !== "") {
        request.post({
            name: bookN.trim(),
            author: author.trim(),
            publisher: publisher.trim(),
            pageNumber: parseFloat(numberPage),
            serialNumber: parseFloat(serialNum)
        })
            .then(data => {
                ui.writeOneBook(data);
            })
            .catch(error => console.log(error));
    }
    else {
        window.alert("Hepsini Doldurmak Zorundasınız..!");
    }

    e.preventDefault();
})

// Tek Silme İşlemi ve Edit İşlemi
$("#book_list").on("click", (e) => { 
    if (e.target.id === "delete-book") {
        request.delete(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        ui.deleteOneBookFromUI(e.target.parentElement.parentElement);
    }
    else if (e.target.id === "update-book") {

        selectedBookId = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        parentTr = e.target.parentElement.parentElement; //zaten şuan tablodan var olan TR elementi ve içinde ki td
        //elemenlerini aldık üzerine yazdırmak için ui da ki başka bir fonksiyona parametre verdik.


        $("#addBtn")[0].classList.add("d-none");
        $("#updateBtn")[0].classList.remove("d-none");
        $("#cancelBtn")[0].classList.remove("d-none");
        const obj = {
            name: e.target.parentElement.parentElement.children[1].textContent,
            author: e.target.parentElement.parentElement.children[2].textContent,
            publisher: e.target.parentElement.parentElement.children[3].textContent,
            pageNumber: e.target.parentElement.parentElement.children[4].textContent,
            serialNumber: e.target.parentElement.parentElement.children[5].textContent,
        }
        ui.writeSelectedBookIntoTextBoxes(obj);
    }
});

// Cancel İşlemi
$("#cancelBtn").on("click", () => {
    ui.inputClearAll();
    $("#addBtn")[0].classList.remove("d-none");
    $("#updateBtn")[0].classList.add("d-none");
    $("#cancelBtn")[0].classList.add("d-none");

})

//Update İşlemi
$("#updateBtn").on("click", (e) => { // Update İşlemi bitince tekrar başlangıçtaki gibi yap sayfayı
    const bookN = bookName.val();
    const author = authorName.val();
    const publisher = publisherName.val();
    const numberPage = numberOfPage.val();
    const serialNum = serialNumber.val();

    if (bookN !== "" & author !== "" & publisher !== "" & numberPage !== "" & serialNum !== "") {
        request.put(selectedBookId, {
            name: bookN.trim(),
            author: author.trim(),
            publisher: publisher.trim(),
            pageNumber: parseFloat(numberPage),
            serialNumber: parseFloat(serialNum)
        })
            .then(data => {
                ui.updateSelectedBook(data, parentTr);
            })
            .catch(error => window.alert("Update İşlemi yapılırken bir hata ile karşılaşıldı."))
    }

    else {
        window.alert("Tüm Alanları Doldurunuz.");
    }

    $("#addBtn")[0].classList.remove("d-none");
    $("#updateBtn")[0].classList.add("d-none");
    $("#cancelBtn")[0].classList.add("d-none");
    
    e.preventDefault();
})