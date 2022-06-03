import { BrowserRouter, Route, Routes } from "react-router-dom";
import Member from "./routes/Member";
import Members from "./routes/Members";

export default function App() {
  // console.log("hello world")
  // <React.StrictMode> 를 사용하고 있기 때문에, 해당 console은 2번 출력된다.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Members />} />
        <Route path="/member/:id" element={<Member />} />
      </Routes>
    </BrowserRouter>
  );
}
