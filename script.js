async function getAddressByCep() {
  const cep = document.getElementById("cep").value;
  const lat = document.getElementById("inputLatitude").value;
  const lon = document.getElementById("inputLongitude").value;

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    document.getElementById("rua").innerHTML = data.logradouro;
    document.getElementById("bairro").innerHTML = data.bairro;
    document.getElementById("cidade").innerHTML = data.localidade;
  } catch (error) {
    alert(error.message);
  }
  try {
    const response2 = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&forecast_days=1`
    );
    const data2 = await response2.json();
    console.log(data2);
    document.getElementById("inputClima").value =
      " A temperatura será de " + data2.hourly.temperature_2m[0] + " °C";
  } catch (error) {
    alert(error.message);
  }
}
