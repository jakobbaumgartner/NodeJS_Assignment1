
const reqHandler = (req, res) => {
    console.log('Works boss!')

    const url = req.url
    const method = req.method

    if ( url == '/') {
        res.setHeader("Content-Type", "text/html")
        res.write('<html><body><h1>Welcome to The First Asignment!</h1><form action="/users" method="POST"><input type="text" name="fieldtext">Write here...</input><button type="submit">Submit</button></form><body></html>')
        return res.end
    }

    if (url == '/users') {

        if(method == 'POST') {
            const textinput = []

        req.on('data', (parts) => {
            textinput.push(parts)

        })

        req.on('end', () => {
            console.log(Buffer.concat(textinput).toString())
        })

        res.statusCode = 302
        res.setHeader('Location', '/')
        }
        
        else {
            res.setHeader("Content-Type", "text/html")
            res.write('<html><body><ul><li>First user</li><li>Second user</li><li>Third user</li></ul></body></html>')
        
        }
        

        return res.end
    }
}

module.exports = reqHandler