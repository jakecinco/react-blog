import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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



function Edit(props) {
    const classes = useStyles();
    const initialFormState = { postTitle: '', postBody: '' }
    const [posts, setPost] = useState(initialFormState);



    const handleTitleInputChange = event => {
        const { value } = event.target;
        setPost({ postTitle: value })
    }

    const handleContentInputChange = event => {
        const { value } = event.target;
        setPost({ postBody: value })
    }

    const addPost = post => {
        setPost([...posts, post])
    }
    return (

        <React.Fragment>
            <form action="/compose" method="post">
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
                    value={props.postTitle}
                    onChange={handleTitleInputChange}>

                </TextField>
                <TextField
                    id="outlined-textarea"
                    label="Post"
                    placeholder=""
                    multiline
                    fullWidth
                    rows="17"
                    column="30"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    name="postBody"
                    value={props.postBody}
                    onChange={handleContentInputChange}
                >

                </TextField>
                <Button
                    onClick={addPost}
                    type="submit"
                    variant="contained" className={classes.button}>
                    Publish
                </Button>
            </form>


        </React.Fragment>
    );


}


export default Edit;