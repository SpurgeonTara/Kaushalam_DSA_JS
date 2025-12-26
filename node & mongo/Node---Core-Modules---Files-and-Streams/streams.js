// Streams: readable(HTTP Request), writable(Http Response), Duplex
// streams are event emmiters.

const http = require("http");
const fs = require("fs");
const zlib = require("zlib");
const crypto = require("crypto");

// http
//   .createServer(function (req, res) {
//     fs.readFile("test.txt", (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       // console.log(data);
//       // here if the file contains larger data, then it will difficult to buffer all the data for each and every request and it occupies alot of memory.
//       // So we can use streams where we canm use pipes to send data to destination fastly.
//       // useCases: web app with alot of i/o operations, live video streaming, file uploiads in real time.
//       res.end(data);
//     });
//   })
//   .listen(3000);

// readable streams: Readable Streams are used to read data from a source.
// methods:
// read()
// setEncoding()
// resume()
// pause()
// pipe()

// Events:
// data / readable
// end
// close
// error

// data event
// read data from a file using streams
// creates a read stream.
// const readStream = fs.createReadStream("test.txt");
// let data = "";

// // a data event occurs when a chunk of data has been read by readStream
// readStream.on("data", (chunk) => {
//   data += chunk;
//   console.log(chunk);
// });

// // An end event occors when the process of reading data completed.
// readStream.on("end", () => {
//   console.log(data);
// });

// readable event
// read data from a file using streams
// creates a read stream.
// const readStream = fs.createReadStream("test.txt");
// let data = "";
// let chunk;

// instead of data event we can also use readable event if the file contains large amount of data.
// It gives us flexibility when to read!!
// we can read the data from stream using read() method.
// readStream.on("readable", () => {
//   while ((chunk = readStream.read()) != null) {
//     data += chunk;
//     console.log(chunk);
//   }
// });

// // An end event occors when the process of reading data completed.
// readStream.on("end", () => {
//   console.log(data);
// });

// pause,resume events
// read data from a file using streams
// creates a read stream.
// const readStream = fs.createReadStream("test.txt");
// let data = "";
// let chunk;

// instead of data event we can also use readable event if the file contains large amount of data.
// It gives us flexibility when to read!!
// we can read the data from stream using read() method.
// readStream.on("data", (chunk) => {
//   console.log("Receaving %d bytes of data", chunk.length);
//   readStream.pause();
//   console.log("There will be no data flow for two seconds");
//   setTimeout(() => {
//     console.log("Now data will start flowing again");
//     readStream.resume();
//   }, 2000);
//   data += chunk;
//   console.log(chunk);
// });

// // An end event occors when the process of reading data completed.
// readStream.on("end", () => {
//   console.log(data);
// });

// Writable Streams: allows us to write data to a destination.
// Methods:
// write()
// setDefaultEncoding(encoding)
// end()

// Events:
// drain
// finish
// pipe
// error

const readStream = fs.createReadStream("test.txt");
const writeStream = fs.createWriteStream("test2.txt");

readStream.setEncoding("utf8");
readStream.on("data", function (chunk) {
  writeStream.write(chunk);
});

// Piping Streams: Piping Streams are taking input from one stream and write into anotyher stream directly without putting it in the buffer. We can avoid event handling in this.

// const readStream = fs.createReadStream("test.txt");
// const writeStream = fs.createWriteStream("test3.txt");

// Same functionality as above but we are avoiding events here.
// its very fast because we are not using any buffer and code is minimal
// readStream.pipe(writeStream);

// Transform Stream
// Transform Stream reads from a source and modify it and writes into a destination
// we have two core api's in node for Transform Streams.
// 1. Zlib - Compression/Decompression of data
// 2. Crypto - Encryption/Decryption of data

// Compress the data using ZLib Api:
// const gZip = zlib.createGzip();
// const rStream = fs.createReadStream("test.txt");
// const wStream = fs.createWriteStream("test4.txt.gz");

// rStream
//   .pipe(gZip)
//   .pipe(wStream)
//   .on("finish", () => {
//     console.log("Finished Compression");
//   });

// Decompression:

// const gUnZip = zlib.createGunzip();
// const rStream1 = fs.createReadStream("test4.txt.gz");

// rStream1.pipe(gUnZip).pipe(process.stdout);

// Crypto
// encryption
// const password = new Buffer("my_password");
// const aes = crypto.createCipher("aes-256-cbc", password);
// const rstream = fs.createReadStream("test.txt");
// const wstream = fs.createWriteStream("test.encrypted");

// rstream
//   .pipe(aes)
//   .pipe(wstream)
//   .on("finish", () => {
//     console.log("Done Encryption..");
//   });

// Decryption:
// const password = new Buffer("my_password");
// const aes = crypto.createDecipher("aes-256-cbc", password);
// const rstream = fs.createReadStream("test.encrypted");
// const wstream = fs.createWriteStream("test.encrypted");

// rstream.pipe(aes).pipe(process.stdout);
