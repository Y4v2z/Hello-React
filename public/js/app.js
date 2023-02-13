"use strict";

// 1)basit olarak sayfadaki dinaik kısımları doldurma
// var p_name = "Iphone 15";
// var p_price = "45.000";
// var template =
//     <div>
//         <h1 id="header">Ürün Listesi</h1>
//         <div class="product-details">
//             <h2>{p_name}</h2>
//             <p>{p_price} TL</p>
//             <ul>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//             </ul>
//         </div>
//     </div>;
// var p_name = "Iphone 15";
// var p_price = "45.000";
// root.render(template);

// 2)object kullanarak sayfadaki dinamik kısımları doldurmak
// var product = {
//     name: "Iphone 14",
//     price: 45.000
// }
// var template =
//     <div>
//         <h1 id="header">Ürün Listesi</h1>
//         <div class="product-details">
//             <h2>{product.name}</h2>
//             <p>{product.price} TL</p>
//             <ul>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//             </ul>
//         </div>
//     </div>;
// root.render(template);

var product = {
  name: "Iphone 14",
  price: 50.000
};
function formatPrice(prd) {
  return prd.price + " TL";
}
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "\xDCr\xFCn Listesi"), /*#__PURE__*/React.createElement("div", {
  "class": "product-details"
}, /*#__PURE__*/React.createElement("h2", null, product.name), /*#__PURE__*/React.createElement("p", null, formatPrice(product)), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."))));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(template);
