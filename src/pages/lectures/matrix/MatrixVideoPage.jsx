import Course from "../../../components/Course";

export default function MatrixVideoPage() {
    const path = "/courses/matriks";
    const paths = [path + "/materi", path + "/video", path + "/quiz"];
    return (
        <Course title="Matriks" path={paths}>

            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/lTfGBCe-vpk?si=ObAp2aYbripPOAEV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </Course>
    )
}