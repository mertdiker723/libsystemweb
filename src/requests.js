export default class Request {
    constructor() {
        this.url = "http://localhost:3000/book";
    }

    get() {
        return new Promise((resolse, reject) => {
            fetch(`${this.url}`)
                .then(response => response.json())
                .then(data => resolse(data))
                .catch(error => reject(error));
        })
    }

    async post(value) {
        const data = await fetch(this.url, {
            method: "POST",
            body: JSON.stringify(value),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const dataJson = await data.json();

        return dataJson;
    }

    put(id, value) {
        return new Promise((resolse, reject) => {
            fetch(`${this.url}/${id}`, {
                method: "PUT",
                body: JSON.stringify(value),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolse(data))
                .catch(error => reject(error));
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}/${id}`, {
                method: "DELETE"
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        })
    }
}