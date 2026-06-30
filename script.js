const coffeeCatalog = [
  {
    id: "kintamani-natural",
    name: "Kintamani Natural",
    origin: "Bali",
    process: "Natural Process",
    roast: "Light–Medium",
    notes: ["Jeruk", "Tropical fruit", "Aroma floral"],
    description: "Kopi dengan karakter cerah, fruity, dan ringan. Cocok untuk penikmat kopi yang ingin mengeksplorasi rasa unik tanpa body yang terlalu berat.",
    brew: "V60, Japanese iced coffee, Aeropress",
    price: "Rp89.000 / 100g",
    tags: ["fruity", "premium", "explorer"],
    emoji: "🍊"
  },
  {
    id: "gayo-wine",
    name: "Gayo Wine Process",
    origin: "Aceh",
    process: "Wine Process",
    roast: "Medium",
    notes: ["Fermented fruit", "Brown sugar", "Aroma winey"],
    description: "Pilihan untuk pengguna yang menyukai kopi kompleks, aromatic, dan memiliki aftertaste panjang. Sangat cocok untuk persona The Explorer.",
    brew: "V60, Kalita, French press",
    price: "Rp95.000 / 100g",
    tags: ["fruity", "premium", "explorer"],
    emoji: "🍇"
  },
  {
    id: "toraja-honey",
    name: "Toraja Honey",
    origin: "Sulawesi",
    process: "Honey Process",
    roast: "Medium",
    notes: ["Madu", "Kacang", "Caramel"],
    description: "Rasanya manis, smooth, dan mudah diminum. Cocok untuk pembeli yang ingin kopi specialty tetapi tetap nyaman di lidah.",
    brew: "Tubruk, V60, French press",
    price: "Rp82.000 / 100g",
    tags: ["smooth", "chocolatey", "comfort"],
    emoji: "🍯"
  },
  {
    id: "java-preanger",
    name: "Java Preanger",
    origin: "Jawa Barat",
    process: "Washed Process",
    roast: "Medium",
    notes: ["Cokelat", "Kacang", "Clean finish"],
    description: "Kopi yang balance dan familiar. Baik untuk pemula karena rasa asamnya tidak dominan dan profilnya mudah diterima.",
    brew: "V60, tubruk, moka pot",
    price: "Rp78.000 / 100g",
    tags: ["chocolatey", "smooth", "comfort"],
    emoji: "🍫"
  },
  {
    id: "mandheling-dark",
    name: "Sumatra Mandheling Dark",
    origin: "Sumatra",
    process: "Wet Hulled",
    roast: "Dark",
    notes: ["Earthy", "Spicy", "Dark chocolate"],
    description: "Kopi dengan body tebal dan karakter kuat. Cocok untuk penikmat kopi pekat atau untuk campuran susu.",
    brew: "French press, moka pot, espresso",
    price: "Rp85.000 / 100g",
    tags: ["bold", "chocolatey", "classic"],
    emoji: "🌑"
  },
  {
    id: "flores-bajawa",
    name: "Flores Bajawa",
    origin: "NTT",
    process: "Washed Process",
    roast: "Medium",
    notes: ["Cokelat", "Rempah", "Medium body"],
    description: "Karakter rasa hangat, sedikit spicy, dan seimbang. Cocok untuk daily coffee dan pengguna yang mencari kopi untuk fokus.",
    brew: "Tubruk, V60, Aeropress",
    price: "Rp80.000 / 100g",
    tags: ["chocolatey", "smooth", "focus"],
    emoji: "🌶️"
  },
  {
    id: "temanggung-robusta",
    name: "Temanggung Fine Robusta",
    origin: "Jawa Tengah",
    process: "Natural Process",
    roast: "Medium–Dark",
    notes: ["Dark chocolate", "Nutty", "Strong body"],
    description: "Robusta berkualitas dengan rasa kuat, body tebal, dan cocok untuk konsumen yang membutuhkan kopi dengan karakter nendang.",
    brew: "Tubruk, Vietnam drip, kopi susu",
    price: "Rp62.000 / 100g",
    tags: ["bold", "classic"],
    emoji: "⚡"
  },
  {
    id: "ethiopia-yirgacheffe",
    name: "Ethiopia Yirgacheffe",
    origin: "Ethiopia",
    process: "Washed Process",
    roast: "Light",
    notes: ["Floral", "Lemon", "Tea-like"],
    description: "Kopi premium dengan rasa floral, clean, dan elegan. Cocok untuk pengguna yang sudah terbiasa mengeksplorasi specialty coffee.",
    brew: "V60, Chemex, Kalita",
    price: "Rp125.000 / 100g",
    tags: ["fruity", "premium", "explorer"],
    emoji: "🌼"
  },
  {
    id: "house-explorer",
    name: "House Blend Explorer",
    origin: "Indonesia Blend",
    process: "Mixed Process",
    roast: "Medium–Light",
    notes: ["Citrus", "Caramel", "Complex"],
    description: "Blend khusus untuk pengguna yang ingin mencoba rasa kompleks tetapi tetap aman sebagai daily coffee.",
    brew: "V60, Aeropress, Japanese iced coffee",
    price: "Rp79.000 / 100g",
    tags: ["fruity", "smooth", "explorer"],
    emoji: "🧭"
  },
  {
    id: "house-comfort",
    name: "House Blend Comfort",
    origin: "Indonesia Blend",
    process: "Washed + Honey",
    roast: "Medium",
    notes: ["Milk chocolate", "Caramel", "Nutty"],
    description: "Blend yang smooth dan mudah diminum. Cocok untuk pengguna yang menyukai rasa manis, cokelat, dan tidak terlalu asam.",
    brew: "Tubruk, moka pot, kopi susu",
    price: "Rp75.000 / 100g",
    tags: ["chocolatey", "smooth", "comfort"],
    emoji: "🤎"
  },
  {
    id: "house-bold",
    name: "House Blend Bold",
    origin: "Arabica + Robusta",
    process: "Mixed Process",
    roast: "Dark",
    notes: ["Dark chocolate", "Smoky", "Full body"],
    description: "Blend dengan rasa tegas dan body kuat. Dirancang untuk pengguna yang ingin kopi terasa pekat, terutama untuk kopi susu.",
    brew: "Espresso, moka pot, Vietnam drip",
    price: "Rp72.000 / 100g",
    tags: ["bold", "classic"],
    emoji: "🔥"
  },
  {
    id: "house-focus",
    name: "House Blend Focus",
    origin: "Indonesia Blend",
    process: "Washed Process",
    roast: "Medium",
    notes: ["Balanced", "Cocoa", "Clean"],
    description: "Kopi harian untuk kerja atau belajar. Rasanya seimbang, tidak terlalu asam, dan tetap punya body yang cukup.",
    brew: "Tubruk, V60, Aeropress",
    price: "Rp76.000 / 100g",
    tags: ["smooth", "chocolatey", "focus"],
    emoji: "🎯"
  }
];

