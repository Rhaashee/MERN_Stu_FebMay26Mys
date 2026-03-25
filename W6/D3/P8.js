// Allocating buffers 

const emptyBuffer = Buffer.alloc(8);
console.log("Contents of emptyBuffer: ",emptyBuffer);
console.log("Allocated buffer bytes: ",[...emptyBuffer]);

const textBuffer = Buffer.from([52,68,61,61,73,68,65]);
console.log("Buffer from byte array : ",textBuffer);

// Buffer.write() -writes the text into buffer 
const buffer = Buffer.alloc(20);
const bytesWritten = buffer.write("HelloWorld");
console.log("Bytes Written: ",bytesWritten);

// Subarray
const firstSlice = buffer.subarray(3,6);
console.log("First slice as bytes: ",[...firstSlice]);

// Decode the bytes into text : toString()
console.log("Decoded firstSlice of buffer: ",firstSlice.toString("utf-8"));