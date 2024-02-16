// app.jsx
import useAuth from "./hooks/useAuth";
import AppRouter from "./routes/AppRouter";



  function App() {
    const { loading } = useAuth();
  
    if (loading) {
      return (
        <p className="text-4xl text-primary">Loading..</p>
      );
    }
  return (
    <div>
      {/* นำ AppRouter เข้าไปใน component tree ของแอปพลิเคชัน */}
      <AppRouter />
    </div>
  );
}

export default App;






