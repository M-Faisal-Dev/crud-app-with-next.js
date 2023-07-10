"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";

async function fetchData() {
  const response = await fetch("/api/form", {
    method: "GET",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
}

function Edit() {
  const [formdata, setForm] = useState([]);

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const data = await fetchData();
        setForm(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFormData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/form?id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

      const data = await response.json();
      console.log(data);

      // Fetch the updated data after deletion
      const updatedData = await fetchData();
      setForm(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
   
      
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <div className="flex flex-wrap -m-4">
 
      {formdata.map((item) => (

        <div key={item._id} className="p-4 lg:w-1/3">
          
      
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{item.name}</h1>
          <p className="leading-relaxed mb-3">{item.email}</p>
          <p className="leading-relaxed mb-3">{item.message}</p>
          <div className="p-2 flex-row">
                  <button onClick={() => handleDelete(item._id)}
                    type="submit"
                    className=" mr-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Delete
                  </button>
                  <Link href = {`/edit/${item._id}`}>
                  <button 
                    type="submit"
                    className=" text-white  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Update
                  </button>
                  </Link>
                  
                </div>
          
        </div>
      </div>
   
 

      ))}
      </div>
      
     
      </div>
      </section>
      


  );
}

export default Edit;
