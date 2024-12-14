import Course from "../../../Components/Course";

export default function MatrixPage() {
    const path = "/courses/matriks";
    const paths = [path + "/materi", path + "/video", path + "/quiz"];

    return (

        <Course title={"Matriks"} path={paths}>
            <h2>I. Pengertian Matriks</h2>
            <p>Matriks merupakan sekumpulan bilangan yang disusun berdasarkan baris dan kolom, dan diapit dengan tanda kurung.
                Berikut ini adalah bentuk umum dari matriks :
            </p>
        </Course>
    )
}