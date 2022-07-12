import React, { useEffect, useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCollapse from "./MyCollapse";
import faqText from "./img/FAQ.png";

export default function FAQ(props) {
  const [firstBoxOpen, setFirstBoxOpen] = useState(false);
  const [secondBoxOpen, setSecondBoxOpen] = useState(false);
  const [thirdBoxOpen, setThirdBoxOpen] = useState(false);
  const [fourthBoxOpen, setFourthBoxOpen] = useState(false);
  const [fifthBoxOpen, setFifthBoxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <main data-aos="zoom-in">
      <img id="faq-text" src={faqText} alt="faq" />

      <div className="content-box">
        <div className="content-flex-container">
          <div className="content-faq contact-us">
            <p>CONTACT US</p>
            <div className="iframe-flex-container">
              <div className="iframe-box">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSejrN3jd-Wap9Agv5o_D3k3pInQXR9-3YHUTJsCdUpDUdtDig/viewform?embedded=true"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>

          <div className="content-faq faq-box">
            <div className="faq-box-scroll-container">
              {/*workaround otherwise lag*/}
              {/*settings can be found on content.css*/}

              <MyCollapse
                open={firstBoxOpen}
                setOpen={setFirstBoxOpen}
                buttonText="1.	Apa itu Get Together Day XXIV?"
                collapseText="Get Together Day (GTD) XXIV adalah acara orientasi tahunan yang diadakan tanggal 5-8 Agustus 2022 oleh Pelajar Indonesia NTU (PINTU) untuk menyambut mahasiswa-mahasiswi baru yang akan kuliah di NTU untuk 3-4 tahun kedepan.
                Sesuai dengan aturan pemerintah Singapura, GTD akan kembali dilaksanakan secara physical/face-to-face. Apa yang kalian tunggu? Jangan sampai kehilangan kesempatan untuk berkenalan dengan sesama freshie dan senior-senior PINTU ya! Ayok daftar langsung disini
                "
              />

              <MyCollapse
                open={secondBoxOpen}
                setOpen={setSecondBoxOpen}
                buttonText="2.	Aduh kak, orientasi mahasiswa baru biasanya seram gak sih kak? Apakah GTD seperti itu?"
                collapseText="Tenang kok, GTD bukanlah acara orientasi yang sama seperti orientasi di perguruan tinggi Indonesia, atau yang lebih dikenal dengan ospek. Orientasi GTD akan dipenuhi dengan permainan yang asyik dan acara yang meriah untuk membantu memperkenalkan mahasiswa baru dengan senior-senior PINTU lainnya. Kita segenap komite GTD menjamin kenyamanan dan keamanan teman-teman selama acara dan menjunjung tinggi anti-perpeloncoan di aktivitas orientasi kita."
              />

              <MyCollapse
                open={thirdBoxOpen}
                setOpen={setThirdBoxOpen}
                buttonText="3.	Apa yang akan kami lakukan selama acara GTD?"
                collapseText="Dikarenakan jumlah mahasiswa baru yang besar, teman-teman akan dibagi menjadi beberapa Orientation Group (OG) agar teman-teman lebih bisa mengenal satu sama lain. Dengan teman-teman satu OG lainnya, teman-teman akan mengikuti serangkaian acara yang seru! Jenis-jenis acara yang berlangsung dapat dilihat di kolom “Events” ya!"
              />

              <MyCollapse
                open={fourthBoxOpen}
                setOpen={setFourthBoxOpen}
                buttonText="4.	 Berapa biaya pendaftaran untuk ikut acara GTD?"
                collapseText="GTD akan mengenakan biaya pendaftaran sejumlah $20. Dengan harga $20, teman-teman akan mendapatkan baju orientasi khas GTD XXIV, makan malam di acara Awards Night, transportasi PP ke tempat Awards Night, dan juga pengalaman orientasi yang tidak akan terlupakan!"
              />

              <MyCollapse
                open={fifthBoxOpen}
                setOpen={setFifthBoxOpen}
                buttonText="5.	Bagaimana dengan COVID-19 kak? Apakah akan mengganggu acara GTD?"
                collapseText="Acara GTD XXIV akan dilaksanakan sesuai dengan ketentuan dan regulasi pemerintah Singapura. Pemerintah Singapura telah memberikan keringanan dan mengizinkan acara physical untuk dilakukan sambil memantau aturan Safe Management Measures (SMM) yang terbaru. 
                Akan tetapi, jika teman-teman ada yang merasa tidak enak badan selama acara, mohon untuk segera memberitahu Group Leader (GL) masing-masing untuk meminimalisir resiko penularan COVID-19 di komunitasi PINTU.
                "
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
