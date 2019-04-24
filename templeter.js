window.onload = function(){
    var tagName = document.getElementsByTagName('script')[0].getAttribute('tag');
    if(tagName == 'common'){
        var ohtml = document.getElementsByTagName('*');
        var arr1 = [];
        for(var i = 0; i < ohtml.length; i++){
            var index = i;
            var str = ohtml[i].tagName;
            if(str.indexOf('-') != -1){
                localStorage[str] = ohtml[index].innerHTML;
                arr1.push(str);
            }
        }
        var arr2 = Object.keys(localStorage);
        var different = getArrDifference(arr1, arr2);
        for(var k = 0; k < different.length; k++){
            localStorage.removeItem(different[k]);
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

    function getArrDifference(arr1, arr2){
        return arr1.concat(arr2).filter(function(v, i, arr){
            return arr.indexOf(v) === arr.lastIndexOf(v);
        })
    }
}
