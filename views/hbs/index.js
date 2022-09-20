
function getTable(listHtml) {
    return `<table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col"><span class="text-warning">ID</span></th>
                        <th scope="col"><span class="text-warning">TITLE</span></th>
                        <th scope="col"><span class="text-warning">PRICE</span></th>
                        <th scope="col"><span class="text-warning">THUMBNAIL</span></th>
                    </tr>
                </thead>
                <tbody>
                ${listHtml}
                </tbody>
            </table>`
}
const alert = `<div role="alert" style="background-color: #ed9898; padding: 10px;  border-radius: 3px">
<span class="text-center text-danger">No se encontraron datos</span>
</div>`

function renderProducts(products) {
    let HTML = alert;
    if (products.length) {
        const listhtml = products.map(product => {
            return ` <tr>
                         <td scope="row">${product.id}</td>
                        <td scope="row">${product.title}</td>
                        <td>${product.price}</td>
                        <td> <img width="26px" src=${product.thumbnail} /></td>
                    </tr>`
        }).join(" ");

        HTML = getTable(listhtml);
    }

    document.getElementById('products').innerHTML = HTML
}
function renderMessages(messages) {

    let HTML = alert;

    if (messages.length) {
        HTML = messages.map(message => {
            return ` <li style="width: 579px">
                        <span class="text-primary">
                            <strong>${message.email}</strong>
                        </span>
                        <span style="color: brown; font-size: 12px;">
                            [${message.date}]: 
                        </span>
                        <span class="text-success" style="font-style:italic">
                            ${message.message}
                        </span> 
                    </li>`
        }).join(" ");
    }

    document.getElementById('messages').innerHTML = HTML
}
const socket = io.connect();
socket.on('products', data => {
    renderProducts(data);
});
socket.on('messages', data => {
    renderMessages(data);
});

const elementProducts = document.getElementById('formProducts');
elementProducts.addEventListener('submit', event => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const thumbnail = document.getElementById('thumbnail').value;

    socket.emit('newProducts', { title, price, thumbnail });

    document.getElementById('title').value = "";
    document.getElementById('price').value = "";
    document.getElementById('thumbnail').value = "";

    return false;
});

const elementMessage = document.getElementById('formMessages');
elementMessage.addEventListener('submit', event => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    socket.emit('newMessages', { email, message });

    document.getElementById('email').value = "";
    document.getElementById('message').value = "";

    return false;
});