'use strict'

/*
 * @description REM組件
 * @author momo
 * @update 2018/08/30
 * @param size
 * @example fontsize(640)
 */

let win = window,
    doc = document,
    docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    fontSize,
    changeEv = function() {
        var clientWidth = docEl.clientWidth
        if (!clientWidth) return
        if (clientWidth >= fontSize) {
            docEl.style.fontSize = '100px'
        } else {
            docEl.style.fontSize = (100 * (clientWidth / fontSize)).toFixed(2) + 'px'
        }
    }

export default (size = 750) => {
    if (!doc.addEventListener) return
    fontSize = size
    win.addEventListener(resizeEvt, changeEv, false)
    changeEv()
}