import React, { useState } from "react";
import { Table, Button, Input } from "antd";
import "./style.css";
import ViewDetailsModal from "./view-details-modal.tsx";

const EmployeeTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [counter, setCounter] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Add state for selected employee

  const handleAddEmployee = () => {
    const newEmployee = {
      key: counter.toString(), // Convert counter to string for keys
      column1: "",
      column2: "",
      column3: "",
      editing: true,
    };

    setDataSource([...dataSource, newEmployee]); // Add new employee to dataSource
    setCounter(counter + 1);
  };

  const handleInputChange = (e, key, field) => {
    const newDataSource = dataSource.map((item) => {
      if (item.key === key) {
        return { ...item, [field]: e.target.value };
      }
      return item;
    });
    setDataSource(newDataSource);
  };

  const handleSubmit = (key) => {
    const newEmplyeesList = dataSource.map((item) => {
      if (item.key === key) {
        return { ...item, editing: false };
      }
      return item;
    });
    setDataSource(newEmplyeesList);
  };

  const handleUpdateEmployee = (key) => {
    const newEmployeesList = dataSource.map((item) => {
      if (item.key === key) {
        return { ...item, editing: true };
      }
      return item;
    });
    setDataSource(newEmployeesList);
  };

  const handleDeleteEmployee = (key) => {
    const newEmplyeesList = dataSource.filter((item) => item.key !== key);
    setDataSource(newEmplyeesList);
  };

  const handleViewEmployee = (employeeinfo) => {
    setSelectedEmployee(employeeinfo); // Set selected employee info
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "column1",
      key: "column1",
      render: (text, record) =>
        record.editing ? (
          <Input
            value={record.column1}
            onChange={(e) => handleInputChange(e, record.key, "column1")}
          />
        ) : (
          record.column1
        ),
    },
    {
      title: "Last Name",
      dataIndex: "column2",
      key: "column2",
      render: (text, record) =>
        record.editing ? (
          <Input
            value={record.column2}
            onChange={(e) => handleInputChange(e, record.key, "column2")}
          />
        ) : (
          record.column2
        ),
    },
    {
      title: "Email",
      dataIndex: "column3",
      key: "column3",
      render: (text, record) =>
        record.editing ? (
          <Input
            value={record.column3}
            onChange={(e) => handleInputChange(e, record.key, "column3")}
          />
        ) : (
          record.column3
        ),
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (text, employeeinfo) =>
        employeeinfo.editing ? (
          <Button
            className="submit-button"
            onClick={() => handleSubmit(employeeinfo.key)}
          >
            Submit
          </Button>
        ) : (
          <span>
            <Button
              className="blue-button"
              onClick={() => handleUpdateEmployee(employeeinfo.key)}
            >
              Update
            </Button>{" "}
            <Button
              className="red-button"
              onClick={() => handleDeleteEmployee(employeeinfo.key)}
            >
              Delete
            </Button>{" "}
            <Button
              className="green-button"
              onClick={() => handleViewEmployee(employeeinfo)}
            >
              View
            </Button>
          </span>
        ),
      width: 300,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "70%",
        margin: "0 auto",
      }}
    >
      <div style={{ alignSelf: "flex-start" }}>
        <Button
          className="add-employee-button"
          type="primary"
          onClick={handleAddEmployee}
          style={{ marginBottom: "16px" }}
        >
          Add Employee
        </Button>
      </div>

      <Table
        style={{ width: "100%" }}
        dataSource={dataSource}
        columns={columns}
        bordered
      />

      {isModalOpen && (
        <ViewDetailsModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          employeeinfo={selectedEmployee}
        />
      )}
    </div>
  );
};

export default EmployeeTable;
