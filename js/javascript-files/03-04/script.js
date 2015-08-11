window.onload = function () {
    var btn = document.querySelector('.btn');
    function showMessage(event) {
        //console.log(event);
        console.log('被点了');
    }
    btn.addEventListener('click', showMessage, false);

    /*
    btn.onclick = function () {
        console.log('被点了！');
    };
    btn.onmouseover = function () {
        console.log('谁在上面');
    };
    btn.onmouseout = function () {
        console.log('离开了');
    };*/
};
