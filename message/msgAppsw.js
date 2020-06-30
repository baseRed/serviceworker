self.addEventListener('message', function (e) {
    const promise = self.clients.matchAll().then(function (clients) {
        let senderId = e.source ? e.source.id : 'unknow'
        clients.forEach(client => {
            if (senderId === client.id) {
                return
            } else {
                client.postMessage({
                    client: senderId,
                    message: e.data
                })
            }
        })
    })
    e.waitUntil(promise)
})