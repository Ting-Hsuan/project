function catcartoon()
{

  var svgContainer = d3.select(".catcartoon").append("svg").attr("width", 300).attr("height", 500)

<svg height="210" width="500">
  <polygon points="150,35 155,80 200,60" style="fill:grey; stroke:black;" />
  <polygon points="250,35 245,80 200,60" style="fill:grey; stroke:black;" />
  <circle cx="200" cy="100" r="50" fill="grey" stroke="black" />
  <ellipse cx="200" cy="120" rx="40" ry="30" fill="white" stroke="black" />
  <circle cx="200" cy="100" r="5" fill="pink" stroke="black" />
  <ellipse cx="180" cy="80" rx="10" ry="13" fill="white" stroke="black" />
  <ellipse cx="220" cy="80" rx="10" ry="13" fill="white" stroke="black" />
  <circle cx="185" cy="80" r="5" fill="black" stroke="black" />
  <circle cx="225" cy="80" r="5" fill="black" stroke="black" />
  
  <path d="M180 120 C190 130,195 120,200,115" stroke="black" fill="none"/>
  <path d="M220 120 C210 130,205 120,200,115" stroke="black" fill="none"/>
  <path d="M180 105 L140 100" stroke="black"/>
  <path d="M180 110 L140 110" stroke="black"/>
  <path d="M180 115 L140 120" stroke="black"/>
  <path d="M215 105 L260 100" stroke="black"/>
  <path d="M215 110 L260 110" stroke="black"/>
  <path d="M215 115 L260 120" stroke="black"/>
}