const questionBank = [
  {
    title: "Saat minum kopi, kamu lebih sering mencari apa?",
    options: [
      { label: "Rasa yang unik dan berbeda", desc: "Aku suka eksplorasi rasa baru", score: { fruity: 3, complex: 3, bold: 0, sweet: 1 } },
      { label: "Rasa nyaman dan mudah diminum", desc: "Aku ingin kopi yang aman di lidah", score: { fruity: 0, complex: 1, bold: 1, sweet: 3 } },
      { label: "Kopi kuat untuk energi", desc: "Aku butuh rasa tegas dan fokus", score: { fruity: 0, complex: 1, bold: 3, sweet: 0 } }
    ]
  },
  {
    title: "Pilih dessert yang paling menggoda.",
    options: [
      { label: "Lemon tart", desc: "Segar, cerah, dan sedikit asam", score: { fruity: 3, complex: 2, bold: 0, sweet: 0 } },
      { label: "Brownies cokelat", desc: "Manis, tebal, dan familiar", score: { fruity: 0, complex: 1, bold: 1, sweet: 3 } },
      { label: "Tiramisu", desc: "Creamy, pahit-manis, dan intens", score: { fruity: 0, complex: 1, bold: 3, sweet: 1 } }
    ]
  },
  {
    title: "Kalau liburan, kamu lebih pilih...",
    options: [
      { label: "Gunung", desc: "Tenang, segar, dan eksploratif", score: { fruity: 2, complex: 3, bold: 0, sweet: 0 } },
      { label: "Kota", desc: "Aktif, produktif, dan dinamis", score: { fruity: 0, complex: 1, bold: 3, sweet: 0 } },
      { label: "Pantai", desc: "Santai, ringan, dan easy-going", score: { fruity: 1, complex: 0, bold: 0, sweet: 3 } }
    ]
  },
  {
    title: "Kamu biasanya minum kopi untuk...",
    options: [
      { label: "Menikmati rasa", desc: "Aku penasaran dengan tasting notes", score: { fruity: 3, complex: 3, bold: 0, sweet: 0 } },
      { label: "Santai", desc: "Kopi sebagai teman ngobrol atau me-time", score: { fruity: 1, complex: 0, bold: 0, sweet: 3 } },
      { label: "Fokus kerja atau belajar", desc: "Aku butuh kopi yang nendang", score: { fruity: 0, complex: 1, bold: 3, sweet: 0 } }
    ]
  },
  {
    title: "Roast level yang menurutmu paling cocok.",
    options: [
      { label: "Light roast", desc: "Rasa lebih cerah dan kompleks", score: { fruity: 3, complex: 2, bold: 0, sweet: 0 } },
      { label: "Medium roast", desc: "Seimbang dan mudah diseduh", score: { fruity: 1, complex: 1, bold: 1, sweet: 2 } },
      { label: "Dark roast", desc: "Pahit, tebal, dan kuat", score: { fruity: 0, complex: 0, bold: 3, sweet: 1 } }
    ]
  },
  {
    title: "Pilih gaya nongkrong yang paling kamu banget.",
    options: [
      { label: "Coffee hopping ke tempat baru", desc: "Aku suka mencari pengalaman baru", score: { fruity: 3, complex: 3, bold: 0, sweet: 0 } },
      { label: "Ngopi nyaman di tempat favorit", desc: "Aku suka rasa yang konsisten", score: { fruity: 0, complex: 0, bold: 1, sweet: 3 } },
      { label: "Ngopi cepat sebelum aktivitas", desc: "Praktis dan berenergi", score: { fruity: 0, complex: 1, bold: 3, sweet: 0 } }
    ]
  },
  {
    title: "Pilih aroma yang paling kamu sukai.",
    options: [
      { label: "Bunga dan buah segar", desc: "Aromanya ringan dan elegan", score: { fruity: 3, complex: 3, bold: 0, sweet: 0 } },
      { label: "Cokelat dan kacang", desc: "Aromanya hangat dan familiar", score: { fruity: 0, complex: 1, bold: 1, sweet: 3 } },
      { label: "Rempah dan smoky", desc: "Aromanya pekat dan kuat", score: { fruity: 0, complex: 2, bold: 3, sweet: 0 } }
    ]
  },
  {
    title: "Kalau harus memilih minuman non-kopi, kamu pilih...",
    options: [
      { label: "Lemon tea", desc: "Segar, ringan, dan bright", score: { fruity: 3, complex: 1, bold: 0, sweet: 0 } },
      { label: "Chocolate milk", desc: "Creamy, smooth, dan manis", score: { fruity: 0, complex: 0, bold: 1, sweet: 3 } },
      { label: "Black tea pekat", desc: "Tegas, bold, dan clean", score: { fruity: 0, complex: 2, bold: 3, sweet: 0 } }
    ]
  },
  {
    title: "Pilih karakter rasa yang paling aman untuk lidahmu.",
    options: [
      { label: "Segar dan sedikit asam", desc: "Aku suka sensasi bright", score: { fruity: 3, complex: 2, bold: 0, sweet: 0 } },
      { label: "Manis dan lembut", desc: "Aku ingin kopi yang easy-drinking", score: { fruity: 0, complex: 0, bold: 0, sweet: 3 } },
      { label: "Pahit dan tebal", desc: "Aku suka kopi yang terasa kuat", score: { fruity: 0, complex: 1, bold: 3, sweet: 0 } }
    ]
  },
  {
    title: "Kalau membeli kopi pertama kali, kamu lebih percaya pada...",
    options: [
      { label: "Tasting notes yang unik", desc: "Aku tertarik mencoba rasa baru", score: { fruity: 3, complex: 3, bold: 0, sweet: 0 } },
      { label: "Review rasa yang smooth", desc: "Aku ingin rasa yang aman", score: { fruity: 0, complex: 0, bold: 1, sweet: 3 } },
      { label: "Kadar kafein dan body", desc: "Aku ingin kopi yang terasa mantap", score: { fruity: 0, complex: 1, bold: 3, sweet: 0 } }
    ]
  },
  {
    title: "Pilih suasana ngopi idealmu.",
    options: [
      { label: "Sore hari sambil membaca", desc: "Aku ingin rasa yang pelan-pelan dinikmati", score: { fruity: 2, complex: 3, bold: 0, sweet: 1 } },
      { label: "Malam santai bersama teman", desc: "Aku ingin rasa yang nyaman dan familiar", score: { fruity: 0, complex: 0, bold: 1, sweet: 3 } },
      { label: "Pagi sebelum aktivitas", desc: "Aku butuh dorongan energi", score: { fruity: 0, complex: 1, bold: 3, sweet: 0 } }
    ]
  },
  {
    title: "Pilih rasa es krim favoritmu.",
    options: [
      { label: "Sorbet buah", desc: "Ringan, fruity, dan refreshing", score: { fruity: 3, complex: 2, bold: 0, sweet: 0 } },
      { label: "Vanilla caramel", desc: "Manis, lembut, dan comforting", score: { fruity: 0, complex: 0, bold: 0, sweet: 3 } },
      { label: "Dark chocolate", desc: "Pahit-manis dan intens", score: { fruity: 0, complex: 1, bold: 3, sweet: 1 } }
    ]
  },
  {
    title: "Ketika melihat menu coffee shop, kamu lebih tertarik pada...",
    options: [
      { label: "Single origin filter coffee", desc: "Aku ingin tahu karakter origin", score: { fruity: 3, complex: 3, bold: 0, sweet: 0 } },
      { label: "Latte atau cappuccino", desc: "Aku suka kopi yang smooth dan creamy", score: { fruity: 0, complex: 0, bold: 1, sweet: 3 } },
      { label: "Americano atau espresso", desc: "Aku suka rasa kopi yang jelas", score: { fruity: 0, complex: 1, bold: 3, sweet: 0 } }
    ]
  },
  {
    title: "Pilih warna mood hari ini.",
    options: [
      { label: "Kuning cerah", desc: "Fresh, curious, dan playful", score: { fruity: 3, complex: 2, bold: 0, sweet: 0 } },
      { label: "Cokelat hangat", desc: "Calm, cozy, dan familiar", score: { fruity: 0, complex: 0, bold: 1, sweet: 3 } },
      { label: "Hitam elegan", desc: "Strong, focused, dan intense", score: { fruity: 0, complex: 1, bold: 3, sweet: 0 } }
    ]
  },
  {
    title: "Pilih pengalaman rasa yang ingin kamu cari.",
    options: [
      { label: "Surprising", desc: "Aku ingin rasa yang tidak biasa", score: { fruity: 3, complex: 3, bold: 0, sweet: 0 } },
      { label: "Comforting", desc: "Aku ingin rasa yang nyaman", score: { fruity: 0, complex: 0, bold: 0, sweet: 3 } },
      { label: "Powerful", desc: "Aku ingin rasa yang tegas", score: { fruity: 0, complex: 1, bold: 3, sweet: 0 } }
    ]
  },
  {
    title: "Kalau kopi ini dijadikan teman aktivitas, kamu ingin kopi yang...",
    options: [
      { label: "Bisa dieksplorasi pelan-pelan", desc: "Cocok untuk menikmati detail rasa", score: { fruity: 3, complex: 3, bold: 0, sweet: 0 } },
      { label: "Mudah diminum setiap hari", desc: "Cocok untuk daily coffee", score: { fruity: 0, complex: 0, bold: 1, sweet: 3 } },
      { label: "Membantu tetap fokus", desc: "Cocok untuk kerja atau belajar", score: { fruity: 0, complex: 1, bold: 3, sweet: 0 } }
    ]
  }
];

