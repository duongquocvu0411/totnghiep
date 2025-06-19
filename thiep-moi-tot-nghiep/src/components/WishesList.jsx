import React, { useEffect, useState } from "react";
import { Card, Spinner, Button } from "react-bootstrap";

const WishesList = () => {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishes = async () => {
    try {
      const response = await fetch("https://cuahangtraicay-api.onrender.com/api/Participants");
      if (!response.ok) throw new Error("Lỗi khi tải danh sách lời chúc");
      const data = await response.json();
      setWishes(data);
    } catch (error) {
      console.error("Lỗi:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa lời chúc này không?")) return;

    try {
      const response = await fetch(`https://cuahangtraicay-api.onrender.com/api/Participants/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Xóa không thành công");

      // Xóa khỏi danh sách hiện tại (không cần fetch lại)
      setWishes((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa:", error);
      alert("Xóa không thành công.");
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p>Đang tải danh sách lời chúc...</p>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">💌 Những lời chúc từ bạn bè</h2>
      <div className="row">
        {wishes.length === 0 ? (
          <p className="text-muted text-center">Chưa có lời chúc nào được gửi.</p>
        ) : (
          wishes.map((item) => (
            <div key={item.id} className="col-md-6 mb-4">
              <Card className="shadow-sm border-primary">
                <Card.Body>
                  <Card.Title className="text-primary fw-bold">
                    {item.name}
                    <Button
                      variant="danger"
                      size="sm"
                      className="float-end"
                      onClick={() => handleDelete(item.id)}
                    >
                      Xóa
                    </Button>
                  </Card.Title>
                  <Card.Text>{item.message}</Card.Text>
                  <small className="text-muted">
                    {new Date(item.createdAt).toLocaleString("vi-VN")}
                  </small>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default WishesList;
