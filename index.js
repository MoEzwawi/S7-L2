const localStorageKey = 'memorized-username'

const saveButton = document.getElementById('save-button')
const deleteButton = document.getElementById('delete-button')

const inputFieldReference = document.getElementById('username')

const p = document.getElementById('saved-username')
const span = document.getElementById('saved-username-span')


const save = () => {
    const newUserName = inputFieldReference.value
    localStorage.setItem(localStorageKey,newUserName)
    inputFieldReference.value=''
    currentUsername()
}


const reset = () => {
    p.classList.add('invisible')
    localStorage.removeItem(localStorageKey)
}

const currentUsername = () => {
    const memory = localStorage.getItem(localStorageKey)
    if (memory) {
        p.classList.remove('invisible')
        span.innerText = memory
    }
}

saveButton.addEventListener('click',save)
deleteButton.addEventListener('click',reset)
currentUsername()