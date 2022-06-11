const axios = require('axios')

axios.get("http://localhost:8080/network_health", {
    params: {
        target: 'google.com',
        ㅤ: 'ls -al'
    }
})
.then(res => {
    console.log('res', res.data)
})
    .catch(err => {
        console.log('err', err)
    })