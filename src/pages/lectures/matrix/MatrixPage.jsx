import Course from "../../../components/Course";

export default function MatrixPage() {
    const path = "/courses/matriks";
    const paths = [path + "/materi", path + "/video", path + "/quiz"];

    return (

        <Course title={"Matriks"} path={paths}>
        </Course>
    )
}