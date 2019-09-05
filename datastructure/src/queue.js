//实现Queue数据结构


var Queue=function(){
    //开辟一块存储空间，此处用数组来模拟内存空间
    this.storage=[];
} 


Queue.prototype={

	/**
	* @method enqueue 入队
	* @param element 待入队的元素
	*/
	enqueue:function(element){
		//将元素压入队尾
		this.storage.push(element);
	},

	/**
	* @method dequeue 出队（删除队首元素并返回）
	* @return any 队首元素
	*/
	dequeue:function(){
		//从队列头部删除元素，并返回该队列头部元素
		return this.storage.shift();
	},

	/**
	* @method front 返回队首元素
	* @return any 队首元素
	*/
	front:function(){
		//返回
		return this.storage[0];
	},
	/**
	* @method back 返回队尾元素
	* @return any 队尾元素
	*/
	back:function(){
		//返回
		return this.storage[this.storage.length-1];
	},

	/**
	* @method isEmpty 返回队列是否为空
	* @return Boolean true or false
	*/
	isEmpty:function(){
		return !this.storage.length;
	},

	/**
	* @method size 返回队列长度
	* @return Number 队列长度
	*/

	size:function(){
		return this.storage.length;
	}

}