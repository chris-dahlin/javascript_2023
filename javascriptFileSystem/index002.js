const fspromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fspromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data);
        await fspromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fspromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you');
        await fspromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fspromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);
    } catch (err) {
        console.log(err);
    }

}

fileOps();



// fs.writeFile(path.join(__dirname, 'files', 'reply.txt') , 'Nice to meet you' ,  (err) => {
    // if (err) throw err;
    // console.log('Write Complete');
// 
    // fs.appendFile(path.join(__dirname, 'files', 'reply.txt') , '\n\nYes it is' ,  (err) => {
        // if (err) throw err;
        // console.log('Append Complete');
// 
        // fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'),  (err) => {
            // if (err) throw err;
            // console.log('Rename Complete');
    // })
//   })
// })

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error('There was an uncaught error: ${err}');
    process.exit(1);
})