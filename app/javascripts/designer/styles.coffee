style = document.createElement('style')
style.innerHTML = ".phasesEditable { border: 1px solid #333; cursor: pointer; } .phasesEditable:hover { border-color: red; } ";
document.body.appendChild(style);

$('[data-phases]').addClass 'phasesEditable'
