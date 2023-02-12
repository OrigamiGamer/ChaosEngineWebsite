{
	var HTML_content;

	function Init() {
		console.log("This is a script demo.");

		HTML_content = HTML_content = document.getElementById("md-content");


		LoadLibrary();
	}

	function LoadLibrary() {
		xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "./Library/Introduction.md", false);
		xmlhttp.send();
		HTML_content.innerHTML = marked.parse(xmlhttp.responseText);

		console.log(xmlhttp.responseText);
	}


	Init();

}