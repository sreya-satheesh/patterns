import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ChevronRight, 
  Copy, 
  Check,
  LayoutGrid,
  BookOpen,
  Code2,
  Terminal,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PATTERNS, CATEGORIES, Category, Pattern } from './data/patterns';

// --- Components ---

const Header = ({ onMenuClick }: { onMenuClick?: () => void }) => (
  <header className="h-16 border-b border-white/5 bg-bg/80 backdrop-blur-xl flex items-center justify-between px-6 md:px-8 sticky top-0 z-50">
    <div className="flex items-center gap-4">
      {onMenuClick && (
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 text-muted hover:text-white transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}
      <div className="flex items-center gap-2 group cursor-pointer">
        <h1 className="text-xl font-display font-bold tracking-tighter text-white uppercase">Patterns</h1>
      </div>
    </div>
  </header>
);

const Sidebar = ({ 
  selectedCategory, 
  onSelectCategory 
}: { 
  selectedCategory: Category, 
  onSelectCategory: (cat: Category) => void 
}) => (
  <aside className="w-64 border-r border-white/5 bg-bg flex flex-col h-full overflow-hidden">
    <div className="p-6 flex-1 flex flex-col overflow-hidden">
      <h3 className="text-[10px] font-bold text-muted uppercase tracking-[0.3em] mb-6">Categories</h3>
      <nav className="space-y-1 flex-1 overflow-y-auto custom-scrollbar pr-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat.name}
            onClick={() => onSelectCategory(cat.name)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group ${
              selectedCategory === cat.name 
                ? 'bg-white/5 text-white' 
                : 'text-muted hover:text-white hover:bg-white/[0.02]'
            }`}
          >
            <cat.icon className={`w-4 h-4 transition-colors ${selectedCategory === cat.name ? 'text-accent' : 'text-muted group-hover:text-white/60'}`} />
            <span className="truncate">{cat.name}</span>
            {selectedCategory === cat.name && (
              <motion.div layoutId="active-cat" className="ml-auto w-1 h-4 bg-accent rounded-full flex-shrink-0" />
            )}
          </button>
        ))}
      </nav>
    </div>
  </aside>
);

const PatternList = ({ 
  patterns, 
  selectedId, 
  onSelect, 
  searchQuery, 
  setSearchQuery 
}: { 
  patterns: Pattern[], 
  selectedId: string, 
  onSelect: (id: string) => void,
  searchQuery: string,
  setSearchQuery: (q: string) => void
}) => (
  <div className="w-full md:w-80 border-r border-white/5 bg-bg/50 flex flex-col h-full overflow-hidden">
    <div className="p-6 border-b border-white/5">
      <div className="relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted group-focus-within:text-accent transition-colors" />
        <input 
          type="text" 
          placeholder="Search patterns..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white/5 border border-white/5 rounded-lg py-2 pl-9 pr-4 text-xs text-white placeholder:text-muted focus:outline-none focus:border-accent/30 transition-all"
        />
      </div>
    </div>
    <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1">
      {patterns.length > 0 ? (
        patterns.map(p => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-medium transition-all group ${
              selectedId === p.id 
                ? 'bg-accent text-bg' 
                : 'text-muted hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="truncate">{p.title}</span>
            <ChevronRight className={`w-3 h-3 transition-transform ${selectedId === p.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
          </button>
        ))
      ) : (
        <div className="p-8 text-center space-y-2">
          <p className="text-xs text-muted">No patterns found</p>
        </div>
      )}
    </div>
  </div>
);

