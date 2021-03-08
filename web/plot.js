const chart = require('chart.js')

function sir(c, rn, s, i, t, u, p) {
    let data = {
        labels: [],
        datasets: [{ 
            data: [s],
            label: "Suseptible",
            borderColor: "#42f5ec"
        },
        { 
            data: [i],
            label: "Infected",
            borderColor: "#3e95cd"
        },
        { 
            data: [0],
            label: "Recovered",
            borderColor: "#42f57b"
        }]
    }

    for(var x = 0; x<t; x++){
        data.datasets[0].data.push(data.datasets[0].data[x]-((rn*u)*data.datasets[0].data[x]*data.datasets[1].data[x]/p))
        data.datasets[1].data.push(data.datasets[1].data[x]+((rn*u)*data.datasets[0].data[x]*data.datasets[1].data[x]/p)-u*data.datasets[1].data[x])
        data.datasets[2].data.push(data.datasets[2].data[x]+u*data.datasets[1].data[x])
        data.labels.push("Day " +(x+1).toString())
    }
    console.log(data.datasets)
    
    var sirChart = new Chart(c, {
        type: 'line',
        data: data,
        options: {
          title: {
            display: true,
            text: 'Total Cases'
          }
        }      
    });
}

function seir(c, rn, s, i, t, u, a, p) {
    let data = {
        labels: [],
        datasets: [{ 
            data: [s],
            label: "Suseptible",
            borderColor: "#42f5ec"
        },
        { 
            data: [0],
            label: "Exposed",
            borderColor: "#c91eb8"
        },
        {
            data: [i],
            label: "Infected",
            borderColor: "#c42147"
        },
        { 
            data: [0],
            label: "Recovered",
            borderColor: "#42f57b"
        }]
    }

    for(var x = 0; x<t; x++){
        data.datasets[0].data.push(data.datasets[0].data[x]-((rn*u)*data.datasets[0].data[x]*data.datasets[2].data[x]/p))
        data.datasets[1].data.push(data.datasets[1].data[x]+((rn*u)*data.datasets[0].data[x]*data.datasets[2].data[x]/p)-(a*data.datasets[1].data[x]))
        data.datasets[2].data.push(data.datasets[2].data[x]+(a*data.datasets[1].data[x])-(u*data.datasets[2].data[x]))
        data.datasets[3].data.push(data.datasets[3].data[x]+(u*data.datasets[2].data[x]))
        data.labels.push("Day " +(x+1).toString())
    }
    console.log(data.datasets)
    
    var seirChart = new Chart(c, {
        type: 'line',
        data: data,
        options: {
          title: {
            display: true,
            text: 'Total Cases'
          }
        }      
    });
}

function seird(c, rn, s, i, t, u, a, d, p) {
    let data = {
        labels: [],
        datasets: [{ 
            data: [s],
            label: "Suseptible",
            borderColor: "#42f5ec"
        },
        { 
            data: [0],
            label: "Exposed",
            borderColor: "#c91eb8"
        },
        {
            data: [i],
            label: "Infected",
            borderColor: "#c42147"
        },
        { 
            data: [0],
            label: "Recovered",
            borderColor: "#42f57b"
        },
        { 
            data: [0],
            label: "Dead",
            borderColor: "#4230ff"
        }]
    }

    for(var x = 0; x<t; x++){
        data.datasets[0].data.push(data.datasets[0].data[x]-((rn*u)*data.datasets[0].data[x]*data.datasets[2].data[x]/p))
        data.datasets[1].data.push(data.datasets[1].data[x]+((rn*u)*data.datasets[0].data[x]*data.datasets[2].data[x]/p)-(a*data.datasets[1].data[x]))
        data.datasets[2].data.push(data.datasets[2].data[x]+(a*data.datasets[1].data[x])-(u*data.datasets[2].data[x])-(d*data.datasets[2].data[x]))
        data.datasets[3].data.push(data.datasets[3].data[x]+(u*data.datasets[2].data[x]))
        data.datasets[4].data.push(data.datasets[4].data[x]+(d*data.datasets[2].data[x]))
        data.labels.push("Day " +(x+1).toString())
    }
    console.log(data.datasets)
    
    var sierdChart = new Chart(c, {
        type: 'line',
        data: data,
        options: {
          title: {
            display: true,
            text: 'Total Cases'
          }
        }      
    });
}
