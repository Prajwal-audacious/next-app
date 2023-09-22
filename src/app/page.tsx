"use client";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";


export default function Dashboard() {
  const router =  useRouter()

  const handleLogout = () => {
    localStorage.removeItem("authToken"); 
    router.push('/login')
  };
  


  return (
    <main>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "centre",
          width: "100vw",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h1>dashboard</h1>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </main>
  );
}
