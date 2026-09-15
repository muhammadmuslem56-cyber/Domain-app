import { useState } from "react";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const plans = [
    {
      name: "مجاني",
      description: "ابدأ رحلتك معنا بدون أي تكلفة",
      price: 0,
      period: "للأبد",
      features: [
        { text: "10 عمليات بحث يومياً", included: true },
        { text: "نتائج بحث أساسية", included: true },
        { text: "دعم المجتمع", included: true },
        { text: "عمليات بحث غير محدودة", included: false },
        { text: "API خاص", included: false },
        { text: "دعم أولوية", included: false },
      ],
      cta: "ابدأ مجاناً",
      popular: false,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
    {
      name: "احترافي",
      description: "للمحترفين الذين يحتاجون المزيد",
      price: 9.99,
      period: "شهرياً",
      features: [
        { text: "عمليات بحث غير محدودة", included: true },
        { text: "نتائج بحث متقدمة", included: true },
        { text: "دعم عبر البريد الإلكتروني", included: true },
        { text: "تصدير البيانات", included: true },
        { text: "API خاص", included: false },
        { text: "دعم أولوية", included: false },
      ],
      cta: "اشترك الآن",
      popular: true,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      name: "مؤسسات",
      description: "حلول مخصصة للشركات الكبيرة",
      price: 49.99,
      period: "شهرياً",
      features: [
        { text: "كل مميزات الاحترافي", included: true },
        { text: "API خاص ومتكامل", included: true },
        { text: "دعم أولوية 24/7", included: true },
        { text: "إدارة فريق متقدمة", included: true },
        { text: "تقارير تحليلية مخصصة", included: true },
        { text: "اتفاقيات مستوى الخدمة SLA", included: true },
      ],
      cta: "تواصل معنا",
      popular: false,
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: "هل يمكنني تغيير خطتي في أي وقت؟",
      answer:
        "نعم، يمكنك الترقية أو التخفيض في أي وقت. سيتم محاسبتك وفقاً للفترة المتبقية من اشتراكك الحالي.",
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer:
        "ن接受的付款方式包括信用卡、借记卡、PayPal 以及银行转账。企业客户可以通过invoice付款。",
    },
    {
      question: "هل هناك فترة تجريبية مجانية؟",
      answer:
        "نعم، نقدم فترة تجريبية مجانية لمدة 14 يوماً لجميع الخطط المدفوعة.",
    },
    {
      question: "كيف يعمل نظام الفوترة؟",
      answer:
        "يتم الفوترة شهرياً أو سنوياً حسب اختيارك. الاشتراك السنوي يوفر لك خصماً 20%.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">
                دومين بريكميوم
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                الرئيسية
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                المميزات
              </a>
              <a
                href="#"
                className="text-indigo-600 font-semibold"
              >
                الأسعار
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                المدونة
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-indigo-600 transition-colors">
                تسجيل الدخول
              </button>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                ابدأ مجاناً
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Search */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
            أكثر من 10,000 مستخدم يثقون بنا
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            اختر{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              الخطط المناسبة
            </span>{" "}
            لاحتياجاتك
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            خطط مرنة تناسب جميع الاحتياجات، من الاستخدام الشخصي إلى الحلول
            المؤسسية المتقدمة
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="ابحث عن دومين بريكميوم..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-4 bg-white border border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-right placeholder-gray-400 transition-all duration-300"
            />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300">
              بحث
            </button>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-medium transition-colors ${
                !isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              شهري
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                isAnnual ? "bg-indigo-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${
                  isAnnual ? "right-8" : "right-1"
                }`}
              ></div>
            </button>
            <span
              className={`text-sm font-medium transition-colors ${
                isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              سنوي
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              توفير 20%
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-2 border-indigo-600 shadow-xl scale-105 md:scale-110 z-10"
                    : "border border-gray-200 shadow-lg hover:shadow-xl"
                }`}
                style={{
                  boxShadow: plan.popular
                    ? "0 20px 40px rgba(99, 102, 241, 0.15)"
                    : "0 4px 20px rgba(0, 0, 0, 0.08)",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      الأكثر شعبية
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                      plan.popular
                        ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                        : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    {plan.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price === 0 ? "مجاناً" : `$${plan.price}`}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-gray-500">/{plan.period}</span>
                    )}
                  </div>
                  {isAnnual && plan.price > 0 && (
                    <p className="text-green-600 text-sm mt-2 font-medium">
                      توفير{" "}
                      {isAnnual
                        ? `$${(plan.price * 12 * 0.2).toFixed(2)}/سنة`
                        : ""}
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        </div>
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-200"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max