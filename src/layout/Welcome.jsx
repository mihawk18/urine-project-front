// import axios from 'axios';
import profile from "../assets/profile.png";
import useAuth from '../hooks/useAuth';
import React from 'react';

// import { useNavigate } from 'react-router-dom';



export default function WelcomeForm() {
  const { user } = useAuth();
  // const [selectedOption, setSelectedOption] = useState(null);
  // const navigate = useNavigate();
  

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  // };

  // const handleContinue = () => {
  //   console.log('Selected Option:', selectedOption);
  //   navigate('/welcome');
  // };
  


  const myStyle = {
    width: "373px",
    height: "816px",
    background: "linear-gradient(180deg, rgba(124,200,240,1) 3%, rgba(141,217,239,1) 70%, rgba(184,238,215,1) 100%)",
    fontFamily: "'IBM Plex Sans Thai Looped', sans-serif"
  };

  return (
    <div className="min-w-[373px] min-h-[816px] overflow-hidden flex flex-col" style={myStyle}>
      <div className="hero-content flex-col flex-auto">
        <img src={profile} alt="Logo" className="max-w-sm " />
        <div> 
        <p className="text-[#483D8B] font-bold text-2xl p-4" >
          ยินดีต้อนรับ
        </p></div>
        <div className="card shrink-0 w-full max-w-sm bg-white bg-opacity-25 border-2 border-[#FFFFFF] border-opacity-40">
          <form className="card-body ">
            
            <div className="form-control py-2  text-[#483D8B] text-center  font-bold">
            ความสามารถในการควบคุมการขับถ่ายปัสาวะได้ปกติหรือไม่
            </div>
            <div className="form-control" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <button className="btn bg-[#483D8B] hover:bg-[#800080] text-white border-2 border-[#FFFFFF] border-opacity-40" onClick={() => handleOptionSelect('ปกติ')}>ปกติ</button>
<button className="btn bg-[#483D8B] hover:bg-[#800080] text-white font-bold border-2 border-[#FFFFFF] border-opacity-40" onClick={() => handleOptionSelect('ไม่ปกติ')}>ไม่ปกติ</button>
        </div>
          </form>
        </div>
      </div>
    </div>
  );
}
