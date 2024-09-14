import React, { useState, useEffect } from "react";
import StaffCss from "../css/staff.module.css";
import Navigation from "../Navigation/Navigation";
import axios from "axios";

const Home = () => {
  const [staffName, setStaffName] = useState("");
  const [staffGender, setStaffGender] = useState("");
  const [staffPosition, setStaffPosition] = useState("");
  const [staffDepartment, setStaffDepartment] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const handleStaffNameChange = (event) => {
    setStaffName(event.target.value);
  };

  const handleStaffGenderChange = (event) => {
    setStaffGender(event.target.value);
  };

  const handleStaffPositionChange = (event) => {
    setStaffPosition(event.target.value);
  };

  const handleStaffDepartmentChange = (event) => {
    setStaffDepartment(event.target.value);
  };

  const saveFunction = () => {
    axios
      .post("http://localhost:8000/savefunction", {
        staffName,
        staffGender,
        staffPosition,
        staffDepartment,
      })
      .then((response) => {
        alert(response.data);
        console.log("Insert Successfully");
        dataFunction();
      })
      .catch(() => {
        alert("Failed to save data");
        console.log("Oops, request failed!");
      });
  };

  const dataFunction = () => {
    axios
      .get("http://localhost:8000/getStaffData/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Failed to fetch data", error);
      });
  };

  // Edit Function
  const editFunction = (id) => {
    setEditId(id);
    const staff = data.find((user) => user.id === id);
    if (staff) {
      setStaffName(staff.staffName);
      setStaffGender(staff.staffGender);
      setStaffPosition(staff.staffPosition);
      setStaffDepartment(staff.staffDepartment);
    }
  };

  const updateFunction = () => {
    axios
      .put(`http://localhost:8000/editfunction/${editId}`, {
        staffName,
        staffGender,
        staffPosition,
        staffDepartment,
      })
      .then((response) => {
        alert(response.data);
        console.log("Edit Successfully");
        dataFunction();
      })
      .catch(() => {
        alert("Failed to edit data");
        console.log("Oops, request to edit failed!");
      });
  };

  useEffect(() => {
    dataFunction();
  }, []);

  // Delete Function
  const deleteFunction = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      axios
        .delete(`http://localhost:8000/deletefunction/${id}`)
        .then((response) => {
          alert(response.data);
          console.log("Delete Successfully");
          dataFunction();
        })
        .catch((error) => {
          alert("Failed to delete data");
          console.log("Oops, request to delete failed!", error);
        });
    }
  };

  return (
    <>
      <Navigation />
      <div className={StaffCss.HomeContainer}>
        <div>
          <h1>Staff Administrative Page</h1>
        </div>
        <div className={StaffCss.SubContainer}>
          <p className={StaffCss.ContainerStaff}>New/Edit Staff Profile</p>
          <p>
            Staff Name :
            <input
              type="text"
              value={staffName}
              onChange={handleStaffNameChange}
            />
          </p>
          <p>
            Staff Gender :
            <input
              type="text"
              value={staffGender}
              onChange={handleStaffGenderChange}
            />
          </p>
          <p>
            Staff Position :
            <input
              type="text"
              value={staffPosition}
              onChange={handleStaffPositionChange}
            />
          </p>
          <p>
            Staff Department :
            <input
              type="text"
              value={staffDepartment}
              onChange={handleStaffDepartmentChange}
            />
          </p>
          <button className={StaffCss.SaveBtn} onClick={saveFunction}>
            Save
          </button>
          <button className={StaffCss.EditBtn} onClick={updateFunction}>
            Update
          </button>
        </div>
        <div className={StaffCss.BtnTbl}>
          <table className={StaffCss.TblBtn}>
            <thead>
              <tr>
                <th>No</th>
                <th>ID</th>
                <th>Staff Name</th>
                <th>Staff Gender</th>
                <th>Staff Position</th>
                <th>Staff Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.id}</td>
                  <td>{user.staffName}</td>
                  <td>{user.staffGender}</td>
                  <td>{user.staffPosition}</td>
                  <td>{user.staffDepartment}</td>
                  <td>
                    <button
                      className={StaffCss.EditBtn}
                      onClick={() => editFunction(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className={StaffCss.DeleteBtn}
                      onClick={() => deleteFunction(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
