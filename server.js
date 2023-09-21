const express = require('express')
const path = require('path')
const app = express()
const multer  = require('multer')
const {mergePdfs}  = require('./merger')
const upload = multer({ dest: 'uploads/' })
const port = 3000

app.use('/static', express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/templates/index.html"));
})

app.post('/merge', upload.array('pdfs', 2), async (req, res, next)=> {
    console.log(req.files);
    // res.send({ data: req.files });
    let timeInterval = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))

    res.redirect(`http://localhost:${port}/static/${timeInterval}.pdf`);
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})