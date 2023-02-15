document.getElementById('addNewTask').addEventListener('click',() => {
    let modal = document.getElementById('newTaskModalWrapper')
    modal.style.display = 'flex'
})

document.getElementById('newTaskModalWrapper').addEventListener('click',() => {
    let modal = document.getElementById('newTaskModalWrapper')
    modal.style.display = 'none'
})

document.getElementById('openModal').addEventListener('click', () => {
    let modal = document.getElementById('taskModalWrapper')
    modal.style.display = 'flex'
})

document.getElementById('taskModalWrapper').addEventListener('click',() => {
    let modal = document.getElementById('taskModalWrapper')
    modal.style.display = 'none'
})