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


// var root = ReactDOM.createRoot(document.getElementById("root"));
// class TodoApp extends React.Component {
//     constructor(props) {
//         super(props);
//         this.clearItems = this.clearItems.bind(this);
//         this.addItem = this.addItem.bind(this);
//         this.state = {
//             görevler: ["Görev 1", "Görev 2", "Görev 3"]
//         }
//     }
//     clearItems() {
//         this.setState({
//             görevler: []
//         });
//     }
//     addItem(item) {
//         if (this.state.görevler.indexOf(item) > -1) {
//             return "aynı elemanı ekleyemezsiniz."
//         }
//         this.setState(prevState => {
//             return { görevler: prevState.görevler.concat(item) }
//         })
//     }

//     render() {
//         const data = {
//             başlik: "Todo Uygulaması",
//             aciklama: "Görev tamamlandı",
//         }
//         return (
//             <div>
//                 <Header title={data.başlik} description={data.aciklama} />
//                 <TodoList items={this.state.görevler} clear={this.clearItems} />
//                 <NewItem addItem={this.addItem} />
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
//     render() {
//         return (
//             <div>

//                 <ul>
//                     {this.props.items.map((görev, index) => < Todoİtem key={index} item={görev} />)}
//                 </ul>
//                 <button onClick={this.props.clear} >Temizle</button>
//             </div>
//         )
//     };
// };
// class NewItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.onFormSubmit = this.onFormSubmit.bind(this)
//         this.state = {
//             error: ""
//         }
//     }
//     onFormSubmit(e) {
//         e.preventDefault()
//         const item = e.target.elements.txtItem.value;
//         if (item) {
//             e.target.elements.value = "";
//             const error = this.props.addItem(item);
//             this.setState({
//                 error: error
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.onFormSubmit}>
//                     <input type="text" name="txtItem" />
//                     <button type="submit">Ekle</button>
//                 </form>
//             </div>
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

// Day 4 Finished *******************************


// Day 5 Started *******************************
// DELETE ITEM
// var root = ReactDOM.createRoot(document.getElementById("root"));
// class TodoApp extends React.Component {
//     constructor(props) {
//         super(props)
//         this.clearItems = this.clearItems.bind(this);
//         this.addItem = this.addItem.bind(this);
//         this.deleteItem = this.deleteItem.bind(this);
//         this.state = {
//             görevler: ["Görev 1", "Görev 2", "Görev 3"]
//         }
//     }
//     deleteItem(item) {
//         this.setState((prevState) => {
//             const arr = prevState.görevler.filter((i) => {
//                 return item != i
//             });
//             return {
//                 görevler: arr
//             }
//         })
//     }
//     clearItems() {
//         this.setState({
//             görevler: []
//         })
//     }
//     addItem(item) {
//         //this.state.görevler.includes(item)
//         if (this.state.görevler.indexOf(item) > -1) {
//             return "Aynı elemanı ekleyemezsiniz"
//         }
//         this.setState((prevState) => {
//             return { görevler: prevState.görevler.concat(item) }
//         })
//     }
//     render() {
//         const data = {
//             başlik: "Todo Uygulaması",
//             aciklama: "Görev tamamlandı",
//         }
//         return (
//             <div>
//                 <Header title={data.başlik} description={data.aciklama} />
//                 <TodoList items={this.state.görevler} clear={this.clearItems} deleteItem={this.deleteItem} />
//                 <NewItem addItem={this.addItem} />

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
//     render() {
//         return (
//             <div>

//                 <ul>
//                     {this.props.items.map((görev, index) => < Todoİtem key={index} item={görev} deleteItem={this.props.deleteItem} />)}
//                 </ul>
//                 <button onClick={this.props.clear} >Temizle</button>
//             </div>
//         )
//     };
// };
// class NewItem extends React.Component {
//     constructor(props) {
//         super(props)
//         this.onFormSubmit = this.onFormSubmit.bind(this)
//         this.state = {
//             error: ""
//         }
//     }
//     onFormSubmit(e) {
//         e.preventDefault()
//         const item = e.target.elements.txtItem.value;
//         if (item) {
//             e.target.elements.txtItem.value = "";
//             const error = this.props.addItem(item);
//             this.setState({
//                 error: error
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.onFormSubmit}>
//                     <input type="text" name="txtItem" />
//                     <button type="submit">Ekle</button>
//                 </form>
//             </div>
//         );
//     }
// }
// class Todoİtem extends React.Component {
//     constructor(props) {
//         super(props)
//         this.deleteItem = this.deleteItem.bind(this)
//     }
//     deleteItem(item) {
//         this.props.deleteItem(this.props.item)
//     }
//     render() {
//         return (
//             <li>
//                 {this.props.item}
//                 <button onClick={this.deleteItem}> X</button>
//             </li>
//         )
//     }
// }
// root.render(<TodoApp />);



