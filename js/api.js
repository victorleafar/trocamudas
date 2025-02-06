async function searchMedia() {
  const query = document.getElementById("search_query").value.trim();

  if (!query) {
    alert("Por favor, insira um termo de pesquisa.");
    return;
  }

  const url = `https://images-api.nasa.gov/search?q=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.collection.items && data.collection.items.length > 0) {
      displayResults(data.collection.items);
    } else {
      document.getElementById("result").innerHTML =
        '<p class="error">Nenhum resultado encontrado.</p>';
    }
  } catch (error) {
    document.getElementById("result").innerHTML =
      '<p class="error">Erro ao buscar dados. Tente novamente.</p>';
  }
}

function displayResults(items) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Limpa os resultados anteriores

  items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("media-container");

    const media = item.links && item.links[0] ? item.links[0].href : "";
    const title =
      item.data && item.data[0] ? item.data[0].title : "Título não disponível";

    if (media) {
      if (media.endsWith(".mp4")) {
        div.innerHTML = `
                  <h3>${title}</h3>
                  <video controls>
                      <source src="${media}" type="video/mp4">
                      Seu navegador não suporta o formato de vídeo.
                  </video>
              `;
      } else if (media.endsWith(".jpg") || media.endsWith(".png")) {
        div.innerHTML = `
                  <h3>${title}</h3>
                  <img src="${media}" alt="${title}">
              `;
      } else {
        div.innerHTML = `<h3>${title}</h3><p>Formato de mídia não suportado.</p>`;
      }
    } else {
      div.innerHTML = `<h3>${title}</h3><p>Sem link de mídia disponível.</p>`;
    }

    resultDiv.appendChild(div);
  });
}
