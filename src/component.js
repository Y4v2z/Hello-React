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
var root = ReactDOM.createRoot(document.getElementById("root"));
class TodoApp extends React.Component {
    render() {
        const data = {
            başlik: "Todo Uygulaması",
            aciklama: "Görev tamamlandı",
            görevler: ["Görev 1", "Görev 2", "Görev 3"]
        }
        return (
            <div>
                <Header title={data.başlik} description={data.aciklama} />
                <TodoList items={data.görevler} />
                <NewItem />

            </div>)
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
};
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this);
    }
    clearItems() {
        console.log("clear items");
        console.log(this.props.items);
    }
    render() {
        return (
            <div>

                <ul>
                    {this.props.items.map((görev, index) => < Todoİtem key={index} item={görev} />)}
                </ul>
                <button onClick={this.clearItems} >Temizle</button>
            </div>
        )
    };
};
class NewItem extends React.Component {
    onFormSubmit(e) {
        e.preventDefault()
        const item = e.target.elements.txtItem.value;
        if (item) {
            console.log(item);
            e.target.elements.value = "";
        }
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" name="txtItem" />
                <button type="submit">Ekle</button>
            </form>
        );
    }
}
class Todoİtem extends React.Component {
    render() {
        return (
            <li>{this.props.item}</li>
        )
    }
}
root.render(<TodoApp />);
// Day 3 Finished ****************************

