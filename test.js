function _debug() {
    function newDemo() {
        let _new = ModelElmt.item_title.cloneNode(true);
        _new.addEventListener("click", function () { alert("hi") })
        return (_new);
    }

    // let _new = ModelElmt.item_title.cloneNode(true);
    // _new.addEventListener("click", function () { alert("hi") });
    RefElmt.Content.appendChild(newDemo());
}
// _debug();