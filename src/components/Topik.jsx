import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pic from '../assets/slide1.png';

function GridExample() {
    return (
        <div style={{ padding: '30px' }}>
            <div style={{ paddingBottom: '30px', borderRadius: '30px' }}>
                <Button style={{ borderRadius: '30px' }} variant="outline-secondary" disabled><b>Topik Terbaru</b></Button>{' '}
            </div>

            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Pic} />
                            <Card.Body>
                                <Card.Title>Tips - Tips Diet Sehat</Card.Title>
                                <Card.Text>
                                    Diet sehat adalah kunci untuk mencapai dan mempertahankan
                                    kesehatan optimal. Untuk memulai, penting untuk mengonsumsi berbagai macam
                                    makanan yang kaya akan nutrisi, termasuk buah-buahan, sayuran, biji-bijian,
                                    protein tanpa lemak, dan lemak sehat. Mengatur porsi makan juga penting;
                                    hindari makan berlebihan dengan memperhatikan ukuran porsi dan makan secara
                                    teratur sepanjang hari. Batasi konsumsi gula tambahan, garam, dan makanan olahan
                                    yang tinggi lemak jenuh dan trans. Selain itu, tetap terhidrasi dengan cukup minum
                                    air setiap hari dan hindari minuman berkalori tinggi seperti soda dan jus manis.
                                    Aktivitas fisik yang teratur juga harus menjadi bagian dari rutinitas harian untuk
                                    membantu mengelola berat badan dan meningkatkan kesehatan secara keseluruhan.
                                    Terakhir, pastikan untuk mendapatkan tidur yang cukup dan mengelola stres dengan baik,
                                    karena kedua faktor ini berpengaruh besar pada keberhasilan diet sehat.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row xs={1} md={4} className="g-4" style={{ paddingTop: '30px' }}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Pic} />
                            <Card.Body>
                                <Card.Title>Apa yang harus dihindari saat melakukan diet?</Card.Title>
                                <Card.Text>
                                    Saat menjalani diet sehat, penting untuk menghindari beberapa hal yang
                                    dapat merusak upaya Anda. Pertama, jauhi makanan tinggi gula dan garam,
                                    seperti makanan cepat saji, minuman bersoda, dan camilan manis, karena
                                    dapat meningkatkan risiko obesitas dan penyakit jantung. Hindari juga
                                    makanan olahan yang sering kali mengandung bahan tambahan dan pengawet
                                    yang tidak sehat. Kedua, batasi konsumsi lemak trans dan lemak jenuh yang
                                    banyak ditemukan dalam makanan gorengan, kue, dan margarin, karena dapat
                                    meningkatkan kolesterol jahat. Ketiga, jangan melewatkan waktu makan,
                                    karena hal ini dapat menyebabkan keinginan makan berlebihan dan memilih
                                    makanan yang kurang sehat di kemudian hari. Terakhir, hindari diet ekstrem
                                    atau fad diet yang menjanjikan penurunan berat badan cepat tanpa mempertimbangkan
                                    kebutuhan nutrisi, karena bisa berbahaya bagi kesehatan jangka panjang.
                                    Tetap fokus pada pola makan seimbang yang mencakup berbagai nutrisi penting
                                    untuk kesehatan optimal.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row xs={1} md={4} className="g-4" style={{ paddingTop: '30px' }}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Pic} />
                            <Card.Body>
                                <Card.Title>Apakah diet vegetarian selalu sehat?</Card.Title>
                                <Card.Text>
                                    Diet vegetarian tidak selalu sehat, meskipun dapat menawarkan banyak
                                    manfaat kesehatan jika dilakukan dengan benar. Diet vegetarian yang
                                    seimbang kaya akan buah, sayur, biji-bijian, dan protein nabati,
                                    yang dapat mengurangi risiko penyakit jantung, diabetes, dan beberapa jenis kanker.
                                    Namun, jika tidak direncanakan dengan baik, diet vegetarian bisa kekurangan nutrisi
                                    penting seperti protein, zat besi, vitamin B12, vitamin D, kalsium, dan omega-3.
                                    Banyak makanan olahan vegetarian yang tinggi gula, garam, dan lemak tidak sehat
                                    juga dapat ditemukan di pasaran. Oleh karena itu, penting bagi vegetarian untuk
                                    memastikan mereka mendapatkan berbagai nutrisi yang diperlukan dengan memilih
                                    makanan utuh dan bergizi, serta mempertimbangkan suplemen jika diperlukan,
                                    agar diet tetap sehat dan seimbang.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            
            <Row xs={1} md={4} className="g-4" style={{ paddingTop: '30px' }}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Pic} />
                            <Card.Body>
                                <Card.Title>Bagaimana peran olahraga dalam mendukung diet sehat?</Card.Title>
                                <Card.Text>
                                    Olahraga memiliki peran yang sangat penting dalam mendukung diet sehat.
                                    Aktivitas fisik membantu membakar kalori, yang dapat mempercepat penurunan berat badan
                                    dan mencegah penambahan berat badan. Selain itu, olahraga meningkatkan metabolisme tubuh,
                                    sehingga membantu dalam pemanfaatan energi yang lebih efisien. Olahraga juga berperan dalam
                                    meningkatkan massa otot dan kekuatan, yang tidak hanya membantu dalam pembakaran kalori tetapi
                                    juga meningkatkan kesehatan keseluruhan. Selain manfaat fisik, olahraga juga memiliki dampak
                                    positif pada kesehatan mental, seperti mengurangi stres, meningkatkan mood, dan meningkatkan kualitas tidur.
                                    Kombinasi antara diet sehat dan rutin berolahraga dapat membantu mencapai dan mempertahankan berat badan ideal,
                                    serta meningkatkan kesehatan jangka panjang secara keseluruhan.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row xs={1} md={4} className="g-4" style={{ paddingTop: '30px' }}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Pic} />
                            <Card.Body>
                                <Card.Title>Apa perbedaan antara karbohidrat kompleks dan sederhana, dan mana yang lebih baik untuk diet sehat?</Card.Title>
                                <Card.Text>
                                    Karbohidrat kompleks dan sederhana berbeda dalam struktur kimia dan bagaimana tubuh mencernanya.
                                    Karbohidrat sederhana, seperti gula dan fruktosa, memiliki struktur molekul yang lebih sederhana
                                    dan cepat dipecah oleh tubuh menjadi glukosa, menyebabkan lonjakan gula darah yang cepat.
                                    Contohnya adalah permen, soda, dan roti putih. Sebaliknya, karbohidrat kompleks,
                                    seperti yang ditemukan dalam biji-bijian utuh, sayuran, dan kacang-kacangan,
                                    memiliki struktur molekul yang lebih rumit dan dicerna lebih lambat, memberikan energi yang stabil
                                    dan berkelanjutan serta membantu menjaga kadar gula darah yang lebih seimbang. Untuk diet sehat,
                                    karbohidrat kompleks lebih disarankan karena selain memberikan energi yang lebih stabil,
                                    mereka juga mengandung serat, vitamin, dan mineral yang penting untuk kesehatan tubuh secara keseluruhan.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row xs={1} md={4} className="g-4" style={{ paddingTop: '30px' }}>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={Pic} />
                            <Card.Body>
                                <Card.Title>Mengapa penting untuk mengonsumsi cukup air setiap hari? </Card.Title>
                                <Card.Text>
                                    Mengonsumsi cukup air setiap hari sangat penting untuk kesehatan tubuh karena air
                                    memainkan berbagai peran vital. Air membantu menjaga keseimbangan cairan tubuh yang
                                    penting untuk proses fisiologis seperti pencernaan, sirkulasi, penyerapan nutrisi,
                                    dan pengaturan suhu tubuh. Selain itu, air membantu membuang racun dari tubuh melalui urine
                                    dan keringat, menjaga kulit tetap sehat dan lembap, serta mendukung fungsi organ-organ penting
                                    seperti ginjal dan jantung. Kekurangan air dapat menyebabkan dehidrasi, yang dapat mengganggu fungsi tubuh,
                                    menyebabkan kelelahan, sakit kepala, dan masalah kesehatan lainnya. Oleh karena itu,
                                    menjaga asupan air yang cukup setiap hari adalah kunci untuk mempertahankan kesehatan optimal
                                    dan mendukung berbagai fungsi tubuh.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <footer style={{ display: 'flex', backgroundColor: '#008000', color: '#FFFFFF', padding: '20px', marginTop: '30px' }}>
                <div style={{ flex: 1 }}>
                    <img src={Pic} alt="Healthy food bowl" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div style={{ flex: 2, paddingLeft: '20px' }}>
                    <h2 style={{ color: '#FFFF00' }}>DIETKU</h2>
                    <p>Platform diet sehat enak dan nyaman</p>
                    <h3>Customer Care</h3>
                    <p>Senin - Jum'at: 09.00 - 15.00 WIB, 16.00 - 20.00 WIB</p>
                    <p>Contact: +62 896-5841-8844</p>
                    <h3>Perusahaan</h3>
                    <p>PT. Dietku Internasional Tbk.</p>
                    <p>JI. Sananajiwa No. 27 - 30, Kota Surakarta</p>
                </div>
            </footer>
        </div>
    );
}

export default GridExample;
