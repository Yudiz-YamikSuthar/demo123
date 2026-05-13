import React, { useState } from 'react';
import { useMultisite } from '../context/MultisiteContext';
import { 
  Network, 
  Layout, 
  Users, 
  FileText, 
  Settings, 
  Save, 
  ExternalLink,
  ChevronRight,
  Info,
  Layers,
  Palette,
  Globe,
  Bell,
  Search,
  Plus,
  Image as ImageIcon,
  Clock,
  ChevronDown,
  GraduationCap,
  Briefcase,
  CalendarDays,
  Phone,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type AdminSection = 'programs' | 'philosophy' | 'admissions' | 'careers' | 'homepage' | 'staff' | 'photos' | 'contact';

export const AdminView: React.FC = () => {
  const { 
    currentSite, 
    sharedContent, 
    updateSharedContent, 
    updateSiteContent,
    currentSiteId,
    setSite
  } = useMultisite();
  
  const [activeSection, setActiveSection] = useState<AdminSection>('philosophy');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [showSiteSwitcher, setShowSiteSwitcher] = useState(false);

  const handleSave = () => {
    setSaveStatus('Syncing with Network...');
    setTimeout(() => setSaveStatus('Changes deployed successfully!'), 1500);
    setTimeout(() => setSaveStatus(null), 4000);
  };

  const SidebarItem = ({ id, icon: Icon, label, isShared }: { id: AdminSection, icon: any, label: string, isShared: boolean }) => (
    <button
      onClick={() => setActiveSection(id)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
        activeSection === id 
          ? 'bg-[#5A5A40] text-white shadow-lg shadow-[#5A5A40]/30' 
          : 'text-gray-500 hover:bg-gray-100'
      }`}
    >
      <Icon className={`w-4 h-4 ${activeSection === id ? 'text-white' : 'text-gray-400'}`} />
      <span className="truncate">{label}</span>
      {activeSection === id && <motion.div layoutId="active-pill" className="ml-auto w-1 h-4 bg-white/50 rounded-full shrink-0" />}
    </button>
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex font-sans">
      {/* SIDEBAR */}
      <aside className="hidden md:flex w-64 border-r border-[#E5E2D9] bg-white p-6 flex flex-col fixed h-full z-20 overflow-y-auto">
        <div className="flex items-center gap-3 px-2 mb-10">
          <div>
            <h2 className="font-bold text-gray-900 text-sm leading-tight tracking-tight uppercase">Montessori</h2>
            <p className="text-[10px] uppercase font-bold text-[#A5A299] tracking-widest">Network Admin</p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="px-4 text-[10px] font-extrabold uppercase text-[#A5A299] tracking-[0.25em] mb-4">Shared Page Assets</p>
          <SidebarItem id="programs" icon={GraduationCap} label="Programs" isShared={true} />
          <SidebarItem id="philosophy" icon={FileText} label="Philosophy" isShared={true} />
          <SidebarItem id="admissions" icon={CalendarDays} label="Admissions" isShared={true} />
          <SidebarItem id="careers" icon={Briefcase} label="Careers" isShared={true} />
          
          <div className="h-px bg-[#F0EEE6] my-8 mx-4" />
          
          <p className="px-4 text-[10px] font-extrabold uppercase text-[#A5A299] tracking-[0.25em] mb-4">Unique Site Data</p>
          <SidebarItem id="homepage" icon={Layout} label="Homepage" isShared={false} />
          <SidebarItem id="staff" icon={Users} label="Staff / Team" isShared={false} />
          <SidebarItem id="photos" icon={ImageIcon} label="Campus Photos" isShared={false} />
          <SidebarItem id="contact" icon={Phone} label="Hours & Contact" isShared={false} />
        </div>

        <div className="mt-auto pt-6 bg-white sticky bottom-0">
          <div className="bg-[#F9F8F3] p-4 rounded-xl border border-[#EBE9E0]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-bold uppercase text-[#A5A299]">Live Sync</span>
            </div>
            <p className="text-[10px] text-[#8C8980] leading-tight">
              Changes to shared pages affect all network sites instantly.
            </p>
          </div>
        </div>
      </aside>

      {/* TOP BAR */}
      <header className="fixed top-0 md:left-64 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-[#E5E2D9] px-8 flex items-center justify-between z-10">
        <div className="relative">
          <button 
            onClick={() => setShowSiteSwitcher(!showSiteSwitcher)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 rounded-lg transition-all group"
          >
            <span className="text-sm font-bold text-gray-700">{currentSite.name}</span>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showSiteSwitcher ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {showSiteSwitcher && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#E5E2D9] rounded-xl shadow-2xl p-2 z-50 overflow-hidden"
              >
                <p className="px-3 py-2 text-[10px] uppercase font-bold text-gray-400 tracking-wider">Switch Site Branding</p>
                <button 
                  onClick={() => { setSite('brightonview'); setShowSiteSwitcher(false); }}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between group ${currentSiteId === 'brightonview' ? 'bg-[#F9F8F3]' : 'hover:bg-gray-50'}`}
                >
                  <span className={`text-sm font-medium ${currentSiteId === 'brightonview' ? 'text-[#5A5A40] font-bold' : 'text-gray-700'}`}>Brighton View</span>
                </button>
                <button 
                  onClick={() => { setSite('parkview'); setShowSiteSwitcher(false); }}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between group ${currentSiteId === 'parkview' ? 'bg-[#F9F8F3]' : 'hover:bg-gray-50'}`}
                >
                  <span className={`text-sm font-medium ${currentSiteId === 'parkview' ? 'text-[#5A5A40] font-bold' : 'text-gray-700'}`}>Parkview</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#F9F8F3] rounded-lg border border-[#EBE9E0]">
            <Search className="w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search Master DB..." className="bg-transparent text-xs outline-none w-32" />
          </div>
          <button className="text-gray-400 hover:text-gray-600 relative">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#5A5A40] rounded-full border-2 border-white" />
          </button>
          <div className="flex items-center gap-3 pl-6 border-l border-[#F0EEE6]">
             <div className="w-8 h-8 rounded-full bg-[#5A5A40] flex items-center justify-center text-white text-xs font-bold shadow-md">AD</div>
             <div className="hidden lg:block text-left">
               <p className="text-xs font-bold text-gray-900 leading-none mb-1">Admin Team</p>
               <p className="text-[10px] text-gray-400 font-medium">Network Admin</p>
             </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="md:ml-64 pt-16 flex-1 min-h-screen">
        <div className="p-12 max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-[10px] font-extrabold text-[#5A5A40] uppercase tracking-[0.3em] mb-4">
                {(['programs', 'philosophy', 'admissions', 'careers'] as AdminSection[]).includes(activeSection) 
                  ? <Network className="w-3 h-3" /> 
                  : <Globe className="w-3 h-3" />
                }
                {(['programs', 'philosophy', 'admissions', 'careers'] as AdminSection[]).includes(activeSection) 
                  ? 'Shared Network Asset' 
                  : `Unique Campus Data: ${currentSite.name}`
                }
              </div>
              <h1 className="text-5xl font-serif text-gray-900 italic font-medium capitalize tracking-tight text-balance">
                {activeSection.replace('-', ' ')}
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <AnimatePresence>
                {saveStatus && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs font-bold text-green-600 flex items-center gap-2"
                  >
                    <Save className="w-3 h-3" />
                    {saveStatus}
                  </motion.div>
                )}
              </AnimatePresence>
              <button 
                onClick={handleSave}
                className="bg-[#5A5A40] text-white px-8 py-3 rounded-full font-bold shadow-xl shadow-[#5A5A40]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                style={{ backgroundColor: currentSite.colors.primary }}
              >
                Sync with Site
              </button>
            </div>
          </div>

          <motion.div
            key={`${activeSection}-${currentSiteId}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* CONTENT SECTIONS */}
            {activeSection === 'philosophy' && (
              <div className="space-y-8">
                <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-[#F9F8F3] rounded-2xl flex items-center justify-center text-[#5A5A40] border border-[#EBE9E0]">
                       <FileText className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-serif italic text-gray-900 tracking-tight">Philosophy Master Data</h3>
                   </div>
                   <div className="space-y-8">
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-[#A5A299] mb-3 tracking-[0.2em]">Primary Headline</label>
                        <input 
                          type="text"
                          value={sharedContent.philosophy.title}
                          onChange={(e) => updateSharedContent({...sharedContent, philosophy: {...sharedContent.philosophy, title: e.target.value}})}
                          className="w-full text-2xl font-serif italic bg-[#FAF9F6] border border-[#EBE9E0] rounded-2xl px-6 py-5 outline-none focus:ring-1 focus:ring-[#5A5A40] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-[#A5A299] mb-3 tracking-[0.2em]">Mission Statement</label>
                        <input 
                          type="text"
                          value={sharedContent.philosophy.mission}
                          onChange={(e) => updateSharedContent({...sharedContent, philosophy: {...sharedContent.philosophy, mission: e.target.value}})}
                          className="w-full text-lg font-medium bg-[#FAF9F6] border border-[#EBE9E0] rounded-2xl px-6 py-5 outline-none focus:ring-1 focus:ring-[#5A5A40] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-[#A5A299] mb-3 tracking-[0.2em]">Brand Narrative</label>
                        <textarea 
                          rows={6}
                          value={sharedContent.philosophy.content}
                          onChange={(e) => updateSharedContent({...sharedContent, philosophy: {...sharedContent.philosophy, content: e.target.value}})}
                          className="w-full text-gray-600 leading-relaxed bg-[#FAF9F6] border border-[#EBE9E0] rounded-2xl px-6 py-5 outline-none focus:ring-1 focus:ring-[#5A5A40] transition-all"
                        />
                      </div>
                   </div>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                   <h3 className="text-xl font-serif italic text-gray-900 mb-8 border-b border-[#F0EEE6] pb-4">Core Educational Values</h3>
                   <div className="grid grid-cols-1 gap-8">
                     {sharedContent.philosophy.coreValues.map((val, i) => (
                       <div key={i} className="flex gap-6 items-start bg-[#FAF9F6] p-8 rounded-[2rem] border border-[#EBE9E0] group hover:border-[#5A5A40] transition-colors">
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm font-extrabold text-[#5A5A40] shadow-sm border border-[#EBE9E0]">{i+1}</div>
                          <div className="flex-1 space-y-3">
                            <input 
                              className="w-full text-lg font-serif italic font-medium bg-transparent outline-none text-gray-900"
                              value={val.title}
                              onChange={(e) => {
                                const v = [...sharedContent.philosophy.coreValues];
                                v[i].title = e.target.value;
                                updateSharedContent({...sharedContent, philosophy: {...sharedContent.philosophy, coreValues: v}});
                              }}
                            />
                            <textarea 
                              className="w-full text-sm text-gray-500 bg-transparent outline-none leading-relaxed h-14"
                              value={val.desc}
                              onChange={(e) => {
                                const v = [...sharedContent.philosophy.coreValues];
                                v[i].desc = e.target.value;
                                updateSharedContent({...sharedContent, philosophy: {...sharedContent.philosophy, coreValues: v}});
                              }}
                            />
                          </div>
                       </div>
                     ))}
                   </div>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                   <h3 className="text-xl font-serif italic text-gray-900 mb-8 border-b border-[#F0EEE6] pb-4">Methodological Pillars</h3>
                   <div className="grid grid-cols-3 gap-6">
                     {sharedContent.philosophy.pillars.map((pillar, i) => (
                       <div key={i} className="space-y-5 p-8 bg-[#FAF9F6] rounded-[2rem] border border-[#EBE9E0] group hover:bg-white transition-all">
                          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#5A5A40] shadow-sm border border-[#EBE9E0]">
                            <Layers className="w-6 h-6" />
                          </div>
                          <input 
                            className="w-full font-serif text-lg italic font-medium bg-transparent outline-none text-gray-900"
                            value={pillar.title}
                            onChange={(e) => {
                              const p = [...sharedContent.philosophy.pillars];
                              p[i].title = e.target.value;
                              updateSharedContent({...sharedContent, philosophy: {...sharedContent.philosophy, pillars: p}});
                            }}
                          />
                          <textarea 
                            className="w-full text-xs text-gray-400 bg-transparent outline-none h-20 leading-relaxed font-medium"
                            value={pillar.desc}
                            onChange={(e) => {
                              const p = [...sharedContent.philosophy.pillars];
                              p[i].desc = e.target.value;
                              updateSharedContent({...sharedContent, philosophy: {...sharedContent.philosophy, pillars: p}});
                            }}
                          />
                       </div>
                     ))}
                   </div>
                </div>
              </div>
            )}

            {activeSection === 'programs' && (
               <div className="space-y-8">
                  <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-[#F9F8F3] rounded-2xl flex items-center justify-center text-[#5A5A40] border border-[#EBE9E0]">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <h3 className="text-3xl font-serif italic text-gray-900 tracking-tight">Universal Programs</h3>
                    </div>
                    <div className="grid gap-8">
                      {sharedContent.programs.map((prog, i) => (
                        <div key={i} className="p-10 bg-white rounded-[2rem] border border-[#EBE9E0] shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-6">
                             <input 
                              className="font-serif text-3xl bg-transparent outline-none text-gray-900 italic tracking-tight"
                              value={prog.title}
                              onChange={(e) => {
                                const p = [...sharedContent.programs];
                                p[i].title = e.target.value;
                                updateSharedContent({...sharedContent, programs: p});
                              }}
                            />
                            <span className="text-[10px] font-bold text-[#A5A299] uppercase tracking-widest">{prog.subtitle}</span>
                          </div>
                          <textarea 
                            className="w-full bg-transparent outline-none text-gray-600 leading-relaxed mb-6"
                            value={prog.content}
                            onChange={(e) => {
                              const p = [...sharedContent.programs];
                              p[i].content = e.target.value;
                              updateSharedContent({...sharedContent, programs: p});
                            }}
                          />
                          
                          {prog.schedule && (
                            <div className="space-y-3">
                              <h4 className="text-[10px] font-bold uppercase text-[#A5A299] tracking-widest border-b border-[#E5E2D9] pb-2 mb-4">Sample Schedule</h4>
                              <div className="grid grid-cols-2 gap-4">
                                {prog.schedule.map((item, si) => (
                                  <div key={si} className="flex gap-3 items-center">
                                    <input 
                                      className="w-20 text-[10px] font-mono bg-white border border-[#E5E2D9] rounded px-2 py-1"
                                      value={item.time}
                                      onChange={(e) => {
                                        const p = [...sharedContent.programs];
                                        p[i].schedule![si].time = e.target.value;
                                        updateSharedContent({...sharedContent, programs: p});
                                      }}
                                    />
                                    <input 
                                      className="flex-1 text-xs bg-transparent outline-none"
                                      value={item.activity}
                                      onChange={(e) => {
                                        const p = [...sharedContent.programs];
                                        p[i].schedule![si].activity = e.target.value;
                                        updateSharedContent({...sharedContent, programs: p});
                                      }}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            )}

            {activeSection === 'admissions' && (
              <div className="space-y-8">
                <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-[#F9F8F3] rounded-2xl flex items-center justify-center text-[#5A5A40] border border-[#EBE9E0]">
                       <CalendarDays className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-serif italic text-gray-900 tracking-tight">Network Admissions</h3>
                   </div>
                   <div className="space-y-8">
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-[#A5A299] mb-3 tracking-[0.2em]">Headline</label>
                        <input 
                          type="text"
                          value={sharedContent.admissions.title}
                          onChange={(e) => updateSharedContent({...sharedContent, admissions: {...sharedContent.admissions, title: e.target.value}})}
                          className="w-full text-2xl font-serif italic bg-[#FAF9F6] border border-[#EBE9E0] rounded-2xl px-6 py-5 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-[#A5A299] mb-3 tracking-[0.2em]">Admissions Overview</label>
                        <textarea 
                          rows={6}
                          value={sharedContent.admissions.content}
                          onChange={(e) => updateSharedContent({...sharedContent, admissions: {...sharedContent.admissions, content: e.target.value}})}
                          className="w-full text-gray-600 leading-relaxed bg-[#FAF9F6] border border-[#EBE9E0] rounded-2xl px-6 py-5 outline-none"
                        />
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                     <h3 className="text-xl font-serif italic text-gray-900 mb-8 border-b border-[#F0EEE6] pb-4">Process Steps</h3>
                     <div className="space-y-5">
                        {sharedContent.admissions.steps.map((step, i) => (
                          <div key={i} className="flex items-center gap-5 p-5 bg-[#FAF9F6] rounded-2xl border border-[#EBE9E0] transition-colors hover:border-[#5A5A40]">
                            <div className="w-8 h-8 rounded-xl bg-[#5A5A40] text-white flex items-center justify-center text-xs font-extrabold shadow-md leading-none">{step.step}</div>
                            <input 
                              className="flex-1 bg-transparent text-sm font-medium text-gray-700 outline-none"
                              value={step.detail}
                              onChange={(e) => {
                                const s = [...sharedContent.admissions.steps];
                                s[i].detail = e.target.value;
                                updateSharedContent({...sharedContent, admissions: {...sharedContent.admissions, steps: s}});
                              }}
                            />
                          </div>
                        ))}
                     </div>
                  </div>

                  <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                     <h3 className="text-xl font-serif italic text-gray-900 mb-8 border-b border-[#F0EEE6] pb-4">Tuition Tiers</h3>
                     <div className="space-y-5">
                        {sharedContent.admissions.tuition.map((t, i) => (
                          <div key={i} className="p-6 bg-[#FAF9F6] rounded-[1.5rem] border border-[#EBE9E0] flex justify-between items-center group hover:bg-white transition-all">
                            <div className="space-y-1.5">
                               <input 
                                className="font-serif italic text-lg font-medium bg-transparent outline-none block text-gray-900"
                                value={t.tier}
                                onChange={(e) => {
                                  const tu = [...sharedContent.admissions.tuition];
                                  tu[i].tier = e.target.value;
                                  updateSharedContent({...sharedContent, admissions: {...sharedContent.admissions, tuition: tu}});
                                }}
                               />
                               <input 
                                className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest bg-transparent outline-none block"
                                value={t.details}
                                onChange={(e) => {
                                  const tu = [...sharedContent.admissions.tuition];
                                  tu[i].details = e.target.value;
                                  updateSharedContent({...sharedContent, admissions: {...sharedContent.admissions, tuition: tu}});
                                }}
                               />
                            </div>
                            <input 
                              className="font-serif italic text-2xl font-medium text-[#5A5A40] text-right bg-transparent outline-none w-32"
                              value={t.price}
                              onChange={(e) => {
                                const tu = [...sharedContent.admissions.tuition];
                                tu[i].price = e.target.value;
                                updateSharedContent({...sharedContent, admissions: {...sharedContent.admissions, tuition: tu}});
                              }}
                            />
                          </div>
                        ))}
                     </div>
                  </div>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                   <h3 className="text-xl font-serif italic text-gray-900 mb-8 border-b border-[#F0EEE6] pb-4">Universal FAQ</h3>
                   <div className="grid grid-cols-2 gap-8">
                      {sharedContent.admissions.faqs.map((faq, i) => (
                        <div key={i} className="space-y-4 bg-[#FAF9F6] p-8 rounded-[2rem] border border-[#EBE9E0] group hover:bg-white transition-all">
                           <input 
                            className="w-full font-serif italic text-lg font-medium bg-transparent outline-none border-b border-[#EBE9E0] pb-3 text-gray-900 placeholder:text-gray-300"
                            value={faq.q}
                            placeholder="Question text..."
                            onChange={(e) => {
                              const f = [...sharedContent.admissions.faqs];
                              f[i].q = e.target.value;
                              updateSharedContent({...sharedContent, admissions: {...sharedContent.admissions, faqs: f}});
                            }}
                          />
                          <textarea 
                            className="w-full text-sm text-gray-500 bg-transparent outline-none h-16 leading-relaxed"
                            value={faq.a}
                            placeholder="Answer content..."
                            onChange={(e) => {
                              const f = [...sharedContent.admissions.faqs];
                              f[i].a = e.target.value;
                              updateSharedContent({...sharedContent, admissions: {...sharedContent.admissions, faqs: f}});
                            }}
                          />
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            )}

            {activeSection === 'careers' && (
              <div className="space-y-8">
                <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-[#F9F8F3] rounded-2xl flex items-center justify-center text-[#5A5A40] border border-[#EBE9E0]">
                       <Briefcase className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-serif italic text-gray-900 tracking-tight">Shared Job Board</h3>
                   </div>
                   <div className="space-y-6">
                      <label className="block text-[10px] font-extrabold uppercase text-[#A5A299] mb-3 tracking-[0.2em]">Careers Narrative</label>
                      <textarea 
                        rows={6}
                        value={sharedContent.careers.content}
                        onChange={(e) => updateSharedContent({...sharedContent, careers: {...sharedContent.careers, content: e.target.value}})}
                        className="w-full text-gray-600 bg-[#FAF9F6] border border-[#EBE9E0] rounded-[1.5rem] px-6 py-5 outline-none"
                      />
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                     <h3 className="text-xl font-serif italic text-gray-900 mb-8 border-b border-[#F0EEE6] pb-4">Shared Benefits</h3>
                     <div className="grid grid-cols-2 gap-4">
                        {sharedContent.careers.benefits.map((benefit, i) => (
                          <input 
                            key={i}
                            className="p-4 bg-[#FAF9F6] rounded-xl border border-[#EBE9E0] text-xs font-extrabold text-[#5A5A40] uppercase tracking-widest outline-none focus:ring-1 focus:ring-[#5A5A40] transition-all"
                            value={benefit}
                            onChange={(e) => {
                              const b = [...sharedContent.careers.benefits];
                              b[i] = e.target.value;
                              updateSharedContent({...sharedContent, careers: {...sharedContent.careers, benefits: b}});
                            }}
                          />
                        ))}
                     </div>
                  </div>

                  <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                     <h3 className="text-xl font-serif italic text-gray-900 mb-8 border-b border-[#F0EEE6] pb-4">Staff Testimonials</h3>
                     <div className="space-y-6">
                        {sharedContent.careers.testimonials.map((t, i) => (
                          <div key={i} className="space-y-3 bg-[#FAF9F6] p-6 rounded-[1.5rem] border border-[#EBE9E0] transition-transform hover:-translate-y-1">
                             <textarea 
                              className="w-full text-sm text-gray-600 italic bg-white p-5 rounded-2xl border border-[#EBE9E0] outline-none leading-relaxed h-24"
                              value={t.quote}
                              onChange={(e) => {
                                const ts = [...sharedContent.careers.testimonials];
                                ts[i].quote = e.target.value;
                                updateSharedContent({...sharedContent, careers: {...sharedContent.careers, testimonials: ts}});
                              }}
                             />
                             <input 
                              className="w-full text-[10px] font-extrabold text-[#5A5A40] uppercase tracking-[0.2em] bg-transparent outline-none px-2"
                              value={t.author}
                              onChange={(e) => {
                                const ts = [...sharedContent.careers.testimonials];
                                ts[i].author = e.target.value;
                                updateSharedContent({...sharedContent, careers: {...sharedContent.careers, testimonials: ts}});
                              }}
                             />
                          </div>
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'homepage' && (
              <div className="space-y-8">
                <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-[#F9F8F3] rounded-2xl flex items-center justify-center text-[#5A5A40] border border-[#EBE9E0]">
                       <Layout className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-serif italic text-gray-900 tracking-tight">Campus Home Page</h3>
                   </div>
                   <div className="space-y-8">
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-[#A5A299] mb-3 tracking-[0.2em]">Hero Title</label>
                        <input 
                          type="text"
                          value={currentSite.homepage.heroTitle}
                          onChange={(e) => updateSiteContent(currentSiteId, { homepage: {...currentSite.homepage, heroTitle: e.target.value} })}
                          className="w-full text-2xl font-serif italic bg-[#FAF9F6] border border-[#EBE9E0] rounded-2xl px-6 py-4 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-[#A5A299] mb-3 tracking-[0.2em]">Intro Narrative</label>
                        <textarea 
                          rows={4}
                          value={currentSite.homepage.welcomeText}
                          onChange={(e) => updateSiteContent(currentSiteId, { homepage: {...currentSite.homepage, welcomeText: e.target.value} })}
                          className="w-full text-gray-600 leading-relaxed bg-[#FAF9F6] border border-[#EBE9E0] rounded-2xl px-6 py-4 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-[#A5A299] mb-4 tracking-[0.2em]">Hero Imagery</label>
                        <img src={currentSite.homepage.imageUrl} className="w-full h-48 object-cover rounded-2xl border border-[#E5E2D9] mb-4" alt="" referrerPolicy="no-referrer" />
                        <button className="w-full py-3 border-2 border-dashed border-[#E5E2D9] rounded-xl text-xs font-bold text-gray-400 hover:border-[#5A5A40] hover:text-[#5A5A40] transition-all flex items-center justify-center gap-2">
                          <ImageIcon className="w-4 h-4" /> Replace Hero Asset
                        </button>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                    <h3 className="text-xl font-serif italic text-gray-900 mb-8 border-b border-[#F0EEE6] pb-4">Campus Stats</h3>
                    <div className="grid grid-cols-1 gap-5">
                       {currentSite.homepage.stats.map((stat, i) => (
                         <div key={i} className="flex gap-4 p-4 bg-[#FAF9F6] rounded-2xl border border-[#EBE9E0]">
                           <input 
                            placeholder="Value"
                            className="w-24 bg-white border border-[#EBE9E0] rounded-xl px-4 py-2 text-lg font-serif italic font-medium text-[#5A5A40] outline-none"
                            value={stat.value}
                            onChange={(e) => {
                              const s = [...currentSite.homepage.stats];
                              s[i].value = e.target.value;
                              updateSiteContent(currentSiteId, { homepage: {...currentSite.homepage, stats: s} });
                            }}
                           />
                           <input 
                            placeholder="Label"
                            className="flex-1 bg-transparent text-[10px] font-extrabold uppercase tracking-widest text-[#A5A299] outline-none"
                            value={stat.label}
                            onChange={(e) => {
                              const s = [...currentSite.homepage.stats];
                              s[i].label = e.target.value;
                              updateSiteContent(currentSiteId, { homepage: {...currentSite.homepage, stats: s} });
                            }}
                           />
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                    <h3 className="text-xl font-serif italic text-gray-900 mb-8 border-b border-[#F0EEE6] pb-4">Social Proof</h3>
                    <div className="space-y-6">
                       {currentSite.homepage.testimonials.map((t, i) => (
                         <div key={i} className="space-y-4 bg-[#FAF9F6] p-6 rounded-[2rem] border border-[#EBE9E0] group hover:bg-white transition-all">
                           <textarea 
                            className="w-full bg-white border border-[#EBE9E0] rounded-2xl p-5 text-sm text-gray-600 italic leading-relaxed outline-none h-24"
                            value={t.text}
                            onChange={(e) => {
                              const ts = [...currentSite.homepage.testimonials];
                              ts[i].text = e.target.value;
                              updateSiteContent(currentSiteId, { homepage: {...currentSite.homepage, testimonials: ts} });
                            }}
                           />
                           <input 
                            className="w-full bg-transparent text-[10px] font-extrabold uppercase tracking-widest text-[#5A5A40] px-2 outline-none"
                            value={t.author}
                            onChange={(e) => {
                              const ts = [...currentSite.homepage.testimonials];
                              ts[i].author = e.target.value;
                              updateSiteContent(currentSiteId, { homepage: {...currentSite.homepage, testimonials: ts} });
                            }}
                           />
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'staff' && (
                <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                   <div className="flex items-center gap-4 mb-10">
                     <div className="w-12 h-12 bg-[#F9F8F3] rounded-2xl flex items-center justify-center text-[#5A5A40] border border-[#EBE9E0]">
                       <Users className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-serif italic text-gray-900 tracking-tight">Campus Faculty</h3>
                   </div>
                   <div className="grid gap-6">
                     {currentSite.staff.map((member, i) => (
                       <div key={member.id} className="flex items-center gap-8 p-8 bg-[#FAF9F6] rounded-[2.5rem] border border-[#EBE9E0] group hover:bg-white hover:shadow-xl transition-all">
                         <div className="relative">
                           <img src={member.imageUrl} className="w-24 h-24 rounded-2xl object-cover shadow-lg border-2 border-white" alt="" referrerPolicy="no-referrer" />
                         </div>
                         <div className="flex-1 space-y-3">
                            <input 
                              className="font-serif italic text-xl font-medium bg-transparent outline-none w-full text-gray-900"
                              value={member.name}
                              onChange={(e) => {
                                const s = [...currentSite.staff];
                                s[i].name = e.target.value;
                                updateSiteContent(currentSiteId, { staff: s });
                              }}
                            />
                            <input 
                              className="text-[10px] font-extrabold uppercase tracking-widest text-[#5A5A40] bg-transparent outline-none w-full"
                              value={member.role}
                              onChange={(e) => {
                                const s = [...currentSite.staff];
                                s[i].role = e.target.value;
                                updateSiteContent(currentSiteId, { staff: s });
                              }}
                            />
                            <textarea 
                                className="w-full text-xs text-gray-500 leading-relaxed bg-transparent outline-none h-16 overflow-hidden placeholder:italic"
                                placeholder="Staff member biography..."
                                value={member.bio}
                                onChange={(e) => {
                                  const s = [...currentSite.staff];
                                  s[i].bio = e.target.value;
                                  updateSiteContent(currentSiteId, { staff: s });
                                }}
                            />
                         </div>
                       </div>
                     ))}
                   </div>
                </div>
            )}

            {activeSection === 'photos' && (
                <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-[#F9F8F3] rounded-2xl flex items-center justify-center text-[#5A5A40] border border-[#EBE9E0]">
                       <ImageIcon className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-serif italic text-gray-900 tracking-tight">Campus Gallery</h3>
                   </div>
                   <div className="grid grid-cols-2 gap-8">
                      {currentSite.photos.map((photo, i) => (
                        <div key={i} className="space-y-4 p-5 bg-[#FAF9F6] rounded-[2rem] border border-[#EBE9E0] group hover:bg-white hover:shadow-lg transition-all">
                          <div className="relative group rounded-2xl overflow-hidden border border-[#E5E2D9] shadow-sm">
                            <img src={photo.url} className="w-full h-48 object-cover transition-transform group-hover:scale-110" alt="" referrerPolicy="no-referrer" />
                          </div>
                          <div className="space-y-2 px-1">
                             <input 
                              className="w-full text-sm font-serif italic font-medium bg-transparent outline-none text-gray-900"
                              placeholder="Caption"
                              value={photo.caption}
                              onChange={(e) => {
                                const p = [...currentSite.photos];
                                p[i].caption = e.target.value;
                                updateSiteContent(currentSiteId, { photos: p });
                              }}
                             />
                             <input 
                              className="w-full text-[10px] text-[#A5A299] uppercase font-extrabold tracking-[0.2em] bg-transparent outline-none"
                              placeholder="Category"
                              value={photo.category}
                              onChange={(e) => {
                                const p = [...currentSite.photos];
                                p[i].category = e.target.value;
                                updateSiteContent(currentSiteId, { photos: p });
                              }}
                             />
                          </div>
                        </div>
                      ))}
                      <button className="h-64 border-2 border-dashed border-[#E5E2D9] rounded-[2rem] flex flex-col items-center justify-center gap-3 text-gray-400 hover:border-[#5A5A40] hover:text-[#5A5A40] transition-all bg-[#FAF9F6]">
                         <Plus className="w-8 h-8" />
                         <span className="text-[10px] font-extrabold uppercase tracking-widest">Add Campus Asset</span>
                      </button>
                   </div>
                </div>
            )}

            {activeSection === 'contact' && (
              <div className="space-y-8">
                <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                   <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 bg-[#F9F8F3] rounded-2xl flex items-center justify-center text-[#5A5A40] border border-[#EBE9E0]">
                       <Clock className="w-6 h-6" />
                     </div>
                     <h3 className="text-3xl font-serif italic text-gray-900 tracking-tight">Local Access Info</h3>
                   </div>
                   <div className="grid grid-cols-2 gap-8">
                      <div className="col-span-2">
                        <label className="block text-[10px] font-extrabold uppercase text-[#A5A299] mb-3 tracking-[0.2em]">Operating Hours</label>
                        <input 
                          className="w-full text-lg font-medium bg-[#FAF9F6] border border-[#EBE9E0] rounded-2xl px-6 py-4 outline-none"
                          value={currentSite.contact.hours}
                          onChange={(e) => updateSiteContent(currentSiteId, { contact: {...currentSite.contact, hours: e.target.value} })}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-[#A5A299] mb-3 tracking-[0.2em]">Main Office Phone</label>
                        <input 
                          className="w-full text-lg font-medium bg-[#FAF9F6] border border-[#EBE9E0] rounded-2xl px-6 py-4 outline-none"
                          value={currentSite.contact.phone}
                          onChange={(e) => updateSiteContent(currentSiteId, { contact: {...currentSite.contact, phone: e.target.value} })}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-[#A5A299] mb-2">Emergency Line</label>
                        <input 
                          className="w-full bg-[#FAF9F6] border border-[#EBE9E0] rounded-xl px-4 py-3 outline-none"
                          value={currentSite.contact.emergencyPhone}
                          onChange={(e) => updateSiteContent(currentSiteId, { contact: {...currentSite.contact, emergencyPhone: e.target.value} })}
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="block text-[10px] font-bold uppercase text-[#A5A299] mb-2">Campus Address</label>
                        <input 
                          className="w-full bg-[#FAF9F6] border border-[#EBE9E0] rounded-xl px-4 py-3 outline-none"
                          value={currentSite.contact.address}
                          onChange={(e) => updateSiteContent(currentSiteId, { contact: {...currentSite.contact, address: e.target.value} })}
                        />
                      </div>
                   </div>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-[#E5E2D9] shadow-sm">
                   <h3 className="text-xl font-serif italic text-gray-900 mb-8 border-b border-[#F0EEE6] pb-4">Social Presence & Mapping</h3>
                   <div className="space-y-8">
                      <div>
                        <label className="block text-[10px] font-extrabold uppercase text-[#A5A299] mb-3 tracking-[0.2em]">Map Embed Integration</label>
                        <input 
                          className="w-full text-sm bg-[#FAF9F6] border border-[#EBE9E0] rounded-2xl px-6 py-4 outline-none font-mono"
                          value={currentSite.contact.mapUrl}
                          onChange={(e) => updateSiteContent(currentSiteId, { contact: {...currentSite.contact, mapUrl: e.target.value} })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        {currentSite.contact.socialMedia?.map((sm, i) => (
                           <div key={i} className="flex gap-3 items-center bg-[#FAF9F6] p-4 rounded-2xl border border-[#EBE9E0]">
                             <input 
                              placeholder="Platform"
                              className="w-24 bg-white border border-[#EBE9E0] rounded-xl px-3 py-2 text-[10px] font-extrabold uppercase tracking-widest text-[#5A5A40] outline-none"
                              value={sm.platform}
                              onChange={(e) => {
                                const socials = [...(currentSite.contact.socialMedia || [])];
                                socials[i].platform = e.target.value;
                                updateSiteContent(currentSiteId, { contact: {...currentSite.contact, socialMedia: socials} });
                              }}
                             />
                             <input 
                              placeholder="URL"
                              className="flex-1 bg-transparent text-xs font-medium text-gray-500 outline-none"
                              value={sm.url}
                              onChange={(e) => {
                                const socials = [...(currentSite.contact.socialMedia || [])];
                                socials[i].url = e.target.value;
                                updateSiteContent(currentSiteId, { contact: {...currentSite.contact, socialMedia: socials} });
                              }}
                             />
                           </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};
