import { getNdsdFaq } from '../content/faq';
import { Link } from 'react-router-dom';
import { Button, Section, repository, useCopy } from '../components/BrandUI';
export default function NdsdPage() {
  const c=useCopy();
  return <div className="ndsd-page"><section className="brand-section mist"><p className="section-label">SOLUTIONS / OPEN SOURCE</p><h1>{c('NDSD 업로드 모듈','NDSD upload module')}</h1><h2>{c('대체조제 사후통보의','Substitution reporting')}<br />{c('전송과 확인을','Upload and')}<br className="mobile-break" />{c(' 돕습니다',' verification')}</h2><p className="hero-description">{c('약국 관리 프로그램의 데이터를 심평원 NDSD에 업로드하는 Windows용 모듈입니다','A Windows module that transfers substitution records from pharmacy software to NDSD')}</p><Button href={repository}>{c('공개 문서 확인하기','Read public documentation')} ↗</Button><Link className="brand-text-link" to="/products">{c('전체 솔루션으로 돌아가기','Back to all solutions')} ↗</Link></section>
    <Section label="AT A GLANCE" title={c('이런 분께 필요합니다','Who it is for')}><p className="section-lead">{c('대체조제 정보를 전송하는 약국과 기존 프로그램에 전송 기능을 연결하려는 개발팀을 위한 모듈입니다','For pharmacies sending substitution records and developers integrating the transfer function into existing software')}</p><dl className="ndsd-facts">{[
      [c('주요 기능','Features'),c('엑셀 변환 · 포털 업로드 · 등재 결과 확인','Excel conversion · Portal upload · Result checks')],
      [c('지원 환경','Environment'),c('Windows PC · NPKI 인증서','Windows PC · NPKI certificate')],
      [c('연동 조건','Integration'),c('호환 프로그램의 연동 규격 구현 필요','Compatible software must implement the protocol')],
      [c('도입 비용','Implementation cost'),c('연동·설정 지원은 범위 확인 후 별도 견적','Integration and setup support quoted after scope review')]
    ].map(([a,b])=><div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl></Section>
    <Section label="WORKFLOW" tone="forest" title={<>{c('한 번의 전송','One transfer')}<br />{c('확인까지 이어지는 흐름','A workflow through to verification')}</>}><ol className="brand-columns workflow">{[
      [c('01 / 준비','01 / Prepare'),c('프로그램에서 전송할 정보를 준비합니다','Prepare the information to send in your software')],
      [c('02 / 업로드','02 / Upload'),c('인증서로 로그인해 NDSD에 업로드합니다','Sign in with your certificate and upload to NDSD')],
      [c('03 / 확인','03 / Verify'),c('등재 여부와 처리 결과를 확인합니다','Check registration and processing results')]
    ].map(([a,b])=><li key={a}><p>{a}</p><h3>{b}</h3></li>)}</ol></Section>
    <Section label="BOUNDARIES" title={c('도입 전에 확인할 내용','Before you start')}><p className="section-lead">{c('설치만으로 모든 프로그램이 자동 연동되지는 않습니다 현재 프로그램의 연동 지원과 인증서 환경을 먼저 확인해 주세요','Installation alone does not connect every program Check integration support and your certificate environment first')}</p><p>{c('현재 공개 저장소에는 자동화 로직의 일부가 비공개 패키지로 안내되어 있습니다 공개 소스의 범위와 배포 조건은 최신 문서를 확인하세요','The public repository identifies some automation logic as private packages Check current documentation for source availability and distribution terms')}</p><a className="brand-text-link" href={`${repository}/blob/main/docs/PROTOCOL.md`}>{c('연동 규격 확인','View integration protocol')} ↗</a></Section>
    <Section label="GET STARTED" tone="mist" title={c('현재 환경 확인부터 시작하세요','Start with your current environment')}><ol className="start-steps">{[
      [c('1 환경 확인','1 Check your environment'),c('Windows와 인증서 사용하는 약국 프로그램을 확인합니다','Check Windows your certificate and pharmacy software')],
      [c('2 문서 확인','2 Read the documentation'),c('최신 배포본과 설치 안내 연동 규격을 확인합니다','Review the latest release installation guide and protocol')],
      [c('3 연결 및 검증','3 Connect and verify'),c('실제 적용 범위를 협의하고 전송 결과를 확인합니다','Agree the implementation scope and verify transfer results')]
    ].map(([a,b])=><li key={a}><h3>{a}</h3><p>{b}</p></li>)}</ol><div className="download-links"><a href={`${repository}/releases/latest/download/pharmsq-ndsd-Setup.exe`} download>{c('Windows 설치 파일 다운로드','Download Windows installer')} ↗</a><a href={`${repository}/releases`}>{c('전체 릴리스 보기','All releases')} ↗</a></div></Section>
    <Section label="FAQ" title={c('질문에 바로 답합니다','Answers to your questions')}><div className="brand-faq">{getNdsdFaq(c).map(([a,b])=><article key={a}><h3>{a}</h3><p>{b}</p></article>)}</div><a className="scope-note" href={repository}>{c('기능 근거 · 공개 저장소 README','Feature source · Public repository README')} ↗</a></Section>
  </div>;
}