const PatternDetail = ({ pattern }: { pattern: Pattern }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pattern.javascriptCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar bg-bg">
      <AnimatePresence mode="wait">
        <motion.div
          key={pattern.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto p-12 space-y-12"
        >
          {/* Content will go here if I use this component, but I merged it into the main App component for simplicity */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(CATEGORIES[0].name);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const filteredPatterns = useMemo(() => {
    return PATTERNS.filter(p => {
      const matchesCategory = p.category === selectedCategory;
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const [selectedPatternId, setSelectedPatternId] = useState(filteredPatterns[0]?.id || '');

  // Update selected pattern if category changes and current selection is not in new list
  useMemo(() => {
    if (selectedPatternId && !filteredPatterns.find(p => p.id === selectedPatternId)) {
      setSelectedPatternId(filteredPatterns[0]?.id || '');
    }
  }, [filteredPatterns, selectedPatternId]);

  const selectedPattern = useMemo(() => 
    PATTERNS.find(p => p.id === selectedPatternId), 
  [selectedPatternId]);

  const [copied, setCopied] = useState(false);
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-screen bg-bg text-white flex flex-col font-sans selection:bg-accent selection:text-bg overflow-hidden">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      
      <main className="flex flex-col md:flex-row flex-1 overflow-hidden relative">
        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-[60] md:hidden"
              />
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 left-0 w-72 bg-bg border-r border-white/5 z-[70] md:hidden flex flex-col"
              >
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <h3 className="text-[10px] font-bold text-muted uppercase tracking-[0.3em]">Categories</h3>
                  <button onClick={() => setIsMenuOpen(false)} className="text-muted hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-1">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.name}
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        setSearchQuery('');
                        setIsMenuOpen(false);
                        setSelectedPatternId(''); // Go back to list when changing category on mobile
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group ${
                        selectedCategory === cat.name 
                          ? 'bg-white/5 text-white' 
                          : 'text-muted hover:text-white hover:bg-white/[0.02]'
                      }`}
                    >
                      <cat.icon className={`w-4 h-4 transition-colors ${selectedCategory === cat.name ? 'text-accent' : 'text-muted group-hover:text-white/60'}`} />
                      {cat.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Panel 1: Categories (Desktop) */}
        <div className="md:block hidden h-full">
          <Sidebar 
            selectedCategory={selectedCategory} 
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              setSearchQuery('');
            }} 
          />
        </div>
        
        {/* Panel 2: Pattern List */}
        <div className={`${selectedPatternId && 'hidden md:flex'} md:flex h-full`}>
          <PatternList 
            patterns={filteredPatterns}
            selectedId={selectedPatternId}
            onSelect={setSelectedPatternId}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {/* Panel 3: Content */}
        <div className={`flex-1 overflow-y-auto custom-scrollbar bg-bg/30 ${!selectedPatternId && 'hidden md:block'}`}>
          {/* Back button for mobile */}
          {selectedPatternId && (
            <button 
              onClick={() => setSelectedPatternId('')}
              className="md:hidden flex items-center gap-2 p-6 text-[10px] font-bold uppercase tracking-widest text-muted hover:text-white transition-colors"
            >
              <ChevronRight className="w-3 h-3 rotate-180" />
              Back to list
            </button>
          )}
          <AnimatePresence mode="wait">
            {selectedPattern ? (
              <motion.div
                key={selectedPattern.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl mx-auto p-6 md:p-12 space-y-10 md:space-y-16"
              >
                {/* Title */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-6xl font-display font-bold tracking-tighter text-white">
                    {selectedPattern.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:gap-12">
                  {/* Preview */}
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest">
                      <LayoutGrid className="w-3 h-3 text-accent" />
                      Preview
                    </div>
                    <div className="bg-surface border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)] pointer-events-none" />
                      <pre className="font-mono text-sm md:text-xl leading-tight text-white/90 whitespace-pre tracking-widest overflow-x-auto custom-scrollbar">
                        {selectedPattern.preview}
                      </pre>
                    </div>
                  </div>

                  {/* Logic */}
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest">
                      <BookOpen className="w-3 h-3 text-accent" />
                      Logic Explanation
                    </div>
                    <div className="bg-surface border border-white/5 rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl">
                      <div className="text-sm md:text-lg text-muted leading-relaxed font-medium whitespace-pre-line">
                        {selectedPattern.logic}
                      </div>
                    </div>
                  </div>

                  {/* Code */}
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-muted uppercase tracking-widest">
                        <Code2 className="w-3 h-3 text-accent" />
                        JavaScript Code
                      </div>
                      <button 
                        onClick={() => handleCopy(selectedPattern.javascriptCode)}
                        className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all"
                      >
                        {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                        {copied ? 'Copied' : 'Copy Code'}
                      </button>
                    </div>
                    <div className="bg-surface border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                      <div className="bg-white/[0.02] px-4 md:px-6 py-2 md:py-3 border-b border-white/5 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500/20 border border-red-500/30" />
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500/20 border border-green-500/30" />
                        </div>
                        <span className="text-[9px] md:text-[10px] font-mono text-muted ml-2">pattern.js</span>
                      </div>
                      <div className="p-6 md:p-8 overflow-x-auto custom-scrollbar">
                        <pre className="font-mono text-xs md:text-sm text-white/70 leading-relaxed">
                          <code>{selectedPattern.javascriptCode}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="h-full flex items-center justify-center text-muted text-sm italic">
                Select a pattern to view details
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="h-12 border-t border-white/5 bg-bg flex items-center justify-between px-6 md:px-8 text-[8px] md:text-[9px] text-muted uppercase tracking-[0.2em] md:tracking-[0.4em] font-bold">
        <p>
          © 2026 PATTERNS • CREATED BY{' '}
          <a 
            href="https://github.com/sreya-satheesh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors"
          >
            SREYA SATHEESH
          </a>
        </p>
      </footer>
    </div>
  );
}
