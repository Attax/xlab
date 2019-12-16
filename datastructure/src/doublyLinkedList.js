//实现doublyLinkedList数据结构


var DoublyLinkedList = function() {
    var _that = this;

    //初始化链表第一个节点
    _that.head = null;
	//链表的最后一个节点
	_that.tail=null;
    //初始化链表长度为0
    _that.length = 0;
}


DoublyLinkedList.prototype = {
    /**
     * @method append 向链表尾部添加节点
     * @param element 待添加的元素
     */
    append: function(element) {
        var _that = this;
        //初始化当前节点
        var current = null;

        //生成链表节点
        var node = {
             //节点的元素
			'element': element,
			//指向下一个节点的链
			'next': null,
			//指向上一个节点的链
			'prev':null
        };


        //如果链表第一个节点不存在，即链表为空
        if (_that.head === null) {
            //设置要添加的节点为链表的第一个节点
            _that.head = node;
			//尾节点设置为新添加的节点
			_that.tail=node;
        } else {
            //指定当前指针为第一个节点
            current = _that.head;
            //开始循环
            //如果当前节点存在指向下一个节点的指针，则还没有找到链接最后一个节点，继续循环，
            //直到找到没有下一个指针的节点，也就是最后一个节点
			//此处借由while循环完成，其实应该可以通过tail节点直接添加，而不经过循环
            while (current.next) {
                //将当前节点设置为下一个，继续循环
                current = current.next;
            }
			//将待添加到链表尾部的节点的prev指向链表中的最后一个节点
			node.prev=current;
            //将最后一个节点的指针指向待添加的节点
            current.next = node;
			//尾节点设置为新添加的节点
			_that.tail=node;
			
			/**
			//此种方式不借助循环，性能更好
			node.prev=_that.tail;
			_that.next=node;
			//设置新添加节点为最小的尾节点
			_that.tail=node;
			*/
			
			
        }

        //更新节点元素数量
        _that.length++;

    },

    /**
     * @method insert 插入节点
     * @param position {Number} 插入的位置
     * @param element {any} 插入的节点
     */
    insert: function(position, element) {
        var _that = this;
        //先检查越界值,确保传入的位置在链表范围内
        if (position > -1 && position <= _that.length) {

            //生成链表节点
            var node = {
               'element': element,
				//指向下一个节点的链
				'next': null,
				//指向上一个节点的链
				'prev':null
            };


            //设置当前节点为头节点，即第0个节点
            var current = _that.head;
            //记录上一个节点（移除一个节点后，需要把断开的链表重新连上，所以需要记录上一个和下一个）
            var previous = null;
            //记录当前位置为0
            var index = 0;
            //如果要在链表头部添加
            if (position === 0) {
				//如果头部节点不存在
				if(!_that.head){
					_that.head = node;
					_that.tail=node;
				}else{
					node.next = current;
					current.prev=node;
					_that.head=node;
				}
                
                
            }//如果是添加到最后
			else if(position==_that.length){
				current=_that.tail;
				current.next=node;
				node.prev=current;
				_that.tail=node;
			} 
			else {
                /**
                 * 对当前位置++，比较是否小于要添加节点的位置，
                 * 如果小于，则继续向后
                 */
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //将被插入的节点和被插入位置的节点连接起来
                node.next = current;
                //将被插入位置的上一个节点和被插入的节点连接起来
                previous.next = node;
				
				current.prev=node;
				node.prev=previous;

            }
            //更新节点元素数量
            _that.length++;
            return true;
        } else {
            return false;
        }
    },
    /**
     * @method removeAt 移除某位置的节点并返回该节点
     * @param {Number} position 
     * @return {any} 被移除的节点
     */
    removeAt: function(position) {
        var _that = this;
        //先检查越界值,确保传入的位置在链表范围内
        if (position > -1 && position < _that.length) {
            //设置当前节点为头节点，即第0个节点
            var current = _that.head;
            //记录上一个节点（移除一个节点后，需要把断开的链表重新连上，所以需要记录上一个和下一个）
            var previous = null;
            //记录当前位置为0
            var index = 0;
            //如果要移除的是首节点，则移除后的首节点为下一个节点
            if (position === 0) {
				//设置新的首节点
                _that.head = current.next;
				//如果只有一项
				if(_that.length==1){
					_that.tail=null;
				}else{
					//新的首节点前指针要设置为null
					_that.head.prev=null;
				}
            }
			//如果要删除的是最后一项 尾节点
			else if(position===_that.length-1){
				
				current=_that.tail;
				//生成新的尾节点
				_that.tail=current.prev;
				_that.tail.next=null;
			}
			else {
                /**
                 * 对当前位置++，比较是否小于要移除的位置，
                 * 如果小于，则当前位置还不是要移除的位置，继续向后
                 */
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                //将被删除节点的上一个节点与被删除节点的下一个节点连接起来，跳过current（被删除节点）
                previous.next = current.next;
				//修改被删除节点的后一个节点的前指针为被删除节点的前指针
				current.next.prev=previous;

            }
            //更新节点元素数量
            _that.length--;
            return current.element;

        } else {
            return null;
        }
    },

	
	/**
	* @method indexOf查找节点的位置
	* @param element 待查找的节点
	* @returns number 返回元素所在位置，如果元素不存在，返回-1
	*/
    indexOf: function(element) {
		var _that=this;
		//从第0个节点开始查询
		var current=_that.head;
		//记录元素位置
		var index=0;
		while(current){
			if(element===current.element){
				//返回位置
				return index;
			}
			index++;
			//查找下一个节点
			current=current.next;
		}
		//如果查询完所有的没有找到匹配的，返回-1
		return -1;
    },
	
	/**
	* @method remove 
	* @param {any} element 要移除的节点
	* @returns {any|null} 被移除的节点
	*/
    remove: function(element) {
		var _that;
		//查找元素位置
		var index=_that.indexOf(element);
		//调用removeAt方法移除元素
		return _that.removeAt(index);
    },
	
	
	/**
	* @method toString 转为字符串输出
	*/
	toString:function(){
		var _that=this;
		var current=_that.head;
		var string='';
		
		while(current){
			string+=current.element+(current.next?'\r\n':'');
			current=current.next;
		}
		
		return string;
	},
    /**
     * @method isEmpty 返回链表是否为空
     * @return Boolean true or false
     */
    isEmpty: function() {
        return !this.length;
    },

    /**
     * @method size 返回队列长度
     * @return Number 队列长度
     */

    size: function() {
        return this.length;
    },
	
	//获取头节点
    getHead: function() {
       	return this.head;
    }

};