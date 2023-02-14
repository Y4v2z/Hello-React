// 1)basit olarak sayfadaki dinamik kısımları doldurma
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
// fonksiyonu dahil ederek dinamik kısımları doldurmak.
// var product = {
//     name: "Iphone 14",
//     price: 50.000
// }
// function formatPrice(prd) {
//     return prd.price + " TL"
// }
// var template =
//     <div>
//         <h1 id="header">Ürün Listesi</h1>
//         <div id="product-details">
//             <h2>{product.name}</h2>
//             <p>{formatPrice(product)}</p>
//             <ul>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//             </ul>
//         </div>
//     </div>;
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(template);
// Day 1 Finished **********************************************
// Day 2 Started ***********************************************
// Koşullu duurmlar
// var product = {
//     name: "Iphone 14",
//     price: 50.000,
//     description:"en yeni ürün"
// }
// function formatPrice(prd) {
//     return prd.price + " TL"
// };
// function printDescription(prd) {
//     if (prd.description) {
//         return prd.description;
//     } else
//         return "ürün bulunamadi"
// };
// var template =
//     <div>
//         <h1 id="header">Ürün Listesi</h1>
//         <div id="product-details">
//             <h2>{product.name}</h2>
//             <p>{formatPrice(product)}</p>
//             <p>{printDescription(product)}</p>
//             <ul>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//             </ul>
//         </div>
//     </div>;
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(template);
// bu durumda şayet description product objesinin description u varsa onu yazar. yoksa else blogundaki açıklamayı yazar.
//else bloğunda açıklama yoksa herhangi bir açıklama olmaz.Ancak sayfada boş bir p etiketi olduğu görülür.Aşağıdaki gibi yazılırsa;

// var product = {
//     name: "Iphone 14",
//     price: 50.000,
//     description: "en yeni ürün"
// }
// function formatPrice(prd) {
//     return prd.price + " TL"
// };
// function printDescription(prd) {
//     if (prd.description) {
//         return <p>{prd.description}</p>

//     } 
// };
// var template =
//     <div>
//         <h1 id="header">Ürün Listesi</h1>
//         <div id="product-details">
//             <h2>{product.name}</h2>
//             <p>{formatPrice(product)}</p>
//             {printDescription(product)}
//             <ul>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//             </ul>
//         </div>
//     </div>;
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(template);
// product objesinin description bölümü yoksa sayfada birşey yazmaz boş ir p etiketi de görünmez. ancak varsa
// yukarıda olduğu gibi return içinde de p etiketi açılabilir.


// var product = {
//     name: "Iphone 14",
//     price: 50000,
//     description: "en yeni ürün"
// }
// function formatPrice(product) {
//     return <p>{product.price} TL</p>
// };
// // function printDescription(prd) {
// //     if (prd.description) {
// //         return <p>{prd.description}</p>

// //     } 
// // };
// var template =
//     <div>
//         <h1 id="header">Ürün Listesi</h1>
//         <div id="product-details">
//             <h2>{product.name}</h2>
//             {/* <p>{formatPrice(product)}</p> */}
//             {(product.price && product.price > 0) && formatPrice(product)}
//             {/* {printDescription(product)} */}
//             {product.description && <p>{product.description}</p>}
//             <ul>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//             </ul>
//         </div>
//     </div>;
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(template);
// hiç fonksiyona gerek duyulmadan && opetarörü if yerine geçer ve anlamı şöyledir:eğer product. description
// p etiketinin içini yaz yoksa yazma.
// aynı husus format price fonksiyonu için de geçereli. product price varsa ve price 0 dan büyükse formatPrice 
// fonksiyonunu çalıştır demek.

// Koşullu durumlarda "Turnary" operatörünü kullanma.
// var product = {
//     name: "Iphone 14",
//     price: 50000,
//     description: "en yeni ürün",
//     color: ["silver", "red", "white"]
// }
// function formatPrice(product) {
//     return <p>{product.price} TL</p>
// };
// // function printDescription(prd) {
// //     if (prd.description) {
// //         return <p>{prd.description}</p>

