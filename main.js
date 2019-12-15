function dumpText() {
	console.log("dumpText was called");
	var contents = document.getElementById("text-contents").value;
	alert(contents);
	// Writing the contents to a file.
	// 1. Record datetime
	// 2. Create hash with file contents + datetime(UTC)
	// 3. Create a file with the contents
	// 4. Put into the record table: hash, title, created_on
}

function dumpFile() {
	console.log("dumpFile was called");
}

function lookUp(title, datetime) {

}