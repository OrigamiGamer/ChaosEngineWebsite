"use strict";

{
  // 初始化 //
  var Init = function Init() {
    console.log("This is a script demo."); // Get Referance Elements 

    RefElmt.Content = document.getElementById("content-markdown");
    RefElmt.List = document.getElementById("index-list"); // Get Model Elements

    ModelElmt.index_item = document.getElementById("index-item").cloneNode(true);
    ModelElmt.index_item.innerHTML = "";
    ModelElmt.item_title = document.getElementById("item-title").cloneNode(true);
    ModelElmt.item_sublist = document.getElementById("item-sublist").cloneNode(true);
    document.getElementById("index-item").remove(); // 删除模板元素

    ModelElmt.index_list = document.getElementById("index-list").cloneNode(true); // Remove tag "id" of all Model Elements 

    ModelElmt.index_item.removeAttribute("id");
    ModelElmt.index_list.removeAttribute("id");
    ModelElmt.item_sublist.removeAttribute("id");
    ModelElmt.item_title.removeAttribute("id");
  }; // 读取文档 //


  var LoadDocuments = function LoadDocuments() {
    // new Item
    function newItem() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var item_sublist = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      var _item = ModelElmt.index_item.cloneNode(true);

      var _title = ModelElmt.item_title.cloneNode(true);

      var _sublist = ModelElmt.item_sublist.cloneNode(true);

      _title.innerHTML = title;
      _sublist.innerHTML = item_sublist.innerHTML; // _title.setAttribute("id", _title.getAttribute("id") + index.toString())

      _item.appendChild(_title);

      _item.appendChild(_sublist); // _item.setAttribute("id", "index-item" + index);
      // _item.addEventListener("click", function () { LoadArticle(title) });


      _item.addEventListener("click", function () {
        alert("shit " + title);
      }, true);

      console.log(title);
      return _item;
    } // new List


    function newList() {
      var array_item_list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{
        title: "",
        sublist: []
      }];

      var _list = ModelElmt.item_sublist.cloneNode(true);

      for (var i = 0; i < array_item_list.length; i++) {
        var _item = array_item_list[i];

        var _sublist = ModelElmt.item_sublist.cloneNode(true);

        if (_item.sublist.length > 0) {
          _sublist = newList(_item.sublist); // 递归处理 sublist
        }

        var _new_item = newItem("-" + i.toString(), _item.title, _sublist);

        _list.appendChild(_new_item);
      }

      return _list;
    }

    RefElmt.List.innerHTML = newList(doc_index).innerHTML;
    console.log(RefElmt.List);
  }; // 加载文章 //


  var LoadArticle = function LoadArticle(name) {
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function () {
      RefElmt.Content.innerHTML = marked.parse(xmlhttp.responseText); // console.log(xmlhttp.responseText);
    };

    xmlhttp.open("GET", "./documents/" + name + ".md", true);
    xmlhttp.send();
  }; // Start //


  // Referance Elements //
  var RefElmt = {
    Content: HTMLElement,
    List: HTMLElement
  }; // Model Elements //

  var ModelElmt = {
    index_list: HTMLElement,
    index_item: HTMLElement,
    item_title: HTMLElement,
    item_sublist: HTMLElement
  };
  Init();
  LoadDocuments();
}