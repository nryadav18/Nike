// alert(window.innerWidth);
content=()=>{
    setTimeout(() => {
        var op = document.getElementById('content');
        op.style.opacity = '1';
        op.style.transition = 'all 0.7s ease';
        op.style.top = '0%';
    }, 500);
    setTimeout(() => {
        var sc = document.getElementById('selectColor');
        sc.style.opacity = '0.8';
        sc.style.transition = 'all 0.7s ease';
        sc.style.top = '0%';
    }, 650);
    setTimeout(() => {
        var cl = document.getElementsByClassName('colors')[0];
        cl.style.opacity = '1';
        cl.style.transition = 'all 0.7s ease';
        cl.style.top = '0%';
    }, 800);
}
content();


redShoe = () => {
    var op = document.getElementById('content');
    op.style.opacity = '0';
    op.style.position = 'relative';
    op.style.top = '15%';
    setTimeout(() => {
        op.style.top = '0%'
        op.style.opacity = '1'
    }, 300);
    var bg = document.getElementById('first');
    bg.style.background = 'radial-gradient(circle at center, rgb(234, 143, 143), red)';
    var title = document.getElementById('title');
    title.innerHTML = 'JORDAN 1 RED';
    var r = document.getElementById('shoe1');
    r.style.left = '50%';
    r.style.animationName = 'move';
    r.style.animationDuration = '6s';
    r.style.animationIterationCount = 'infinite';
    r.style.animationTimingFunction = 'linear';
    var b = document.getElementById('shoe2');
    b.style.left = '150%';
    b.style.animation = 'none';
    var g = document.getElementById('shoe3');
    g.style.left = '150%';
    g.style.animation = 'none';
    document.getElementById('red').style.border = '3px solid white';
    document.getElementById('blue').style.border = 'none';
    document.getElementById('green').style.border = 'none';
};

blueShoe = () => {
    var op = document.getElementById('content');
    op.style.opacity = '0';
    op.style.position = 'relative';
    op.style.top = '15%';
    setTimeout(() => {
        op.style.top = '0%'
        op.style.opacity = '1'
    }, 300);
    var bg = document.getElementById('first');
    bg.style.background = 'radial-gradient(blue, blue)';
    var title = document.getElementById('title');
    title.innerHTML = 'JORDAN 1 BLUE';
    var b = document.getElementById('shoe2');
    b.style.left = '50%';
    b.style.animationName = 'move';
    b.style.animationDuration = '6s';
    b.style.animationIterationCount = 'infinite';
    b.style.animationTimingFunction = 'linear';
    var r = document.getElementById('shoe1');
    r.style.left = '-60%';
    r.style.animation = 'none';
    var g = document.getElementById('shoe3');
    g.style.left = '150%';
    g.style.animation = 'none';
    document.getElementById('blue').style.border = '3px solid white';
    document.getElementById('red').style.border = 'none';
    document.getElementById('green').style.border = 'none';
};

greenShoe = () => {
    var op = document.getElementById('content');
    op.style.opacity = '0';
    op.style.position = 'relative';
    op.style.top = '15%';
    setTimeout(() => {
        op.style.top = '0%'
        op.style.opacity = '1'
    }, 300);
    var bg = document.getElementById('first');
    bg.style.background = 'radial-gradient(rgb(42, 198, 206), rgb(42, 198, 206)';
    var title = document.getElementById('title');
    title.innerHTML = 'JORDAN 1 GREEN';
    var g = document.getElementById('shoe3');
    g.style.left = '50%';
    g.style.animationName = 'move';
    g.style.animationDuration = '6s';
    g.style.animationIterationCount = 'infinite';
    g.style.animationTimingFunction = 'linear';
    var r = document.getElementById('shoe1');
    r.style.left = '-60%';
    r.style.animation = 'none';
    var b = document.getElementById('shoe2');
    b.style.left = '-60%';
    b.style.animation = 'none';
    document.getElementById('green').style.border = '3px solid white';
    document.getElementById('red').style.border = 'none';
    document.getElementById('blue').style.border = 'none';
};
