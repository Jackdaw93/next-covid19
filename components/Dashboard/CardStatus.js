import NumberFormat from "react-number-format";
const { sum } = require("../../util/library");

const CardStatus = (props) => {
   return (
      <div className="row mt-3-ml-1 mr-1 mb-5">
         {/* Card Positif */}
         <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-2">
            <div className="card bg-danger img-card box-rpimary-shadow birder">
               <div className="card-body">
                  <div className="d-flex">
                     <div className="text-white">
                        <p className="text-white mb-0">TOTAL POSITIF</p>
                        <h2 className="number-font mb-0">
                           <NumberFormat
                              value={sum("Confirmed", props)}
                              displayType={"text"}
                              thousandSeparator={","}
                              decimalSeparator={"."}
                              defaultValue={0}
                           />
                        </h2>
                        <p className="text-white mb-0">ORANG</p>
                     </div>
                     <div className="ml-auto">
                        <img
                           src="images/positif.png"
                           width="50"
                           height="50"
                           alt="Positif"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Card Sembuh */}
         <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-2">
            <div className="card bg-success img-card box-rpimary-shadow birder">
               <div className="card-body">
                  <div className="d-flex">
                     <div className="text-white">
                        <p className="text-white mb-0">TOTAL SEMBUH</p>
                        <h2 className="number-font mb-0">
                           <NumberFormat
                              value={sum("Recovered", props)}
                              displayType={"text"}
                              thousandSeparator={","}
                              decimalSeparator={"."}
                              defaultValue={0}
                           />
                        </h2>
                        <p className="text-white mb-0">ORANG</p>
                     </div>
                     <div className="ml-auto">
                        <img
                           src="images/sembuh.png"
                           width="50"
                           height="50"
                           alt="Positif"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Card Meninggal */}
         <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-2">
            <div className="card bg-secondary img-card box-rpimary-shadow birder">
               <div className="card-body">
                  <div className="d-flex">
                     <div className="text-white">
                        <p className="text-white mb-0">TOTAL MENINGGAL</p>
                        <h2 className="number-font mb-0">
                           <NumberFormat
                              value={sum("Deaths", props)}
                              displayType={"text"}
                              thousandSeparator={","}
                              decimalSeparator={"."}
                              defaultValue={0}
                           />
                        </h2>
                        <p className="text-white mb-0">ORANG</p>
                     </div>
                     <div className="ml-auto">
                        <img
                           src="images/meninggal.png"
                           width="50"
                           height="50"
                           alt="Positif"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Card Active */}
         <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 mb-2">
            <div className="card bg-info img-card box-rpimary-shadow birder">
               <div className="card-body">
                  <div className="d-flex">
                     <div className="text-white">
                        <p className="text-white mb-0">TOTAL ACTIVE</p>
                        <h2 className="number-font mb-0">
                           <NumberFormat
                              value={sum("Active", props)}
                              displayType={"text"}
                              thousandSeparator={","}
                              decimalSeparator={"."}
                              defaultValue={0}
                           />
                        </h2>
                        <p className="text-white mb-0">ORANG</p>
                     </div>
                     <div className="ml-auto">
                        <img
                           src="images/active1.png"
                           width="50"
                           height="50"
                           alt="Positif"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardStatus;
