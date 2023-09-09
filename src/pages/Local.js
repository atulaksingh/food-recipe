import React, { useEffect, useState } from "react";

function Local() {
    const [data, setData] = useState([])
  const [formData, setFormData] = useState([{
    name: "",
    email: "",
  }]);

  useEffect(() => {
    // Retrieve existing data from localStorage
    // const existingDataJSON = localStorage.getItem('user');
    // const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : {};

    // Merge the existing data with the initial state
    // setFormData({ ...formData, ...existingData });

    
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const existingDataJSON = localStorage.getItem("user");
//     const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : {};

//     // Merge the existing data with the current form data
//     const updatedData = { ...existingData, ...formData };

//     // Save the updated data to localStorage
//     localStorage.setItem("user", JSON.stringify(updatedData));
//   };
const handleSubmit = (e)=>{
    
    localStorage.setItem("user", JSON.stringify([...data,formData]));
}
useEffect(() => {
    //   const existingDataJSON = localStorage.getItem('user');
    // const existingData = existingDataJSON ? JSON.parse(existingDataJSON) : {};
    // // setFormData(existingData)
    // localStorage.setItem("user", JSON.stringify(existingData));
}, [formData])
  return (
    <div>
      <div>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <button  onClick={handleSubmit} type="submit">Save to LocalStorage</button>
        </form>
      </div>
    </div>
  );
}

export default Local;
