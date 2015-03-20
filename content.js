killComments();

function killComments() {
    var el = document.getElementById("commentsDiv");
    el.parentElement.removeChild(el);
}
