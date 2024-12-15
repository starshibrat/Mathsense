import Course from "../../../Components/Course";
import Quiz from "../../../Components/Quiz";

export default function MatrixQuizPage() {
    const path = "/courses/matriks";
    const paths = [path + "/materi", path + "/video", path + "/quiz"];
    return (
        <Course title="Matriks" path={paths}>
            <Quiz />
        </Course>
    )
}