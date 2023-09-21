const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdfs = async (p1,p2) => {
  await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(p2); 
  
    let timeInterval = new Date().getTime()

    await merger.save(`./public/${timeInterval}.pdf`); //save under given name and reset the internal document
    return timeInterval;
  
}

module.exports = {mergePdfs}