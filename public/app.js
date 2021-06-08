let getData = async () => {
  const figure1 = await fetch('/figure1');
  const figure1_data = await figure1.json();
  const figure2 = await fetch('/figure2');
  const figure2_data = await figure2.json();
  return figure1_data;
};

let data_into_array = (data) => {
  let reported_date = [];
  let status = [];
  let count = [];
  for (let i = 0; i < data[0].length; i++) {
    reported_date.push(data[0][i]["reported_date"]);
    status.push(data[0][i]["key"]);
    count.push(data[0][i]["count"]);
  }
  return [reported_date, status, count];
}

let figure1_data;

let figure_1 = async () => {
  let data = await getData();
  // dataset = data_into_array(data);
  grouped = d3.group(data, d => {
    return d.reported_date
  });

  let formatted_data = [];
  let obj = {};
  let curr_date = 0;
  data.forEach(d => {
    // console.log("foreach",d)
    if (curr_date == 0) {
      obj[d["reported_date"]] = d.reported_date;
      obj[d["key"]] = d.count;
      curr_date = d.reported_date;
    } else if (d["reported_date"] == curr_date) {
      obj[d["key"]] = d.count;
    } else if (d["reported_date"] != curr_date){
      formatted_data.push(obj);
      obj = {};
      obj[d["reported_date"]] = d.reported_date;
      obj[d["key"]] = d.count;
      curr_date = d.reported_date;
    }
  })

  // console.log("format", formatted_data.reverse())

  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height]);
}

figure_1();