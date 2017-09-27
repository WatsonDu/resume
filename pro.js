import './pro.css'
window.addEventListener('load',function(){
    var avatas = document.querySelectorAll('.avata')
    for (var i = 0;i<avatas.length;i++){
        avata(avatas[i])
    }
})
function avata(root) {
    var project = root.querySelector('.projects'),
    nav = root.querySelector('.nav'),
    itemss = project.children,
    n = itemss.length,
    gap = root.dataset.gap || 0,
        bfc = 'bfc' in root.dataset,
        theta = 2 * Math.PI / n,
        currImage = 0;

setupAvata(n, parseFloat(getComputedStyle(itemss[0]).width));
window.addEventListener('resize', function () {
    setupAvata(n, parseFloat(getComputedStyle(itemss[0]).width));
});
setupNavigation();
function setupAvata(n, s) {
    var apothem = s / (2 * Math.tan(Math.PI / n));
    project.style.transformOrigin = '50% 10% ' + -apothem + 'px';
    for (var i = 0; i < n; i++) {
        //itemss[i].style.padding = gap + 'px';
    }for (i = 1; i < n; i++) {
        itemss[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';
        itemss[i].style.transform = 'rotateY(' + i * theta + 'rad)';
    }
}
function setupNavigation() {
    nav.addEventListener('click', onClick, true);
    function onClick(e) {
        e.stopPropagation();
        var t = e.target;
        if (t.tagName.toUpperCase() != 'BUTTON') return;
        if (t.classList.contains('next')) {
            currImage++;
        } else {
            currImage--;
        }
        rotateAvata(currImage);
    }
}
function rotateAvata(ItemsIndex) {
    project.style.transform = 'rotateY(' + ItemsIndex * -theta + 'rad)';
}}

console.log(1)
