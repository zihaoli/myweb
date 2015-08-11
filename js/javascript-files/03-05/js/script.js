var listGroup = document.querySelector('.list-group');
function showMessage(event) {
    console.log('点击了 ul');
    event.stopPropagation();
}
listGroup.addEventListener('click', showMessage, true);

var lost = document.getElementById('lost');
function showAnotherMessage(event) {
    console.log('点击了 lost');
}
lost.addEventListener('click', showAnotherMessage, false);