// //     } 
// // };
// var template =
//     <div>
//         <h1 id="header">Ürün Listesi</h1>
//         <div id="product-details">
//             {/* {product.name ? <h2>{product.name}</h2> : <p>ürün ismi girilmemiş</p>} */}
//             {(product.name && product.name.length > 3) ? <h2>{product.name}</h2> : <p>ürün ismi girilmemiş</p>}
//             {(product.price && product.price > 0) && formatPrice(product)}
//             {product.description && <p>{product.description}</p>}
//             {/* {product.color.length > 0 ? "ürün rengi mevcut" : ""} */}
//             {product.color.length > 0 ? <p>ürün rengi mevcut</p> : ""}
//             <ul>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//                 <li>Lorem, ipsum.</li>
//             </ul>
//         </div>
//     </div>;
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(template);

// Diziler ile çalışma Map metodu. (renkleri tk tek eklemek yerine map metdu ile düzenlemek)
// var product = {
//     name: "Iphone 14",
//     price: 50000,
//     description: "en yeni ürün",
//     colors: ["silver", "red", "white", "yellow"]
// }
// function formatPrice(product) {
//     return <p>{product.price} TL</p>
// };
// var template =
//     <div>
//         <h1 id="header">Ürün Listesi</h1>
//         <div id="product-details">
//             {/* {product.name ? <h2>{product.name}</h2> : <p>ürün ismi girilmemiş</p>} */}
//             {(product.price && product.price > 0) && formatPrice(product)}
//             {product.description && <p>{product.description}</p>}
//             {/* {product.color.length > 0 ? "ürün rengi mevcut" : ""} */}
//             {product.colors.length > 0 ? <p>ürün rengi mevcut</p> : ""}
//             <ul>{
//                 product.colors.map((color, index) => <li key={index}>{color}</li>)
//             }
//             </ul>
//         </div>
//     </div>;
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(template);

// bir değil bir kaç ürün yani Products lar üzerinde çalışma
// var products = [
//     {
//         id: 1,
//         name: "Iphone 15",
//         price: 50000,
//         description: "en yeni ürün",
//         colors: ["silver", "red", "white", "yellow"]

//     },
//     {
//         id: 2,
//         name: "Iphone 16",
//         price: 60000,
//         description: "en yeni ürün",
//         colors: ["silver", "black", "green"]

//     }
// ]
// function formatPrice(product) {
//     return <p>{product.price} TL</p>
// };
// var template =
//     <div>
//         <h1 id="header">Ürün Listesi</h1>
//         {
//             products.map(product => (
//                 <div className="product-details" key={product.id}>
//                     {(product.name && product.name.length > 3) ? <h2>{product.name}</h2> : <p>ürün ismi girilmemiş</p>}
//                     {(product.price && product.price > 0) && formatPrice(product)}
//                     {product.description && <p>{product.description}</p>}
//                     {product.colors.length > 0 ? <p>ürün rengi mevcut</p> : ""}
//                     <ul>
//                         {
//                             product.colors.map((color, index) => <li key={index}>{color}</li>)
//                         }
//                     </ul>
//                 </div>
//             ))
//         }
//     </div>;
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(template);

// map metodunu çoğul ürün içinde kullaırken, yazdığımız arrow fonksiyonda => dan sonra {} değil normal parantez () kullanıldı.
// bir üstteki örnekte olduğu gibi map metodu içine bir index parametresi yazılıp key aşağıdaki key içine
// product.id yerine index de yazılabilir.



// Event, button
// var products = [
//     {
//         name: "Iphone 15",
//         price: 50000

//     },
//     {
//         name: "Iphone 16",
//         price: 60000

//     },
//     {
//         name: "Iphone 17",
//         price: 70000

