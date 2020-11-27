import React from "react";
import { Line, Pie } from "react-chartjs-2";
import NumberFormat from "react-number-format";
const { sum, getAllMonth } = require("../../util/library");

const Grafik = (props) => {
   let dataCovid = null;
   let data = null;

   if (!props.isGlobal) {
      dataCovid = getAllMonth(props);
      data = {
         labels: dataCovid.label,
         datasets: [
            {
               data: dataCovid.positif,
               label: "Jumlah Positif",
               fill: false,
               lineTension: 0.1,
               backgroundColor: "rgba(229,56,50,0.4)",
               borderColor: "rgba(229, 56,56,1)",
               borderCapStyle: "butt",
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: "miter",
               pointBorderColor: "rgba(229,56,56,1)",
               pointBackgroundColor: "#fff",
               pointBorderWidth: 1,
               pointHoverRadius: 10,
               pointHoverBackgroundColor: "rgba(229,56,56,1)",
               pointHoverBorderColor: "rgba(220,220,220,1)",
               pointBorderWidth: 2,
               pointRadius: 1,
               pointHitRadius: 10,
            },
            {
               data: dataCovid.sembuh,
               label: "Jumlah Sembuh",
               fill: false,
               lineTension: 0.1,
               backgroundColor: "rgba(75,192,192,0.4)",
               borderColor: "rgba(75,192,192,1)",
               borderCapStyle: "butt",
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: "miter",
               pointBorderColor: "rgba(75, 192,192,1)",
               pointBackgroundColor: "#fff",
               pointBorderWidth: 1,
               pointHoverRadius: 10,
               pointHoverBackgroundColor: "rgba(75,192,192,1)",
               pointHoverBorderColor: "rgba(220,220,220,1)",
               pointBorderWidth: 2,
               pointRadius: 1,
               pointHitRadius: 10,
            },
            {
               data: dataCovid.meninggal,
               label: "Jumlah Meninggal",
               fill: false,
               lineTension: 0.1,
               backgroundColor: "rgba(0,0,0,0.4)",
               borderColor: "rgba(0,0,0,1)",
               borderCapStyle: "butt",
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: "miter",
               pointBorderColor: "rgba(0,0,0,1)",
               pointBackgroundColor: "#fff",
               pointBorderWidth: 1,
               pointHoverRadius: 10,
               pointHoverBackgroundColor: "rgba(0,0,0,1)",
               pointHoverBorderColor: "rgba(220,220,220,1)",
               pointBorderWidth: 2,
               pointRadius: 1,
               pointHitRadius: 10,
            },
            {
               data: dataCovid.active,
               label: "Jumlah Active",
               fill: false,
               lineTension: 0.1,
               backgroundColor: "rgba(232,243,16,0.4)",
               borderColor: "rgba(232,243,16,1)",
               borderCapStyle: "butt",
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: "miter",
               pointBorderColor: "rgba(232,243,16,1)",
               pointBackgroundColor: "#fff",
               pointBorderWidth: 1,
               pointHoverRadius: 10,
               pointHoverBackgroundColor: "rgba(232,243,16,1)",
               pointHoverBorderColor: "rgba(220,220,220,1)",
               pointBorderWidth: 2,
               pointRadius: 1,
               pointHitRadius: 10,
            },
         ],
      };
   }

   const dataPie = {
      labels: ["Positif", "Sembuh", "Meninggal"],
      datasets: [
         {
            data: [
               sum("Confirmed", props),
               sum("Recovered", props),
               sum("Deaths", props),
            ],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
         },
      ],
   };
   return (
      <div className="row mb-5">
         <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12">
            <div className="card overflow-hidden bg-white">
               <div className="card-header">
                  <h3 className="card-title">
                     {props.isGlobal
                        ? "Statistik Virus Corona Di Dunia"
                        : "Statistik Virus Corona Di Indonesia"}
                  </h3>
               </div>
               <div className="card-body">
                  <div className="chart-wrapper">
                     {props.isGlobal ? (
                        <Pie data={dataPie} />
                     ) : (
                        <Line data={data} width={100} height={30} />
                     )}
                  </div>
                  <div className="row mt-6">
                     <div className="col text-center">
                        <h5 className="font-weight-normal mt-2">POSITIF</h5>
                        <h3 className="mb-1">
                           <NumberFormat
                              value={sum("Confirmed", props)}
                              displayType={"text"}
                              thousandSeparator={","}
                              decimalSeparator={"."}
                              defaultValue={0}
                           />
                        </h3>
                        <p className="mb-0 text-muted">
                           <span className="text-lg font-weight-700"></span>
                           ORANG
                        </p>
                     </div>

                     <div className="col text-center">
                        <h5 className="font-weight-normal mt-2">SEMBUH</h5>
                        <h3 className="mb-1">
                           <NumberFormat
                              value={sum("Recovered", props)}
                              displayType={"text"}
                              thousandSeparator={","}
                              decimalSeparator={"."}
                              defaultValue={0}
                           />
                        </h3>
                        <p className="mb-0 text-muted">
                           <span className="text-lg font-weight-700"></span>
                           ORANG
                        </p>
                     </div>

                     <div className="col text-center">
                        <h5 className="font-weight-normal mt-2">MENINGGAL</h5>
                        <h3 className="mb-1">
                           <NumberFormat
                              value={sum("Deaths", props)}
                              displayType={"text"}
                              thousandSeparator={","}
                              decimalSeparator={"."}
                              defaultValue={0}
                           />
                        </h3>
                        <p className="mb-0 text-muted">
                           <span className="text-lg font-weight-700"></span>
                           ORANG
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Grafik;
