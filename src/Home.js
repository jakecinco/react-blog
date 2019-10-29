import React, { useState, useEffect } from 'react';


const useFetch = (url) => {
    const [posts, setState] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const posts = await response.json();
            setState(posts);
        }
        fetchData();
    }, [url]);

    return posts;
};

function Home() {
    const URL = '/allposts';
    const posts = useFetch(URL);
    return (
        <React.Fragment>{posts.map(post => (
            <form className="" key={post._id}>
                <h2 name="postTitle"
                    value={post.title} >{post.title}</h2>
                <p  className="post-body"
                    name="postBody"
                    value={post.content}
                >{post.content}</p>
                <div class="three-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </form>

        )
        )
        }
        </React.Fragment>
    );


}


export default Home;




// class Home extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         items: []
//       };
//     }
//     componentDidMount() {
//       fetch('/allposts')
//         .then(res => res.json())
//         .then(items => this.setState({items}));
//     }

//     render() {
//       var { items } = this.state;
//       if (!items) {
//         return <div>
//           <h2 className="switch-header">Home</h2>
//           Loading..
//           </div>;
//       } else {
//         return (
//           <div className="">
//             <p>{items.map(item => (
//                 <p key={item._id}>
//                   {item.title}
//                   {item.content}
//                 </p>
//                 ))};
//             </p>
//           </div>
//         );
//       }
//     }
//   }

//   export default Home;