import React from 'react';
import {
  Network, ShieldAlert, CheckCheck, Key, Cloud, Brain,
  MessagesSquare, Workflow, Eye, Bot, Sparkles, Route,
  Search, Shuffle, Server, LineChart
} from 'lucide-react';
import NeuralNet from './NeuralNet';
import {
  ClerkIcon, OpenRouterIcon, TavilyIcon, GeminiIcon,
  HuggingFaceIcon, ZodIcon, ScikitLearnIcon, CloudinaryIcon,
  OpenCVIcon, OpenAIIcon, GroqIcon
} from './BrandIcons';

const iconMap = {
  'network': <Network size={13} className="text-cyan-400" />,
  'shield': <ShieldAlert size={13} className="text-amber-500" />,
  'check': <CheckCheck size={13} className="text-purple-400" />,
  'key': <Key size={13} className="text-indigo-400" />,
  'cloud': <Cloud size={13} className="text-sky-400" />,
  'brain': <Brain size={13} className="text-purple-400" />,
  'comments': <MessagesSquare size={13} className="text-emerald-400" />,
  'workflow': <Workflow size={13} className="text-cyan-400" />,
  'eye': <Eye size={13} className="text-teal-400" />,
  'robot': <Bot size={13} className="text-indigo-400" />,
  'sparkles': <Sparkles size={13} className="text-blue-400" />,
  'route': <Route size={13} className="text-rose-400" />,
  'search': <Search size={13} className="text-amber-400" />,
  'chart': <LineChart size={13} className="text-emerald-400" />,
  'shuffle': <Shuffle size={13} className="text-sky-400" />,
  'server': <Server size={13} className="text-indigo-400" />,
  'clerk': <ClerkIcon size={13} className="text-[#6C47FF]" />,
  'openrouter': <OpenRouterIcon size={13} className="text-[#94A3B8]" />,
  'tavily': <TavilyIcon size={13} className="text-cyan-400" />,
  'gemini': <GeminiIcon size={13} className="text-[#38BDF8]" />,
  'huggingface': <HuggingFaceIcon size={13} className="text-[#FFD21E]" />,
  'zod': <ZodIcon size={13} className="text-[#408AFF]" />,
  'scikitlearn': <ScikitLearnIcon size={13} className="text-[#F7931E]" />,
  'cloudinary': <CloudinaryIcon size={13} className="text-[#3448C5]" />,
  'opencv': <OpenCVIcon size={13} className="text-[#5C3EE8]" />,
  'openai': <OpenAIIcon size={13} className="text-[#00A37F]" />,
  'groq': <GroqIcon size={13} className="text-[#F55036]" />
};

