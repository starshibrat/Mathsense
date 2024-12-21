import Course from "../../../Components/Course";
import Quiz from "../../../Components/Quiz";
import Quiz12Png from "../../../Assets/matrix/quiz12.png";
import Quiz3Png from "../../../Assets/matrix/quiz3.png";
import Quiz45Png from "../../../Assets/matrix/quiz4.png";

const quizzes = [
    {
        id: 0,
        question: "Matriks K adalah data keuntungan mingguan suatu perusahaan dalam 4 cabang (A, B, C, D). Baris pada matriks K mewakili cabang suatu perusahaan, dan kolom mewakili minggu keuntungan dicatat. Berapakah keuntungan perusahaan cabang C pada minggu ke 2?",
        answer: "C",
        userAnswer: "",
        choices: ["210", "320", "310", "230"],
        explanation: "Keuntungan tersebut ada di baris ke 3 dan kolom ke 2 yaitu 310.",
        needExplanation: false,
        image: Quiz12Png,
    },
    {
        id: 1,
        question: "Termasuk jenis apa matriks K?",
        answer: "B",
        userAnswer: "",
        choices: ["Matriks datar/tegak", "Matriks persegi", "Matriks baris", "Matriks diagonal"],
        explanation: "Matriks tersebut merupakan matriks persegi karena memiliki jumlah baris dan kolom yang sama(4x4).",
        needExplanation: false,
        image: Quiz12Png,
    },
    {
        id: 2,
        question: "Apakah matriks J termasuk matriks simetris?",
        answer: "B",
        userAnswer: "",
        choices: ["Tidak", "Iya"],
        explanation: "Karena elemen pada Jij sama dengan elemen pada Jji.",
        needExplanation: false,
        image: Quiz3Png,
    },
    {
        id: 3,
        question: "Sebuah restoran mencatat pendapatan harian (dalam juta rupiah) selama 5 hari pada 3 cabang. Data tersebut disusun dalam matriks R. Berapakah total pendapatan cabang ke 2 pada hari pertama dan ke 5?",
        answer: "A",
        userAnswer: "",
        choices: ["21", "19", "22", "23"],
        explanation: "Total pendapatan cabang ke 2 pada hari pertama dan ke 5 adalah 8 + 13 = 21.",
        needExplanation: false,
        image: Quiz45Png,
    },
    {
        id: 4,
        question: "Berapakah ordo matriks R?",
        answer: "A",
        userAnswer: "",
        choices: ["3 x 5", "4 x 5", "5 x 3", "3 x 3"],
        explanation: "Matriks R memiliki 3 baris dan 5 kolom sehingga ordonya adalah 3 x 5.",
        needExplanation: false,
        image: Quiz45Png,
    },
]

export default function MatrixQuizPage() {
    const path = "/courses/matriks";
    const paths = [path + "/materi", path + "/video", path + "/quiz"];
    return (
        // <Body sidebar>
            
        // </Body>
        <Course title="Matriks" path={paths}>
            <Quiz questions={quizzes}/>
        </Course>
    )
}