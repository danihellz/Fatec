const firebaseUrl = 'https://shadow-kanban-default-rtdb.firebaseio.com/';
const buttonList = [];

// httpGet(firebaseUrl + 'buttons.json', function(response) {
//     console.log(response);
// });

fetch(firebaseUrl + 'buttons.json')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch((err) => console.error(err));

async function onInit() {
    let status;
    buttonList = document.querySelectorAll('.button');
    buttonList.forEach(button => {
        status = getStatus();
        updateButtonState(button, status);
    });
}


function getStatus() {
    const status = httpGet(firebaseUrl + 'buttons.json');
    return status;
}

function updateButtonState(button, status) {
    if (status) {
        button.classList.remove('btn-danger');
        button.classList.add('btn-success');
    } else {
        button.classList.remove('btn-success');
        button.classList.add('btn-danger');
    }
}

function httpGet(url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, true );
    xmlHttp.setRequestHeader('accept', 'application/json, text/plain, */*');
    xmlHttp.send( null );
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            callback(xmlHttp.responseText);
        }
    };

}

function httpPost(url, data) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", url, false );
    xmlHttp.send( data );
    return xmlHttp.responseText;
}

function update() {

}

function toggleButtonState(button) {

    let status;

    if (button.classList.contains('btn-success')) {
        button.classList.remove('btn-success');
        button.classList.add('btn-danger');
        status = false;
    } else {
        button.classList.remove('btn-danger');
        button.classList.add('btn-success');
        status = true;
    }

    httpPost(firebaseUrl + 'buttons/' + button.id, status);

}

/*

    [
        {
            "id": "1",
            "status": true
        }
    ]

*/
