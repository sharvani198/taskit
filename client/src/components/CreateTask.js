import React, { useState }  from 'react'
import { Button, Checkbox, Form , Segment} from 'semantic-ui-react'
import { config } from '../config';

const CreateTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [taskSource, setTaskSource] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const postData = () => {
    const task = {name:taskName, status: taskStatus, description: taskDescription, source: taskSource};
    fetch(config.apiURL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

  return (

    <Form className="create-form">
        <Form.Field inline required width={6}>
            <label textAlign='left'>Task Name</label>
            <input placeholder='Task Name' onChange={(e) => setTaskName(e.target.value)} />
        </Form.Field>
        <Form.Field inline required width={6}>
            <label>Status</label>
            <input placeholder='Status' onChange={(e) => setTaskStatus(e.target.value)} />
        </Form.Field>
        <Form.Field inline required width={6}>
            <label>Author</label>
            <input placeholder='Task source' onChange={(e) => setTaskSource(e.target.value)} />
        </Form.Field>
        <Form.Field inline required width={6}>
            <label>Task Description</label>
            <input placeholder='Description' onChange={(e) => setTaskDescription(e.target.value)} />
        </Form.Field>
        <Button onClick={postData} type='submit'>Create</Button>
    </Form>
  )
}

export default CreateTask;