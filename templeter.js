window.onload = function () {
  const tagName = document.getElementsByTagName('script')[0].getAttribute('tag');
  if (tagName === 'common') {
    const html = document.getElementsByTagName('*');
    const arr1 = [];
    for (let i = 0; i < html.length; i++) {
      const index = i;
      const str = html[i].tagName;
      if (str.indexOf('-') !== -1) {
        localStorage[str] = html[index].innerHTML;
        arr1.push(str);
      }
    }
    const arr2 = Object.keys(localStorage);
    const different = getArrDifference(arr1, arr2);
    for (let k = 0; k < different.length; k++) {
      localStorage.removeItem(different[k]);
    }
  } else {
    const ars = Object.keys(localStorage);
    for (let j = 0; j < ars.length; j++) {
      const tmp = ars[j];
      const temp = localStorage[tmp];
      customElements.define(tmp.toLowerCase(), getClass(temp));
    }
  }
  function getClass(a) {
    return class me extends HTMLElement {
      constructor() {
        super();
        const div = document.createElement('div');
        div.innerHTML = a;
        this.append(div);
      }
    };
  }

  function getArrDifference(arr1, arr2) {
    return arr1.concat(arr2).filter(function (v, i, arr) {
      return arr.indexOf(v) === arr.lastIndexOf(v);
    });
  }
};
