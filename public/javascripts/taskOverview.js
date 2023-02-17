document.getElementById('addNewTask').addEventListener('click',() => {
    let modal = document.getElementById('newTaskModalWrapper')
    modal.style.display = 'flex'
})

document.getElementById('newTaskModalWrapper').addEventListener('click',function (e) {
    if (e.target !== this)
        return;
    let modal = document.getElementById('newTaskModalWrapper')
    modal.style.display = 'none'
})

document.getElementById('openModal').addEventListener('click', () => {
    let modal = document.getElementById('taskModalWrapper')
    modal.style.display = 'flex'
})

document.getElementById('taskModalWrapper').addEventListener('click',function(e){
    if (e.target !== this)
        return;
    let modal = document.getElementById('taskModalWrapper')
    modal.style.display = 'none'
})

document.getElementById('openNewTaskStateDropdown').addEventListener('click', function (event) {
    if (event.target !== this)
        return;
    let drop = document.getElementById('newTaskStateDropdown')
    if (drop.style.display === 'none') {
        drop.style.display = 'block'
    }
    else {
        drop.style.display = 'none'
    }
})

document.getElementById('openTaskStateDropdown').addEventListener('click', function (event) {
    if (event.target !== this)
        return;
    let drop = document.getElementById('taskStateDropdown')
    if (drop.style.display === 'none') {
        drop.style.display = 'block'
    }
    else {
        drop.style.display = 'none'
    }
})

document.getElementById('openCardStateDropdown').addEventListener('click', function (event) {
    event.stopPropagation()
    let drop = document.getElementById('cardStateDropdown')
    if (drop.style.display === 'none') {
        drop.style.display = 'block'
    }
    else {
        drop.style.display = 'none'
    }
})

document.getElementById('addNewList').addEventListener('click', () => {
    let modal = document.getElementById('newListModalWrapper')
    modal.style.display = 'flex'
})
document.getElementById('newListModalWrapper').addEventListener('click',function(e){
    if (e.target !== this)
        return;
    let modal = document.getElementById('newListModalWrapper')
    modal.style.display = 'none'
})