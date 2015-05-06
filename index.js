var _ = {
	once : function(fn) {
		var invoked = false;
		var result;
		return function () {
			if (!invoked) {
				invoked = true;
				result = fn();
			}
			return result;
		}
	},
	memoize : function (fn, func) {
		var cache = {};
		return function (arr) {
			var key = arr;
			if (func) {
				key = func(arr);
			}
			if (cache.hasOwnProperty(key)) {
				return cache[key];
			}
			cache[key] = fn(arr);
			return cache[key];
		}
	},
	bind : function (fn, context) {
		return function () {
			return fn.call(context);
		}
	}
}

module.exports = _;