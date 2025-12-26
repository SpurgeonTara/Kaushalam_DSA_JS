const { log } = require("console");
const fs = require("fs");

// readFile
// readFileSync
// writeFile
// writeFileSync
// open
// exists
// watchFile

// write File and writeFile Sync will replace the entire content of the file.

// writeFileSync:
// console.log("Before");
// fs.writeFileSync("test.txt", "Hello World. This is a sample content");
// console.log("After");

// writeFile:
// console.log("Before");
// fs.writeFile("test1.txt", "Welcome to node's file system", (err) => {
//   console.log("File has been Written");
// });
// console.log("After");

// readFileSync:
// console.log("Before");
// const contents = fs.readFileSync("test.txt");
// this will print
//<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 2e 20 54 68 69 73 20 69 73 20 61 20 73 61 6d 70 6c 65 20 63 6f 6e 74 65 6e 74>
// console.log(contents);
// console.log("After");

// readFile:
// fs.readFile("test.txt", (err, data) => {
// if (err) {
// console.log(error);
// }
// this will gives us a buffer
// console.log(data);
// });

// exists, open, stat
const fileName = "test.txt";
fs.exists(fileName, (exists) => {
  if (exists) {
    fs.stat(fileName, (err, stats) => {
      if (err) {
        console.log(err);
      }
      console.log("Stats..");
      console.log(stats);
      fs.open(fileName, "r", (err, fd) => {
        if (err) {
          console.log(err);
        }
        console.log("file definition");
        console.log(fd);
        // let buffer = new Buffer(stats.size);
        // buffer is depricated, So use Buffer.alloc instead
        let buffer = new Buffer.alloc(stats.size);
        // fs.read(
        //   file_description,
        //   buffer,
        //   startingPostionOfBuffer,
        //   totalLengthOfBuffer,
        //   postionFromWhereReadShouldStart,
        //   callBack
        // );
        fs.read(
          fd,
          buffer,
          0,
          buffer.length,
          null,
          (err, bytesRead, buffer) => {
            const data = buffer.toString("utf8", 0, buffer.length);
            console.log("FInal Data...");
            console.log(data);
            fs.close(fd);
          }
        );
      });
    });
  }
});

// watchFile:
// const config = fs.readFileSync("test1.txt");
// console.log(config);

// fs.watchFile("test1.txt", (current, previous) => {
//   console.log("previous");
//   console.log(previous);
//   console.log("Parsed Data");
//   console.log(fs.readFileSync("test1.txt"));
//   console.log("current");
//   console.log(current);
// });
