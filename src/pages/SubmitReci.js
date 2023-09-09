import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
function SubmitReci() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    file: "",
    dishtype: "",
    mealtype: "",
    maining: "",
  });


  useEffect(() => {
    
    const userDataJSON = localStorage.getItem("dataKey");
    if(userDataJSON){

      const userData = JSON.parse(userDataJSON); 
      setFormData({...formData , ...userData})
    }
  }, []);



  const handleTitle = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log("cvc", formData);

  // const handleSubmit = (e) => {
  //   const updatedData = [...{data}, formData];
  //   console.log("dddaaa", data);
  //   setData(updatedData);
  //   localStorage.setItem("dataKey", JSON.stringify(updatedData));
  // };
  const handleSubmit = (e)=>{
    e.preventDefault();
    // course.push(formData)
    localStorage.setItem("dataKey", JSON.stringify(formData));

  }

  return (
    <>
      <div>
        <div className="py-20  w-full text-center">
          <form onSubmit={handleSubmit}>
            <div className="mb-6 mx-auto">
              <input
                type="text"
                placeholder="Recipe Title"
                name="title"
                className="w-96 px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                onChange={handleTitle}
                value={formData.title}
              />
            </div>
            <div className="mb-6 mx-auto">
              <input
                type="file"
                placeholder="Recipe img"
                name="file"
                className="w-96 px-4 py-3 rounded-md text-gray-700 font-medium border-solid "
                oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'"
                onChange={handleTitle}
                value={formData.file}
              />
            </div>
            <div className="mb-6 mx-auto">
              <input
                type="text"
                placeholder="DishType"
                name="dishtype"
                className="w-96 px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'"
                value={formData.dishtype}
                onChange={handleTitle}
              />
            </div>
            <div className="mb-6 mx-auto">
              <input
                type="text"
                placeholder="MealType"
                name="mealtype"
                className="w-96 px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'"
                onChange={handleTitle}
                value={formData.mealtype}
              />
            </div>

            <div className="mb-6 mx-auto">
              <textarea
                rows={6}
                type="text"
                placeholder="MainIngredients"
                name="maining"
                className="w-96 px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200"
                oninput="this.className = 'w-full px-4 py-3 rounded-md text-gray-700 font-medium border-solid border-2 border-gray-200'"
                onChange={handleTitle}
                value={formData.maining}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SubmitReci;
