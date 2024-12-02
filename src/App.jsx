import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import BeginnerCoursesPage from "./Pages/BeginnerCoursesPage";
import IntermediateCoursesPage from "./Pages/IntermediateCoursesPage";
import CoursesPage from "./Pages/CoursesPage";
import SearchPage from "./Pages/SearchPage";
import MatrixPage from "./Pages/Lectures/Matrix/MatrixPage";
import MatrixVideoPage from "./pages/lectures/matrix/MatrixVideoPage";


export default function App() {

  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/courses/beginner' element={<BeginnerCoursesPage />} />
          <Route path='/courses/intermediate' element={<IntermediateCoursesPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/courses/matriks/materi' element={<MatrixPage />} />
          <Route path='/courses/matriks/video' element={<MatrixVideoPage />} />
          <Route path='/courses/matriks/quiz' element={<MatrixPage />} />

        </Routes>
      </BrowserRouter>
    </Container>
  );

}