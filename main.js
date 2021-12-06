const button = document.querySelector('.button')





async function main() {
    const httpResponse = await fetch('Top1000DJ.json')
    const Data = await httpResponse.json()
    console.log(Data)

    let data = [Data[0].country]
    console.log(data)




    let UnitedKingdom = 0
    let Germany = 0
    let USA = 0


    for (let i = 0; i < Data.length; i++) {
        DJ = Data[i]
        if (DJ.country === 'United Kingdom') {
            UnitedKingdom = UnitedKingdom + 1

        }
        if (DJ.country === 'Germany') {
            Germany = Germany + 1

        }
        if (DJ.country === 'USA') {
            USA = USA + 1

        }

    }
    console.log('USA', USA)
    console.log('Germany', Germany)
    console.log('United Kingdom', UnitedKingdom)



    county = [USA, Germany, UnitedKingdom]
    label = ['Usa', 'Germany', 'United Kingdom']






    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: '# of DJ in countrys',
                //data should be amount of DJ
                data: county,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

button.addEventListener('click', main)








