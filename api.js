// server/api.js
const express = require("express");
const router = express.Router();

// ──────────────────────────────────────────────
// Mock Data (in-memory)
// ──────────────────────────────────────────────

const premiumDomains = [
  { id: 1, domain: "fintech.io", status: "available", value: 45000, tld: "io", length: 8, keyword: "fintech", brandScore: 92, createdAt: null },
  { id: 2, domain: "healthai.com", status: "available", value: 28000, tld: "com", length: 9, keyword: "health", brandScore: 88, createdAt: null },
  { id: 3, domain: "ecommerce.ai", status: "taken", value: 62000, tld: "ai", length: 10, keyword: "ecommerce", brandScore: 95, createdAt: null },
  { id: 4, domain: "saasflow.io", status: "available", value: 12000, tld: "io", length: 8, keyword: "saas", brandScore: 78, createdAt: null },
  { id: 5, domain: "aibot.com", status: "available", value: 95000, tld: "com", length: 6, keyword: "ai", brandScore: 99, createdAt: null },
  { id: 6, domain: "realestateai.com", status: "taken", value: 35000, tld: "com", length: 13, keyword: "realestate", brandScore: 85, createdAt: null },
  { id: 7, domain: "foodie.app", status: "available", value: 18000, tld: "app", length: 8, keyword: "food", brandScore: 82, createdAt: null },
  { id: 8, domain: "travelnow.io", status: "available", value: 22000, tld: "io", length: 9, keyword: "travel", brandScore: 80, createdAt: null },
  { id: 9, domain: "edutech.ai", status: "available", value: 33000, tld: "ai", length: 8, keyword: "education", brandScore: 91, createdAt: null },
  { id: 10, domain: "gaminghub.io", status: "available", value: 15000, tld: "io", length: 9, keyword: "gaming", brandScore: 75, createdAt: null },
  { id: 11, domain: "cloudops.dev", status: "available", value: 11000, tld: "dev", length: 8, keyword: "cloud", brandScore: 73, createdAt: null },
  { id: 12, domain: "cryptowallet.io", status: "taken", value: 85000, tld: "io", length: 12, keyword: "crypto", brandScore: 94, createdAt: null },
  { id: 13, domain: "medicore.app", status: "available", value: 20000, tld: "app", length: 9, keyword: "medical", brandScore: 79, createdAt: null },
  { id: 14, domain: "shopify.ai", status: "available", value: 55000, tld: "ai", length: 8, keyword: "shopify", brandScore: 90, createdAt: null },
  { id: 15, domain: "learncode.dev", status: "available", value: 8500, tld: "dev", length: 9, keyword: "learn", brandScore: 65, createdAt: null },
  { id: 16, domain: "payfast.io", status: "available", value: 42000, tld: "io", length: 7, keyword: "payment", brandScore: 88, createdAt: null },
  { id: 17, domain: "dataflow.ai", status: "available", value: 38000, tld: "ai", length: 9, keyword: "data", brandScore: 87, createdAt: null },
  { id: 18, domain: "healthhub.com", status: "taken", value: 30000, tld: "com", length: 9, keyword: "health", brandScore: 83, createdAt: null },
  { id: 19, domain: "smartcart.io", status: "available", value: 16000, tld: "io", length: 9, keyword: "cart", brandScore: 72, createdAt: null },
  { id: 20, domain: "aiflow.com", status: "available", value: 72000, tld: "com", length: 6, keyword: "ai", brandScore: 96, createdAt: null },
];

const keywordsByIndustry = {
  fintech: ["digital banking", "payment gateway", "crypto wallet", "neobank", "defi", "blockchain payments", "remittance", "insurtech", "wealth management", "peer to peer lending"],
  healthcare: ["telehealth", "medical records", "patient portal", "health tracking", "diagnostic ai", "pharmacy app", "mental health", "wellness", "clinical trials", "health insurance"],
  ecommerce: ["dropshipping", "multi vendor", "product finder", "price comparison", "social commerce", "subscription box", "flash sales", "inventory management", "cart abandonment", "checkout optimization"],
  saas: ["project management", "crm", "hr software", " invoicing", "collaboration", "analytics dashboard", "api management", "low code", "workflow automation", "helpdesk"],
  ai_tech: ["chatbot", "computer vision", "nlp", "machine learning", "deep learning", "generative ai", "automation", "predictive analytics", "voice assistant", "ai model marketplace"],
  real_estate: ["property management", "virtual tour", "mortgage calculator", "rental platform", "commercial real estate", "smart home", "real estate cms", "investment platform", "tenant screening", "lease management"],
  food_delivery: ["ghost kitchen", "meal prep", "restaurant pos", "food tracking", "diet planning", "grocery delivery", "catering management", "food marketplace", "recipe app", "delivery route optimization"],
  travel: ["flight booking", "hotel reservation", "travel itinerary", "adventure tourism", "business travel", "travel insurance", "destination guide", "luggage tracking", "visa assistance", "travel community"],
  education: ["online learning", "lms", "tutoring platform", "coding bootcamp", "language learning", "certification", "student information system", "gamified learning", "edtech", "corporate training"],
  gaming: ["esports", "cloud gaming", "game streaming", "indie games", "mobile gaming", "game analytics", "nft gaming", "game cdn", "gaming community", "game monetization"],
};

const trendingKeywords = {
  overall: ["ai assistant", "chatbot", "payment gateway", "telehealth", "online learning", "cloud gaming", "crypto wallet", "food delivery", "travel booking", "ecommerce platform"],
  fintech: ["embedded finance", "open banking", "bnpl", "stablecoin", "web3 wallet", "instant payments", "kyc automation", "fraud detection", "regtech", "neobank"],
  healthcare: ["ai diagnostics", "mental health app", "telemedicine", "health data privacy", "wearable integration", "personalized medicine", "clinical ai", "patient engagement", "pharmacy tech", "health equity"],
  ecommerce: ["social commerce", "live shopping", "headless commerce", "shoppable video", "subscription commerce", "zero checkout", "product personalization", "returns automation", "marketplace ai", "voice commerce"],
  ai_tech: ["llm applications", "rag systems", "ai agents", "multimodal ai", "ai code assistant", "synthetic data", "edge ai", "ai governance", "prompt engineering", "ai model fine tuning"],
};

const popularTlds = [
  { tld: "com", price: 12.99, avgValue: 25000, demand: "very_high", count: 156000000 },
  { tld: "io", price: 39.99, avgValue: 18000, demand: "high", count: 8500000 },
  { tld: "ai", price: 79.99, avgValue: 35000, demand: "very_high", count: 420000 },
  { tld: "app", price: 14.99, avgValue: 8000, demand: "high", count: 3200000 },
  { tld: "dev", price: 9.99, avgValue: 5000, demand: "medium", count: 1800000 },
  { tld: "co", price: 19.99, avgValue: 12000, demand: "high", count: 28000000 },
  { tld: "net", price: 11.99, avgValue: 8000, demand: "medium", count: 13500000 },
  { tld: "org", price: 10.99, avgValue: 6000, demand: "medium", count: 11000000 },
  { tld: "xyz", price: 1.99, avgValue: 2000, demand: "low", count: 4200000 },
  { tld: "tech", price: 24.99, avgValue: 11000, demand: "high", count: 2100000 },
  { tld: "cloud", price: 19.99, avgValue: 9000, demand: "medium", count: 1500000 },
  { tld: "ai", price: 79.99, avgValue: 35000, demand: "very_high", count: 420000 },
  { tld: "llc", price: 17.99, avgValue: 4000, demand: "medium", count: 2200000 },
  { tld: "io", price: 39.99, avgValue: 18000, demand: "high", count: 8500000 },
  { tld: "systems", price: 22.99, avgValue: 7500, demand: "low", count: 900000 },
];

const alerts = [];
let alertIdCounter = 1;

const globalStats = {
  totalAvailableDomains: 847293,
  totalValue: 12400000000,
  activeUsers: 48293,
  totalAlerts: 12483,
  domainsCheckedToday: 3421,
  topIndustry: "ai_tech",
  newlyListed: 127,
};

// ──────────────────────────────────────────────
// Helper: Calculate Valuation Score
// ──────────────────────────────────────────────

