import { Link } from '@tanstack/react-router';
import { Globe, ShieldCheck, Smartphone, Gauge, Server, Palette, ShoppingBag, LayoutDashboard, Code2, ArrowUpRight, Users } from 'lucide-react';
import { siGithub, siVercel, siGoogle } from 'simple-icons';
import { Reveal } from './Reveal';

function GithubLogo() { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={siGithub.path} /></svg>; }
function GoogleLogo() { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={siGoogle.path} /></svg>; }
function VercelLogo() { return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={siVercel.path} /></svg>; }

const TOOLS = [
  { c: '#181717', icon: GithubLogo, t: 'GitHub', d: 'Clean, versioned code you own forever.' },
  { c: '#000000', icon: VercelLogo, t: 'Vercel', d: 'Lightning-fast global hosting & deploys.' },
  { c: '#1A73E8', icon: Globe, t: 'Your domain', d: 'Setup, connection and email-ready DNS.' },
  { c: '#0F9D58', icon: ShieldCheck, t: 'SSL & security', d: 'HTTPS, protection and safe forms.' },
  { c: '#4285F4', icon: GoogleLogo, t: 'SEO ready', d: 'Indexed on Google from day one.' },
  { c: '#7C5CFF', icon: Smartphone, t: 'Every device', d: 'Phones, tablets, laptops, big screens.' },
  { c: '#F59E0B', icon: Gauge, t: 'Speed', d: 'Optimised to load in a blink.' },
  { c: '#0EA5E9', icon: Server, t: 'Backend', d: 'Databases, logins and live data.' },
  { c: '#E4405F', icon: Palette, t: 'UI / UX design', d: 'Brand-led, beautiful interfaces.' },
  { c: '#96BF48', icon: ShoppingBag, t: 'E-commerce', d: 'Stores, carts and checkouts.' },
  { c: '#6366F1', icon: LayoutDashboard, t: 'Dashboards', d: 'Admin panels that make sense.' },
  { c: '#10B981', icon: Code2, t: 'Web apps', d: 'Custom tools built for your workflow.' },
];

export function Toolkit() {
  return (
    <section className="section-space site-container">
      <Reveal><div className="section-top"><div><span className="eyebrow">Everything a website needs</span><h2>One studio.<br /><em>Every piece handled.</em></h2></div><Link to="/services" className="text-link">See all services <ArrowUpRight /></Link></div></Reveal>
      <div className="tool-grid">
        {TOOLS.map((x, i) => (
          <Reveal key={x.t} delay={(i % 4) * 60}>
            <div className="tool-card" style={{ ['--brand-c' as string]: x.c }}><span className={`tool-icon${i < 2 ? ' tool-brand-icon' : ''}`}><x.icon /></span><h3>{x.t}</h3><p>{x.d}</p></div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="team-banner">
          <Users />
          <div><strong>20+ team members</strong><span>Designers, developers & strategists — led by founder Syed Abdul Wahab.</span></div>
          <Link to="/contact" className="studio-button team-banner-cta">Work with us <ArrowUpRight /></Link>
        </div>
      </Reveal>
    </section>
  );
}
