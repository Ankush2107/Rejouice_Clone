let page1content = document.querySelector("#page1-content");
let cursor = document.querySelector('#cursor');
page1content.addEventListener('mousemove', (event) => {
    cursor.style.left = event.x + "px";
    cursor.style.top = event.y + "px";
});