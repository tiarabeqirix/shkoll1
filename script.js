const wardrobe = [
  { id: "tee-ribbon", name: "Ribbon baby tee", category: "Tops", emoji: "👚", image: "https://images.unsplash.com/photo-1564257577-0a1d2d7d1d93?auto=format&fit=crop&w=500&q=80", styles: ["preppy", "coquette", "casual", "y2k"], occasions: ["everyday", "school", "date"] },
  { id: "cardigan-rose", name: "Rose knit cardigan", category: "Tops", emoji: "🧶", image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80", styles: ["preppy", "coquette", "old-money", "casual"], occasions: ["everyday", "school", "date"] },
  { id: "blouse-ivory", name: "Ivory bow blouse", category: "Tops", emoji: "🎀", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=500&q=80", styles: ["preppy", "coquette", "old-money"], occasions: ["school", "date", "formal"] },
  { id: "top-mesh", name: "Midnight mesh top", category: "Tops", emoji: "🖤", image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=500&q=80", styles: ["grunge", "goth", "y2k"], occasions: ["everyday", "party", "date"] },
  { id: "sweater-cloud", name: "Cloud-soft sweater", category: "Tops", emoji: "☁️", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80", styles: ["preppy", "casual", "old-money", "coquette"], occasions: ["everyday", "school", "date"] },
  { id: "top-baby-blue", name: "Baby blue baby tee", category: "Tops", emoji: "🩵", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80", styles: ["y2k", "casual", "preppy"], occasions: ["everyday", "school", "party"] },
  { id: "skirt-plaid", name: "Cherry plaid mini", category: "Bottoms", emoji: "🟥", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=500&q=80", styles: ["preppy", "coquette", "y2k"], occasions: ["school", "party", "date"] },
  { id: "jeans-wide", name: "Easy wide-leg denim", category: "Bottoms", emoji: "👖", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=500&q=80", styles: ["casual", "grunge", "y2k"], occasions: ["everyday", "school", "date"] },
  { id: "trousers-tailored", name: "The tailored trouser", category: "Bottoms", emoji: "🤎", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80", styles: ["old-money", "preppy", "goth"], occasions: ["school", "date", "formal"] },
  { id: "shorts-denim", name: "Weekend denim shorts", category: "Bottoms", emoji: "🩳", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=500&q=80", styles: ["casual", "y2k", "grunge"], occasions: ["everyday", "party"] },
  { id: "skirt-black", name: "After-dark mini skirt", category: "Bottoms", emoji: "🖤", image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&w=500&q=80", styles: ["goth", "grunge", "y2k"], occasions: ["party", "date", "everyday"] },
  { id: "skirt-satin", name: "Champagne satin skirt", category: "Bottoms", emoji: "✨", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80", styles: ["coquette", "old-money", "preppy"], occasions: ["date", "party", "formal"] },
  { id: "dress-floral", name: "Garden party mini", category: "Dresses", emoji: "🌷", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=80", styles: ["coquette", "preppy", "casual"], occasions: ["everyday", "party", "date"] },
  { id: "dress-slip", name: "Rosewater slip dress", category: "Dresses", emoji: "🌸", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=80", styles: ["coquette", "y2k", "goth"], occasions: ["date", "party", "formal"] },
  { id: "dress-black", name: "Little black dress", category: "Dresses", emoji: "🖤", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=500&q=80", styles: ["goth", "old-money", "grunge"], occasions: ["date", "party", "formal"] },
  { id: "dress-knit", name: "The cozy knit dress", category: "Dresses", emoji: "🤍", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=500&q=80", styles: ["old-money", "preppy", "casual"], occasions: ["everyday", "school", "date"] },
  { id: "mary-janes", name: "Patent Mary Janes", category: "Shoes", emoji: "🥿", image: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=500&q=80", styles: ["preppy", "coquette", "goth"], occasions: ["everyday", "school", "date", "formal"] },
  { id: "sneakers", name: "Cloud nine sneakers", category: "Shoes", emoji: "👟", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80", styles: ["casual", "y2k", "grunge"], occasions: ["everyday", "school", "party"] },
  { id: "boots", name: "After-hours boots", category: "Shoes", emoji: "🥾", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=500&q=80", styles: ["grunge", "goth", "y2k"], occasions: ["everyday", "party", "date"] },
  { id: "loafers", name: "The old-school loafer", category: "Shoes", emoji: "👞", image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=500&q=80", styles: ["old-money", "preppy"], occasions: ["school", "everyday", "formal"] },
  { id: "heels", name: "Cherry red platforms", category: "Shoes", emoji: "👠", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80", styles: ["y2k", "coquette", "goth"], occasions: ["party", "date", "formal"] },
  { id: "blazer", name: "Borrowed-from-the-boys blazer", category: "Outerwear", emoji: "🧥", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80", styles: ["preppy", "old-money", "grunge"], occasions: ["school", "everyday", "date", "formal"] },
  { id: "jacket-leather", name: "Vintage leather jacket", category: "Outerwear", emoji: "🖤", image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80", styles: ["grunge", "goth", "y2k"], occasions: ["everyday", "party", "date"] },
  { id: "coat-cream", name: "Cream city coat", category: "Outerwear", emoji: "🤍", image: "https://images.unsplash.com/photo-1548624149-f7d9b7b4c1a5?auto=format&fit=crop&w=500&q=80", styles: ["old-money", "coquette", "preppy"], occasions: ["everyday", "school", "formal"] },
  { id: "cardigan-cropped", name: "Cropped cherry cardigan", category: "Outerwear", emoji: "🍒", image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=500&q=80", styles: ["coquette", "preppy", "y2k"], occasions: ["everyday", "school", "date"] },
  { id: "bag-mini", name: "Little cherry shoulder bag", category: "Accessories", emoji: "👜", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80", styles: ["preppy", "coquette", "y2k"], occasions: ["everyday", "school", "party", "date"] },
  { id: "sunglasses", name: "Main-character sunnies", category: "Accessories", emoji: "🕶️", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80", styles: ["y2k", "casual", "old-money"], occasions: ["everyday", "party"] },
  { id: "hair-clips", name: "Pearl hair clips", category: "Accessories", emoji: "✨", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80", styles: ["coquette", "preppy", "old-money"], occasions: ["everyday", "school", "date", "formal"] },
  { id: "necklace", name: "Tiny heart necklace", category: "Accessories", emoji: "♡", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=500&q=80", styles: ["coquette", "y2k", "goth"], occasions: ["everyday", "party", "date"] },
  { id: "belt", name: "The perfect little belt", category: "Accessories", emoji: "🤎", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80", styles: ["grunge", "old-money", "casual"], occasions: ["everyday", "school", "date"] }
];

const categoryOrder = ["All pieces", "Tops", "Bottoms", "Dresses", "Shoes", "Outerwear", "Accessories"];
const outfitCategoryOrder = ["Tops", "Bottoms", "Dresses", "Shoes", "Outerwear", "Accessories"];
const styleNames = {
  preppy: "Clueless / 90s preppy",
  grunge: "Grunge",
  coquette: "Coquette",
  goth: "Goth",
  casual: "Casual",
  "old-money": "Old money",
  y2k: "Y2K"
};
const storageKey = "clueless-closet-saved-outfits";
let currentOutfit = [];
let savedOutfits = loadSavedOutfits();
let activeCategory = "All pieces";
let lookNumber = 0;
let toastTimer;

const wardrobeGrid = document.querySelector("#wardrobe-grid");
const categoryFilters = document.querySelector("#category-filters");
const outfitItems = document.querySelector("#outfit-items");
const outfitEmpty = document.querySelector("#outfit-empty");
const savedGrid = document.querySelector("#saved-grid");
const savedEmpty = document.querySelector("#saved-empty");

function loadSavedOutfits() {
  try {
    const stored = localStorage.getItem(storageKey);
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) throw new Error("Saved outfit data is not a list.");
    return parsed.filter((outfit) => Array.isArray(outfit.items) && outfit.items.every((item) => wardrobe.some((piece) => piece.id === item.id)));
  } catch (error) {
    console.error("Could not load saved outfits from localStorage:", error);
    showToast("Your saved looks couldn't be loaded in this browser.");
    return [];
  }
}

function persistSavedOutfits() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(savedOutfits));
    return true;
  } catch (error) {
    console.error("Could not save outfits to localStorage:", error);
    showToast("Couldn't save this look. Check your browser storage settings.");
    return false;
  }
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function getPiece(id) {
  return wardrobe.find((piece) => piece.id === id);
}

function createImage(imageUrl, altText, emoji) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altText;
  image.loading = "lazy";
  image.addEventListener("error", () => image.classList.add("image-broken"), { once: true });

  const fallback = document.createElement("span");
  fallback.className = "item-fallback";
  fallback.setAttribute("aria-hidden", "true");
  fallback.textContent = emoji;
  return [image, fallback];
}

function renderFilters() {
  categoryFilters.replaceChildren();
  categoryOrder.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${activeCategory === category ? " active" : ""}`;
    button.textContent = category;
    button.setAttribute("aria-pressed", String(activeCategory === category));
    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderWardrobe();
    });
    categoryFilters.append(button);
  });
}

function renderWardrobe() {
  const visiblePieces = wardrobe.filter((piece) => activeCategory === "All pieces" || piece.category === activeCategory);
  wardrobeGrid.replaceChildren();
  document.querySelector("#item-total").textContent = `${visiblePieces.length} PIECES`;

  visiblePieces.forEach((piece) => {
    const card = document.createElement("article");
    card.className = "wardrobe-card";
    const imageFrame = document.createElement("div");
    imageFrame.className = "wardrobe-image";
    imageFrame.append(...createImage(piece.image, piece.name, piece.emoji));

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "card-add";
    addButton.textContent = "+";
    addButton.setAttribute("aria-label", `Add ${piece.name} to outfit`);
    addButton.addEventListener("click", () => addPieceToOutfit(piece));
    imageFrame.append(addButton);

    const info = document.createElement("div");
    info.className = "wardrobe-info";
    const name = document.createElement("strong");
    name.textContent = piece.name;
    const category = document.createElement("span");
    category.textContent = piece.category;
    info.append(name, category);
    card.append(imageFrame, info);
    wardrobeGrid.append(card);
  });
}

function fitsSelection(piece, style, occasion) {
  return piece.styles.includes(style) && piece.occasions.includes(occasion);
}

function choosePiece(category, style, occasion, excludedIds = []) {
  const categoryPieces = wardrobe.filter((piece) =>
    piece.category === category && !excludedIds.includes(piece.id)
  );
  const matchingPieces = categoryPieces.filter((piece) => fitsSelection(piece, style, occasion));
  if (matchingPieces.length) return matchingPieces[Math.floor(Math.random() * matchingPieces.length)];

  if (!categoryPieces.length) return undefined;
  const bestScore = Math.max(...categoryPieces.map((piece) =>
    Number(piece.styles.includes(style)) + Number(piece.occasions.includes(occasion))
  ));
  const bestMatches = categoryPieces.filter((piece) =>
    Number(piece.styles.includes(style)) + Number(piece.occasions.includes(occasion)) === bestScore
  );
  return bestMatches[Math.floor(Math.random() * bestMatches.length)];
}

function generateOutfit({ avoidCurrent = true } = {}) {
  const style = document.querySelector("#style-select").value;
  const occasion = document.querySelector("#occasion-select").value;
  const pick = (category) => choosePiece(category, style, occasion);

  const useDress = Math.random() < 0.32;
  const corePieces = useDress
    ? [pick("Dresses"), pick("Shoes")]
    : [pick("Tops"), pick("Bottoms"), pick("Shoes")];
  const optionalPieces = [];

  if (Math.random() < 0.58) optionalPieces.push(pick("Outerwear"));
  if (Math.random() < 0.72) optionalPieces.push(pick("Accessories"));
  if (Math.random() < 0.24) {
    const secondAccessory = choosePiece("Accessories", style, occasion, optionalPieces.map((piece) => piece.id));
    if (secondAccessory) optionalPieces.push(secondAccessory);
  }

  let generated = [...corePieces, ...optionalPieces].filter(Boolean);
  if (avoidCurrent && currentOutfit.length) {
    const existingKey = outfitKey(currentOutfit);
    let attempts = 0;
    while (outfitKey(generated) === existingKey && attempts < 12) {
      generated = buildAlternative(style, occasion);
      attempts += 1;
    }
  }
  currentOutfit = generated;
  lookNumber += 1;
  renderOutfit();
  document.querySelector("#generator").scrollIntoView({ behavior: "smooth", block: "start" });
}

function buildAlternative(style, occasion) {
  const useDress = Math.random() < 0.32;
  const pieces = useDress
    ? [choosePiece("Dresses", style, occasion), choosePiece("Shoes", style, occasion)]
    : [choosePiece("Tops", style, occasion), choosePiece("Bottoms", style, occasion), choosePiece("Shoes", style, occasion)];
  if (Math.random() < 0.58) pieces.push(choosePiece("Outerwear", style, occasion));
  if (Math.random() < 0.72) pieces.push(choosePiece("Accessories", style, occasion));
  return pieces.filter(Boolean);
}

function outfitKey(items) {
  return items.map((item) => item.id).sort().join("|");
}

function renderOutfit() {
  outfitItems.replaceChildren();
  const hasOutfit = currentOutfit.length > 0;
  outfitEmpty.hidden = hasOutfit;
  outfitItems.classList.toggle("has-items", hasOutfit);
  document.querySelector("#save-button").disabled = !hasOutfit;
  document.querySelector("#look-counter").textContent = `LOOK ${String(Math.max(lookNumber, 1)).padStart(3, "0")}`;

  if (!hasOutfit) {
    document.querySelector("#outfit-summary").textContent = "WAITING FOR A LITTLE OUTFIT MAGIC…";
    document.querySelector("#action-title").textContent = "Not dressed yet";
    document.querySelector("#action-hint").textContent = "Your outfit will appear right here.";
    document.querySelector("#action-preview").textContent = "✳";
    return;
  }

  currentOutfit.forEach((piece, index) => {
    const card = document.createElement("article");
    card.className = "outfit-item";
    card.style.animationDelay = `${index * 45}ms`;
    const imageFrame = document.createElement("div");
    imageFrame.className = "outfit-item-image";
    imageFrame.append(...createImage(piece.image, piece.name, piece.emoji));

    const shuffleButton = document.createElement("button");
    shuffleButton.type = "button";
    shuffleButton.className = "item-shuffle";
    shuffleButton.textContent = "↻";
    shuffleButton.setAttribute("aria-label", `Shuffle ${piece.category}`);
    shuffleButton.addEventListener("click", () => shuffleCategory(piece.category));
    imageFrame.append(shuffleButton);

    const name = document.createElement("strong");
    name.className = "outfit-item-name";
    name.textContent = piece.name;
    const category = document.createElement("small");
    category.className = "outfit-item-category";
    category.textContent = piece.category;
    card.append(imageFrame, name, category);
    outfitItems.append(card);
  });

  const styleName = styleNames[document.querySelector("#style-select").value];
  const occasion = document.querySelector("#occasion-select").selectedOptions[0].textContent;
  document.querySelector("#outfit-summary").textContent = `${styleName.toUpperCase()} · ${occasion.toUpperCase()}`;
  document.querySelector("#action-title").textContent = `${styleName} look`;
  document.querySelector("#action-hint").textContent = `${currentOutfit.length} pieces, picked just for you.`;

  const preview = document.querySelector("#action-preview");
  preview.replaceChildren(...createImage(currentOutfit[0].image, `${currentOutfit[0].name} outfit preview`, currentOutfit[0].emoji));
}

function addPieceToOutfit(piece) {
  const matchingCategory = piece.category === "Bottoms" || piece.category === "Dresses"
    ? ["Bottoms", "Dresses"]
    : [piece.category];
  const existingIndex = currentOutfit.findIndex((currentPiece) => matchingCategory.includes(currentPiece.category));
  if (existingIndex === -1) currentOutfit.push(piece);
  else currentOutfit[existingIndex] = piece;
  lookNumber += 1;
  renderOutfit();
  showToast(`${piece.name} added to your look`);
}

function shuffleCategory(category) {
  const currentPiece = currentOutfit.find((piece) => piece.category === category);
  if (!currentPiece) return;
  const compatibleCategories = category === "Bottoms" || category === "Dresses" ? ["Bottoms", "Dresses"] : [category];
  const style = document.querySelector("#style-select").value;
  const occasion = document.querySelector("#occasion-select").value;
  let replacement = choosePiece(category, style, occasion, [currentPiece.id]);
  if (!replacement && compatibleCategories.length > 1) {
    replacement = choosePiece(compatibleCategories.find((itemCategory) => itemCategory !== category), style, occasion);
  }
  if (!replacement) {
    showToast(`No other ${category.toLowerCase()} to swap in right now.`);
    return;
  }
  const existingIndex = currentOutfit.findIndex((piece) => compatibleCategories.includes(piece.category));
  currentOutfit[existingIndex] = replacement;
  renderOutfit();
  showToast(`Swapped in ${replacement.name}`);
}

function clearOutfit() {
  currentOutfit = [];
  renderOutfit();
  showToast("Outfit cleared. Start with a fresh canvas!");
}

function saveCurrentOutfit() {
  if (!currentOutfit.length) return;
  const key = outfitKey(currentOutfit);
  if (savedOutfits.some((outfit) => outfit.key === key)) {
    showToast("You already saved this look!");
    return;
  }

  const saved = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    key,
    title: `${styleNames[document.querySelector("#style-select").value]} look`,
    items: currentOutfit.map((piece) => ({ id: piece.id })),
    createdAt: new Date().toISOString()
  };
  savedOutfits.unshift(saved);
  if (!persistSavedOutfits()) {
    savedOutfits.shift();
    return;
  }
  renderSavedOutfits();
  showToast("A look worth keeping. Saved with love!");
}

function renderSavedOutfits() {
  savedGrid.replaceChildren();
  document.querySelector("#saved-count").textContent = savedOutfits.length;
  savedEmpty.hidden = savedOutfits.length > 0;

  savedOutfits.forEach((saved, index) => {
    const card = document.createElement("article");
    card.className = "saved-card";
    const heading = document.createElement("div");
    heading.className = "saved-card-heading";
    const title = document.createElement("strong");
    title.textContent = saved.title || "Saved look";
    const date = document.createElement("span");
    date.textContent = `LOOK ${String(savedOutfits.length - index).padStart(2, "0")}`;
    heading.append(title, date);

    const itemGrid = document.createElement("div");
    itemGrid.className = "saved-card-items";
    saved.items.map((item) => getPiece(item.id)).filter(Boolean).forEach((piece) => {
      const mini = document.createElement("div");
      mini.className = "saved-mini-item";
      const imageFrame = document.createElement("div");
      imageFrame.className = "saved-mini-image";
      imageFrame.append(...createImage(piece.image, piece.name, piece.emoji));
      const name = document.createElement("small");
      name.textContent = piece.name;
      mini.append(imageFrame, name);
      itemGrid.append(mini);
    });

    const actions = document.createElement("div");
    actions.className = "saved-card-actions";
    const wearButton = document.createElement("button");
    wearButton.type = "button";
    wearButton.className = "small-action";
    wearButton.textContent = "Wear this look ↗";
    wearButton.addEventListener("click", () => {
      currentOutfit = saved.items.map((item) => getPiece(item.id)).filter(Boolean);
      document.querySelector("#style-select").value = findSharedStyle(currentOutfit);
      lookNumber += 1;
      renderOutfit();
      document.querySelector("#generator").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "small-action";
    removeButton.textContent = "Remove ×";
    removeButton.addEventListener("click", () => removeSavedOutfit(saved.id));
    actions.append(wearButton, removeButton);
    card.append(heading, itemGrid, actions);
    savedGrid.append(card);
  });
}

function findSharedStyle(items) {
  const style = Object.keys(styleNames).find((styleName) => items.every((piece) => piece.styles.includes(styleName)));
  return style || items[0]?.styles[0] || "preppy";
}

function removeSavedOutfit(id) {
  const oldSavedOutfits = savedOutfits;
  savedOutfits = savedOutfits.filter((outfit) => outfit.id !== id);
  if (!persistSavedOutfits()) {
    savedOutfits = oldSavedOutfits;
    return;
  }
  renderSavedOutfits();
  showToast("Look removed from your saved outfits.");
}

document.querySelector("#generate-button").addEventListener("click", () => generateOutfit());
document.querySelector("#hero-generate").addEventListener("click", () => {
  document.querySelector("#generator").scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => generateOutfit(), 350);
});
document.querySelector("#surprise-button").addEventListener("click", () => generateOutfit());
document.querySelector("#save-button").addEventListener("click", saveCurrentOutfit);
document.querySelector("#clear-button").addEventListener("click", clearOutfit);

const heroLookNames = ["The Hallway Icon", "Main Character Energy", "A Little Something Extra", "The Perfect Match"];
document.querySelector("#hero-image").addEventListener("error", (event) => event.currentTarget.classList.add("image-broken"), { once: true });
document.querySelector("#hero-generate").addEventListener("click", () => {
  const nextLook = Math.floor(Math.random() * heroLookNames.length);
  document.querySelector("#hero-look-name").textContent = heroLookNames[nextLook];
  document.querySelector("#hero-look-number").textContent = String(nextLook + 1).padStart(2, "0");
});

renderFilters();
renderWardrobe();
renderSavedOutfits();
renderOutfit();
