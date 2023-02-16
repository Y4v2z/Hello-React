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
        })
        console.log(this.state);

    }
    render() {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <p>{this.state.email}</p>
                <button onClick={this.changeEmail}>Change Email</button>
            </div>

        )
    }
}
root.render(<User />);
// Day 4 Finished *******************************
