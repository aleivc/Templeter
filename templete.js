/**
 * 怎样规定这个文件只能读tag=common的html
 */

    var tagName = document.getElementsByTagName('script')[0].getAttribute('tag');
    //如果tagName 等于 common 就读取这个文件的所有html片段，怎么读，读哪些
    //找出所有自定义的标签把它们一个一个存进localstoarge;
    if(tagName == 'common'){
        var ohtml = document.getElementsByTagName('*');
        for(var i = 0; i < ohtml.length; i++){
            var index = i;
            var str = ohtml[i].tagName;
            if(str.indexOf('-') != -1){
                localStorage[str] = ohtml[index].outerHTML;

            }
        }
    }
    // 如果不等于 common 就从localstorage里取出来 定义这个标签
    else{
        var arrs = Object.keys(localStorage);
        for(var j = 0; j < arrs.length; j++){
            var tmp = arrs[j];
            // console.log(typeof tmp);
            var ele = localStorage[tmp];
            // 这一句一解决，我这个工具就能用了呀！
            // 头大
            // 
            // ‘
            // 
            // 
            // 
            // 
            customElements.define(tmp.toLowerCase(), getClass(tmp, ele));
        }
    }
    function getClass(tmp, ele){
        // return class tmp extends HTMLElement{
        //     constructor(){
        //         super();
        //         this.appendChild(ele);
        //     }
        // }; 
        return class me extends HTMLElement{
            constructor(){
                super();
                var div = document.createElement('div');
                div.innerHTML = ele;
                this.appendChild(div.firstChild);
                div.innerHTML = null;
            }
        }
    }



// 我要一个方法返回这个类
// class WORDCOUNT extends HTMLElement{
//     constructor(){
//         super();
//     }
// }

// class popupInfo extends HTMLElement{
//     constructor(){
//         super();
//     }
// }


function StringToDom(str){
    var div = document.createElement('div');
    div.innerHTML += str;
    return div.firstChild;
}
