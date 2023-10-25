// JSON
// const obj:{age number,name string} = {
//     name:"Emir",
//     age: 20,
// }
// console.log(obj)
// const data = JSON.stringify(obj)
// const newObject = JSON.parse(data)
// console.log(newObject)

// XMLHttpRequest

const getButton = document.querySelector('.btn')
getButton.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET","data.json")
    request.setRequestHeader("Content-type","application/json")
    request.send()
    console.log(request)

    request.onload = () => {
        const data = JSON.parse(request.response)
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age
    }
}