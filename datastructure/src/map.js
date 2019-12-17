//实现Map数据结构


var Map = function() {
    var _that = this;
	//用来存放集合的项
   	_that.storage={};
}


Map.prototype = {
	
	/**
	* @method has 
	* @param {any} key 待查询项
	* @description 查询是否包含某个值
	* @returns {Boolean} 包含返回true 否则返回false;
	*/
	has:function(key){
		var _that=this;
		//返回key是否在字典中
		//return key in _that.storage;
		//两种方式都可以
		return _that.storage.hasOwnProperty(key);
	},
    /**
	 * @method add 向集合中添加项
	 * @param key 待添加项
	 * @param value 待添加项的值
	 */
    set: function(key,value) {
        var _that = this;
        _that.storage[key]=value;

    },
	
	/**
     * @method delete 从集合中移除项
     * @param key 待移除的项
	 * @returns {Boolean} 返回删除成功或失败
     */
    delete: function(key) {
        var _that = this;
        //初始化当前节点
		//如果集合中不存在待添加项，则添加
		if(!_that.has(key)){
			//使用delete方法删除对象的属性
			delete _that.storage[key];
			//返回删除成功
			return true;
		}
		//返回删除失败
		return false;

    },
	
	/**
	* @method get 
	* @param {any} key 待查询项
	* @description 查询是否包含某个值
	* @returns {any} 返回对应值;
	*/
	get:function(key){
		var _that=this;
		if(_that.has(key)){
			//返回对应值
			return _that.storage[key];
		}
		
	},
	
	/**
     * @method clear 清空集合
     */
	clear:function(){
		this.storage={};
	},
	


    /**
     * @method size 返回队列长度
     * @return Number 队列长度
     */

    size: function() {
		var _that=this;
		//实现方案1：使用一个变量或属性记录，每次add或者remove的时候修改对应的值
		//实现方案2：
        return Object.keys(_that.storage).length;
		//实现方案3：循环集合本身
		/*
		var _count=0;
		for(var prop in _that.storage){
			if(_that.storage.hasOwnProperty(prop)){
				_count++;
			}
		}
		return _count;
		*/
    },
	
	/**
	* @method values
	* @returns array 返回包含集合所有项的数组
	*/
	values:function(){
		var _that=this;
		return Object.values(_that.storage);
		//兼容性方案
		/*
		var values=[];
		for(var key in _that.storage){
			if(_that.storage.hasOwnProperty(key)){
				values.push(key);
			}
		}
		return keys;
		*/
	},
	
	


};