"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Todo from "../components/Todo";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({  
    title: "", 
    description: "" 
  });

  const [todoData, setTodoData] = useState([]);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await axios('/api');
      setTodoData(response.data.todos || []);
    } catch (error) {
      toast.error("Error fetching todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos(); // Fetch todos on component mount
  }, []); // Empty dependency array means this runs once when the component mounts

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete('/api', {
        params: {
          mongoId: id
        }
      });
      toast.success(response.data.msg);
      fetchTodos();
    } catch (error) {
      toast.error("Error deleting todo");
    }
  };

  const completeTodo = async (id) => {
    try {
      const response = await axios.put('/api', {}, {
        params: {
          mongoId: id
        }
      });
      toast.success(response.data.msg);
      fetchTodos();
    } catch (error) {
      toast.error("Error completing todo");
    }
  };

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(form => ({...form, [name]: value}));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api', formData);
      toast.success(response.data.msg);
      setFormData({ title: "", description: "" });
      await fetchTodos();
    } catch (error) {
      toast.error("Error adding todo");
    }
  };

  return (
    <>
      <div className='bg-[#e6ecee] pb-16 h-[100%]'>
        <h1 className='text-center pt-32 pb-10 mb-8 font-extrabold font-2xl'>TODO APP</h1>
        <ToastContainer theme="dark"/>
        <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] px-2 mx-auto">
          <input
            value={formData.title}
            onChange={onChangeHandler}
            type="text"
            name="title"
            placeholder="Enter Title"
            className="px-3 py-2 border-2 w-full"
          />
          <textarea
            value={formData.description}
            onChange={onChangeHandler}
            name="description"
            placeholder="Enter Description"
            className="px-3 py-2 border-2 w-full"
          ></textarea>
          <button 
            onClick={onSubmitHandler}
            type="submit" 
            className="bg-orange-600 py-3 px-11 text-white"
          >
            Add Todo
          </button>
        </form>

        <div className="relative overflow-x-auto mt-24 w-[60%] max-md:w-[90%] mx-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Id</th>
                <th scope="col" className="px-6 py-3">Title</th>
                <th scope="col" className="px-6 py-3">Description</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {todoData.map((item) => {
                return (
                  <Todo 
                    key={item._id}
                    id={item._id} 
                    title={item.title} 
                    description={item.description} 
                    complete={item.isCompleted} 
                    mongoId={item._id} 
                    deleteTodo={deleteTodo} 
                    completeTodo={completeTodo} 
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