const personas = {
  explorer: {
    title: "The Explorer",
    desc: "Kamu cocok dengan kopi yang kompleks, sedikit fruity, dan punya aroma unik. Profil ini ideal untuk single origin, natural process, light roast, atau kopi dengan tasting notes citrus dan floral.",
    tags: ["explorer", "fruity", "premium"],
    recommendations: [
      "Kintamani Natural — fruity, citrus, clean finish",
      "Gayo Wine Process — kompleks, aromatic, fermented notes",
      "Ethiopia Yirgacheffe — floral, lemon, tea-like"
    ],
    meters: { fruity: 90, chocolatey: 38, bold: 44 }
  },
  comfort: {
    title: "The Comfort Seeker",
    desc: "Kamu cenderung menyukai kopi yang smooth, manis, dan mudah diminum. Rasa cokelat, kacang, brown sugar, atau caramel akan terasa paling nyaman untukmu.",
    tags: ["comfort", "smooth", "chocolatey"],
    recommendations: [
      "Toraja Honey — sweet, nutty, medium body",
      "Java Preanger — chocolatey dan balanced",
      "House Blend Comfort — smooth untuk daily coffee"
    ],
    meters: { fruity: 35, chocolatey: 88, bold: 45 }
  },
  bold: {
    title: "The Classic Bold",
    desc: "Kamu cocok dengan kopi yang kuat, tebal, dan intens. Profil ini sesuai untuk penikmat kopi dengan body tinggi dan aftertaste lebih panjang.",
    tags: ["classic", "bold"],
    recommendations: [
      "Temanggung Fine Robusta — bold dan full body",
      "Sumatra Mandheling Dark — earthy, spicy, intense",
      "House Blend Bold — cocok untuk susu atau es kopi"
    ],
    meters: { fruity: 25, chocolatey: 58, bold: 92 }
  },
  focus: {
    title: "The Focus Mode",
    desc: "Kamu mencari kopi sebagai teman produktivitas. Rekomendasi terbaik adalah kopi yang balance, tidak terlalu asam, tetapi tetap punya karakter cukup kuat.",
    tags: ["focus", "smooth", "chocolatey"],
    recommendations: [
      "Gayo Arabica Medium Roast — clean, balanced, fokus",
      "Flores Bajawa — chocolate, spice, medium body",
      "House Blend Focus — mudah diseduh untuk kerja atau belajar"
    ],
    meters: { fruity: 45, chocolatey: 65, bold: 72 }
  }
};