const renderIcon = (iconKey) => {
  if (!iconKey) return null;
  if (iconKey.startsWith('devicon-')) {
    return <i className={`${iconKey} text-[13px]`}></i>;
  }
  return iconMap[iconKey] || null;
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-border-primary/40 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">

        <div className="text-left mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="section-line"></div>
            <span className="text-text-ghost font-medium tracking-[0.2em] uppercase text-[10px]">Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary leading-none uppercase">
            ABOUT & CAPABILITIES
          </h2>
        </div>

        {/* Bento Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">

          {/* Card 2: Main Biography (3 Columns) */}
          <div className="bento-card md:col-span-3 md:order-1 flex flex-col justify-between hover:border-indigo-500/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.04)]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-ghost">Biography</span>
              <h3 className="text-xl font-bold text-text-primary mt-2 mb-6">
                Bridging Core Computer Science and Modern Implementation
              </h3>
              <div className="space-y-4 text-text-dim text-sm leading-relaxed font-light">
                <p>
                  Recently graduated with a BS in Computer Science from Sukkur IBA University, I specialize in architecting full-stack web platforms and training robust Deep Learning models. I translate algorithmic theories into high-performance, developer-centric software solutions.
                </p>
                <p>
                  I focus on Full-Stack engineering, LLM multi-agent systems, and PyTorch deep learning pipelines. I emphasize solid software engineering principles, optimal database schema designs, and elegant, high-retention user experiences.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border-primary">
              <div>
                <p className="text-lg font-bold text-text-primary">Sukkur IBA</p>
                <p className="text-[10px] text-text-faint uppercase tracking-[0.15em]">Education</p>
              </div>
              <div>
                <p className="text-lg font-bold text-text-primary">Full Stack-AI/ML</p>
                <p className="text-[10px] text-text-faint uppercase tracking-[0.15em]">Expertise</p>
              </div>
              <div>
                <p className="text-lg font-bold text-text-primary">07+</p>
                <p className="text-[10px] text-text-faint uppercase tracking-[0.15em]">Projects</p>
              </div>
            </div>
          </div>

          {/* Card 3: Full-Stack Architecture (2 Columns) */}
          <div className="bento-card md:col-span-2 md:order-2 hover:border-cyan-500/20 hover:shadow-[0_0_30px_rgba(6,182,212,0.04)]">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-ghost">Core Stack</span>
            <h3 className="text-xl font-bold text-text-primary mt-2 mb-6">Full-Stack Architecture</h3>

            <div className="space-y-5">
              {/* Languages */}
              <div>
                <h4 className="text-[10px] font-medium text-text-faint uppercase tracking-[0.15em] mb-2">Languages</h4>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-3.5 h-3.5" /> Python
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                    <i className="devicon-java-plain colored text-sm"></i> Java
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                    <i className="devicon-kotlin-plain colored text-sm"></i> Kotlin
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                    <i className="devicon-javascript-plain colored text-sm"></i> JavaScript
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                    <i className="devicon-cplusplus-plain colored text-sm"></i> C++
                  </span>
                </div>
              </div>

              {/* Full Stack */}
              <div>
                <h4 className="text-[10px] font-medium text-text-faint uppercase tracking-[0.15em] mb-2">Full Stack Development</h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { name: 'React.js', icon: 'devicon-react-original colored' },
                    { name: 'Redux Toolkit', icon: 'devicon-redux-original colored' },
                    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
                    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
                    { name: 'Express.js', icon: 'devicon-express-original text-text-ghost' },
                    { name: 'REST APIs', icon: 'network' },
                    { name: 'JWT / Auth', icon: 'shield' },
                    { name: 'Zod', icon: 'zod' }
                  ].map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                      {renderIcon(tech.icon)}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div>
                <h4 className="text-[10px] font-medium text-text-faint uppercase tracking-[0.15em] mb-2">Databases</h4>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                    <i className="devicon-mongodb-plain colored text-sm"></i> MongoDB Atlas (+ Vector Search)
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                    <i className="devicon-postgresql-plain colored text-sm"></i> PostgreSQL
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                    <i className="devicon-mysql-original colored text-sm"></i> MySQL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: AI & Machine Learning (2 Columns) */}
          <div className="bento-card md:col-span-2 md:order-4 hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.04)]">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-ghost">Intelligence</span>
            <h3 className="text-xl font-bold text-text-primary mt-2 mb-6">Generative AI & Machine Learning</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Generative AI */}
              <div>
                <h4 className="text-[10px] font-medium text-text-faint uppercase tracking-[0.15em] mb-2">Generative AI</h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { name: 'Transformers', icon: 'huggingface' },
                    { name: 'LLMs', icon: 'comments' },
                    { name: 'AI Orchestration', icon: 'workflow' },
                    { name: 'CLIP', icon: 'eye' },
                    { name: 'AI Agents', icon: 'robot' }
                  ].map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                      {renderIcon(tech.icon)}
                      {tech.name}
                    </span>
                  ))}
                  {/* API Badges */}
                  <div className="flex flex-wrap gap-1 w-full mt-1.5 border-t border-border-primary/40 pt-2">
                    {[
                      { name: 'Gemini', icon: 'gemini' },
                      { name: 'OpenRouter', icon: 'openrouter' },
                      { name: 'OpenAI', icon: 'openai' },
                      { name: 'Groq', icon: 'groq' },
                      { name: 'Tavily', icon: 'tavily' }
                    ].map((api, i) => (
                      <span key={`api-${i}`} className="px-2 py-0.5 text-[10px] font-semibold rounded bg-text-primary/[0.05] text-text-muted border border-border-secondary flex items-center gap-1">
                        {renderIcon(api.icon)}
                        {api.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ML & DL */}
              <div>
                <h4 className="text-[10px] font-medium text-text-faint uppercase tracking-[0.15em] mb-2">Machine Learning & Deep Learning</h4>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { name: 'TensorFlow', icon: 'devicon-tensorflow-line colored' },
                    { name: 'Keras', icon: 'devicon-keras-plain colored' },
                    { name: 'OpenCV', icon: 'opencv' },
                    { name: 'Scikit-learn', icon: 'scikitlearn' },
                    { name: 'pandas', icon: 'devicon-pandas-plain colored' },
                    { name: 'NumPy', icon: 'devicon-numpy-plain colored' },
                    { name: 'Transfer Learning', icon: 'shuffle' },
                    { name: 'Model Deployment', icon: 'server' }
                  ].map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                      {renderIcon(tech.icon)}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Developer Toolchain (1 Column) */}
          <div className="bento-card md:col-span-1 md:order-3 flex flex-col justify-between hover:border-emerald-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.04)]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-ghost">Toolchain</span>
              <h3 className="text-xl font-bold text-text-primary mt-2 mb-6">Tools & Workspaces</h3>

              <div className="flex flex-wrap gap-1.5">
                {[
                  { name: 'Git', icon: 'devicon-git-plain colored' },
                  { name: 'GitHub', icon: 'devicon-github-original text-text-primary' },
                  { name: 'Vercel', icon: 'devicon-vercel-original text-text-primary' },
                  { name: 'Clerk', icon: 'clerk' },
                  { name: 'Cloudinary', icon: 'cloudinary' },
                  { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
                  { name: 'PyCharm', icon: 'devicon-pycharm-plain colored' },
                  { name: 'IntelliJ', icon: 'devicon-intellij-plain colored' },
                  { name: 'Google Colab', icon: 'devicon-google-plain colored' },
                  { name: 'Hugging Face', icon: 'huggingface' },
                  { name: 'Kaggle', icon: 'devicon-kaggle-original colored' }
                ].map((tool, i) => (
                  <span key={i} className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-bg-subtle text-text-dim border border-border-primary flex items-center gap-1.5">
                    {renderIcon(tool.icon)}
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-primary flex items-center justify-between text-[10px] text-text-faint font-mono uppercase tracking-[0.15em]">
              <span>Environment Setup</span>
              <span className="text-text-primary font-semibold">Active</span>
            </div>
          </div>

          {/* Card 6: Interactive Neural visualizer (1 Column) */}
          <div className="bento-card hidden md:flex md:col-span-1 md:order-5 flex-col justify-between h-[250px] relative overflow-hidden bg-bg-pure hover:border-indigo-500/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.04)]">
            <NeuralNet />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-ghost">Neural Net</span>
                <h4 className="text-lg font-bold text-text-primary mt-1">Deep Learning</h4>
              </div>

              <p className="text-xs text-text-dim leading-relaxed font-light">
                Familiar with TensorFlow & PyTorch: building CNNs, RNNs, and custom classification models.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