//COMPONENT LIFECYCLE, LOCAL STORAGE 
// // var root = ReactDOM.createRoot(document.getElementById("root"));
// // class TodoApp extends React.Component {
// //     constructor(props) {
// //         super(props)
// //         this.clearItems = this.clearItems.bind(this);
// //         this.addItem = this.addItem.bind(this);
// //         this.deleteItem = this.deleteItem.bind(this);
// //         this.state = {
// //             görevler: ["Görev 1", "Görev 2", "Görev 3"]
// //         }
// //     }
// //     deleteItem(item) {
// //         this.setState((prevState) => {
// //             const arr = prevState.görevler.filter((i) => {
// //                 return item != i
// //             });
// //             return {
// //                 görevler: arr
// //             }
// //         })
// //     }
// //     clearItems() {
// //         this.setState({
// //             görevler: []
// //         })
// //     }
// //     addItem(item) {
// //         //this.state.görevler.includes(item)
// //         if (this.state.görevler.indexOf(item) > -1) {
// //             return "Aynı elemanı ekleyemezsiniz"
// //         }
// //         this.setState((prevState) => {
// //             return { görevler: prevState.görevler.concat(item) }
// //         })
// //     }
// //     render() {
// //         const data = {
// //             başlik: "Todo Uygulaması",
// //             aciklama: "Görev tamamlandı",
// //         }
// //         return (
// //             <div>
// //                 <Header title={data.başlik} description={data.aciklama} />
// //                 <TodoList items={this.state.görevler} clear={this.clearItems} deleteItem={this.deleteItem} />
// //                 <NewItem addItem={this.addItem} />

// //             </div>)
// //     }
// //     componentDidMount() {
// //         const json_obj = localStorage.getItem("items");
// //         const items = JSON.parse(json_obj);
// //         if (items) {
// //             this.setState({
// //                 görevler: items
// //             })
// //         }
// //     }
// //     componentDidUpdate(prevProps, prevState) {
// //         if (prevState.görevler.length !== this.state.görevler.length) {
// //             const json_str = JSON.stringify(this.state.görevler);
// //             localStorage.setItem("items", json_str)
// //         }
// //     }
// // }
// // class Header extends React.Component {
// //     render() {
// //         return (
// //             <div>
// //                 <h1>{this.props.title}</h1>
// //                 <p>{this.props.description}</p>
// //             </div>
// //         )
// //     }
// // };
// // class TodoList extends React.Component {
// //     render() {
// //         return (
// //             <div>

// //                 <ul>
// //                     {this.props.items.map((görev, index) => < Todoİtem key={index} item={görev} deleteItem={this.props.deleteItem} />)}
// //                 </ul>
// //                 <button onClick={this.props.clear} >Temizle</button>
// //             </div>
// //         )
// //     };
// // };
// // class NewItem extends React.Component {
// //     constructor(props) {
// //         super(props)
// //         this.onFormSubmit = this.onFormSubmit.bind(this)
// //         this.state = {
// //             error: ""
// //         }
// //     }
// //     onFormSubmit(e) {
// //         e.preventDefault()
// //         const item = e.target.elements.txtItem.value;
// //         if (item) {
// //             e.target.elements.txtItem.value = "";
// //             const error = this.props.addItem(item);
// //             this.setState({
// //                 error: error
// //             })
// //         }
// //     }
// //     render() {
// //         return (
// //             <div>
// //                 {this.state.error && <p>{this.state.error}</p>}
// //                 <form onSubmit={this.onFormSubmit}>
// //                     <input type="text" name="txtItem" />
// //                     <button type="submit">Ekle</button>
// //                 </form>
// //             </div>
// //         );
// //     }
// //     componentDidUpdate() {
// //         console.log("NewItem component güncellendi");
// //     }

