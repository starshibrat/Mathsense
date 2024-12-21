import Course from "../../../Components/Course";
import '../../../index.css';

export default function MatrixVideoPage() {
    const path = "/courses/matriks";
    const paths = [path + "/materi", path + "/video", path + "/quiz"];
    return (
        <Course title="Matriks" path={paths}>
            <div className="center-container">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        width="960"
                        height="540"
                        src="https://www.youtube.com/embed/yRwQ7A6jVLk?si=r5HNWrPm7W36uLjH"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </Course>
    );
}
