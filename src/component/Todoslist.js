import React , { useState , useEffect } from 'react' 
import db from '../Firebase'
import  { Grid , makeStyles , Button } from '@material-ui/core';
function Todoslist(props) {
  const [todos , settodos] = useState([])

  const handleSendMessage = async () => {
    await db.collection('messages').add({
      msg: todos,
    })
    // setMessages([...messages, currentMsg])
    
  }
  useEffect(() => {
    db.collection('messages').onSnapshot((docs) => {
      let temp = []
      docs.forEach(doc => {
        temp.push(doc.data().msg)
      })
      settodos(temp)
    })
  }, [])

  const SumbitHandler = (event) => {
    event.preventDefault()
    props.onAddItem(todos)
    console.log(todos)
  }
  const useStyles = 
  makeStyles({
    input : {
      width : '370px' , 
      height : '30px' , 
      margin : '15px', 
      'margin-top'  : '200px' ,  
    } ,
    button : {
      'background-color' : '#6b705c' ,
      color : 'white' , 
      'font-size'  : '14px' , 
    }   , 
    item : {
      margin : 'auto'
    } , 
    text : {
      'font-size' : '25px' ,
      'font-style' : 'bold' ,
      marginTop : '17px'
    }})
  const classes = useStyles()
  const InputHandler = (event) => {
    settodos(event.target.value)
  }
  return ( 
    <Grid container>
      <Grid item className = {classes.item}>
          <form onSubmit = {SumbitHandler}>
      <input className = {classes.input}  onChange = {InputHandler} value = {todos} placeholder='Write your goal'/>
        
        <Button onClick = {handleSendMessage} className = {classes.button} type = 'submit'>Add item</Button>
        </form>
      </Grid>
      </Grid>

  );
}
export default Todoslist;