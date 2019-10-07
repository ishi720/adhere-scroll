var AdhereScroll = function(selector, option) {
    // newが付いていない場合は、強制的にnewを施す。
    if(!(this instanceof AdhereScroll)){
        return new AdhereScroll(selector, option);
    }

    // ポジション指定
    if ( option.stopPosition ) {
        stopPosition = option.stopPosition;
    } else {
        stopPosition = 0;
    }

    // スタイル指定
    if (!option.style.zIndex) {
        option.style.zIndex = 100;
    }
    if (!option.style.color) {
        option.style.color = "";
    }
    if (!option.style.fontSize) {
        option.style.fontSize = "";
    }
    if (!option.style.fontFamily) {
        option.style.fontFamily = "";
    }
    if (!option.style.backgroundColor) {
        option.style.backgroundColor = "";
    }
    if (!option.style.boxShadow) {
        option.style.boxShadow = "";
    }
    if (!option.style.fontWeight) {
        option.style.fontWeight = "";
    }

    //スクロールを止める要素
    var targetEle = document.querySelector(selector);
    var targetStatus = {
        'offsetHeight': targetEle.offsetHeight,
        'style': {
            'position': targetEle.style.position,
            'left': targetEle.style.left,
            'zIndex': targetEle.style.zIndex,
            'width': targetEle.style.width,
            'color': targetEle.style.color,
            'fontSize': targetEle.style.fontSize,
            'fontFamily': targetEle.style.fontFamily,
            'fontWeight': targetEle.style.fontWeight,
            'backgroundColor': targetEle.style.backgroundColor,
            'boxShadow': targetEle.style.boxShadow,
            'padding': targetEle.style.padding
        }
    };

    //スクロールしたまま要素
    var underEle = targetEle.nextElementSibling;
    var underStatus = {
        'style': {
            'marginTop': underEle.style.marginTop,
            'paddingTop': underEle.style.paddingTop
        }
    };

    // 要素の位置
    var rect = targetEle.getBoundingClientRect();
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var navPos = rect.top + scrollTop;

    this.start = function(){
        ["load","scroll"].forEach( function(i) { 
            window.addEventListener(i, event);
        });
    }
    this.stop = function(){
        // イベントを停止する
        ["load","scroll"].forEach( function(i) { 
            window.removeEventListener(i, event);
        });

        // 適用していたstyleをリセットする
        styleReset();
    }

    function event(){
        var value = document.documentElement.scrollTop || document.body.scrollTop;
        if ( value - navPos >= -(stopPosition)) {

            targetEle.style.position = "fixed";
            targetEle.style.left = 0;
            targetEle.style.width = "100%";
            targetEle.style.zIndex = option.style.zIndex;
            targetEle.style.color = option.style.color;
            targetEle.style.fontSize = option.style.fontSize;
            targetEle.style.fontFamily = option.style.fontFamily;
            targetEle.style.fontWeight = option.style.fontWeight;
            targetEle.style.backgroundColor = option.style.backgroundColor;
            targetEle.style.boxShadow = option.style.boxShadow;
            targetEle.style.padding = option.style.padding;

            targetEle.style.top = stopPosition + 'px';

            if ( underStatus.style.marginTop ) {
                underEle.style.paddingTop = ( parseInt(underStatus.style.marginTop) + targetStatus.offsetHeight) + 'px';
            } else {
                underEle.style.paddingTop = targetStatus.offsetHeight + 'px';
            }
            underEle.style.marginTop = '0px';
        } else {
            styleReset();
        }
    }

    function styleReset(){
        targetEle.style.position = targetStatus.style.position;
        targetEle.style.left = targetStatus.style.left;
        targetEle.style.zIndex = targetStatus.style.zIndex;
        targetEle.style.width = targetStatus.style.width;

        targetEle.style.color = targetStatus.style.color;
        targetEle.style.fontSize = targetStatus.style.fontSize;
        targetEle.style.fontFamily = targetStatus.style.fontFamily;
        targetEle.style.fontWeight = targetStatus.style.fontWeight;
        targetEle.style.backgroundColor = targetStatus.style.backgroundColor;
        targetEle.style.boxShadow = targetStatus.style.boxShadow;
        targetEle.style.padding = targetStatus.style.padding;

        underEle.style.paddingTop = underStatus.style.paddingTop;
        underEle.style.marginTop = underStatus.style.marginTop;
    }
}