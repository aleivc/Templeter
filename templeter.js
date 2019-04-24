window.onload = function(){
    var tagName = document.getElementsByTagName('script')[0].getAttribute('tag');
    console.log(tagName);
    if(tagName == 'common'){
        var ohtml = document.getElementsByTagName('*');
        for(var i = 0; i < ohtml.length; i++){
            var index = i;
            var str = ohtml[i].tagName;
            if(str.indexOf('-') != -1){
                localStorage[str] = ohtml[index].innerHTML;
            }
        }
    }
    else{
        var arrs = Object.keys(localStorage);
        for(var j = 0; j < arrs.length; j++){
            var tmp = arrs[j];
            var temp = localStorage[tmp];
            customElements.define(tmp.toLowerCase(), getClass(temp));
        }
    }
    function getClass(a){
        return class me extends HTMLElement{
            constructor(){
                super();
                var div = document.createElement('div');
                div.innerHTML = a;
                this.append(div);
            }
        }
    }
}