let questions = [];
let current = 0;
let answers = [];
let currentPersona = null;
let quizHistory = [];

const questionBox = document.getElementById("questionBox");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const resetBtn = document.getElementById("resetBtn");
const resultResetBtn = document.getElementById("resultResetBtn");

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function createQuestionSet() {
  return shuffleArray(questionBank).slice(0, 6);
}

function coffeeCardTemplate(coffee) {
  return `
    <article class="coffee-card">
      <div class="coffee-visual" data-origin="${coffee.origin}">${coffee.emoji}</div>
      <h3>${coffee.name}</h3>
      <p>${coffee.description}</p>

      <div class="coffee-meta">
        <span>${coffee.process}</span>
        <span>${coffee.roast}</span>
      </div>

      <ul class="tasting">
        ${coffee.notes.map(note => `<li>${note}</li>`).join("")}
      </ul>

      <div class="coffee-bottom">
        <p><strong>Metode seduh:</strong> ${coffee.brew}</p>
        <span class="price">${coffee.price}</span>
        <span class="small-note">Simulasi harga prototype</span>
        <button class="cart-btn" data-product="${coffee.name}">Tambah ke Keranjang</button>
      </div>
    </article>
  `;
}

function attachCartButtons() {
  document.querySelectorAll(".cart-btn").forEach(btn => {
    btn.onclick = () => {
      const toast = document.getElementById("cartToast");
      document.getElementById("cartText").textContent = `${btn.dataset.product} masuk simulasi keranjang.`;
      toast.classList.remove("hidden");
      setTimeout(() => toast.classList.add("hidden"), 2600);
    };
  });
}

