// 1) Factory Function
function CreateObject(value) { 
    return {
        val: value,
    }
 };

var linkedListObj={

    data:[],
    push: function(val){
        // add element to the end of the array
        if(this.data.length> 0){
            if( this.data[this.data.length-1].val < val ){
                    this.data[this.data.length]= CreateObject(val);
            }else{
                    console.log("can't push this value");
            }
        }else{
            this.data[this.data.length]= CreateObject(val);
        }
    },
    pop: function(){
        // remove the last element in the array
        if(this.data.length==0){
            console.log("linked list is already empty! , nothing exist to be poped");
        }else{
            this.data.length--;
        }
    },
    shift: function(){
        // remove the first element in the array
        if(this.data.length==0){
            console.log("linked list is already empty! , nothing exist to be removed");
        }else{
        this.data.shift();
        }
    },
    unshift: function(val){
        // add element to the first of the array
        if(val<this.data[0].val){
             this.data.unshift(CreateObject(val));
        }else{
            console.log("can't add this number as it is > the 1st element");
        }
    },
    addByVal: function(val){
        // add element to the array in the right place (ascending order) even if the array has reached its end
        if(this.data.length==0){
            this.data[0]= CreateObject(val);
        }else{
            for(var i=0;i<this.data.length;i++){
                if(this.data[i].val>val){
                    this.data.splice(i,0,CreateObject(val));
                    break;
                }else if(i==this.data.length-1){
                    this.data[this.data.length]= CreateObject(val);
                    break;
                }
            }
        }
    },
    removeByVal: function(val){
        // remove element from the array
        if(this.data.length==0){
            console.log("linked list is already empty! , nothing exist to be removed");
        }else{
            for(var i=0;i<this.data.length;i++){
                if(this.data[i].val==val){
                    this.data.splice(i,1);
                    break;
                }else if(i==this.data.length-1){
                    console.log("this value doesn't exist in the linked list");
                }
            }
        }
    }
}

//  var st1 = CreateStudent("Osama",20)
//  console.log(st1);

// console.log(linkedListObj.push(5));
// console.log(linkedListObj.data);
// console.log(linkedListObj.push());
// console.log(linkedListObj.pop());
// console.log(linkedListObj.shift());
// console.log(linkedListObj.unshift());
// console.log(linkedListObj.addByVal());
// console.log(linkedListObj.removeByVal());