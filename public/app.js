data = [4, 8, 15, 16, 23, 42]
// const test = () => {
//   const div = d3.create("div")
//       .style("font", "10px sans-serif")
//       .style("text-align", "right")
//       .style("color", "white");

//   div.selectAll("div")
//     .data(data)
//     .join("div")
//       .style("background", "steelblue")
//       .style("padding", "3px")
//       .style("margin", "1px")
//       .style("width", d => `${d * 10}px`)
//       .text(d => d);

//   return div.node();
// }

// test();

var body = d3.select('body')

body.append('div')
  .selectAll('div')
  .data(data)
  .enter()
  .append('li')
  .html(String);

var names = ['Frank', 'Tom', 'Peter', 'Mary'];

var ul = d3.select('body').append('ul');

body.append('ul')
.selectAll('li')
.data(names)
.enter()
.append('li')
.html(String);