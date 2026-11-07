import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function useCopy() {
  const { i18n } = useTranslation();
  return (ko: string, en: string) => i18n.resolvedLanguage?.startsWith('en') ? en : ko;
}
export function Section({ label, title, children, tone = '', id }: {label: string; title: ReactNode; children?: ReactNode; tone?: string; id?: string}) {
  return <section className={`brand-section ${tone}`} id={id}><p className="section-label">{label}</p><h2>{title}</h2>{children}</section>;
}
export function Button({children, to, href, ...props}: {children: ReactNode; to?: string; href?: string; 'data-enter'?: boolean}) {
  return to ? <Link className="brand-button" to={to} {...props}>{children}</Link> : <a className="brand-button" href={href} {...props}>{children}</a>;
}
export const repository = 'https://github.com/guinnessNet/pharmsq-ndsd';
