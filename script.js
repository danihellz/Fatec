const firebaseUrl = 'https://shadow-kanban-default-rtdb.firebaseio.com/';


function getStatus() {
    const status = httpGet(firebaseUrl + 'buttons');
    return status;
}

function httpGet(url) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
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

    const buttonElement = document.getElementById(button);

    httpPost(firebaseUrl + 'buttonState/' + button, buttonElement.innerText);

}

