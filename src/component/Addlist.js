import React from 'react';
import  { Grid , makeStyles , Card , CardContent } from '@material-ui/core';


const Addlist = (props) => {

    const useStyles = makeStyles({
        test : {
            'margin-left' :  '300px' , 
            display : 'block' , 
        
            
        } , 
        Card : {
            margin : '30px' , 
            width : '500px' , 
            height : '80px'  , 
            'margin-left'  : '130px'

        } 

    })
const classes = useStyles()
    
    return (
        <Grid container className = {classes.test}>
            
             {props.list.map((ele) => {
                return <Card className = {classes.Card}> <CardContent> <h3 key={ele.id} > {ele.title} </h3></CardContent> </Card> 
            })} 
            
    
        </Grid>
    )
}
export default Addlist;