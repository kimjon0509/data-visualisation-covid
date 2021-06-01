//get data for figure 1
let getData = async () => {
  const figure1 = await fetch('/figure1');
  const figure1_data = await figure1.json();
  const figure2 = await fetch('/figure2');
  const figure2_data = await figure2.json();
  return [figure1_data ,figure2_data];
  // console.log(figure1_data);
  // console.log(figure2_data);

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
  figure1_data = data_into_array(data);
  console.log(data)


  var body = d3.select('body')

  body.append('div')
    .selectAll('div')
    .data(figure1_data[0])
    .enter()
    .append('li')
    .html(String);

}

figure_1()

let figure_2 = async () => {
  let data = await getData();
  figure1_data = data_into_array(data);
  console.log(data)


  var body = d3.select('body')

  body.append('div')
    .selectAll('div')
    .data(figure1_data[0])
    .enter()
    .append('li')
    .html(String);

}

figure_2()

// var body = d3.select('body')

// body.append('div')
//   .selectAll('div')
//   .data(data)
//   .enter()
//   .append('li')
//   .html(String);

// var names = ['Frank', 'Tom', 'Peter', 'Mary'];

// var ul = d3.select('body').append('ul');

// body.append('ul')
// .selectAll('li')
// .data(names)
// .enter()
// .append('li')
// .html(String);

