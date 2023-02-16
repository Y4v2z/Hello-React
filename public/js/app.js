"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// Components
// Componentler 2 şekilde tanımlanır. Function Component, Class Component

// 1)Function Component
// var root = ReactDOM.createRoot(document.getElementById("root"));
// function TodoApp() {
//     return (
//         <div>
//             <Header />
//             <Todo />
//         </div>)
// }
// function Header(props) {
//     return (<h1>TodoApp</h1>);
// };
// function Todo(props) {
//     return (
//         <ul>
//             <li>Görev 1</li>
//             <li>Görev 2</li>
//             <li>Görev 3</li>
//         </ul>
//     )
// };
// root.render(<TodoApp />);
// ister aşağıdaki gibi template içinde yazdır fonksiyonu istersende ukarıdaki gibi template yerine
// TodoApp isimli fonksiyon içinde diğer componentlerini çağır.

// var template = <div>
//     <Header />
//     <Todo />
// </div>;
// root.render(template);

// 2)ClassComponent
// var root = ReactDOM.createRoot(document.getElementById("root"));
// class TodoApp extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <Todo />
//             </div>)
//     }
// }
// class Header extends React.Component {
//     render() {
//         return (<h1>TodoApp</h1>);
//     }
// };
// class Todo extends React.Component {
//     render() {
//         return (
//             <ul>
//                 <li>Görev 1</li>
//                 <li>Görev 2</li>
//                 <li>Görev 3</li>
//             </ul>
//         )
//     };
// }
// root.render(<TodoApp />);

// ister aşağıdaki gibi template içinde yazdır istersende ukarıdaki gibi template yerine
// TodoApp isimli component içinde diğerlerini çağır.
// var template = <div>
//     <Header />
//     <Todo />
// </div>;
// root.render(template);

// PARAMETRELERİ (props) function da ve class yapısında nasıl kullanırız.? 

// Fonksiyon kullanımı
// var root = ReactDOM.createRoot(document.getElementById("root"));
// function TodoApp() {
//     return (
//         <div>
//             <Header title="Todo uygulaması" description="görev tamamlanmadı" />
//             <Todo />
//         </div>)
// }
// function Header(props) {
//     console.log(props);
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.description}</p>
//         </div>
//     );
// };
// function Todo(props) {
//     return (
//         <ul>
//             <li>Görev 1</li>
//             <li>Görev 2</li>
//             <li>Görev 3</li>
//         </ul>
//     )
// };
// root.render(<TodoApp />);

// Class Kullanımı
// var root = ReactDOM.createRoot(document.getElementById("root"));
// class TodoApp extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header title="Todo uygulaması" description="görev tamamlanmadı" />
//                 <Todo />
//             </div>)
//     }
// }
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <p>{this.props.description}</p>
//             </div>
//         )
//     }
// };
// class Todo extends React.Component {
//     render() {
//         return (
//             <ul>
//                 <li>Görev 1</li>
//                 <li>Görev 2</li>
//                 <li>Görev 3</li>
//             </ul>
//         )
//     };
// }
// root.render(<TodoApp />);

// DATA ile Çalışma

// Fonksiyon kullanımı
// var root = ReactDOM.createRoot(document.getElementById("root"));
// function TodoApp() {
// const data = {
//     title: "Todo Uygulaması",
//     description: "Görev tamamlandı",
//     items: ["Görev 1", "Görev 2", "Görev 3"]
// }
//     return (
//         <div>
//             <Header title={data.title} description={data.description} />
//             <TodoList task={data.items} />
//         </div>)
// }
// function Header(props) {
//     console.log(props);
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.description}</p>
//         </div>
//     );
// };
// function TodoList(props) {
//     return (
//         <ul>
//             {
//                 props.task.map((item, index) => <TodoItem key={index} item={item} />)
//             }

//         </ul>
//     )
// };
// function TodoItem(props) {
//     return (
//         <li >{props.item}</li>
//     )
// }
// root.render(<TodoApp />);

// Class Kullanımı
// var root = ReactDOM.createRoot(document.getElementById("root"));
// class TodoApp extends React.Component {
//     render() {
//         const data = {
//             başlik: "Todo Uygulaması",
//             aciklama: "Görev tamamlandı",
//             görevler: ["Görev 1", "Görev 2", "Görev 3"]
//         }
//         return (
//             <div>
//                 <Header title={data.başlik} description={data.aciklama} />
//                 <TodoList items={data.görevler} />
//                 <NewItem />

//             </div>)
//     }
// }
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <p>{this.props.description}</p>
//             </div>
//         )
//     }
// };
// class TodoList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.clearItems = this.clearItems.bind(this);
//     }
//     clearItems() {
//         console.log("clear items");
//         console.log(this.props.items);
//     }
//     render() {
//         return (
//             <div>

