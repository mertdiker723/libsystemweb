export default class Request{
    constructor(){
        this.url = "http://localhost:3000/book/";
    }

    get(){
        return new Promise((resolse,reject) => {
            fetch(`${this.url}`)
            .then(response => response.json())
            .then(data => resolse(data))
            .catch(error => reject(error));
        })
    }
}