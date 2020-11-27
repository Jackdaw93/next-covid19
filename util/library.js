export const sum = function (key, props) {
   if (props.isGlobal == false) {
      switch (key) {
         case "Confirmed":
            return props.data[0].positif;
         case "Recovered":
            return props.data[0].sembuh;
         case "Deaths":
            return props.data[0].meninggal;
         case "Active":
            return props.data[0].dirawat;
         default:
            return 0;
      }
   } else {
      switch (key) {
         case "Confirmed":
            return props.data.reduce((sum, a) => {
               return sum + a.attributes.Confirmed;
            }, 0);
         case "Recovered":
            return props.data.reduce((sum, a) => {
               return sum + a.attributes.Recovered;
            }, 0);
         case "Deaths":
            return props.data.reduce((sum, a) => {
               return sum + a.attributes.Deaths;
            }, 0);
         case "Active":
            return props.data.reduce((sum, a) => {
               return sum + a.attributes.Active;
            }, 0);
         default:
            return 0;
      }
   }
};

export const getAllMonth = function (props) {
   const monthEng = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
   ];
   let nowDate = new Date();
   let day = null;
   let month = null;
   let year = null;
   let label = [];
   let positif = [];
   let sembuh = [];
   let meninggal = [];
   let active = [];
   let data = [];
   for (let value of props.statistik) {
      nowDate = new Date(value.Date);
      day = nowDate.getDate();
      month = nowDate.getMonth();
      year = nowDate.getFullYear();
      label.push(day + " " + monthEng[Math.abs(month)]);
      active.push(value.Active);
      sembuh.push(value.Recovered);
      meninggal.push(value.Deaths);
      positif.push(value.Confirmed);
   }
   data = {
      label: label,
      active: active,
      sembuh: sembuh,
      meninggal: meninggal,
      positif: positif,
   };
   return data;
};
