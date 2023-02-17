// COMPONENT STATE
var root = ReactDOM.createRoot(document.getElementById("root"));
class User extends React.Component {
    constructor(props) {
        super(props)
        this.changeEmail = this.changeEmail.bind(this)
        this.state = {
            name: "Yavuz AVCİ",
            email: "yavuzavci01@gmail.com"
        }
    }
    changeEmail() {
        this.setState({
            name: "Esra Avci",
            email: "esraavci01@gmail.com"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>{this.state.email}</p>
                <button onClick={this.changeEmail} >Change Email</button>
            </div>

        )
    }
}
root.render(<User />);
// Day 4 Finished *******************************
