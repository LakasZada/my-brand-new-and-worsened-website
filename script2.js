console.log("test")
console.log("how do these websockets workk?!?!?!?!?!?!?!")
const socket = io('ws://localhost:3500')
function sendMessage(e) {
    e.preventDefault()
    const input = document.querySelector('input')
    if (input.value) {
        socket.emit('message', input.value)
        input.value = ""
    }
    input.focus()
}
document.querySelector('form').addEventListener('submit', sendMessage)

// listining for mesages
socket.on("message", (data)  => {
    const li = document.createElement('li')
    li.textContent = data
    document.querySelector('ul').appendChild(li)
})

