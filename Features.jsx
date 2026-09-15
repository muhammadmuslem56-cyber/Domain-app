import { useState } from "react";

export default function FeaturesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      title: "مولّد الدومينات الذكية",
      description: "يستخدم الذكاء الاصطناعي المتقدم لإنشاء أسماء دومين فريدة ومبتكرة بناءً على كلمات مفتاحية أو مجال معين، مع ضمان عدم تسجيلها مسبقاً.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      stats: "+15,000 دومين مُولَّد",
      color: "#6366F1"
    },
    {
      id: 2,
      title: "محقّق التوفر السريع",
      description: "فحص فوري ومجاني لتوفر الدومينات عبر أكثر من 200 مسجل DNS حول العالم. احصل على النتائج في ثوانٍ معدودة بدقة 99.9%.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: "فحص في 3 ثوانٍ",
      color: "#8B5CF6"
    },
    {
      id: 3,
      title: "مُقيِّم القيمة السوقية",
      description: "تقييم احترافي دقيق لقيمة الدومين بناءً على عوامل متعددة: طول الاسم، الكلمات المفتاحية، امتدادات الدومين، وسجلات البيع السابقة.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      stats: "دقة تقييم 94%",
      color: "#6366F1"
    },
    {
      id: 4,
      title: "نظام المراقبة والتنبيه",
      description: "راقب دوميناتك المفضلة وتلقَّ تنبيهات فورية عند تغير حالتها أو اقتراب تاريخ انتهاء الصلاحية.无缘无故 لا تفوّت فرصة.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      stats: "إشعارات فورية",
      color: "#8B5CF6"
    },
    {
      id: 5,
      title: "البحث بالكلمات المفتاحية",
      description: "ابحث عن الدومينات المتاحة التي تحتوي على كلمات مفتاحية محددة. مثالي للتعرف على الفرص المخفية في السوق.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      stats: "+50,000 كلمة مفتاحية",
      color: "#6366F1"
    },
    {
      id: 6,
      title: "واجهة RTL عربية كاملة",
      description: "تجربة عربية أصيلة مصممة خصيصاً للمستخدمين العرب. واجهة سلسة تدعم الكتابة من اليمين لليسار مع خط Cairo الأنيق.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      stats: "دعم كامل لـ RTL",
      color: "#8B5CF6"
    }
  ];

  const testimonials = [
    {
      name: "أحمد الشهري",
      role: "رائد أعمال",
      text: "وجدت دومين بريكميوم редко banget عبر مولّد الدومينات الذكية. وفّرت عليّ أسابيع من البحث.",
      avatar: "أ"
    },
    {
      name: "سارة المحمد",
      role: "مطور مواقع",
      text: "نظام المراقبة أنقذني من فقدان دومين مهم. التنبيهات الفورية رائعة.",
      avatar: "س"
    },
    {
      name: "خالد العتيبي",
      role: "مسوق رقمي",
      text: "مُقيِّم القيمة السوقية ساعدني في تحديد السعر العادل لبيع دوميناتي.",
      avatar: "خ"
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-white" style={{ fontFamily: "'Cairo', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                دومين برو
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">الرئيسية</a>
              <a href="#" className="text-indigo-600 font-semibold border-b-2 border-indigo-600 pb-1">المميزات</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">الأسعار</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">المدونة</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">تواصل معنا</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">
                تسجيل الدخول
              </button>
              <button className="bg-gradient-to-l from-indigo-500 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
                ابدأ مجاناً
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              منصة الدومينات الأولى عربياً
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              اكتشف قوة{" "}
              <span className="bg-gradient-to-l from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                الدومينات الذكية
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              أقوى أدوات اكتشاف وتقييم ومراقبة الدومينات بأحدث تقنيات الذكاء الاصطناعي. 
              وفّر وقتك واجمع أفضل الدومينات النادرة.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="ابحث عن دومين بريكميوم..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-6 py-5 bg-white border-2 border-gray-200 rounded-2xl text-right text-gray-800 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 text-lg shadow-lg"
                style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
              />
              <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-gradient-to-l from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300">
                بحث
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">+50,000</div>
                <div className="text-gray-500 font-medium">دومين متاح</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">+15,000</div>
                <div className="text-gray-500 font-medium">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">99.9%</div>
                <div className="text-gray-500 font-medium">دقة الفحص</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              مميزات تفوق توقعاتك
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              مجموعة شاملة من الأدوات المتكاملة لإدارة دوميناتك بكفاءة عالية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`relative bg-white rounded-3xl p-8 transition