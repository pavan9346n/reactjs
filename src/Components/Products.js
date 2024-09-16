// import React, { Component } from "react";
// import axios from 'axios';

// export default class Products extends Component {

//     constructor() {
//         super();
//         this.state = {
//             products: [], 
//             error: null,
//             loading: true
//         };
//     }

//     componentDidMount() {

//         axios.get('https://fakestoreapi.com/products')
//             .then(res => { this.setState({ products: res.data, loading: false }) })
//     }

//     render() {
//         const {products,error,loading} =this.state;
//         if(error) return <div className="text-danger">{error}</div>
//         if(loading) return 
//         return (<div>
//             <h2>List of products</h2>
//             <ul> {this.state.products.map(product => (
//                 <li key={product.id}>
//                     <figure>
//                         <img src={product.image} alt="images" />
//                         <figcaption>
//                             {product.title}
//                         </figcaption>
//                     </figure>
//                 </li>
//             ))}
//             </ul>
//         </div>)
//     }
// }


import React, { Component } from "react";
import axios from 'axios';
// import '../App.css';  // Make sure to import the CSS file where you define the spinner

export default class Products extends Component {

    constructor() {
        super();
        this.state = {
            products: [], 
            error: null,
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(()=>{
            axios.get('https://fakestoreapi.com/products')
            .then(res => { 
                this.setState({ products: res.data, loading: false }) 
            })
            .catch(err => { 
                this.setState({ error: 'Failed to fetch products', loading: false }) 
            });
        },20000)
    }

    render() {
        const { products, error, loading } = this.state;
        if (error) return <div className="text-danger">{error}</div>;
        if (loading) return <center><img className="image" src={'https://www.yhfc5.com/template/pc/images/loading.gif'} />
        <p><img className="loadimg" src={'https://blog.stackfindover.com/wp-content/uploads/2021/09/Loading-Text-Animation.gif'} /></p>
        </center>;

        return (
            <div>
                <h2>List of products</h2>
                <ul>
                    {products.map
                    (product => (
                        <li key={product.id}>
                            <figure className="img_section">
                                <img src={product.image} alt={product.title} />
                                <figcaption>{product.title}</figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}