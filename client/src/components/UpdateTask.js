import React, { useState }  from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form , Segment} from 'semantic-ui-react'
import { config } from '../config';

const UpdateTask = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskSource, setTaskSource] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const updateData = () => {
    const task = {name:taskName, status: taskStatus, description: taskDescription, source: taskSource};
    fetch(config.apiURL+"/"+id, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
    .then(response => {
      console.log(response);
      navigate('/');
    })
      .catch(err => console.log(err));

  }

  return (

    <Form className="create-form">
        <Form.Field>
            <input placeholder='Task Name' onChange={(e) => setTaskName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <input placeholder='Status' onChange={(e) => setTaskStatus(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <input placeholder='Task source' onChange={(e) => setTaskSource(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <input placeholder='Description' onChange={(e) => setTaskDescription(e.target.value)} />
        </Form.Field>
        <Button onClick={updateData} type='submit'>Update</Button>
    </Form>
  )
}

export default UpdateTask;