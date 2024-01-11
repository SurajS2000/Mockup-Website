const ctx = document.getElementById('myChart');
const range=document.querySelectorAll('input');
const emp=document.getElementById('emp');
const ret=document.getElementById('ret');

range[0].addEventListener('input',(e)=>{console.log(emp.innerText=e.target.value+'%')})
range[1].addEventListener('input',(e)=>{console.log(ret.innerText=e.target.value)})

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [20, 35, 40, 45, 50, 55, 60],
      datasets: [{
        data: [30, 40, 50, 60, 80, 100, 110],
        backgroundColor:'rgb(55,48,163)',
        maxBarThickness: 20,
      },
      {
        data: [20, 40, 50, 70, 80, 100, 110],
        backgroundColor:'rgb(79,70,229)',
        maxBarThickness: 20,
      },
      {
        data: [30, 40, 50, 70, 80, 100, 110],
        backgroundColor:'rgb(129,140,248)',
        maxBarThickness: 20,
      }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            }
          },
      scales: {
        x: {stacked: true,
        grid:{
          display:false
        }},
        y: {
            stacked: true,
            border:{
              dash:[5]
            },
          ticks:{
            callback: function(value,index,ticks){
              return '$'+value;
            }
          }
        }
      },
    }
  });
  