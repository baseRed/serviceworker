const input = document.getElementById('input')
const btn = document.getElementById('btn')
btn.onclick = function () {
    console.log(input)
    navigator.serviceWorker.ready.then(res=>{
        navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage(input.value)
    })
    
}
navigator.serviceWorker.addEventListener('message', function (e) {
    const ul = document.getElementsByTagName('ul')[0]
    const li = document.createElement('li')
    li.innerHTML = e.data.message
    ul.appendChild(li)
})
navigator.serviceWorker
    .register('./msgAppsw.js', { scope: './' })
    .then(req => {
        console.log('success', req);
        // navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage("this message is from page");
    })
    .catch(e => {
        console.log(e)
    })