import React from "react";
import { Modal } from "antd";

const ViewDetailsModal = ({ isModalOpen, setIsModalOpen, employeeinfo }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal title="Employee Details" open={isModalOpen} onCancel={handleCancel} footer={null}>
      <p><strong>First Name:</strong> {employeeinfo.column1}</p>
      <p><strong>Last Name:</strong> {employeeinfo.column2}</p>
      <p><strong>Email:</strong> {employeeinfo.column3}</p>
    </Modal>
  );
};

export default ViewDetailsModal;
