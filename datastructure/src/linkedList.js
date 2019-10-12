//实现LinkedList数据结构


var LinkedList=function(){
	var _that=this;

	//初始化链表第一个节点
	_that.head=null;
	//初始化链表长度为0
	_that.length=0;
} 


LinkedList.prototype={
	/**
	* @method append 想链表尾部添加节点
	* @param element 待添加的元素
	*/
	append:function(element){
		var _that=this;
		//初始化当前节点
		var current=null;
		
		//生成链表节点
		var node={
			'element':element,
			next:null
		};
		
		
		//如果链表第一个节点不存在，即链表为空
		if(_that.head===null){
			//设置要添加的节点为链表的第一个节点
			_that.head=node;
		}else{
			//指定当前指针为第一个节点
			current=_that.head;
			//开始循环
			//如果当前节点存在指向下一个节点的指针，则还没有找到链接最后一个节点，继续循环，
			//直到找到没有下一个指针的节点，也就是最后一个节点
			while(current.next){
				//将当前节点设置为下一个，继续循环
				current=current.next;
			}
			
			//将最后一个节点的指针指向待添加的节点
			current.next=node;
		}
		
		//更新节点元素数量
		_that.length++;
		
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
	* @method clear 清空队列
	*/

	clear:function(){
		//清空存储空间
		this.storage=[];
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
	},
	
	print:function(){
		console.log(this.storage);
	}

};