function calculateValuation(domain, tld, keyword) {
  let score = 0;
  const factors = {};

  // Length factor (shorter = more valuable)
  if (domain.length <= 4) { score += 35; factors.length = { contribution: 35, reason: "Very short — highly memorable" }; }
  else if (domain.length <= 6) { score += 28; factors.length = { contribution: 28, reason: "Short and brandable" }; }
  else if (domain.length <= 8) { score += 20; factors.length = { contribution: 20, reason: "Good length" }; }
  else if (domain.length <= 12) { score += 12; factors.length = { contribution: 12, reason: "Average length" }; }
  else { score += 5; factors.length = { contribution: 5, reason: "Long — harder to remember" }; }

  // TLD factor
  const premiumTlds = { com: 30, ai: 28, io: 25, app: 18, co: 15, tech: 14, dev: 12, net: 8, org: 7, xyz: 3 };
  factors.tld = { contribution: premiumTlds[tld] || 5, reason: `${tld} is a ${premiumTlds[tld] >= 20 ? "premium" : "standard"} TLD` };

  // Keyword factor
  const hotKeywords = ["ai", "fintech", "crypto", "cloud", "saas", "health", "pay", "shop", "bot", "flow"];
  const keywordBonus = hotKeywords.includes(keyword.toLowerCase()) ? 25 : 12;
  factors.keyword = { contribution: keywordBonus, reason: `"${keyword}" is a ${hotKeywords.includes(keyword.toLowerCase()) ? "high-demand" : "moderate-demand"} keyword` };

  // Brand score
  const brandScore = Math.floor(Math.random() * 20) + 75;
  factors.brandScore = { contribution: Math.round(brandScore / 4), reason: `Brandability score: ${brandScore}/100` };

  score += premiumTlds[tld] || 5;
  score += keywordBonus;
  score += Math.round(brandScore / 4);

  const estimatedValue = Math.round((score / 100) * 100000);
  const tier = score >= 85 ? "S-Tier" : score >= 70 ? "A-Tier" : score >= 50 ? "B-Tier" : "C-Tier";

  return { score: Math.min(score, 100), estimatedValue, tier, factors };
}

// ──────────────────────────────────────────────
// 1. GET /api/domains/search
// ──────────────────────────────────────────────

router.get("/domains/search", (req, res) => {
  const {
    q = "",
    industry = "",
    tld = "",
    minValue = 0,
    maxValue = Infinity,
    status = "",
    minLength = 0,
    maxLength = Infinity,
    sortBy = "value",
    order = "desc",
    page = 1,
    limit = 10,
  } = req.query;

  let results = premiumDomains.filter((d) => {
    const matchesQuery = q === "" || d.domain.toLowerCase().includes(q.toLowerCase()) || d.keyword.toLowerCase().includes(q.toLowerCase());
    const matchesIndustry = industry === "" || d.keyword.toLowerCase() === industry.toLowerCase() || (keywordsByIndustry[industry] && keywordsByIndustry[industry].some((k) => d.domain.toLowerCase().includes(k.toLowerCase())));
    const matchesTld = tld === "" || d.tld === tld;
    const matchesValue = d.value >= Number(minValue) && d.value <= Number(maxValue);
    const matchesStatus = status === "" || d.status === status;
    const matchesLength = d.length >= Number(minLength) && d.length <= Number(maxLength);
    return matchesQuery && matchesIndustry && matchesTld && matchesValue && matchesStatus && matchesLength;
  });

  // Sort
  const validSorts = ["value", "length", "brandScore", "domain"];
  const sortKey = validSorts.includes(sortBy) ? sortBy : "value";
  results.sort((a, b) => {
    if (order === "asc") return a[sortKey] > b[sortKey] ? 1 : -1;
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  // Pagination
  const pageNum = Math.max(1, parseInt(page, 10));
  const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10)));
  const total = results.length;
  const totalPages = Math.ceil(total / limitNum);
  const start = (pageNum - 1) * limitNum;
  const paginated = results.slice(start, start + limitNum);

  res.json({
    success: true,
    data: paginated,
    pagination: {
      page: pageNum,
      limit: limitNum,
      total,
      totalPages,
      hasNext: pageNum < totalPages,
      hasPrev: pageNum > 1,
    },
    filters: { q, industry, tld, minValue, maxValue, status, sortBy, order },
  });
});

// ──────────────────────────────────────────────
// 2. GET /api/domains/:domain/availability
// ──────────────────────────────────────────────

router.get("/domains/:domain/availability", (req, res) => {
  const { domain } = req.params;

  // Simulate WHOIS lookup
  const knownTaken = premiumDomains.filter((d) => d.domain === domain && d.status === "taken").length > 0;
  const knownAvailable = premiumDomains.filter((d) => d.domain === domain && d.status === "available").length > 0;

  let available;
  let registrar = null;
  let registrationDate = null;
  let expirationDate = null;

  if (knownTaken) {
    available = false;
    registrar = ["GoDaddy", "Namecheap", "Cloudflare", "enom"][Math.floor(Math.random() * 4)];
    const regYear = 2018 + Math.floor(Math.random() * 6);
    registrationDate = `${regYear}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`;
    const expYear = regYear + 1 + Math.floor(Math.random() * 9);
    expirationDate = `${expYear}-${String(Math.floor(Math.random() * 12) + 1).