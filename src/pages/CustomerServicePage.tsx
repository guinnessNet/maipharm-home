import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import SectionTitle from '../components/SectionTitle';
import { CircleHelp, Mail, MapPin, MessageSquare, Phone, Server } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const CustomerServicePage = () => {
  const { t } = useTranslation();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: t('customer.inquiry.type.general'),
    message: '',
    company: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const submissionKey = 'customer_inquiry_last_submission';
  const cooldownMs = 60 * 1000;

  const createCaptcha = () => {
    const left = Math.floor(Math.random() * 9) + 1;
    const right = Math.floor(Math.random() * 9) + 1;
    return { question: `${left} + ${right} = ?`, answer: left + right };
  };

  const [captcha, setCaptcha] = useState(createCaptcha);
  const [captchaInput, setCaptchaInput] = useState('');

  const sanitizeInput = (value: string) =>
    value
      .replace(/<[^>]*>/g, '')
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .trim();

  const isSafeText = (value: string) =>
    !/(?:<|>|script|on\w+\s*=|data:|javascript:|vbscript:)/i.test(value);

  const hasUrl = (value: string) =>
    /(?:https?:\/\/|www\.)/i.test(value);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: t('customer.faq.q1'),
      answer: t('customer.faq.a1')
    },
    {
      id: 2,
      question: t('customer.faq.q2'),
      answer: t('customer.faq.a2')
    },
    {
      id: 3,
      question: t('customer.faq.q3'),
      answer: t('customer.faq.a3')
    },
    {
      id: 4,
      question: t('customer.faq.q4'),
      answer: t('customer.faq.a4')
    },
    {
      id: 5,
      question: t('customer.faq.q5'),
      answer: t('customer.faq.a5')
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'type' ? value : sanitizeInput(value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      if (formData.company.trim()) {
        setStatus({
          loading: false,
          success: false,
          error: true,
          message: t('customer.inquiry.error')
        });
        return;
      }

      if (!isValidEmail(formData.email)) {
        setStatus({
          loading: false,
          success: false,
          error: true,
          message: '유효한 이메일을 입력해주세요.'
        });
        return;
      }

      if (hasUrl(formData.message) || hasUrl(formData.name)) {
        setStatus({
          loading: false,
          success: false,
          error: true,
          message: '링크가 포함된 문의는 접수할 수 없습니다.'
        });
        return;
      }

      if (!isSafeText(formData.name) || !isSafeText(formData.message)) {
        setStatus({
          loading: false,
          success: false,
          error: true,
          message: '허용되지 않는 문자가 포함되어 있습니다.'
        });
        return;
      }

      if (Number(captchaInput) !== captcha.answer) {
        setStatus({
          loading: false,
          success: false,
          error: true,
          message: '보안 질문 답이 올바르지 않습니다.'
        });
        setCaptcha(createCaptcha());
        setCaptchaInput('');
        return;
      }

      const lastSubmission = Number(localStorage.getItem(submissionKey) || 0);
      if (Date.now() - lastSubmission < cooldownMs) {
        setStatus({
          loading: false,
          success: false,
          error: true,
          message: '잠시 후 다시 시도해주세요.'
        });
        return;
      }

      await emailjs.send(
        'service_ak0v26a',
        'template_it59s7o',
        {
          from_name: sanitizeInput(formData.name),
          from_email: sanitizeInput(formData.email),
          time: new Date().toISOString(),
          message: sanitizeInput(formData.message),
          type: formData.type
        },
        'YwTrEuJnKfGLfA1Mg'
      );

      localStorage.setItem(submissionKey, String(Date.now()));
      setStatus({
        loading: false,
        success: true,
        error: false,
        message: t('customer.inquiry.success')
      });

      setFormData({
        name: '',
        email: '',
        type: t('customer.inquiry.type.general'),
        message: '',
        company: ''
      });
      setCaptcha(createCaptcha());
      setCaptchaInput('');
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: t('customer.inquiry.error')
      });
    }
  };
  
  const toggleFaq = (id: number) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  return (
    <div>
      <Helmet>
        <title>{t('customer.title')} | {t('site.name')} - {t('site.description')}</title>
        <meta name="description" content={t('customer.subtitle')} />
        <meta name="keywords" content={`${t('site.name')} ${t('customer.title')}, ${t('customer.inquiry.title')}, ${t('site.description')} ${t('customer.inquiry.title')}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maipharm.com/customer" />
        <meta property="og:title" content={`${t('customer.title')} | ${t('site.name')}`} />
        <meta property="og:description" content={t('customer.subtitle')} />
        <meta property="og:image" content="https://maipharm.com/img/customer-og.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://maipharm.com/customer" />
        <meta property="twitter:title" content={`${t('customer.title')} | ${t('site.name')}`} />
        <meta property="twitter:description" content={t('customer.subtitle')} />
        <meta property="twitter:image" content="https://maipharm.com/img/customer-og.jpg" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <SectionTitle 
          title={t('customer.title')} 
          subtitle={t('customer.subtitle')}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6 ezpharm-text-blue flex items-center">
              <MessageSquare className="mr-3" size={22} />
              {t('customer.support.title')}
            </h3>
            <div className="space-y-5">
              <p className="text-gray-700">
                {t('customer.support.description')}
              </p>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Phone size={20} className="text-green-500" />
                <div>
                  <div className="font-medium">{t('customer.support.phone')}</div>
                  <span className="text-gray-600">{t('footer.phone')}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Mail size={20} className="text-green-500" />
                <div>
                  <div className="font-medium">{t('customer.support.email')}</div>
                  <span className="text-gray-600">kjh@maipharm.com</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Server size={20} className="text-green-500" />
                <div>
                  <div className="font-medium">{t('customer.support.portal')}</div>
                  <span className="text-gray-600">help.maipharm.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6 ezpharm-text-blue">{t('customer.inquiry.title')}</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="company" className="sr-only">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('customer.inquiry.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                  maxLength={50}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('customer.inquiry.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('customer.inquiry.type')}
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value={t('customer.inquiry.type.general')}>{t('customer.inquiry.type.general')}</option>
                  <option value={t('customer.inquiry.type.technical')}>{t('customer.inquiry.type.technical')}</option>
                  <option value={t('customer.inquiry.type.partnership')}>{t('customer.inquiry.type.partnership')}</option>
                  <option value={t('customer.inquiry.type.other')}>{t('customer.inquiry.type.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('customer.inquiry.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  maxLength={1000}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="captcha" className="block text-sm font-medium text-gray-700 mb-1">
                  보안 질문: {captcha.question}
                </label>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  value={captchaInput}
                  onChange={(event) => setCaptchaInput(event.target.value.replace(/[^\d]/g, ''))}
                  inputMode="numeric"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {status.message && (
                <div className={`p-4 rounded-md ${
                  status.success ? 'bg-green-50 text-green-700' : 
                  status.error ? 'bg-red-50 text-red-700' : 
                  'bg-blue-50 text-blue-700'
                }`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className={`w-full px-6 py-3 rounded-md text-white font-medium ${
                  status.loading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {status.loading ? t('customer.inquiry.sending') : t('customer.inquiry.submit')}
              </button>
            </form>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h3 className="text-xl font-semibold mb-8 ezpharm-text-blue flex items-center">
            <CircleHelp className="mr-3" size={22} />
            {t('customer.faq.title')}
          </h3>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full text-left p-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-all"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className={`text-green-500 transition-transform transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`}>
                    {expandedFaq === faq.id ? '−' : '+'}
                  </span>
                </button>
                
                {expandedFaq === faq.id && (
                  <div className="p-5 bg-white">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('customer.visit.title')}</h3>
            <p className="text-gray-600 mb-3">{t('customer.visit.address')}</p>
            <p className="text-sm text-gray-500">{t('customer.visit.hours')}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Server size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('customer.docs.title')}</h3>
            <p className="text-gray-600 mb-3">{t('customer.docs.description')}</p>
            <p className="text-sm text-gray-500">{t('customer.docs.status')}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="w-16 h-16 ezpharm-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={24} className="text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{t('customer.chat.title')}</h3>
            <p className="text-gray-600 mb-3">{t('customer.chat.description')}</p>
            <p className="text-sm text-gray-500">{t('customer.chat.status')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServicePage;
