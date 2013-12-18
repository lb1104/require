/**
 * 不使用,仅供ide提示
 * @type {Object}
 */
var exports = {};
/**
 * @name 当前模块名
 * @type {string}
 * @private
 */
var __modulename = '';

/**
 * @name 加载模块
 * @example
 * require('smscenter').add();
 * @example
 * require('smscenter/send')('d')
 * @param path
 * @returns {*}
 */
var require = function (path) {

    var cache = false;//缓存,只读取一次文件

    if (!require.cache[path] || !cache) {

        var temparr = path.split('/');
        var modulename = temparr.shift();
        var mothedname = temparr.join('/');
        temparr = null;
        if (!mothedname) {
            mothedname = modulename;
        }

        $.ajax({
            url: ROOT + 'modules/' + modulename + '/static/' + mothedname + '.js',
            type: 'GET',
            timeout: 5000,
            dataType: 'text',
            async: false,
            cache: false,
            success: function (data, textStatus, jqXHR) {

                var func = "var exports = {};\n" + data + "\nreturn exports;";

                require.cache[path] = new Function('__modulename', func)(modulename);

            },
            error: function (jqXHR, textStatus) {
                alert('js加载Modules(' + path + ')失败,Status:' + textStatus + ';');
            }
        });
    }

    return require.cache[path];

};

/**
 * Module cached
 * @type {{}}
 */
require.cache = {};