import React , { useState } from 'react' 
import Todoslist from './component/Todoslist'
import Addlist from './component/Addlist'
import  { AppBar  , Grid,  Toolbar  , Typography , makeStyles } from '@material-ui/core';

function App() {
  const [List , SetList] = useState([])
  const useStyles = 
  makeStyles({
    AppBar : {
      'background-color' : '#cb997e' , 
      color : 'black' , 
      height:'70px'
    } ,   
    text : {
      'font-size' : '25px' ,
      'font-style' : 'bold' ,
      marginTop : '17px'
    }})
  const classes = useStyles()
  const addlistitem = (item) =>  {
    SetList((previtem) => {
      return [...previtem , { title : item , id : Math.random().toString()}]

    })
  }
  return ( 
    <Grid container>
      <AppBar className ={classes.AppBar}>
        <Toolbar>
          <Typography variant="button" display="block" gutterBottom className = {classes.text}>To-do List</Typography>
        </Toolbar>
      </AppBar>
      <Todoslist onAddItem = {addlistitem}/>
      <Addlist list = {List}/>
      </Grid>

  );
}
export default App;
