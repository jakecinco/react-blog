import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    }
}));


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
    const classes = useStyles();
    return (
        <React.Fragment>{posts.map(post => (
            <form className="" key={post._id}>
                <TextField
                    id="outlined-full-width"
                    label="Title"
                    style={{ margin: 8 }}
                    placeholder=""
                    //helperText=""
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    className={classes.textField}
                    name="postTitle"
                    value={post.title} >{post.title}</TextField>
                <TextField
                    id="outlined-textarea"
                    label="Post"
                    placeholder=""
                    multiline
                    fullWidth
                    rows=""
                    column="30"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    name="postBody"
                    value={post.content}
                >{post.content}</TextField>

            </form>
        ))
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