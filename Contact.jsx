

```jsx
import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'الرجاء إدخال الاسم';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'الرجاء إدخال البريد الإلكتروني';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'الرجاء إدخال بريد إلكتروني صحيح';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'الرجاء إدخال رسالتك';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'يجب أن تكون الرسالة 10 أحرف على الأقل';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setFormSubmitted(true);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const faqData = [
    {
      question: 'ما هي مدة الرد على الرسائل؟',
      answer: 'نهدف للرد على جميع الرسائل خلال 24 ساعة كحد أقصى. في حالات الطوارئ، يمكنك التواصل معنا مباشرة عبر التليجرام للحصول على رد أسرع.'
    },
    {
      question: 'هل يمكنني طلب استرداد الأموال؟',
      answer: 'نعم، نقدم سياسة استرداد كاملة خلال 30 يوماً من تاريخ الشراء. يرجى التواصل معنا مع رقم الطلب وسنقوم بمعالجة طلبك خلال 3-5 أيام عمل.'
    },
    {
      question: 'كيف أتواصل مع الدعم التقني؟',
      answer: 'يمكنك التواصل مع فريق الدعم التقني عبر نموذج الاتصال أدناه، أو عبر البريد الإلكتروني، أو من خلال قناتنا الرسمية على التليجرام для الحصول على مساعدة فورية.'
    },
    {
      question: 'هل تقدمون دعم فني على مدار الساعة؟',
      answer: 'نعم، فريق الدعم لدينا متاح 24/7 طوال أيام الأسبوع. نحرص على تقديم أفضل خدمة لعملائنا في أي وقت يحتاجون فيه للمساعدة.'
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل الدفع عبر البطاقات الائتمانية (Visa, MasterCard)، الدفع عبر PayPal، والتحويل البنكي. جميع المعاملات مؤمنة بالكامل.'
    }
  ];

  const contactMethods = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'البريد الإلكتروني',
      value: 'support@domainpremium.com',
      description: 'متاح للرد خلال 24 ساعة',
      link: 'mailto:support@domainpremium.com'
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.828.94z"/>
        </svg>
      ),
      title: 'تيليجرام',
      value: '@DomainPremium_Support',
      description: 'دعم فوري ومباشر',
      link: 'https://t.me/DomainPremium_Support'
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-white" style={{ fontFamily: "'Cairo', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis