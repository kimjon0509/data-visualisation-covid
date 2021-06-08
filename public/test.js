
  // var body = d3.select('body')

  // body.append('div')
  //   .selectAll('div')
  //   .data(figure1_data)
  //   .enter()
  //   .append('li')
  //   .html(String);


  var xScale = d3.scaleOrdinal()
  .domain(dataset[0].map(function(d) { return d.x; }))
  .range([0, width])
  // .round(true);
  
  var yScale = d3.scaleLinear()
  .domain([0, 600])
  .range([height, 0]);
  
  var yAxis = d3.axisLeft()
  .scale(yScale)
  // .orient("left")
  .ticks(6)
  .tickSize(-width, 0, 0)
  .tickFormat( function(d) { return "$" + d } );
  
  var xAxis = d3.axisBottom()
  .scale(xScale)
  // .orient("bottom")
  // .tickFormat(d3.time.format("%Y"));
  
  svg.append("g")
  .attr("class", "y axis")
  .call(yAxis);
  
  svg.append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);
  
  // X label
  svg.append('text')
  .attr('x', width/2)
  .attr('y', height + 30)
  .attr('text-anchor', 'middle')
  .style('font-family', 'Helvetica')
  .style('font-size', 12)
  .text('Year');
    
  // Y label
  svg.append('text')
  .attr('text-anchor', 'middle')
  .attr('transform', 'translate(-30,' + height/2 + ')rotate(-90)')
  .style('font-family', 'Helvetica')
  .style('font-size', 12)
  .text('hello');
  
  var groups = svg.selectAll("g.bars")
      .data(dataset)
      .enter().append("g")
      .attr("class", "bars")
      .style("fill", function(d, i) { return colors[i]; })
      .style("stroke", "#000");
    
  var rect = groups.selectAll("rect")
  .data(function(d) { return d; })
  .enter()
  .append("rect")
  .attr("x", function(d) { return xScale(d.x); })
  .attr("y", function(d) { return yScale(d.y0 + d.y); })
  .attr("height", function(d) { return yScale(d.y0) - yScale(d.y0 + d.y); })
  .attr("width", xScale.scaleBand())