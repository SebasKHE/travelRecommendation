fetch('travel_recommendation_api.json')
.then(response => response.json())
.then(data => {
  let citesData = data.name;
  // Do something with your data
})


.catch(error => {
    console.error('Error:', error);
    divContent.innerHTML = '<p class="error">Error loading cities data</p>';
})

divContent.innerHTML = `<p>"${data} </p>`