// // }
// // class Todoİtem extends React.Component {
// //     constructor(props) {
// //         super(props)
// //         this.deleteItem = this.deleteItem.bind(this)
// //     }
// //     deleteItem(item) {
// //         this.props.deleteItem(this.props.item)
// //     }
// //     render() {
// //         return (
// //             <li>
// //                 {this.props.item}
// //                 <button onClick={this.deleteItem}> X</button>
// //             </li>
// //         )
// //     }
// //     componentWillUnmount() {
// //         console.log("eleman silindi");
// //     }
// // }
// // root.render(<TodoApp />);



// // STATELESS FUNCTİON COMPONENTS
// // "state ve lifecycle" yapıları "class componentlere özgü olduğu için" fınction component içinde kullanılmaz.
// // function component te bunun yerine "hooks" kullanılır. buna sonra bakacapız. bundan dı-olayı içinde state ve cycle olmayan
// // class componentleri function a çevirelim.
// var root = ReactDOM.createRoot(document.getElementById("root"));
// class TodoApp extends React.Component {
//     constructor(props) {
//         super(props)
//         this.clearItems = this.clearItems.bind(this);
//         this.addItem = this.addItem.bind(this);
//         this.deleteItem = this.deleteItem.bind(this);
//         this.state = {
//             görevler: ["Görev 1", "Görev 2", "Görev 3"]
//         }
//     }
//     deleteItem(item) {
//         this.setState((prevState) => {
//             const arr = prevState.görevler.filter((i) => {
//                 return item != i
//             });
//             return {
//                 görevler: arr
//             }
//         })
//     }
//     clearItems() {
//         this.setState({
//             görevler: []
//         })
//     }
//     addItem(item) {
//         //this.state.görevler.includes(item)
//         if (this.state.görevler.indexOf(item) > -1) {
//             return "Aynı elemanı ekleyemezsiniz"
//         }
//         this.setState((prevState) => {
//             return { görevler: prevState.görevler.concat(item) }
//         })
//     }
//     render() {
//         const data = {
//             başlik: "Todo Uygulaması",
//             aciklama: "Görev tamamlandı",
//         }
//         return (
//             <div>
//                 <Header title={data.başlik} description={data.aciklama} />
//                 <TodoList items={this.state.görevler} clear={this.clearItems} deleteItem={this.deleteItem} />
//                 <NewItem addItem={this.addItem} />

//             </div>)
//     }
//     componentDidMount() {
//         const json_obj = localStorage.getItem("items");
//         const items = JSON.parse(json_obj);
//         if (items) {
//             this.setState({
//                 görevler: items
//             })
//         }
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.görevler.length !== this.state.görevler.length) {
//             const json_str = JSON.stringify(this.state.görevler);
//             localStorage.setItem("items", json_str)
//         }
//     }
// }
// // class Header extends React.Component {
// //     render() {
// //         return (
// //             <div>
// //                 <h1>{this.props.title}</h1>
// //                 <p>{this.props.description}</p>
// //             </div>
// //         )
// //     }
// // };
// function Header(props) {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.description}</p>
//         </div>
//     )
// }//bu fonksiyon ve bunun gibi olanlar ES 6 ile aşağıdaki gibide yazılarbilir. rnek olarak yazdım.
// // var Header=(props)=> {
// //     return (
// //         <div>
// //             <h1>{props.title}</h1>
// //             <p>{props.description}</p>
// //         </div>
// //     )
// // };
// // class TodoList extends React.Component {
// //     render() {
// //         return (
// //             <div>

// //                 <ul>
// //                     {this.props.items.map((görev, index) => < Todoİtem key={index} item={görev} deleteItem={this.props.deleteItem} />)}
// //                 </ul>
// //                 <button onClick={this.props.clear} >Temizle</button>
// //             </div>
// //         )
// //     };
// // };
// function TodoList(props) {
//     return (
//         <div>

//             <ul>
//                 {props.items.map((görev, index) => < Todoİtem key={index} item={görev} deleteItem={props.deleteItem} />)}
//             </ul>
//             <button onClick={props.clear} >Temizle</button>
//         </div>
//     )
// }
// class NewItem extends React.Component {
//     constructor(props) {
//         super(props)
//         this.onFormSubmit = this.onFormSubmit.bind(this)
//         this.state = {
//             error: ""
//         }
//     }
//     onFormSubmit(e) {
//         e.preventDefault()
//         const item = e.target.elements.txtItem.value;
//         if (item) {
//             e.target.elements.txtItem.value = "";
//             const error = this.props.addItem(item);
//             this.setState({
//                 error: error
//             })
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.error && <p>{this.state.error}</p>}
//                 <form onSubmit={this.onFormSubmit}>
//                     <input type="text" name="txtItem" />
//                     <button type="submit">Ekle</button>
//                 </form>
//             </div>
//         );
//     }
//     componentDidUpdate() {
//         console.log("NewItem component güncellendi");
//     }

