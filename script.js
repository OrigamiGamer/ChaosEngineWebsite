{
	var Elmt_content,
		Elmt_Index_List,
		Elmt_Index_Item;


	function Init() {
		console.log("This is a script demo.");

		Elmt_content = document.getElementById("content-markdown");
		Elmt_Index_List = document.getElementById("index-list");
		Elmt_Index_Item = document.getElementById("index-item").cloneNode(true);

		document.getElementById("index-item").remove();
	}

	function LoadDocuments() {
		for (let i = 0; i < doc_index.length; i++) {
			// LoadArticle(doc_index[i - 1]);
			// doc_index[i - 1]
			let _item = Elmt_Index_Item.cloneNode(true);
			_item.setAttribute("id", "index-item-" + i.toString());
			_item.setAttribute("item-tag", doc_index[i]);
			_item.addEventListener("click", function () { LoadArticle(doc_index[i]) })
			_item.innerHTML = doc_index[i];
			Elmt_Index_List.appendChild(_item);

		}

	}

	function _local_LoadDocuments() {
		for (let i = 0; i < doc_index.length; i++) {
			let _item = Elmt_Index_Item.cloneNode(true);
			_item.setAttribute("id", "index-item-" + i.toString());
			_item.setAttribute("item-tag", doc_index[i]);
			_item.addEventListener("click", function () { _local_LoadArticle(_test_md) })
			_item.innerHTML = doc_index[i];
			Elmt_Index_List.appendChild(_item);

		}


	}

	// 初始化
	Init();
	LoadDocuments();
	//_local_LoadDocuments();



	function LoadArticle(name) {
		xmlhttp = new XMLHttpRequest();

		xmlhttp.onload = function () {
			Elmt_content.innerHTML = marked.parse(xmlhttp.responseText);
			console.log(xmlhttp.responseText);
		}

		xmlhttp.open("GET", "./documents/" + name + ".md", true);
		xmlhttp.send();

	}

	function _local_LoadArticle(rawString) {
		Elmt_content.innerHTML = marked.parse(rawString);

		console.log(xmlhttp.responseText);
	}




}