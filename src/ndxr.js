(function(exports){
    exports.NDXR = function (arr, indexes) {
        var _self = this;
        var _data = arr.slice();
        this.indexed = {};

        this.index = function(indexes) {
            var result = {};
            for (var i = 0, len = _data.length; i < len; i++) {
                var current = _data[i];
                var base = result;
                for (var j = 0, jlen = indexes.length - 1; j < jlen; j++) {
                    var index_nth = current[indexes[j]].replace(' ', '_');
                    if (!base[index_nth]) {
                        base[index_nth] = {};
                    }
                    base = base[index_nth];
                }
                var index_last = current[indexes[jlen]].replace(' ', '_');
                if (!base[index_last]) {
                    base[index_last] = [];
                }
                base[index_last].push(current)
            }
            this.indexed = result;
            return this;
        };

        this.concat = function(a, b){
            return (a instanceof Array ? a : []).concat(b instanceof Array ? b : []);
        };

        if (!!indexes) this.index(indexes);
    };
})(typeof exports === 'undefined' ? window : exports)