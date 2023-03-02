import React from "react";
class SelectedProductList extends React.Component {
    render() {
        return (
            <ol className="list-group list-group-numbered">
                {
                    this.props.products.map((item, index) =>
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                            {console.log(item.product)};
                        </li>
                    )
                }
            </ol>
        );
    }
}

export default SelectedProductList;

