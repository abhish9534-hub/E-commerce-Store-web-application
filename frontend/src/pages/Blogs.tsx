import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, User, ArrowRight, Shield, Activity, Container, Terminal, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'How I deployed a full stack app using DevOps',
    excerpt: 'Lately, the term "DevOps" has become a buzzword. But what does it actually mean in a production environment?',
    author: 'Alex Rivera',
    date: 'April 15, 2026',
    cover: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800',
    category: 'DevOps',
    icon: <Terminal size={14} />
  },
  {
    id: '2',
    title: 'Kubernetes deployment guide for beginners',
    excerpt: 'Scale your applications with confidence using these battle-tested K8s deployment patterns.',
    author: 'Sarah Chen',
    date: 'April 12, 2026',
    cover: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800',
    category: 'Kubernetes',
    icon: <Container size={14} />
  },
  {
    id: '3',
    title: 'Jenkins CI/CD tutorial: From Zero to Hero',
    excerpt: 'Automate your entire build and release process with this comprehensive Jenkins guide.',
    author: 'Marcus Thorne',
    date: 'April 10, 2026',
    cover: 'https://images.unsplash.com/photo-1618401471353-b98aadebc25b?auto=format&fit=crop&q=80&w=800',
    category: 'CI/CD',
    icon: <Activity size={14} />
  },
  {
    id: '4',
    title: 'DevSecOps best practices for 2026',
    excerpt: 'Security is not an afterthought. Learn how to shift-left and automate security in your pipeline.',
    author: 'Elena Vance',
    date: 'April 08, 2026',
    cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    category: 'Security',
    icon: <Shield size={14} />
  },
  {
    id: '5',
    title: 'Monitoring with Grafana: Visualizing Metrics',
    excerpt: 'Learn how to build beautiful dashboards that provide real-time insights into your cluster health.',
    author: 'David Zhang',
    date: 'April 05, 2026',
    cover: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800',
    category: 'Monitoring',
    icon: <BarChart3 size={14} />
  }
];

export default function Blogs() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* Technical Editorial Header - Recipe 1 + 2 Blend */}
      <section className="px-10 md:px-20 py-24 bg-primary text-white overflow-hidden relative border-b border-accent/20">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <div className="text-[25vw] font-bold leading-none tracking-tighter opacity-10 select-none whitespace-nowrap">
             STACK
           </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl space-y-8 relative z-10"
        >
          <div className="inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.4em] text-accent">
            <BookOpen size={14} />
            <span>DevOps Knowledge Base</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-normal serif leading-[0.85] tracking-tighter">
            Architectural <br /> <span className="italic font-light">Insights</span>.
          </h1>
          <p className="text-xl text-stone-300 font-light max-w-2xl leading-relaxed">
            A specialized journal focused on Cloud-Native engineering, automated provenance, and the craftsmanship of resilient systems.
          </p>
        </motion.div>
      </section>

      {/* Advanced Filter / Stats Rail - Recipe 1 Style */}
      <div className="px-10 md:px-20 py-6 border-b border-stone-200 bg-white sticky top-[70px] z-40 hidden md:block">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          <div className="flex gap-8">
            {['All Docs', 'Kubernetes', 'CI/CD', 'Security', 'Infrastructure'].map((cat, i) => (
              <button key={i} className="text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col items-end">
              <span className="text-[9px] uppercase tracking-tighter text-stone-400">Total Entries</span>
              <span className="font-mono text-xs font-bold">0{BLOG_POSTS.length}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[9px] uppercase tracking-tighter text-stone-400">Last Commit</span>
              <span className="font-mono text-xs font-bold">2026.04.18</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs Grid */}
      <div className="px-10 md:px-20 mt-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-stone-200 group flex flex-col hover:border-accent transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src={post.cover} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow space-y-5">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-accent">
                  <div className="flex items-center gap-2">
                    {post.icon}
                    <span>{post.category}</span>
                  </div>
                  <span className="text-stone-400">{post.date}</span>
                </div>
                
                <h2 className="text-2xl font-normal serif group-hover:text-accent transition-colors leading-tight">
                  <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                </h2>
                
                <p className="text-stone-500 font-light leading-relaxed line-clamp-3 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                   <div className="flex items-center space-x-2 text-[11px] font-medium text-stone-600">
                     <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                     <span>{post.author}</span>
                   </div>
                   <ArrowRight size={16} className="text-stone-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* System Architecture Reference - Recipe 1 Style */}
      <section className="px-10 md:px-20 py-32 mt-20 bg-stone-100 border-y border-stone-200">
        <div className="max-w-[1400px] mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-l-4 border-accent pl-8">
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent">Deployment Infrastructure</h3>
              <h2 className="text-5xl font-normal serif">Hybrid GitOps Architecture</h2>
            </div>
            <p className="text-stone-500 max-w-md font-light italic">
              "Every line of documentation is as critical as the code that executes it."
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white border border-stone-300 p-10 space-y-8">
              <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-stone-400">
                 <Activity size={14} />
                 <span>CI/CD Pipeline Flow</span>
              </div>
              <div className="space-y-6">
                {[
                  { step: '01', action: 'Code Push', tool: 'GitHub Actions' },
                  { step: '02', action: 'Quality Gate', tool: 'SonarQube' },
                  { step: '03', action: 'Security Scan', tool: 'Trivy / DAST' },
                  { step: '04', action: 'Image Build', tool: 'Docker Multi-stage' },
                  { step: '05', action: 'K8s Sync', tool: 'ArgoCD / Helm' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-help">
                    <div className="flex items-center gap-6">
                      <span className="font-mono text-xs text-accent">{item.step}</span>
                      <span className="text-sm font-medium text-primary">{item.action}</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase text-stone-400 group-hover:text-accent">{item.tool}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary text-white p-10 flex flex-col justify-center space-y-6 border border-primary">
               <h3 className="text-2xl font-light italic serif">Infrastructure as Code</h3>
               <p className="text-stone-400 text-sm leading-relaxed">
                 Our entire stack is provisioned via Terraform, ensuring that environments are reproducible, version-controlled, and audited. From VPC peering to EKS cluster configurations, nothing is manual.
               </p>
               <div className="pt-6 flex gap-4">
                  <div className="px-4 py-2 border border-white/20 text-[10px] uppercase font-bold tracking-widest">HCL Configs</div>
                  <div className="px-4 py-2 border border-white/20 text-[10px] uppercase font-bold tracking-widest">AWS Modules</div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
