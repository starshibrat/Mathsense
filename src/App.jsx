import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/HomePage";
import BeginnerCoursesPage from "./pages/BeginnerCoursesPage";
import IntermediateCoursesPage from "./pages/IntermediateCoursesPage";
import CoursesPage from "./pages/CoursesPage";
import SearchPage from "./pages/SearchPage";
import MatrixPage from "./pages/lectures/matrix/MatrixPage";
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