import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import CardStatus from "./CardStatus";
import Grafik from "./Grafik";
import Table from "./Table";

function IndexPage(props) {
   const contentStyle = {
      minHeight: "90vh",
      top: "56px",
      backgroundColor: "#f1f1f9",
      overflow: "hidden",
   };

   return (
      <div style={{ backgroundColor: "#f1f1f9" }}>
         <Header />
         <div
            className="container content position-relative"
            style={contentStyle}
         >
            <div className="row">
               <div className="col-12 d-flex justify-content-center text-center">
                  <p className="mt-5 h2">KAWAL COVID19</p>
               </div>
               <div className="col-12 d-flex justify-content-center text-center">
                  <p className="mt-3 f18">
                     Website Pemantauan Terkini Kasus Covid 19
                  </p>
               </div>
            </div>
            <CardStatus
               isGlobal={props.isGlobal}
               data={props.data ? props.data : null}
            />
            <Grafik
               isGlobal={props.isGlobal}
               data={props.data ? props.data : null}
               statistik={props.statistik ? props.statistik : null}
            />
            <Table
               isGlobal={props.isGlobal}
               data={props.data ? props.data : null}
               provinsi={props.provinsi}
            />
         </div>
         <Footer
            rightContent={""}
            leftContent={
               <div className="ml-2 font-weight-bold">
                  Kawal Corona @2020 All Right Reserved
               </div>
            }
         />
      </div>
   );
}

export default IndexPage;