function renderCatalog(filter = "all") {
  const grid = document.getElementById("catalogGrid");
  const filtered = filter === "all"
    ? coffeeCatalog
    : coffeeCatalog.filter(coffee => coffee.tags.includes(filter));

  grid.innerHTML = filtered.map(coffeeCardTemplate).join("");
  attachCartButtons();
}

function getMatchedCoffees(persona) {
  return coffeeCatalog
    .filter(coffee => coffee.tags.some(tag => persona.tags.includes(tag)))
    .slice(0, 3);
}

function renderMatchedCatalog(persona) {
  const matchedSection = document.getElementById("matchedCatalog");
  const matchedGrid = document.getElementById("matchedGrid");
  const matched = getMatchedCoffees(persona);

  matchedGrid.innerHTML = matched.map(coffeeCardTemplate).join("");
  matchedSection.classList.remove("hidden");
  attachCartButtons();

  return matched;
}

function renderQuestion() {
  const q = questions[current];
  const answeredCount = answers.filter(answer => answer !== null).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  progressText.textContent = `Pertanyaan ${current + 1} dari ${questions.length}`;
  progressPercent.textContent = `${progress}%`;
  progressFill.style.width = `${progress}%`;

  questionBox.innerHTML = `
    <h3 class="question-title">${q.title}</h3>
    <div class="options">
      ${q.options.map((option, index) => `
        <button class="option ${answers[current] === index ? "selected" : ""}" data-index="${index}">
          <strong>${option.label}</strong>
          <span>${option.desc}</span>
        </button>
      `).join("")}
    </div>
  `;

  document.querySelectorAll(".option").forEach(btn => {
    btn.addEventListener("click", () => {
      answers[current] = Number(btn.dataset.index);
      renderQuestion();
    });
  });

  prevBtn.style.visibility = current === 0 ? "hidden" : "visible";
  nextBtn.textContent = current === questions.length - 1 ? "Lihat Hasil" : "Lanjut";
}

