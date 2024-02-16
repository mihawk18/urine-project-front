import axios from 'axios';
import React, { useState } from 'react';
import logo from "../assets/logo.png";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    birthdate: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    // ถ้าชื่อฟิลด์เป็น "birthdate" ให้แปลงรูปแบบวันที่
    const value = e.target.name === 'birthdate' ? new Date(e.target.value) : e.target.value;
    
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  };
  
  
  
  

  const handleRegister = async (e) => {
    e.preventDefault();
  
    // ตรวจสอบข้อมูลที่กรอกในฟอร์ม
    if (formData.password !== formData.confirmPassword) {
      setError('Please check confirm password');
      return;
    }
  
    try {
      // ส่งข้อมูลลงทะเบียนไปยังเซิร์ฟเวอร์
      const response = await axios.post('http://localhost:8999/Auth/register', formData);
  
      // ตรวจสอบและจัดการข้อมูลที่ได้รับจากเซิร์ฟเวอร์
      console.log(response.data);
      alert('Registration successful!');
      
      // ลงทะเบียนเสร็จสิ้น ทำการ reset ค่าฟอร์ม
      setFormData({
        username: '',
        birthdate: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      
      // ลบข้อความใน input โดยตรง
      document.querySelectorAll('input').forEach(input => input.value = '');
      
    } catch (error) {
      // จัดการข้อผิดพลาด
      console.error('Registration error:', error.message);
      setError('Registration failed. Please try again.');
    }
  };
  

  const myStyle2 = {
    width: "373px",
    height: "816px",
    background: "linear-gradient(180deg, rgba(65,147,204,1) 3%, rgba(143,219,241,1) 10%, rgba(202,242,225,1) 33%, rgba(255,255,255,1) 43%)",
    fontFamily: "'IBM Plex Sans Thai Looped', sans-serif"
  };

  return (
    <div className="min-w-[373px] min-h-[816px] overflow-hidden flex flex-col p-4 " style={myStyle2}>

      <div className="text-center p-8 text-[#483D8B]">
        <p className="text-4xl font-bold p-1">Register</p>
        <p className="text-2xl">ลงทะเบียน</p>
      </div>

      <div className="card shrink-0 w-full max-w-sm bg-[#F5FFFA] border-opacity-80">
        <form className="card-body" onSubmit={handleRegister}>
          <div className="form-control py-2 text-[#483D8B] font-bold">
            <input
              type="text"
              placeholder="Name"
              name="username"
              className="input text-1.5xl bg-[#D8F1F2] placeholder-[#483D8B]"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control py-2 text-[#483D8B] font-bold">
            <input
              type="date"
              placeholder="Birthdate"
              name="birthdate"
              className="input text-1.5xl bg-[#DEF4F1] placeholder-[#483D8B]"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control py-2 text-[#483D8B] font-bold">
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="input text-1.5xl bg-[#E3F5F5] placeholder-[#483D8B]"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control py-2 text-[#483D8B] font-bold">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input text-1.5xl bg-[#E4F5F5] placeholder-[#483D8B]"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control py-2 text-[#483D8B] font-bold">
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              className="input text-1.5xl bg-[#E4F5F5] placeholder-[#483D8B]"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-control">
            <button
              type="submit"
              className="btn bg-[#483D8B] hover:bg-[#800080] text-white text-2xl tracking-[0.1rem] font-medium"
            >
              Create Account
            </button>
          </div>
          <div className="form-control">
            <button
              type="reset"
              className="btn bg-[#F46666] hover-bg-[#FFA500] text-white text-2xl tracking-[0.1rem] font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
        <footer className="footer items-center p-4 text-neutral-content flex flex-row justify-between">
          <aside className="items-center grid-flow-col">
            <a href="#" className="label-text-start link link-hover ml-auto text-xl text-[#483D8B]">
              Back
            </a>
          </aside>

          <img src={logo} alt="Logo" className="rounded-lg grid-flow-col gap-4 md:place-self-center md:justify-self-end w-26 h-20" />
        </footer>
      </div>
    </div>
  );
}

export default RegisterForm;
