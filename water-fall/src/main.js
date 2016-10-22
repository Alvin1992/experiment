/**
 * Created by alvin on 10/20/16.
 */
require('./reset.css');
require('./layout.sass');
window.addEventListener('load', function () {
    waterFall('container', 'box');
    window.addEventListener('scroll', function () {
        if (checkLoadStatus('container', 'box')) {
            loadMore();
        }
    }, false);
}, false);

// 获取元素也可以使用querySelect的API
function waterFall(parent, box) {
    // 获取父元素和下面的每个盒子
    var oParent = document.getElementById(parent);
    var boxes = document.getElementsByClassName(box); // IE9及以上都支持
    // 获取页面宽度和每个盒子的宽度
    totalWidth = document.documentElement.clientWidth;
    boxWidth = boxes[0].offsetWidth;
    // 获取列数
    var columns = Math.floor(totalWidth / boxWidth);
    // 设置父元素的宽度，并且居中
    oParent.style.cssText = 'width:' + boxWidth*columns + 'px;margin:0 auto;';
    // 将第二排之后的每个盒子放在前面一排最低的地方
    var heightContainer = [];
    for (var i = 0, len = boxes.length; i < len; i++) {
        if (i < columns) {
            heightContainer.push(boxes[i].offsetHeight);
        } else {
            var minHeight = Math.min.apply(null, heightContainer);
            var index = heightContainer.indexOf(minHeight);
            boxes[i].style.position = 'absolute';
            boxes[i].style.top = minHeight + 'px';
            // boxes[i].style.left = boxWidth * index + 'px'; // 通过计算左边的距离来设置下一个的left
            boxes[i].style.left = boxes[index].offsetLeft + 'px'; // 下一个box的left应该和它对应的box的左边距一样
            heightContainer[index] += boxes[i].offsetHeight;
        }
    }

}

// 判断是否需要加载
function checkLoadStatus(parent, box) {
    // 获取父元素和下面的盒子
    var oParent = document.getElementById(parent);
    var boxes = document.getElementsByClassName(box);
    // 获取最后一个元素的一半加上距离父元素的top值
    var lastBox = boxes[boxes.length-1];
    var totalH = Math.floor(lastBox.offsetHeight/2) + lastBox.offsetTop;
    // 获取滚动的距离加上屏幕的高度
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    var viewHeight =  document.body.clientHeight || document.documentElement.clientHeight;
    return (totalH < scroll+viewHeight)
}

// 加载更多
function loadMore() {
    var elem = document.querySelector('#load');
    if (elem) {return}
    var script = document.createElement('script');
    script.id = 'load';
    script.src = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=girl&format=json';
    document.body.appendChild(script);
    script.addEventListener('load', function () {
        var itemArr = json.items;
        var str = '';
        for (var i = 0; i < itemArr.length; i++) {
            str += '<div class="box">\
            <div class="pic"><img src="'+ itemArr[i].media.m +'" alt=""></div>\
            </div>';
        }
        var container = document.getElementById('container');
        container.innerHTML += str;
        waterFall('container', 'box');
        document.body.removeChild(script);
    }, false);

}