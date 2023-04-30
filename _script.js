{
	// Referance Elements //
	var RefElmt = {

		Content: HTMLElement,
		List: HTMLElement,
	};
	// Model Elements //
	var ModelElmt = {
		index_list: HTMLElement,
		index_item: HTMLElement,
		item_title: HTMLElement,
		item_sublist: HTMLElement,
	};


	// 初始化 //
	function Init() {
		console.log("This is a script demo.");

		// Get Referance Elements 
		RefElmt.Content = document.getElementById("content-markdown");
		RefElmt.List = document.getElementById("index-list");

		// Get Model Elements
		ModelElmt.index_item = document.getElementById("index-item").cloneNode(true);
		ModelElmt.index_item.innerHTML = "";
		ModelElmt.item_title = document.getElementById("item-title").cloneNode(true);
		ModelElmt.item_sublist = document.getElementById("item-sublist").cloneNode(true);
		document.getElementById("index-item").remove();	// 删除模板元素
		ModelElmt.index_list = document.getElementById("index-list").cloneNode(true);

		// Remove tag "id" of all Model Elements 
		ModelElmt.index_item.removeAttribute("id");
		ModelElmt.index_list.removeAttribute("id");
		ModelElmt.item_sublist.removeAttribute("id");
		ModelElmt.item_title.removeAttribute("id");
	}

	// 读取文档 //
	function LoadDocuments() {
		// new Item
		function newItem(index = "", title = "", item_sublist = []) {
			let _item = ModelElmt.index_item.cloneNode(true);
			let _title = ModelElmt.item_title.cloneNode(true);
			let _sublist = ModelElmt.item_sublist.cloneNode(true);

			_title.innerHTML = title;
			_sublist.innerHTML = item_sublist.innerHTML;
			_item.appendChild(_title);
			_item.appendChild(_sublist);
			// _title.setAttribute("id", _title.getAttribute("id") + index.toString());
			// _item.setAttribute("id", "index-item" + index);
			// _item.addEventListener("click", function () { LoadArticle(title) });
			_item.addEventListener("click", function () { alert("shit " + title) })
			
			console.log(title);

			return (_item);
		}

		// new List
		function newList(array_item_list = [{ title: "", sublist: [] }]) {
			let _list = ModelElmt.item_sublist.cloneNode(true);

			for (let i = 0; i < array_item_list.length; i++) {
				let _item = array_item_list[i];
				let _sublist = ModelElmt.item_sublist.cloneNode(true);

				if (_item.sublist.length > 0) {
					_sublist = newList(_item.sublist);	// 递归处理 sublist
				}
				_list.appendChild(newItem(i.toString(), _item.title, _sublist));
			}
			return (_list);
		}

		RefElmt.List.innerHTML = newList(doc_index).innerHTML;
		console.log(RefElmt.List);
	}



	// 加载文章 //
	function LoadArticle(name) {
		xmlhttp = new XMLHttpRequest();

		xmlhttp.onload = function () {
			RefElmt.Content.innerHTML = marked.parse(xmlhttp.responseText);
			// console.log(xmlhttp.responseText);
		}

		xmlhttp.open("GET", "./documents/" + name + ".md", true);
		xmlhttp.send();

	}


	// Start //
	Init();
	LoadDocuments();
}
