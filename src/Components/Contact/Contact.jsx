import React from "react";

const Contact = () => {
  return (
    <div
      id='Contact'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}>
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}>
        {/* Social Links */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h1>Find Me On</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "10px",
            }}>
            <a
              href='https://www.instagram.com/junetshakya_ctrl/'
              target='_blank'
              rel='noopener noreferrer'
              title='Instagram'>
              <img
                src='https://img.icons8.com/ios-filled/50/instagram.png'
                alt='Instagram'
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/junet-shakya-7b1689248/'
              target='_blank'
              rel='noopener noreferrer'
              title='LinkedIn'>
              <img
                src='https://img.icons8.com/ios-filled/50/linkedin.png'
                alt='LinkedIn'
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a
              href='https://github.com/JunetShakya'
              target='_blank'
              rel='noopener noreferrer'
              title='GitHub'>
              <img
                src='https://img.icons8.com/ios-filled/50/github.png'
                alt='GitHub'
                style={{ width: "30px", height: "30px" }}
              />
            </a>
            <a
              href='https://www.facebook.com/junet.shakya'
              target='_blank'
              rel='noopener noreferrer'
              title='Facebook'>
              <img
                src='https://img.icons8.com/ios-filled/50/facebook-new.png'
                alt='Facebook'
                style={{ width: "30px", height: "30px" }}
              />
            </a>
          </div>
        </div>

        {/* CV Download */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href='/JunetCV.pdf'
            download
            style={{
              display: "inline-block",
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: "#28a745",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
