var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = '...';
document.body.appendChild(btn);

// schijf hier tussen je code
function buttonOn(){
    btn.innerHTML = 'Switch light off'
    document.body.style.backgroundColor = 'yellow';
    btn.onclick = button2
    console.log('light is on')
}
function buttonOff(){
    btn.innerHTML = 'Switch light on';
    document.body.style.backgroundColor = 'black';
    btn.onclick = button1
    console.log('light is off')
}
buttonOff()
// schijf hier tussen je code