//     }
// ]
// var addProduct = () => {
//     console.log("product added");
// }
// bu şekilde fonksiyonu dışarıda yazıp aşağıda onClic içine sadece fonksiyon ismini de gönderebiliirz. aşağıdaki gibi de yapılabilir.
// var template =
//     <div>
//         <h1 id="header">Ürün Listesi</h1>
//         {
//             products.map((product, index) => (
//                 <div className="product-details" key={index}>
//                     {<h2>{product.name}</h2>}
//                     {product.price}
//                     <button type="button" id={index} onClick={(event) => { console.log(event.target, product.name); }}>Ekle</button>
//                 </div>
//             ))
//         }
//     </div>;
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(template);

// AYNI OLAY Şöyle de yzılabilir
// var addProduct = (event, p_name) => {
//     console.log(event, p_name);
// }
// var template =
//     <div>
//         <h1 id="header">Ürün Listesi</h1>
//         {
//             products.map((product, index) => (
//                 <div className="product-details" key={index}>
//                     {<h2>{product.name}</h2>}
//                     {product.price}
//                     <button type="button" id={index} onClick={(event) => { addProduct(event, product.name) }}>Ekle</button>
//                 </div>
//             ))
//         }
//     </div>;
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(template);
// (event) => { console.log(event.target); }



// Data Binding
// var root = ReactDOM.createRoot(document.getElementById("root"));
// var products = [
//     {
//         name: "Iphone 15",
//         price: 50000

//     },
//     {
//         name: "Iphone 16",
//         price: 60000

//     },
//     {
//         name: "Iphone 17",
//         price: 70000

//     }
// ]
// var selectedProducts = [];
// var addProduct = (event, p_name) => {
//     console.log(event, p_name);
//     if (!selectedProducts.includes(p_name)) {
//         selectedProducts.push(p_name);
//     }
//     renderApp();
// }
// function renderApp() {
//     var template =
//         <div>
//             <h1 id="header">Ürün Listesi</h1>
//             <h3>Seçilen Ürün Sayısı: {selectedProducts.length}</h3>
//             {
//                 products.map((product, index) => (
//                     <div className="product-details" key={index}>
//                         {<h2>{product.name}</h2>}
//                         {product.price}
//                         <button type="button" id={index} onClick={(event) => { addProduct(event, product.name) }}>Ekle</button>
//                     </div>
//                 ))
//             }
//         </div>;
//     root.render(template);
// };
// renderApp();


// FORM
var root = ReactDOM.createRoot(document.getElementById("root"));
var products = [
    {
        name: "Iphone 15",
        price: 50000

    },
    {
        name: "Iphone 16",
        price: 60000

    },
    {
        name: "Iphone 17",
        price: 70000

    }
]
var selectedProducts = [];
var selectProduct = (event, p_name) => {
    console.log(event, p_name);
    if (!selectedProducts.includes(p_name)) {
        selectedProducts.push(p_name);
    }
    renderApp();
}
function saveProduct(event) {
    event.preventDefault();
    var p_name = event.target.elements.p_name.value;
    var p_price = event.target.elements.p_price.value;
    var newProduct = {
        name: p_name,
        price: p_price
    };
    products.push(newProduct);
    event.target.elements.p_name.value = "";
    event.target.elements.p_price.value = "";
    renderApp();
}

function renderApp() {
    var template =
        <div>
            <h1 id="header">Ürün Listesi</h1>
            <h3>Seçilen Ürün Sayısı: {selectedProducts.length}</h3>
            <form onSubmit={saveProduct}>
                <input type="text" name="p_name" id="p_name" />
                <input type="text" name="p_price" id="p_price" />
                <button type="submit">Save Product</button>
            </form>
            {
                products.map((product, index) => (
                    <div className="product-details" key={index}>
                        {<h2>{product.name}</h2>}
                        {product.price}
                        <button type="button" id={index} onClick={(event) => { selectProduct(event, product.name) }}>Ekle</button>
                    </div>
                ))
            }
        </div>;
    root.render(template);
};
renderApp();



// Day 2 Finished **********************************************
// Day 3 Started ***********************************************

