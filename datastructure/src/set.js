//实现doublyLinkedList数据结构


var Set = function() {
    var _that = this;
	//用来存放集合的项
   	_that.storage={};
}


Set.prototype = {
	
	/**
	* @method has 
	* @param {any} value 待查询项
	* @description 查询是否包含某个值
	* @returns {Boolean} 包含返回true 否则返回false;
	*/
	has:function(value){
		var _that=this;
		//返回value是否在集合中
		//return value in _that.storage;
		//两种方式都可以
		return _that.storage.hasOwnProperty(value);
	},
    /**
     * @method add 向集合中添加项
     * @param value 待添加项
	 * @returns {Boolean} 返回添加成功或失败
     */
    add: function(value) {
        var _that = this;
        //初始化当前节点
		//如果集合中不存在待添加项，则添加
		if(!_that.has(value)){
			_that.storage[value]=value;
			//返回添加成功
			return true;
		}
		//返回添加失败
		return false;

    },
	
	/**
     * @method remove 从集合中移除项
     * @param value 待移除的项
	 * @returns {Boolean} 返回删除成功或失败
     */
    remove: function(value) {
        var _that = this;
        //初始化当前节点
		//如果集合中不存在待添加项，则添加
		if(!_that.has(value)){
			//使用delete方法删除对象的属性
			delete _that.storage[value];
			//返回删除成功
			return true;
		}
		//返回删除失败
		return false;

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
	
	/**
	* @method union 求并集
	* @param {Set类型} ohterSet
	* @returns Set类型 两个集合的并集
	*/
	union:function(otherSet){
		//新建一个集合类型,用来存储最终的返回结果
		var _unionSet=new Set();
		//获取当前集合所有数据
		var values=this.values();
		
		for(var i=0;i<values.length;i++){
			_unionSet.add(values[i]);
		}
		//获取求并集的另一个集合所有数据
		var _values=otherSet.values();
		
		for(var i=0;i<_values.length;i++){
			_unionSet.add(_values[i]);
		}
		
		return _unionSet;
	},
	
	/**
	* @method intersection 求交集
	* @param {Set类型} ohterSet
	* @returns Set类型 两个集合的交集
	*/
	intersection:function(otherSet){
		//存储最终返回的交集结果
		var _intersectionSet=new Set();
		//获取当前集合所有数据
		var values=this.values();
		//循环当前集合
		for(var i=0;i<values.length;i++){
			//如果当前集合项也存在于另一个集合中
			if(otherSet.has(values[i])){
				//添加到新集合中
				_intersectionSet.add(values[i]);
			}
		}
		
		return _intersectionSet;
		
	},
	
	/**
	* @method difference 求差集
	* @param otherSet {Set类型}另一个集合
	* @returns Set类型 两个集合的差集
	*/
	difference:function(otherSet){
		//存储最终返回的交集结果
		var _differenceSet=new Set();
		//获取当前集合所有数据
		var values=this.values();
		//循环当前集合
		for(var i=0;i<values.length;i++){
			//如果当前集合项不存在于另一个集合中
			if(!otherSet.has(values[i])){
				//添加到新集合中
				_differenceSet.add(values[i]);
			}
		}
		
		return _differenceSet;
	},
	
	/**
	* @method subSet
	* @param {Set类型} ohterSet
	* @returns {Boolean} 返回是否为子集
	*/
	subSet:function(otherSet){
		if(this.size()>otherSet.size()){
			return false;
		}
		
		var values=this.values();
		//循环当前集合
		for(var i=0;i<values.length;i++){
			//如果当前集合任意一项不存在于另一个集合中
			if(!otherSet.has(values[i])){
				return false;
			}
		}
		return true;
	}
	


};