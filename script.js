function calcularChavetaEspecial() {
  const U = parseFloat(document.getElementById("diametroEspecial").value);
  const S = parseFloat(document.getElementById("largura").value);
  const resultadoDiv = document.getElementById("resultadoEspecial");

  const R = (U - S + Math.sqrt(U * U - S * S)) / 2;

  resultadoDiv.innerHTML = `
    <p style="display:flex;gap:16px;flex-wrap:wrap;align-items:center">
      <span id="resultadoValoresEspecial">U= ${U.toFixed(3)} | S= ${S.toFixed(3)} | R= ${R.toFixed(3)}</span>
    </p>
    <button class="button-group__button" onclick="copiarValoresEspecial()" data-i18n="copyBtn">${translations[currentLanguage].copyBtn}</button>
  `;
}

function calcularChaveta() {
  const U = parseFloat(document.getElementById("diametro").value);
  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(U) || U < 0.625 || U > 6.5) {
    resultadoDiv.innerHTML = `<p>${translations[currentLanguage].errorMsg}</p>`;
    return;
  }

  let S;
  if (U >= 0.625 && U < 1) S = 0.188;
  else if (U >= 1.0 && U < 1.375) S = 0.25;
  else if (U >= 1.375 && U < 1.5) S = 0.312;
  else if (U >= 1.5 && U < 1.875) S = 0.375;
  else if (U >= 1.875 && U < 2.375) S = 0.5;
  else if (U >= 2.375 && U < 2.875) S = 0.625;
  else if (U >= 2.875 && U < 3.375) S = 0.75;
  else if (U >= 3.375 && U < 3.875) S = 0.875;
  else if (U >= 3.875 && U <= 4.5) S = 1.0;
  else if (U > 4.5 && U <= 5.5) S = 1.25;
  else S = 1.5;

  const R = (U - S + Math.sqrt(U * U - S * S)) / 2;

  resultadoDiv.innerHTML = `
    <p style="display:flex;gap:16px;flex-wrap:wrap;align-items:center">
      <span id="resultadoValores"><strong>U=</strong> ${U.toFixed(
        3
      )} <strong>S=</strong> ${S.toFixed(3)} <strong>R=</strong> ${R.toFixed(
    3
  )}</span>
    </p>
    <button class="button-group__button" onclick="copiarValores()" data-i18n="copyBtn">${translations[currentLanguage].copyBtn}</button>
  `;
}

function toggleTabela(id) {
  const bloco = document.getElementById(id);
  bloco.style.display =
    bloco.style.display === "none" ? "table-row-group" : "none";
}

function copiarValores() {
  const texto = document.getElementById("resultadoValores").innerText;
  navigator.clipboard.writeText(texto);
}

function copiarValoresEspecial() {
  const texto = document.getElementById("resultadoValoresEspecial").innerText;
  navigator.clipboard.writeText(texto);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("bloco1").style.display = "none";
  document.getElementById("diametro").addEventListener("keydown", (e) => {
    if (e.key === "Enter") calcularChaveta();
  });

  // Carregar tema salvo ou usar light como padrão
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  // Carregar idioma salvo ou usar inglês como padrão
  const savedLang = localStorage.getItem("language") || "en";
  changeLanguage(savedLang);

});

// ===== SISTEMA DE TEMA DARK/LIGHT =====
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const icon = document.getElementById("themeIcon");
  icon.textContent = theme === "dark" ? "\u263C" : "\u263E";
}

// ===== SISTEMA DE TRADUÇÃO =====
const translations = {
  en: {
    pageTitle: "Keyseat Dimensions",
    title:
      "Cylindrical shaft extension diameters and keyseat dimensions for square keys",
    toggleButton: "Display smaller Ø values",
    themeToggle: "Toggle dark mode",
    thU: "Shaft Diameter, U<br>Inches",
    thS: "Keyseat Width, S<br>Inches",
    thR: "Bottom of keyseat to opposite side of cylindrical shaft, R*<br>Inches",
    calcTitle: "R* dimension calculator",
    labelU: "Shaft Diameter (U):",
    btnCalculate: "Calculate",
    errorMsg: "Enter a value between 0.625 and 6.500.",
    copyBtn: "Copy values",
    range1: "Over 4.500 to 5.500",
    range2: "Over 5.500 to 6.500",
    useCalc: "Use the calculator below",
    // Calculadora de chaveta especial
    specialCalcTitle: "Special R* dimension calculator",
    labelSpecialU: "Shaft Diameter (U):",
    labelSpecialS: "Keyseat Width (S):",
    btnSpecialCalculate: "Calculate",
  },
  pt: {
    pageTitle: "Dimensões de chavetas",
    title:
      "Diâmetros de eixo cilíndrico e dimensões de chaveta para chavetas quadradas",
    toggleButton: "Exibir valores de Ø menores",
    themeToggle: "Alternar modo escuro",
    thU: "Diâmetro do Eixo, U<br>Polegadas",
    thS: "Largura da Chaveta, S<br>Polegadas",
    thR: "Fundo da Chaveta até o lado oposto do eixo cilíndrico, R*<br>Polegadas",
    calcTitle: "Calculadora de dimensão R*",
    labelU: "Diâmetro do Eixo (U):",
    btnCalculate: "Calcular",
    errorMsg: "Digite um valor entre 0.625 e 6.500.",
    copyBtn: "Copiar valores",
    range1: "Acima de 4.500 até 5.500",
    range2: "Acima de 5.500 até 6.500",
    useCalc: "Use a calculadora abaixo",
    // Calculadora de chaveta especial
    specialCalcTitle: "Calculadora de dimensão especial R*",
    labelSpecialU: "Diâmetro do Eixo (U):",
    labelSpecialS: "Largura da Chaveta (S):",
    btnSpecialCalculate: "Calcular",
  },
};

let currentLanguage = localStorage.getItem("language") || "en";

function toggleLanguageMenu() {
  const menu = document.getElementById("languageMenu");
  menu.classList.toggle("show");
}

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);

  // Atualizar título da página
  document.title = translations[lang].pageTitle;

  // Atualizar bandeira atual
  const flagSrc = lang === "en" ? "imagem/en-US.png" : "imagem/pt-BR.png";
  const flagAlt = lang === "en" ? "English" : "Português";
  document.getElementById("currentFlag").src = flagSrc;
  document.getElementById("currentFlag").alt = flagAlt;

  // Fechar menu
  document.getElementById("languageMenu").classList.remove("show");

  // Atualizar todos os textos
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  // Atualizar title do botão de tema
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.setAttribute("title", translations[lang].themeToggle);
    themeToggle.setAttribute("aria-label", translations[lang].themeToggle);
  }

  // Atualizar atributo lang do HTML
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
}

// Fechar menu ao clicar fora
document.addEventListener("click", (e) => {
  const selector = document.querySelector(".language-selector");
  if (selector && !selector.contains(e.target)) {
    document.getElementById("languageMenu").classList.remove("show");
  }
});
