import axios from 'axios';
import logo from "../assets/logo.png";
import useAuth from '../hooks/useAuth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function LoginForm() {
  const { setUser } = useAuth()
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: '',
    password: '' 
  })

  const hdlChange = e => {
    setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault();

      // การตรวจสอบข้อมูลและล็อกอิน
      const rs = await axios.post('http://localhost:8999/Auth/login', input);
      console.log(rs.data.token);

      // บันทึกโทเคนลงใน localStorage
      localStorage.setItem('token', rs.data.token);

      // Fetch user information using the obtained token
      const rs1 = await axios.get('http://localhost:8999/Auth/me', {
        headers: { Authorization: `Bearer ${rs.data.token}` }
        
      } 
      );

      
      console.log(rs1.data);

      // Set user information in the application state
      setUser(rs1.data);
      
      navigate('/welcome');

    } catch (err) {
      console.log(err.message);
      console.log(err.response.data); // แสดง response data จาก API ถ้ามี
      alert('ล็อกอินไม่สำเร็จ กรุณาตรวจสอบข้อมูลการล็อกอินของคุณ');
    }
  };

  



  const myStyle = {
    width: "373px",
    height: "816px",
    background: "linear-gradient(180deg, rgba(124,200,240,1) 3%, rgba(141,217,239,1) 70%, rgba(184,238,215,1) 100%)",
    fontFamily: "'IBM Plex Sans Thai Looped', sans-serif"
  };

  return (
    <div className="min-w-[373px] min-h-[816px] overflow-hidden flex flex-col" style={myStyle}>
      <div className="hero-content flex-col flex-auto">
        <img src={logo} alt="Logo" className="max-w-sm " />
        <div className="card shrink-0 w-full max-w-sm bg-white bg-opacity-25 border-2 border-[#FFFFFF] border-opacity-40">
          <form className="card-body ">
            <div className="form-control  text-white ">
              <input
                type="text"
                placeholder="ชื่อผู้ใช้"
                className="input input-bordered  text-xl  bg-[#8BB4D9] placeholder-white border-2 border-[#FFFFFF] border-opacity-40 "
                required
                name="username"
                onChange={hdlChange}
                value={input.username}
              />
            </div>
            <div className="form-control py-2  text-white">
              <input
                type="password"
                placeholder="รหัสผ่าน "
                className="input input-bordered text-xl  bg-[#8BB4D9]  placeholder-white border-2 border-[#FFFFFF] border-opacity-40  "
                required
                name="password"
                onChange={hdlChange}
                value={input.password}
              />
            </div>
            <div className="form-control  ">
              <button className="btn bg-[#483D8B] hover:bg-[#800080] text-white text-2xl font-bold  border-2 border-[#FFFFFF] border-opacity-40 type=submit" onClick={hdlSubmit}>เข้าสู่ระบบ</button>
            </div>
            <label className="label flex items-center ">
              <input type="checkbox" className="label-text-alt" />
              <span className="ml-2 label-text-alt  text-sm font-bold  text-[#483D8B]">จดจำฉันไว้ในระบบ</span>
              <div className="ml-auto">
                <a href="#" className="label-text-alt link link-hover text-sm font-bold  text-[#483D8B] ">
                  ลืมรหัสผ่าน?
                </a>
              </div>
            </label>
            <div className="form-control  ">
              <button className="btn bg-[#BCE6F7] hover:bg-[#95f0a5] text-[#483D8B] text-xl  font-bold shadow-lg  border-3 border-[#FFFFFF] border-opacity-30" onClick={(e) => { e.preventDefault(); window.location.href = 'register'; }}>ไม่มีบัญชีผู้ใช้</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