// }
// // class Todoİtem extends React.Component {
// //     constructor(props) {
// //         super(props)
// //         this.deleteItem = this.deleteItem.bind(this)
// //     }
// //     deleteItem(item) {
// //         this.props.deleteItem(this.props.item)
// //     }
// //     render() {
// //         return (
// //             <li>
// //                 {this.props.item}
// //                 <button onClick={this.deleteItem}> X</button>
// //             </li>
// //         )
// //     }
// // }

// function TodoItem(props){
//     return (
//         <li>
//             {props.item}
//             <button onClick={()=>props.deleteItem(props.item)}> X</button>
//         </li>
//     )

// }// "class TodoItem dan" farklı olarak onClick fonksiyonunu kendi içinde yazınca "deleteItem" fonksiyonuna gerek kalmadı. bundan dolayı daha sade yazıldı.
// root.render(<TodoApp />);



// BOOTSTRAP IN EKLENMESİ VE TASRIMIN DÜZENLENMESİ. 
var root = ReactDOM.createRoot(document.getElementById("root"));
class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.clearItems = this.clearItems.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            görevler: ["Görev 1", "Görev 2", "Görev 3"]
        }
    }
    deleteItem(item) {
        this.setState((prevState) => {
            const arr = prevState.görevler.filter((i) => {
                return item != i
            });
            return {
                görevler: arr
            }
        })
    }
    clearItems() {
        this.setState({
            görevler: []
        })
    }
    addItem(item) {
        //this.state.görevler.includes(item)
        if (this.state.görevler.indexOf(item) > -1) {
            return "Aynı elemanı ekleyemezsiniz"
        }
        this.setState((prevState) => {
            return { görevler: prevState.görevler.concat(item) }
        })
    }
    render() {
        const data = {
            başlik: "Todo Uygulaması",
            aciklama: "Bekleyen görevler",
        }
        return (
            <div className="container my-3">
                <div className="card">
                    <div className="card-header">
                        <Header title={data.başlik} description={data.aciklama} />
                    </div>
                    <div className="card-body">
                        <TodoList items={this.state.görevler} clear={this.clearItems} deleteItem={this.deleteItem} />
                    </div>
                    <div className="card-footer">
                        <NewItem addItem={this.addItem} />
                    </div>
                </div>

            </div>)
    }
}
class Header extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="h5">{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
};
class TodoList extends React.Component {
    render() {
        return (
            <div>

                <ul className="list-group">
                    {this.props.items.map((görev, index) => < Todoİtem key={index} item={görev} deleteItem={this.props.deleteItem} />)}
                </ul>
                {
                    this.props.items.length > 0 ?
                        <p>
                            <button className="btn btn-outline-danger float-end mt-3" onClick={this.props.clear} >Temizle</button>
                        </p>
                        :
                        <div className="alert alert-warning">
                            Bir görev ekleyiniz.
                        </div>
                }
            </div>
        )
    };
};
class NewItem extends React.Component {
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.state = {
            error: ""
        }
    }
    onFormSubmit(e) {
        e.preventDefault()
        const item = e.target.elements.txtItem.value;
        if (item) {
            e.target.elements.txtItem.value = "";
            const error = this.props.addItem(item);
            this.setState({
                error: error
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <div className="input-group">
                        <input className="form-control" type="text" name="txtItem" />
                        <button className="btn btn-primary" type="submit">Ekle</button>
                    </div>
                </form>
            </div>
        );
    }
}
class Todoİtem extends React.Component {
    constructor(props) {
        super(props)
        this.deleteItem = this.deleteItem.bind(this)
    }
    deleteItem(item) {
        this.props.deleteItem(this.props.item)
    }
    render() {
        return (
            <li className="list-group-item">
                {this.props.item}
                <button className="btn btn-danger btn-sm float-end" onClick={this.deleteItem}> X</button>
            </li>
        )
    }
}
root.render(<TodoApp />);
// Day 5 Finished *******************************