function calculatePersona() {
  const score = { fruity: 0, complex: 0, bold: 0, sweet: 0 };

  answers.forEach((answerIndex, qIndex) => {
    const selected = questions[qIndex].options[answerIndex];
    Object.keys(score).forEach(key => {
      score[key] += selected.score[key] || 0;
    });
  });

  if (score.fruity + score.complex >= score.bold + score.sweet + 3) return personas.explorer;
  if (score.sweet >= score.fruity && score.sweet >= score.bold) return personas.comfort;
  if (score.bold >= score.fruity && score.bold >= score.sweet + 1) return personas.bold;
  return personas.focus;
}

function showResult() {
  const persona = calculatePersona();
  currentPersona = persona;

  const resultSection = document.getElementById("resultSection");
  document.getElementById("personaTitle").textContent = persona.title;
  document.getElementById("personaDesc").textContent = persona.desc;

  const list = document.getElementById("recommendationList");
  list.innerHTML = persona.recommendations.map(item => `<li>${item}</li>`).join("");

  document.getElementById("meterFruity").style.width = `${persona.meters.fruity}%`;
  document.getElementById("meterChocolatey").style.width = `${persona.meters.chocolatey}%`;
  document.getElementById("meterBold").style.width = `${persona.meters.bold}%`;

  renderMatchedCatalog(persona);

  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function saveCurrentResultToHistory() {
  if (!currentPersona) return;

  const matched = getMatchedCoffees(currentPersona);

  quizHistory.unshift({
    persona: currentPersona.title,
    desc: currentPersona.desc,
    recommendations: matched.map(coffee => coffee.name),
    time: new Date().toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })
  });

  renderHistory();
}

