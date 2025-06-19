import React, { useEffect, useState } from "react";
import ModalJoin from "./ModalJoin";
import { Button } from "react-bootstrap";

const InvitationCard = () => {
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    const script = document.createElement("script");
    script.src = "/effects.js"; // đúng, sẽ tự load từ /public
    script.async = true;
    document.body.appendChild(script);
  }, 100);

  return () => clearTimeout(timer);
}, []);


  return (
    <>
      <canvas id="fireworks-canvas"></canvas>
      <div className="background-decor" id="decor-container"></div>

      <div className="container py-5">
        <div className="invitation-card text-center">
          {/* Header */}
          <div className="invitation-header mb-4">
            <div>
              <i className="fa-solid fa-graduation-cap fa-3x text-warning mb-3"></i>
            </div>
            <h1
              className="text-4xl fw-bold text-gradient mb-2"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              🎓 Lễ Tốt Nghiệp 🎉
            </h1>
            <h3 className="fs-5 text-secondary px-3">
              <i className="fa-regular fa-envelope-open text-pink-400 me-2"></i>
              Trân trọng kính mời mọi người đến chung vui và ghi dấu
              <br className="d-none d-md-block" />
              những khoảnh khắc tuyệt đẹp cùng mình trong ngày lễ tốt nghiệp
              <i className="fa-solid fa-heart text-danger ms-2"></i>
            </h3>
            <p className="text-muted mt-3">
              <i className="fa-solid fa-user-graduate text-primary me-1"></i>
              Của <strong>Nguyễn Ngọc Trâm</strong>
            </p>
          </div>

          {/* Album ảnh */}
          <div className="photo-album my-4">
            <div
              id="albumCarousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="3500"
              data-bs-touch="true"
            >
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#albumCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
                <button type="button" data-bs-target="#albumCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#albumCarousel" data-bs-slide-to="2"></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="flip-wrapper">
                    <img src="/test.jpg" className="d-block w-100 album-img" alt="Ảnh 1" />
                    <p className="album-caption">Ngày nhập học đầu tiên 🏫</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="flip-wrapper">
                    <img src="/test2.jpg" className="d-block w-100 album-img" alt="Ảnh 2" />
                    <p className="album-caption">Buổi thuyết trình cuối kỳ 🎤</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="flip-wrapper">
                    <img src="/test3.jpg" className="d-block w-100 album-img" alt="Ảnh 3" />
                    <p className="album-caption">Khoảnh khắc tốt nghiệp 🎓</p>
                  </div>
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#albumCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#albumCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>

          {/* Thông tin sự kiện */}
          <div className="event-info text-start px-3 mt-4">
            <p><i className="fa-solid fa-calendar-days"></i> <strong>Chủ Nhật</strong> - 25/05/2025</p>
            <p><i className="fa-solid fa-clock"></i> Bắt đầu lúc: <strong>08:00 sáng</strong></p>
            <p><i className="fa-solid fa-location-dot"></i> Trường ĐH Kinh tế - Kỹ thuật Bình Dương</p>
            <p className="ms-4">333 Đường Thích Quảng Đức, P. Phú Cường, TP. Thủ Dầu Một</p>
          </div>

          {/* Lời mời & ký tên */}
          <div className="quote mt-4">
            “Thời sinh viên kết thúc thật rồi. Hành trình mới lại bắt đầu...<br />
            Sẽ thật tuyệt vời nếu có bạn hiện diện và chia sẻ khoảnh khắc đáng nhớ này cùng mình.” 🌟
          </div>
          <div className="footer-note mt-4">
            ✨ Rất mong sự hiện diện của bạn! ✨
          </div>

          {/* Nút mở Modal */}
          <div className="mt-5">
            <p className="lead mb-3">
              Nếu bạn sẽ đến dự, hãy xác nhận bên dưới và gửi lời chúc để mình lưu giữ kỷ niệm nhé 💖
            </p>
       <Button variant="outline-success" size="lg" onClick={() => setShowModal(true)}>
            Tôi sẽ tham gia 🎉
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
     <ModalJoin show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default InvitationCard;
