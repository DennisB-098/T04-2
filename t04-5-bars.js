const createBarChart = (data) => {
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", "0 0 1200 400")
        .style("border", "1px solid black");
    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => {
            console.log(d); //inspect each row in the Console
            return `bar bar-${d.count}`; //"bar bar-859"
        });
};