function renderHistory() {
  const historySection = document.getElementById("historySection");
  const historyGrid = document.getElementById("historyGrid");

  if (quizHistory.length === 0) {
    historySection.classList.add("hidden");
    historyGrid.innerHTML = "";
    return;
  }

  historySection.classList.remove("hidden");
  historyGrid.innerHTML = quizHistory.map((item, index) => `
    <article class="history-card" data-number="#${quizHistory.length - index}">
      <h3>${item.persona}</h3>
      <span class="history-time">Reset pada ${item.time}</span>
      <p>${item.desc}</p>
      <ul>
        ${item.recommendations.map(name => `<li>${name}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function resetQuiz() {
  saveCurrentResultToHistory();

  questions = createQuestionSet();
  answers = new Array(questions.length).fill(null);
  current = 0;
  currentPersona = null;

  document.getElementById("resultSection").classList.add("hidden");
  document.getElementById("matchedCatalog").classList.add("hidden");
  document.getElementById("matchedGrid").innerHTML = "";

  renderQuestion();
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

prevBtn.addEventListener("click", () => {
  if (current > 0) {
    current--;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (answers[current] === null) {
    alert("Pilih salah satu jawaban terlebih dahulu.");
    return;
  }

  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResult();
  }
});

resetBtn.addEventListener("click", resetQuiz);
resultResetBtn.addEventListener("click", resetQuiz);

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(item => item.classList.remove("active"));
    btn.classList.add("active");
    renderCatalog(btn.dataset.filter);
  });
});

questions = createQuestionSet();
answers = new Array(questions.length).fill(null);
renderQuestion();
renderCatalog();
attachCartButtons();

// Fitur Download Hasil Kuis Jadi Gambar
const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {
  if (!currentPersona) return;

  // 1. Ubah teks tombol sementara sebagai indikator loading
  const originalText = shareBtn.innerHTML;
  shareBtn.innerHTML = "⏳ Memproses Gambar...";
  shareBtn.style.opacity = "0.7";
  shareBtn.disabled = true;

  try {
    // 2. Targetkan elemen HTML yang ingin dijadikan gambar
    // Dalam hal ini, kita ambil kotak ".result-main" yang berisi meteran bar dan teks persona
    const resultCard = document.querySelector(".result-main");

    // 3. Gunakan html2canvas untuk merender HTML menjadi elemen Canvas
    const canvas = await html2canvas(resultCard, {
      scale: 2, // scale 2 atau 3 membuat resolusi gambar HD (tidak pecah)
      backgroundColor: "#fffaf1", // Sesuaikan dengan warna background kartu
      useCORS: true // Berguna jika nanti ada aset gambar dari luar web
    });

    // 4. Konversi Canvas menjadi URL Gambar format PNG
    const imageURL = canvas.toDataURL("image/png");

    // 5. Buat elemen link (a) virtual untuk memicu proses download
    const downloadLink = document.createElement("a");
    downloadLink.href = imageURL;
    // Beri nama file dinamis sesuai hasil persona
    downloadLink.download = `MyKopi-Persona-${currentPersona.title.replace(/\s+/g, '-')}.png`;

    // 6. Eksekusi unduhan secara otomatis
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // 7. Berikan notifikasi sukses ke pengguna
    alert("📸 Gambar berhasil disimpan!\n\nBuka galeri HP kamu dan bagikan gambar tersebut ke Instagram Story!");

  } catch (error) {
    console.error("Gagal membuat gambar:", error);
    alert("Maaf, terjadi kesalahan saat memproses gambar.");
  } finally {
    // 8. Kembalikan kondisi tombol seperti semula
    shareBtn.innerHTML = originalText;
    shareBtn.style.opacity = "1";
    shareBtn.disabled = false;
  }
});