import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalJoin = ({ show, handleClose }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://cuahangtraicay-api.onrender.com/api/Participants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, message }),
      });

      if (!response.ok) {
        throw new Error("Gửi lời chúc thất bại");
      }

      const data = await response.json();
      console.log("Đã gửi thành công:", data);

      setIsSubmitted(true); // Hiển thị lời cảm ơn
      setName("");
      setMessage("");
      setTimeout(() => {
        setIsSubmitted(false); // Reset sau vài giây
        handleClose();         // Đóng modal
      }, 10000);
    } catch (error) {
      console.error("Lỗi khi gửi lời chúc:", error);
      alert("Có lỗi xảy ra khi gửi lời chúc.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      {!isSubmitted ? (
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Xác nhận tham gia 🎓</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Tên bạn</Form.Label>
              <Form.Control
                type="text"
                placeholder="VD: Nguyễn Văn A"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Lời chúc</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={message}
                required
                placeholder="Gửi lời chúc tốt đẹp..."
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button type="submit" variant="primary">
              Gửi lời chúc 💌
            </Button>
          </Modal.Footer>
        </Form>
      ) : (
        <>
          <Modal.Header>
            <Modal.Title>💖 Cảm ơn bạn! 💖</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <p>Lời chúc của bạn đã được gửi thành công!</p>
            <p>🎉 Hẹn gặp bạn trong ngày lễ tốt nghiệp nhé! 🎓</p>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default ModalJoin;
