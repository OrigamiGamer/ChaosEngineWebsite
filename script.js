// Referance Elements //
var RefElmt = {
	Body: HTMLElement,
	Content: HTMLElement,
	List: HTMLElement,
}

const Model = {
	Item: {
		title: "",
		file: "",
		list: []
	}
}

// 初始化 //
function Init() {
	console.log("This is a script demo.");

	// Get Referance Elements 
	RefElmt.Body = document.getElementsByName("body");
	RefElmt.Content = document.getElementById("content-markdown");
	RefElmt.List = document.getElementById("index-list");


	LoadDoc();
}

// 加载文档 //
function LoadDoc() {
	var root = Global_Doc.root;

	RefElmt.List.innerHTML = "";
	RefElmt.List.appendChild(parseList(root));

}

// list //
function parseList(newItem = Model.Item) {
	let _ul = document.createElement("ul");

	if (newItem.list.length == 0) {
		// no-sublist //
		let _li = document.createElement("li");
		let _div = document.createElement("div");
		_div.setAttribute("class", "list-item");

		// - get tags of item
		_div.innerHTML = newItem.title;

		// - events of item
		_li.addEventListener("click", function () { LoadArticle(newItem.file) })

		_li.appendChild(_div);
		_ul.appendChild(_li);
		return (_ul);
	} else {
		// with-sublist //
		let _details = document.createElement("details");
		_details.setAttribute("open", "");
		let _summary = document.createElement("summary");

		for (let i = 0; i < newItem.list.length; i++) {
			let _li = document.createElement("li");
			_li.appendChild(parseList(newItem.list[i]));
			_ul.appendChild(_li);

			// - get tags of item
			_summary.innerHTML = newItem.title;

		}
		_details.appendChild(_summary);
		_details.appendChild(_ul);
		return (_details);
	}

}

// 加载文章 //
function LoadArticle(name) {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onload = function () {
		RefElmt.Content.innerHTML = marked.parse(xmlhttp.responseText);
	}
	xmlhttp.open("GET", "./documents/" + name + ".md", true);
	xmlhttp.send();

}

// Start //
RefElmt.Body.onload = Init();
