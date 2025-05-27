import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [room, setRoom] = useState("");
  const router = useRouter();

  const createRoom = () => {
    const newRoom = Math.random().toString(36).substring(2, 8);
    router.push(`/game/${newRoom}`);
  };

  const joinRoom = () => {
    if (room.trim() !== "") {
      router.push(`/game/${room}`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>棋藝對戰</h1>
      <button onClick={createRoom}>創建房間</button>
      <br /><br />
      <input
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        placeholder="輸入房間ID"
      />
      <button onClick={joinRoom}>加入房間</button>
    </div>
  );
}
