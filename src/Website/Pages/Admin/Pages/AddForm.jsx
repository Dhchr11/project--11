import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddForm() {
  const redirect = useNavigate();
  const [data, setData] = useState({
    id: '',
    title: '',
    desc: '',
    logo: '',
    day: '',
    time: '',
    name: '',
    img: '',
  });
 redirect("/Home")
  const getChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const addData = async (e) => {
    e.preventDefault();
    const newData = {
      ...data,
      id: new Date().getTime().toString(),
    };

    try {
      await axios.post('http://localhost:3001/card', newData);
      console.log("Data submitted!");
      redirect('/');
    } catch (error) {
      console.log('API not found', error);
    }
  };

  return (
    <div className='bg-info'>
      <h1 align="center">Create Data</h1>
      <form className='col-4 m-auto' onSubmit={addData}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" name="name" onChange={getChangeData} />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <input type="text" className="form-control" name="description" onChange={getChangeData} />
        </div>
        <div className="mb-3">
          <label>Image URL</label>
          <input type="url" className="form-control" name="img" onChange={getChangeData} />
        </div>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" className="form-control" name="title" onChange={getChangeData} />
        </div>
        <div className="mb-3">
          <label>Day</label>
          <input type="text" className="form-control" name="day" onChange={getChangeData} />
        </div>
        <div className="mb-3">
          <label>Time</label>
          <input type="text" className="form-control" name="Time" onChange={getChangeData} />
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-success" type="submit">Create Data</button>
          <button type="button" className="btn btn-light">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
