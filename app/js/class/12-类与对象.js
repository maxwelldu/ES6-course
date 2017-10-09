{
  //ES5
  /*
  function Parent(name) {
    name = name || 'ucai';
    this.name = name;
  }
  Parent.prototype.a = function(){};//在原型上面添加方法
  var p = new Parent();
  p.a();

  Parent.name = '123';//静态属性; 访问是直接Parent.name访问
  Parent.say = function(){}; //静态方法; 访问是直接Parent.say(); 通常存功能函数, 相当于普通的函数
  Parent.say();
  */

  //ES6
  // 基本定义和生成实例
  class Parent {
    //相当于ES5中function Parent()函数里面的内容，这个函数在实例化对象的时候会调用
    constructor(name = 'ucai'){
      this.name = name;
    }
  }

/*
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var Parent = function Parent() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ucai';
    _classCallCheck(this, Parent);//不允许直接调用这个函数，必须要通过new, 才有第一个参数是第二个参数的实例这种关系
    this.name = name;
  };
  */

  let v_parent = new Parent('v');
  console.log('构造函数和实例',v_parent);

}

{
  // 继承
  class Parent{
    constructor(name='ucai'){
      this.name=name;
    }
  }

  class Child extends Parent{}

  console.log('继承',new Child());//会自动调用父类的构造函数
}

{
  // 继承传递参数
  class Parent{
    constructor(name='ucai'){
      this.name=name;
    }
  }

  class Child extends Parent{
    constructor(name='child'){
      super(name);//调用父类的构造函数, super一定要放在构造函数的第一行
      this.type = 'child';
    }
  }

  console.log('继承传递参数',new Child('hello'));//调用Child的构造函数之后就不能自动的调用父类的构造函数，需要使用super关键字去调用
}

{
  // getter,setter
  class Parent{
    constructor(name='ucai'){
      this.name = name;
    }

    //这个千万不要觉得是方法，这个是属性
    get longName(){
      return 'ucai' + this.name
    }

    set longName(value){
      this.name=value;
    }
  }

  let v = new Parent();
  console.log('getter',v.longName);
  v.longName='hello';
  console.log('setter',v.longName);
}

{
  // 静态方法
  class Parent{
    constructor(name='ucai'){
      this.name=name;
    }

    static tell(){//静态方法, 通过类调用，而不是通过类的实例
      console.log('tell');
    }
  }

  Parent.tell();

}

{
  // 静态属性
  class Parent{
    constructor(name='ucai'){
      this.name=name;
    }

    static tell(){//静态方法
      console.log('tell');
    }
  }

  //直接在类上定义，没有关键字
  Parent.type='test';

  console.log('静态属性',Parent.type);
}
