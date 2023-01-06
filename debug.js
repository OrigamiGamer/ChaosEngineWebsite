{
	/*var HTML_iframe;

	function LoadLib () {
		let LibTable = [
			"lib/Introduciton.md"
		];

		// Load Lib
		for (let i = LibTable.length - 1; i >= 0; i--) {
			console.log(LibTable[i]);

			HTML_iframe.setAttribute("src", LibTable[i])

		}

	}

	function update () {
		console.log(HTML_iframe.contentWindow.document.getElementsByName("html"));

	}*/


	function init () {
		let HTML_content = document.getElementById("content");
		let xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "/lib/Introduciton.md", true)

		HTML_content.innerHTML = marked.parse(xmlhttp.responseText);
		



		/*let reader = new FileReader();

		let _blobParts = [,,,"/lib/Introduciton.md"];
		let _blob = new Blob(_blobParts, );
		reader.readAsDataURL(_blob);
		console.log(reader.result);*/

		/*var converter = new showdown.Converter(),
  			text      = '# hello, markdown!',
   			html      = converter.makeHtml(text);*/
	}


}