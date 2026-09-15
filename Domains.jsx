import { useState, useEffect } from 'react';

export default function DomainSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTLD, setSelectedTLD] = useState('الكل');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [minLength, setMinLength] = useState(1);
  const [maxLength, setMaxLength] = useState(20);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [domains, setDomains] = useState([]);

  const tldOptions = ['الكل', '.com', '.net', '.org', '.io', '.co', '.app', '.dev'];
  
  const mockDomains = [
    { id: 1, name: 'سوق', tld: 'com', price: 2500, value: 95, length: 3, available: true, category: 'تجارة' },
    { id: 2, name: 'تقنية', tld: 'io', price: 1800, value: 88, length: 4, available: true, category: 'تقنية' },
    { id: 3, name: 'تعليم', tld: 'com', price: 1200, value: 82, length: 4, available: true, category: 'تعليم' },
    { id: 4, name: 'صحة', tld: 'net', price: 980, value: 78, length: 3, available: true, category: 'صحة' },
    { id: 5, name: 'سياحة', tld: 'com', price: 1500, value: 85, length: 4, available: true, category: 'سياحة' },
    { id: 6, name: 'فكر', tld: 'io', price: 2200, value: 92, length: 3, available: true, category: 'تقنية' },
    { id: 7, name: 'متجر', tld: 'com', price: 3000, value: 96, length: 4, available: true, category: 'تجارة' },
    { id: 8, name: 'نقل', tld: 'net', price: 850, value: 72, length: 3, available: true, category: 'خدمات' },
    { id: 9, name: 'بناء', tld: 'com', price: 1100, value: 80, length: 3, available: false, category: 'عقارات' },
    { id: 10, name: 'تسويق', tld: 'co', price: 1400, value: 84, length: 5, available: true, category: 'تسويق' },
    { id: 11, name: 'ذكاء', tld: 'ai', price: 4500, value: 98, length: 4, available: true, category: 'تقنية' },
    { id: 12, name: 'ابتكار', tld: 'com', price: 1600, value: 86, length: 5, available: true, category: 'تقنية' },
  ];

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = [...mockDomains];
      
      if (searchQuery) {
        filtered = filtered.filter(d => 
          d.name.includes(searchQuery) || 
          `${d.name}${d.tld}`.includes(searchQuery)
        );
      }
      
      if (selectedTLD !== 'الكل') {
        filtered = filtered.filter(d => d.tld === selectedTLD.replace('.', ''));
      }
      
      filtered = filtered.filter(d => 
        d.price >= priceRange[0] && 
        d.price <= priceRange[1] &&
        d.length >= minLength &&
        d.length <= maxLength
      );
      
      setDomains(filtered);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [searchQuery, selectedTLD, priceRange, minLength, maxLength]);

  const getValueColor = (value) => {
    if (value >= 90) return 'text-green-600 bg-green-50';
    if (value >= 80) return 'text-blue-600 bg-blue-50';
    if (value >= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-gray-600 bg-gray-50';
  };

  const getValueLabel = (value) => {
    if (value >= 90) return 'ممتاز';
    if (value >= 80) return 'جيد جداً';
    if (value >= 70) return 'جيد';
    return 'مقبول';
  };

  return (
    <div dir="rtl" className="min-h-screen bg-white" style={{ fontFamily: 'Cairo, sans-serif' }}>
      {/* Header */}
      <header className="bg-gradient-to-l from-indigo-500 to-purple-500 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            اكتشف الدومينات البريدميوم المثالية
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            ابحث في قاعدة بياناتنا الواسعة من الدومينات البريدميوم واحجز دومينك المميز اليوم
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <svg 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن دومين بريكميوم..."
                className="w-full px-6 pr-14 py-4 text-lg rounded-2xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-indigo-300 text-gray-800 placeholder-gray-400"
                style={{ border: 'none' }}
              />
              <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition-all duration-300 font-semibold">
                بحث
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-10 text-sm">
            <div className="text-center">
              <div className="text-3xl font-bold">12,500+</div>
              <div className="opacity-80">دومين متاح</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">98%</div>
              <div className="opacity-80">نسبة الرضا</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="opacity-80">دعم فني</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full md:w-auto flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 px-6 py-3 rounded-xl mb-6 transition-all duration-300 border border-gray-200"
        >
          <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="font-semibold text-gray-700">فلاتر البحث المتقدمة</span>
          <svg className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Filters Panel */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showFilters ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'}`}>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* TLD Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">امتداد الدومين</label>
                <select
                  value={selectedTLD}
                  onChange={(e) => setSelectedTLD(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white text-gray-700"
                >
                  {tldOptions.map(tld => (
                    <option key={tld} value={tld}>{tld === 'الكل' ? 'الكل' : tld}</option>
                  ))}
                </select>
              </div>

              {/* Length Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">طول الدومين</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={minLength}
                    onChange={(e) => setMinLength(parseInt(e.target.value) || 1)}
                    className="w-1/2 px-3 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center text-gray-700"
                    placeholder="من"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={maxLength}
                    onChange={(e) => setMaxLength(parseInt(e.target.value) || 20)}
                    className="w-1/2 px-3 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center text-gray-700"
                    placeholder="إلى"
                  />
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">النطاق السعري ($)</label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-1/2 px-3 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center text-gray-700"
                    placeholder="من"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    min="0"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 10000])}
                    className="w-1/2 px-3 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center text-gray-700"
                    placeholder="إلى"
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">إجراءات سريعة</label>
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      setSelectedTLD('الكل');
                      setPriceRange([0, 10000]);
                      setMinLength(1);
                      setMaxLength(20);
                      setSearchQuery('');
                    }}
                    className="flex-1 px-3 py-3 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all duration-300"
                  >
                    إعادة تعيين
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-800">نتائج البحث</h2>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
              {domains.length} نتيجة
            </span>
          </div>
          <select className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-700">
            <option>الأكثر قيمة</option>
            <option>السعر: من الأقل للأعلى</option>
            <option>السعر: من الأعلى للأقل</option>
            <option>الأقصر أولاً</option>
            <option>الأطول أولاً</option>
          </select>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-100 rounded-2xl h-64 animate-pulse" />
            ))}
          </div>
        )}

        {/* Domain Cards Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain) => (
              <div
                key={domain.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
              >
                {/* Domain Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                      {domain.name}
                      <span className="text-indigo-600 text-xl">.{domain.tld}</span>
                    </h3>
                    <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">