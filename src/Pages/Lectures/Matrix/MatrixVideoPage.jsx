import Course from "../../../Components/Course";
import setTitle from "../../PageFunctions";

export default function MatrixVideoPage() {
    setTitle("Video Matriks");
    const path = "/courses/matriks";
    const paths = [path + "/materi", path + "/video", path + "/quiz"];
    return (
        <Course title="Matriks" path={paths}>
            <div>
                <p>Pengenalan matriks, ordo matriks, dan operasi matriks seperti penjumlahan, pengurangan, dan skalar (Bahasa Inggris)</p>
                <div className="embed-responsive embed-responsive-16by9 text-center">
                    <iframe className="embed-responsive-item" width="840" height="480" src="https://www.youtube.com/embed/yRwQ7A6jVLk?si=r5HNWrPm7W36uLjH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

            </div>
            <div>
                <p>Pengenalan matriks dan jenis-jenisnya seperti matriks bujursangkar, matriks identitas. Penjelasan tentang ordo matriks, operasi-operasi pada matriks seperti penjumlahan, penguragan dan perkalian. Di video ini juga terdapat contoh soal (Bahasa Indonesia)</p>
                <div className="embed-responsive embed-responsive-16by9 text-center">
                    <iframe className="embed-responsive-item" width="840" height="480" src="https://www.youtube.com/embed/-2pSwVmHySY?si=zH1GsW6r-cigkRll" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

            </div>

            

        </Course>
    )
}