//                 <ul>
//                     {this.props.items.map((görev, index) => < Todoİtem key={index} item={görev} />)}
//                 </ul>
//                 <button onClick={this.clearItems} >Temizle</button>
//             </div>
//         )
//     };
// };
// class NewItem extends React.Component {
//     onFormSubmit(e) {
//         e.preventDefault()
//         const item = e.target.elements.txtItem.value;
//         if (item) {
//             console.log(item);
//             e.target.elements.value = "";
//         }
//     }
//     render() {
//         return (
//             <form onSubmit={this.onFormSubmit}>
//                 <input type="text" name="txtItem" />
//                 <button type="submit">Ekle</button>
//             </form>
//         );
//     }
// }
// class Todoİtem extends React.Component {
//     render() {
//         return (
//             <li>{this.props.item}</li>
//         )
//     }
// }
// root.render(<TodoApp />);
// Day 3 Finished *******************************

// Day 4 Started *******************************

// COMPONENT STATE UYGULAMASİ

var root = ReactDOM.createRoot(document.getElementById("root"));
var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);
  var _super = _createSuper(TodoApp);
  function TodoApp(props) {
    var _this;
    _classCallCheck(this, TodoApp);
    _this = _super.call(this, props);
    _this.clearItems = _this.clearItems.bind(_assertThisInitialized(_this));
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.state = {
      görevler: ["Görev 1", "Görev 2", "Görev 3"]
    };
    return _this;
  }
  _createClass(TodoApp, [{
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        görevler: []
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      if (this.state.görevler.indexOf(item) > -1) {
        return "aynı elemanı ekleyemezsiniz.";
      }
      this.setState(function (prevState) {
        return {
          görevler: prevState.görevler.concat(item)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var data = {
        başlik: "Todo Uygulaması",
        aciklama: "Görev tamamlandı"
      };
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: data.başlik,
        description: data.aciklama
      }), /*#__PURE__*/React.createElement(TodoList, {
        items: this.state.görevler,
        clear: this.clearItems
      }), /*#__PURE__*/React.createElement(NewItem, {
        addItem: this.addItem
      }));
    }
  }]);
  return TodoApp;
}(React.Component);
var Header = /*#__PURE__*/function (_React$Component2) {
  _inherits(Header, _React$Component2);
  var _super2 = _createSuper(Header);
  function Header() {
    _classCallCheck(this, Header);
    return _super2.apply(this, arguments);
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, this.props.title), /*#__PURE__*/React.createElement("p", null, this.props.description));
    }
  }]);
  return Header;
}(React.Component);
;
var TodoList = /*#__PURE__*/function (_React$Component3) {
  _inherits(TodoList, _React$Component3);
  var _super3 = _createSuper(TodoList);
  function TodoList() {
    _classCallCheck(this, TodoList);
    return _super3.apply(this, arguments);
  }
  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", null, this.props.items.map(function (görev, index) {
        return /*#__PURE__*/React.createElement(Todoİtem, {
          key: index,
          item: görev
        });
      })), /*#__PURE__*/React.createElement("button", {
        onClick: this.props.clear
      }, "Temizle"));
    }
  }]);
  return TodoList;
}(React.Component);
;
var NewItem = /*#__PURE__*/function (_React$Component4) {
  _inherits(NewItem, _React$Component4);
  var _super4 = _createSuper(NewItem);
  function NewItem(props) {
    var _this2;
    _classCallCheck(this, NewItem);
    _this2 = _super4.call(this, props);
    _this2.onFormSubmit = _this2.onFormSubmit.bind(_assertThisInitialized(_this2));
    _this2.state = {
      error: ""
    };
    return _this2;
  }
  _createClass(NewItem, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.txtItem.value;
      if (item) {
        e.target.elements.value = "";
        var error = this.props.addItem(item);
        this.setState({
          error: error
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("p", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Ekle")));
    }
  }]);
  return NewItem;
}(React.Component);
var Todoİtem = /*#__PURE__*/function (_React$Component5) {
  _inherits(Todoİtem, _React$Component5);
  var _super5 = _createSuper(Todoİtem);
  function Todoİtem() {
    _classCallCheck(this, Todoİtem);
    return _super5.apply(this, arguments);
  }
  _createClass(Todoİtem, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("li", null, this.props.item);
    }
  }]);
  return Todoİtem;
}(React.Component);
root.render( /*#__PURE__*/React.createElement(TodoApp, null));

// Day 4 Finished *******************************

// Day 5 Started *******************************
