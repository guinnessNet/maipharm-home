type StructuredDataInput = {
  pathname: string;
  name: string;
  description: string;
  language: string;
  productNames: string[];
  faq?: string[][];
  category?: string;
};

export function buildStructuredData(input: StructuredDataInput): Record<string, unknown>[] {
  const path = input.pathname === '/' ? '/' : input.pathname.replace(/\/+$/, '');
  const url = `https://maipharm.com${path}`;
  const isProduct = /^\/products\/[1-8]$/.test(path);
  const isNdsd = path === '/products/ndsd';
  const type = isProduct ? 'Product' : isNdsd ? 'SoftwareSourceCode' : path === '/about' ? 'AboutPage' : path === '/customer' ? 'ContactPage' : path === '/products' ? 'CollectionPage' : 'WebPage';
  const organization = {
    '@type': 'Organization', name: '주식회사 마이팜', url: 'https://maipharm.com/',
    logo: 'https://maipharm.com/img/brand/logo-color.png',
    address: { '@type': 'PostalAddress', streetAddress: '공단1대로 204 32동 306호', addressLocality: '시흥시', addressRegion: '경기도', addressCountry: 'KR' },
  };
  const schema: Record<string, unknown>[] = [{
    '@context': 'https://schema.org', '@type': type,
    name: input.name, description: input.description, url,
    ...(isProduct ? { category: input.category, brand: { '@type': 'Brand', name: 'MaiPharm' }, manufacturer: organization } : { inLanguage: input.language, publisher: organization }),
    ...(isNdsd ? { codeRepository: 'https://github.com/guinnessNet/pharmsq-ndsd', programmingLanguage: 'TypeScript' } : {}),
  }];
  if (path !== '/') {
    const english = input.language.startsWith('en');
    const crumbs = [{ '@type': 'ListItem', position: 1, name: english ? 'Home' : '홈', item: 'https://maipharm.com/' }];
    if (isProduct || isNdsd) crumbs.push({ '@type': 'ListItem', position: 2, name: english ? 'Solutions' : '솔루션', item: 'https://maipharm.com/products' });
    crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: input.name, item: url });
    schema.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs });
  }
  if (path === '/products') schema.push({
    '@context': 'https://schema.org', '@type': 'ItemList',
    itemListElement: input.productNames.map((name, index) => ({ '@type': 'ListItem', position: index + 1, name, url: `https://maipharm.com/products/${index + 1}` })),
  });
  if (input.faq?.length) schema.push({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: input.faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  });
  return schema;
}
