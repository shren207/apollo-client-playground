import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Movie from './routes/Movie';
import Movies from './routes/Movies';


export default function App() {
  // console.log("hello world")
  // <React.StrictMode> 를 사용하고 있기 때문에, 해당 console은 2번 출력된다.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  )
}
