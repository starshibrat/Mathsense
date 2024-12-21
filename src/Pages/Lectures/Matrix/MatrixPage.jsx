import { Button, Image, Stack, Table } from "react-bootstrap";
import Course from "../../../Components/Course";
import matricesPng from "../../../Assets/matrix/matrices.png";
import matricesLatSoal1Png from "../../../Assets/matrix/matrices_latsoal1.png";
import { useState } from "react";
import matrices_tri_upperPng from "../../../Assets/matrix/matrices_tri_upper.png";
import matrices_tri_lowerPng from "../../../Assets/matrix/matrices_tri_lower.png";
import matrices_diagPng from "../../../Assets/matrix/matrices_diag.png";
import ExercisesBox from "../../../Components/ExercisesBox";
import Body from "../../../Components/Body";

export default function MatrixPage() {
    const path = "/courses/matriks";
    const paths = [path + "/materi", path + "/video", path + "/quiz"];

    const [coor, setCoor] = useState("(i = 1, j = 1)");

    function handleClick(i, j) {
        setCoor(`(i = ${i}, j = ${j})`);
    }

    const exqs1 = [
        {
            id: 0,
            question: "Berapakah ordo dari matriks diatas?",
            answer: "4 x 4",
            choices: ["3 x 3", "4 x 3", "3 x 4", "4 x 4"],
            explanation: "D. 4 x 4\nMatriks diatas memiliki ordo 4 x 4 karena terdiri dari 4 baris dan 4 kolom",
            needExplanation: false,
        },
        {
            id: 1,
            question: "Apakah elemen dari R23?",
            answer: "5",
            choices: ["0", "5", "7", "3"],
            explanation: "B. 5\n Elemen yang terdapat di baris ke 2 dan kolom ke 3 adalah 5.",
            needExplanation: false,
        },
    ]

    const exqs2 = [

        {
            id: 0,
            question: "Adi ingin mencatat jumlah latihan soal yang dikerjakan setiap harinya. Jenis matriks apa yang akan dihasilkan Adi?",
            answer: "Matriks baris",
            choices: ["Matriks persegi", "Matriks identitas", "Matriks baris", "Matriks diagonal"],
            explanation: "C. Matriks baris\nJenis matriks yang akan dihasilkan Adi adalah matriks baris karena baris yang ada pada matriks berjumlah satu dan kolomnya sesuai banyak hari yang dicatat Adi.",
            needExplanation: false,
        },

        {
            id: 1,
            question: "Cinta ditugaskan untuk menjadi sekretaris. Salah satu tugasnya adalah mencatat jumlah siswa yang hadir selama 6 hari pada 4 kelas. Matriks apa yang akan dihasilkan Cinta?",
            answer: "Matriks datar/tegak",
            choices: ["Matriks datar/tegak", "Matriks kolom", "Matriks baris", "Matriks diagonal"],
            explanation: "A. Matriks datar/tegak \nJenis matriks yang akan dihasilkan Cinta adalah matriks baris karena baris yang ada pada matriks sesuai banyaknya kelas dan kolomnya sesuai banyak hari yang dicatat Cinta, ataupun sebaliknya.",
            needExplanation: false,
        },

    ]


    return (
        <Body sidebar>
            <Course title={"Matriks"} path={paths}>
            <h2>I. Pengertian Matriks</h2>
            <p>Matriks merupakan sekumpulan bilangan yang disusun berdasarkan baris dan kolom, dan diapit dengan tanda kurung.
                Berikut ini adalah bentuk umum dari matriks :
            </p>

            <Image src={matricesPng} width={250} rounded className="mx-auto d-block courseImg" />

            <p>Huruf i mewakilkan baris (horizontal) dan j mewakilkan kolom (vertikal). Jadi elemen a12  merupakan elemen dari matriks A yang berada pada baris 1 dan kolom ke 2.</p>
            <h5>Ordo dan Elemen Matriks</h5>
            <p>Nah matriks tadi itu memiliki ukuran, yang biasa disebut dengan ordo. Bagaimana sih cara menentukan ordo dari matriks? Pertama tama kita harus mengetahui terlebih dahulu jumlah baris dan kolom dari matriks. Baris biasanya diwakili dengan m dan kolom diwakili dengan n. Sehingga ordo matriks akan diwakilkan dengan m x n.</p>
            <p className="text-center">A<sub>m x n</sub></p>
            <p className="text-center">A<sub>2 x 3</sub></p>
            <p>Artinya matriks tersebut memiliki 2 baris dan 3 kolom.</p>
            <Table hover className="w-25 text-center">
                <tbody>
                    <tr>
                        <td><Button onClick={() => handleClick(1, 1)}>4</Button></td>
                        <td><Button onClick={() => handleClick(1, 2)}>2</Button></td>
                        <td><Button onClick={() => handleClick(1, 3)}>1</Button></td>
                    </tr>
                    <tr>
                        <td><Button onClick={() => handleClick(2, 1)}>3</Button></td>
                        <td><Button onClick={() => handleClick(2, 2)}>6</Button></td>
                        <td><Button onClick={() => handleClick(2, 3)}>2</Button></td>
                    </tr>
                </tbody>
            </Table>

            <p>{coor}</p>

            <br />

            <p>
                <b>Soal Latihan</b>
                <br />
                Adi mengumpulkan jarak antara rumah teman-temannya. Sehingga terkumpul lah data-data sebagai berikut:
                <br />
            </p>
            <ul>
                <li>Adi - Budi : 2 km</li>
                <li>Budi - Cinta : 5 km</li>
                <li>Cinta - Dodi : 3 km</li>
                <li>Adi - Cinta : 7 km</li>
                <li>Adi - Dodi : 4 km</li>
                <li>Budi - Dodi : 8 km</li>
            </ul>
            <p>
                Mungkin data tersebut akan sulit dimengerti. Maka untuk mempermudah penginterpretasiannya, kita dapat mengubah data tersebut dalam bentuk tabel seperti ini:
            </p>

            <Table bordered hover className="w-50">

                <thead>
                    <tr>
                        <th>Rumah</th>
                        <th>Adi</th>
                        <th>Budi</th>
                        <th>Cinta</th>
                        <th>Dodi</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th>Adi</th>
                        <td>0</td>
                        <td>2</td>
                        <td>7</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>Budi</th>
                        <td>2</td>
                        <td>0</td>
                        <td>5</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <th>Cinta</th>
                        <td>7</td>
                        <td>5</td>
                        <td>0</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th>Dodi</th>
                        <td>4</td>
                        <td>8</td>
                        <td>3</td>
                        <td>0</td>
                    </tr>
                </tbody>


            </Table>

            <p>Setelah diubah ke dalam tabel, kita dapat lebih mudah untuk mengetahui jarak antara rumah dengan mencari titik awal di bagian baris, dan tujuan dalam kolom. Bentuk tabel tadi telah memenuhi definisi matriks sebelumnya. Sehingga kita dapat membuat tabel tersebut menjadi matriks: </p>
            R = <Image src={matricesLatSoal1Png} width={250} rounded className="mx-auto d-block courseImg" />

            <br />

            <ExercisesBox questions={exqs1} className="exercise-box"/>
            <br></br>
            <h2>II. Jenis - Jenis Matriks</h2>
            <p>Berdasarkan ukurannya, matriks dapat dibagi menjadi beberapa jenis. Pada materi ini, kita akan membahas satu-persatu jenis matriks.</p>

            <p>&emsp;<b>1. Matriks Baris</b>

            </p>
            <h3 className="text-center"><b>[1 2 3]</b></h3>
            <p>&emsp;Matriks baris merupakan matriks yang hanya memiliki satu baris. Matriks ini memiliki ordo 1 x n.</p>


            <p>&emsp;<b>2. Matriks Kolom</b></p>

            <table className="text-center matrix">
                <tbody>
                    <tr>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>

            <p>&emsp;Matriks kolom merupakan matriks yang hanya memiliki satu kolom. Matriks ini memiliki ordo m x n.</p>

            <p>&emsp;<b>3. Matriks Persegi</b></p>

            <table className="text-center matrix">
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>7</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>9</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>

            <p>&emsp;Matriks persegi merupakan matriks yang banyak baris dan kolom yang sama. Matriks ini memiliki ordo n x n.
            </p>


            <p>&emsp;<b>4. Matriks Datar dan Matriks Tegak</b></p>

            <table className="text-center matrix">
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>7</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>

            <p>&emsp;Matriks datar merupakan matriks yang banyak barisnya lebih sedikit dari banyak kolomnya. Matriks ini memiliki ordo m x n, dengan m &lt; n.
            </p>

            <table className="text-center matrix">
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>9</td>
                    </tr>
                </tbody>
            </table>

            <p>&emsp;Matriks tegak merupakan matriks yang banyak kolomnya lebih sedikit dari banyak barisnya. Matriks ini memiliki ordo m x n,  dengan m &gt; n.</p>

            <p>&emsp;<b>5. Matriks Segitiga</b></p>
            <p>&emsp;a. Matriks segitiga atas</p>


            <Image src={matrices_tri_upperPng} width={250} rounded className="mx-auto d-block courseImg" />

            <p>&emsp;Matriks dimana semua elemen di bawah diagonal utama bernilai 0.</p>



            <p>&emsp;&emsp;b. Matriks segitiga bawah</p>
            <Image src={matrices_tri_lowerPng} width={250} rounded className="mx-auto d-block courseImg" />
            <p>&emsp;Matriks dimana semua elemen di atas diagonal utama bernilai 0.</p>

            <p>&emsp;<b>6. Matriks Diagonal</b></p>

            <Image src={matrices_diagPng} width={250} rounded className="mx-auto d-block courseImg" />
            <p>&emsp;Matriks dimana semua elemen kecuali diagonal utama bernilai 0.</p>

            <p>&emsp;<b>7. Matriks Identitas</b></p>
            <table className="text-center matrix">
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>

            <p>&emsp;Matriks dimana semua elemen pada diagonal utama bernilai 1.
            </p>

            <p>&emsp;<b>8. Matriks Nol</b></p>
            <table className="text-center matrix">
                <tbody>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>

            <p>&emsp;Matriks dimana semua elemen pada matriks bernilai 0.</p>

            <p>&emsp;<b>9. Matriks Simetris</b></p>
            <table className="text-center matrix">
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>5</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>2</td>
                        <td>4</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>4</td>
                        <td>5</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>7</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>

            <p>&emsp;Matriks simetris adalah matriks persegi dengan elemen-elemen yang letaknya simetris terhadap diagonal utama bernilai sama. Dengan kata lain, elemen a<sub>ij</sub> sama dengan elemen a<sub>ji</sub>. dengan 𝑖 ≠ 𝑗.</p>

            <p>&emsp;<b>10. Matriks Transpose</b></p>

            <Stack direction="horizontal" className="text-center">

                <table className="text-center matrix">
                    <tbody>
                        <tr className="transpose1-row1">
                            <td>5</td>
                            <td>4</td>
                            <td>7</td>
                        </tr>
                        <tr className="transpose1-row2">
                            <td>2</td>
                            <td>3</td>
                            <td>6</td>
                        </tr>
                    </tbody>
                </table>

                <h1>=&gt;</h1>

                <table className="text-center matrix">
                    <tbody>
                        <tr>
                            <td className="blueCol">5</td>
                            <td className="greenCol">2</td>
                        </tr>
                        <tr>
                            <td className="blueCol">4</td>
                            <td className="greenCol">3</td>
                        </tr>
                        <tr>
                            <td className="blueCol">7</td>
                            <td className="greenCol">6</td>
                        </tr>
                    </tbody>
                </table>
            </Stack>

            <p>&emsp;Matriks transpose adalah matriks baru yang diperoleh dengan cara menukar elemen-elemen pada baris menjadi kolom dan sebaliknya elemen-elemen pada kolom menjadi baris. Matriks transpos A dinotasikan dengan A<sup>T</sup>atau A<sup>t</sup>.</p>

            <ExercisesBox questions={exqs2} />


        </Course>
        </Body>
        
    )
}