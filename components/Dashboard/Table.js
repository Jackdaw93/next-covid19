import NumberFormat from "react-number-format";

const Table = (props) => {
   return (
      <div className="row mb-5">
         <div className="col-sm-12 col-md-12 col-lg-12 col-xl-14">
            <div className="card">
               <div className="card-header">
                  <h3 className="card-title">
                     {props.isGlobal
                        ? "Data Kasus Virus Corona Di Dunia"
                        : "Data Kasus Virus Corona Di Indonesia"}{" "}
                  </h3>
               </div>
               <div className="card-body">
                  <div className="table-responsive">
                     <table className="table table-bordered table-hover mb-0 text-nowrap">
                        <thead>
                           <tr>
                              <th>No.</th>
                              <th>{props.isGlobal ? "Negara" : "Provinsi"}</th>
                              <th>Positif</th>
                              <th>Sembuh</th>
                              <th>Meninggal</th>
                           </tr>
                        </thead>
                        <tbody>
                           {props.isGlobal
                              ? props.data &&
                                props.data.map((item, index) => {
                                   return (
                                      <tr key={index}>
                                         <td>{index + 1}</td>
                                         <td>
                                            {item.attributes.Country_Region}
                                         </td>
                                         <td>
                                            <NumberFormat
                                               value={item.attributes.Confirmed}
                                               displayType={"text"}
                                               thousandSeparator={","}
                                               decimalSeparator={"."}
                                               defaultValue={0}
                                            />
                                         </td>
                                         <td>
                                            <NumberFormat
                                               value={item.attributes.Recovered}
                                               displayType={"text"}
                                               thousandSeparator={","}
                                               decimalSeparator={"."}
                                               defaultValue={0}
                                            />
                                         </td>
                                         <td>
                                            <NumberFormat
                                               value={item.attributes.Deaths}
                                               displayType={"text"}
                                               thousandSeparator={","}
                                               decimalSeparator={"."}
                                               defaultValue={0}
                                            />
                                         </td>
                                      </tr>
                                   );
                                })
                              : props.provinsi &&
                                props.provinsi.map((item, index) => {
                                   return (
                                      <tr key={index}>
                                         <td>{index + 1}</td>
                                         <td>{item.attributes.Provinsi}</td>
                                         <td>
                                            <NumberFormat
                                               value={
                                                  item.attributes.Kasus_Posi
                                               }
                                               displayType={"text"}
                                               thousandSeparator={","}
                                               decimalSeparator={"."}
                                               defaultValue={0}
                                            />
                                         </td>
                                         <td>
                                            <NumberFormat
                                               value={
                                                  item.attributes.Kasus_Semb
                                               }
                                               displayType={"text"}
                                               thousandSeparator={","}
                                               decimalSeparator={"."}
                                               defaultValue={0}
                                            />
                                         </td>
                                         <td>
                                            <NumberFormat
                                               value={
                                                  item.attributes.Kasus_Meni
                                               }
                                               displayType={"text"}
                                               thousandSeparator={","}
                                               decimalSeparator={"."}
                                               defaultValue={0}
                                            />
                                         </td>
                                      </tr>
                                   );
                                })}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Table;
