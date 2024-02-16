import { createBrowserRouter, RouterProvider, Outlet, } from 'react-router-dom';
import LoginForm from '../layout/LoginForm';
import RegisterForm from '../layout/RegisterForm';
import Welcome from '../layout/Welcome';
import useAuth from '../hooks/useAuth';

// สร้างเส้นทางสำหรับผู้ใช้ที่ยังไม่ได้เข้าสู่ระบบ
const guestRouter = createBrowserRouter([
  { index: true, element: <LoginForm /> },  // เส้นทางหน้าแรกสำหรับ Login
  { path: '/Register', element: <RegisterForm /> },  // เส้นทางสำหรับ Register
  { path: '/Welcome', element: <Welcome /> }  // เพิ่มเส้นทางสำหรับ Welcome
]);

// สร้าง AppRouter component
export default function AppRouter() {
  // ดึงข้อมูลผู้ใช้จาก useAuth hook
  const { user } = useAuth();

  // กำหนดเส้นทางที่ถูกนำเข้าตามเงื่อนไข (ผู้ใช้ที่เข้าสู่ระบบหรือยังไม่ได้เข้าสู่ระบบ)
  const finalRouter = user?.id ? <Outlet /> : guestRouter;

  // นำเสนทางที่กำหนดไปใน RouterProvider
  return <RouterProvider router={finalRouter} />;
}
