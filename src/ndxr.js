(function(exports){
    exports.NDXR = function (arr, indexes) {
        var _self = this;
        var _data = arr.slice();
        this.indexed = {};
        
        this.reset = function(){
            var thisProps = Object.keys(this);
            for (var i = 0, len = thisProps.length; i < len; i++){
                var protoKey = false;
                for (var j = 0, jlen = _protoKeys.length; j < jlen; j++){
                    if(thisProps[i] === _protoKeys[j]) protoKey = true;
                }
                !protoKey && delete this[thisProps[i]];
            }
        };

        this.index = function(indexes) {
            this.reset();
            var result = this;
            for (var i = 0, len = _data.length; i < len; i++) {
                var current = _data[i];
                var base = result;
                for (var j = 0, jlen = indexes.length - 1; j < jlen; j++) {                    
                    var index_nth = indexes[j].replace(' ', '_') + '__' + current[indexes[j]].replace(' ', '_');
                    if (!base[index_nth]) {
                        base[index_nth] = {};
                    }
                    base = base[index_nth];
                }
                var index_last = indexes[jlen].replace(' ', '_') + '__' + current[indexes[jlen]].replace(' ', '_');
                if (!base[index_last]) {
                    base[index_last] = [];
                }
                base[index_last].push(current);
            }
            this.indexed = result;
            return this;
        };

        this.concat = function(a, b){
            return (a instanceof Array ? a : []).concat(b instanceof Array ? b : []);
        };
        var _protoKeys = Object.keys(this);

        if (!!indexes) this.index(indexes);
    };
})(typeof exports === 'undefined' ? window : exports);