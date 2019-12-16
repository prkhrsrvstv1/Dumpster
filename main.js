function hashCode(input) {
	var hash = 0, i, chr;
  if (input.length === 0) return hash;
  for (i = 0; i < input.length; i++)
    hash = ((hash << 5) - hash) + input.charCodeAt(i);
  return hash;
}

function dumpText() {
	console.log("dumpText was called");
	const contents = document.getElementById("text-contents").value;
	// Writing the contents to a file.
	// 1. Record datetime
	// 2. Create hash with file contents + datetime(UTC)
	// 3. Create a file with the contents
	// 4. Put into the record table: hash, created_on
	const datetime = Date.now();
	var hashValue = hashCode(contents.slice(0, 5) + datetime + contents.slice(-5))
	console.log(hashValue);
	var blob = new Blob([contents], { type: "text/plain;charset=utf-8" });
	saveAs(blob, hashValue);
}

function dumpFile() {
	console.log("dumpFile was called");
}

function lookUp(title, datetime) {

}