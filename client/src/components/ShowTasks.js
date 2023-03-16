import React, { useEffect,useState }  from 'react'
import { Item, List, Segment, Header, Button, Link } from 'semantic-ui-react'
import { config } from '../config';
import { useNavigate } from "react-router-dom";


const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch(config.apiURL, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => {
      setTasks(response);
    })
    .catch(err => console.log(err));
  }, [])
  
  const onDeleteClick = (id) => {
    fetch(config.apiURL+"/"+id, {
      method: 'DELETE',
    })
    .then(response => {
      console.log(response);
      navigate(0);
    })
    .catch(err => console.log(err));
    //
  }

  let taskItems = []
  tasks.forEach((t,i) => {
    taskItems.push(<List.Item key={i}>
                    <Item> 
                    <Item.Content>
                      <Item.Header>{t.name}</Item.Header>
                      <Item.Description>{t.description}</Item.Description>
                      <hr/>
                      <Item.Meta>Status: {t.status}</Item.Meta>
                      <Item.Meta>By: {t.source}</Item.Meta>
                      <Item.Extra>{t.created_date}</Item.Extra>
                    </Item.Content> 
                    <Button size="mini"><a href={"/update/"+ t._id}>Edit</a></Button>
                    <Button size="mini" onClick={() => onDeleteClick(t._id)} >Delete</Button>
                  </Item>
                  </List.Item>)
  })
  return (
    <Segment >
      <Header inverted block size='medium' textAlign="left">Tasks list</Header>
      <List celled >
        {taskItems} 
      </List>
      <Button size="large" ><a href={"/create"}>Add new Task</a></Button>
    </Segment>
  )
}

export default ShowTasks;