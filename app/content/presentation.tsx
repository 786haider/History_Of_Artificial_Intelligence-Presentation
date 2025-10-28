import  { useState} from 'react';
import { ChevronLeft, ChevronRight, Brain, Cpu, Network, Zap } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "The History of Artificial Intelligence",
      subtitle: "From Early Foundations to Agentic AI",
      icon: Brain,
      content: (
        <div className="text-center space-y-6">
          <Brain className="w-32 h-32 mx-auto text-blue-600 animate-pulse" />
          <p className="text-2xl text-gray-700">A Journey Through 70+ Years of Innovation</p>
        </div>
      )
    },
    {
      title: "Early Foundations (1940s-1950s)",
      subtitle: "The Birth of AI",
      icon: Cpu,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            <h3 className="font-bold text-xl mb-3 text-blue-900">Key Milestones</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="font-bold text-blue-600 text-lg">1943:</span>
                <span>McCulloch & Pitts create first mathematical model of neural networks</span>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="font-bold text-blue-600 text-lg">1950:</span>
                <span>Alan Turing proposes the "Turing Test" for machine intelligence</span>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="font-bold text-blue-600 text-lg">1956:</span>
                <span>Dartmouth Conference - AI officially named as a field</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 italic hover:text-blue-600 transition-colors duration-300">The foundational era where researchers believed machines could simulate human intelligence</p>
        </div>
      )
    },
    {
      title: "The Golden Years (1956-1974)",
      subtitle: "Early Optimism and Breakthroughs",
      icon: Zap,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-yellow-50 p-4 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2 text-yellow-900">Achievements</h4>
              <ul className="text-sm space-y-2">
                <li className="hover:translate-x-2 transition-transform duration-200">• Logic Theorist (1956): First AI program</li>
                <li className="hover:translate-x-2 transition-transform duration-200">• General Problem Solver (1959)</li>
                <li className="hover:translate-x-2 transition-transform duration-200">• ELIZA (1966): Early chatbot</li>
                <li className="hover:translate-x-2 transition-transform duration-200">• Perceptron algorithm (1958)</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h4 className="font-bold text-lg mb-2 text-yellow-900">Characteristics</h4>
              <ul className="text-sm space-y-2">
                <li className="hover:translate-x-2 transition-transform duration-200">• Heavy government funding</li>
                <li className="hover:translate-x-2 transition-transform duration-200">• Symbolic AI dominance</li>
                <li className="hover:translate-x-2 transition-transform duration-200">• Rule-based systems</li>
                <li className="hover:translate-x-2 transition-transform duration-200">• High expectations</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-center mt-4 hover:text-yellow-700 transition-colors duration-300">Programs could solve algebra problems, prove theorems, and understand natural language in limited domains</p>
        </div>
      )
    },
    {
      title: "The First AI Winter (1974-1980)",
      subtitle: "Reality Check and Reduced Funding",
      icon: Brain,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-500 hover:border-gray-700 hover:shadow-lg transition-all duration-300">
            <h3 className="font-bold text-xl mb-3">Why the Winter Came</h3>
            <div className="space-y-3">
              <p className="hover:translate-x-3 transition-transform duration-300">🔹 <strong>Computational limitations:</strong> Computers were too slow and expensive</p>
              <p className="hover:translate-x-3 transition-transform duration-300">🔹 <strong>Combinatorial explosion:</strong> Problems became intractable as complexity increased</p>
              <p className="hover:translate-x-3 transition-transform duration-300">🔹 <strong>Lack of data:</strong> Insufficient data for training models</p>
              <p className="hover:translate-x-3 transition-transform duration-300">🔹 <strong>Overpromising:</strong> Failed to meet unrealistic expectations</p>
            </div>
          </div>
          <p className="text-gray-600 italic text-center hover:text-gray-800 transition-colors duration-300">Funding dried up as AI failed to deliver on ambitious promises</p>
        </div>
      )
    },
    {
      title: "Expert Systems Era (1980s)",
      subtitle: "The Knowledge-Based Approach",
      icon: Network,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="font-bold text-xl mb-3 text-green-900">Expert Systems Revolution</h3>
            <div className="space-y-3">
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>DENDRAL (1965-1983):</strong> Chemical analysis system</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>MYCIN (1970s):</strong> Medical diagnosis for blood infections</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>XCON (1980s):</strong> Configured computer systems at DEC, saved millions</p>
            </div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg mt-4 hover:bg-green-200 hover:shadow-lg transition-all duration-300">
            <p className="font-semibold mb-2">Key Innovation:</p>
            <p>Encoding human expert knowledge into IF-THEN rules. Systems could reason within narrow domains with remarkable accuracy.</p>
          </div>
        </div>
      )
    },
    {
      title: "Second AI Winter (Late 1980s-1990s)",
      subtitle: "Expert Systems Hit Their Limits",
      icon: Brain,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-all duration-300">
            <h3 className="font-bold text-xl mb-3">The Limitations Surface</h3>
            <div className="space-y-3">
              <p className="hover:translate-x-3 transition-transform duration-300">❌ <strong>Knowledge acquisition bottleneck:</strong> Too expensive and time-consuming to encode expert knowledge</p>
              <p className="hover:translate-x-3 transition-transform duration-300">❌ <strong>Brittleness:</strong> Systems failed outside their narrow domains</p>
              <p className="hover:translate-x-3 transition-transform duration-300">❌ <strong>Maintenance nightmare:</strong> Rules became unmanageable</p>
              <p className="hover:translate-x-3 transition-transform duration-300">❌ <strong>Competition from cheaper solutions:</strong> Desktop computers emerged</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-4 hover:text-gray-800 transition-colors duration-300">Another period of disillusionment and reduced investment in AI research</p>
        </div>
      )
    },
    {
      title: "Machine Learning Renaissance (1990s-2000s)",
      subtitle: "Paradigm Shift: Learning from Data",
      icon: Zap,
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="font-bold text-xl mb-3 text-purple-900">Key Developments</h3>
            <div className="space-y-3">
              <p className="hover:translate-x-2 transition-transform duration-300">🔸 <strong>Statistical approach:</strong> Learn patterns from data rather than explicit programming</p>
              <p className="hover:translate-x-2 transition-transform duration-300">🔸 <strong>Support Vector Machines (SVMs)</strong></p>
              <p className="hover:translate-x-2 transition-transform duration-300">🔸 <strong>Random Forests and ensemble methods</strong></p>
              <p className="hover:translate-x-2 transition-transform duration-300">🔸 <strong>Probabilistic reasoning</strong></p>
            </div>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg hover:bg-purple-200 hover:shadow-lg transition-all duration-300">
            <p className="font-semibold">Notable Success: IBM Deep Blue defeats chess champion Garry Kasparov (1997)</p>
          </div>
        </div>
      )
    },
    {
      title: "Deep Learning Revolution (2010s)",
      subtitle: "Neural Networks Strike Back",
      icon: Network,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="font-bold text-xl mb-3 text-blue-900">Breakthrough Moments</h3>
            <div className="space-y-3 text-sm">
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>2012 - AlexNet:</strong> Won ImageNet competition, reducing error rate by 40%. Proved deep learning's potential.</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>2014 - GANs:</strong> Generative Adversarial Networks enable realistic image generation</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>2016 - AlphaGo:</strong> Defeated world champion Lee Sedol at Go</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>2017 - Transformers:</strong> "Attention Is All You Need" paper revolutionizes NLP</p>
            </div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg hover:bg-blue-200 hover:shadow-lg transition-all duration-300">
            <p className="font-semibold">Why Now?</p>
            <p className="text-sm">Big Data + GPU Computing + Better Algorithms = Deep Learning Success</p>
          </div>
        </div>
      )
    },
    {
      title: "How Large Language Models Work",
      subtitle: "The Architecture Behind Modern AI",
      icon: Brain,
      content: (
        <div className="space-y-3">
          <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-bold text-lg mb-2 text-indigo-900">1. Transformer Architecture</h3>
            <p className="text-sm">Self-attention mechanism allows the model to weigh the importance of different words in context. Processes entire sequences in parallel, unlike older recurrent models.</p>
          </div>
          <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-bold text-lg mb-2 text-indigo-900">2. Tokenization & Embedding</h3>
            <p className="text-sm">Text is broken into tokens (words/subwords) and converted to numerical vectors in high-dimensional space. Similar concepts cluster together.</p>
          </div>
          <div className="bg-indigo-50 p-5 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-bold text-lg mb-2 text-indigo-900">3. Training Objective</h3>
            <p className="text-sm">Models predict the next token given previous context. Trained on massive text corpora to learn language patterns, facts, and reasoning.</p>
          </div>
        </div>
      )
    },
    {
      title: "LLM Training Breakthroughs",
      subtitle: "What Made Modern LLMs Possible",
      icon: Zap,
      content: (
        <div className="space-y-3">
          <div className="bg-orange-50 p-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-lg mb-2 text-orange-900">🔧 Technical Innovations</h4>
            <div className="text-sm space-y-2">
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>Transformer Architecture (2017):</strong> Parallel processing via self-attention</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>Scaling Laws:</strong> Performance predictably improves with more data, compute, and parameters</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>Transfer Learning:</strong> Pre-train on massive data, fine-tune for specific tasks</p>
            </div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="font-bold text-lg mb-2 text-orange-900">💪 Infrastructure Advances</h4>
            <div className="text-sm space-y-2">
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>GPU/TPU Computing:</strong> Specialized hardware for matrix operations</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>Distributed Training:</strong> Train across thousands of processors</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>Massive Datasets:</strong> Internet-scale text (trillions of tokens)</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>RLHF:</strong> Reinforcement Learning from Human Feedback for alignment</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The LLM Era (2018-2023)",
      subtitle: "Language Models Take Center Stage",
      icon: Brain,
      content: (
        <div className="space-y-4">
          <div className="bg-teal-50 p-5 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="font-bold text-xl mb-3 text-teal-900">Major Models</h3>
            <div className="space-y-2 text-sm">
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>2018 - GPT & BERT:</strong> Foundation of modern NLP</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>2019 - GPT-2:</strong> Demonstrated surprising language capabilities</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>2020 - GPT-3:</strong> 175B parameters, few-shot learning breakthrough</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>2022 - ChatGPT:</strong> Made LLMs accessible to the public</p>
              <p className="hover:translate-x-2 transition-transform duration-300"><strong>2023 - GPT-4:</strong> Multimodal capabilities, advanced reasoning</p>
            </div>
          </div>
          <div className="bg-teal-100 p-4 rounded-lg hover:bg-teal-200 hover:shadow-lg transition-all duration-300">
            <p className="font-semibold text-center">LLMs demonstrated emergent abilities: reasoning, coding, creative writing, and problem-solving across domains</p>
          </div>
        </div>
      )
    },
    {
      title: "Agentic AI (2023-Present)",
      subtitle: "The Next Frontier",
      icon: Cpu,
      content: (
        <div className="space-y-4">
          <div className="bg-rose-50 p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h3 className="font-bold text-xl mb-3 text-rose-900">What is Agentic AI?</h3>
            <p className="mb-4">AI systems that can autonomously take actions, use tools, plan multi-step tasks, and interact with environments to achieve goals.</p>
            <h4 className="font-bold text-lg mb-2">Key Capabilities:</h4>
            <div className="space-y-2 text-sm">
              <p className="hover:translate-x-2 transition-transform duration-300">🤖 <strong>Tool Use:</strong> Access APIs, databases, search engines, code execution</p>
              <p className="hover:translate-x-2 transition-transform duration-300">🎯 <strong>Goal-Directed Behavior:</strong> Break down complex objectives into sub-tasks</p>
              <p className="hover:translate-x-2 transition-transform duration-300">🔄 <strong>Iterative Problem-Solving:</strong> Learn from feedback and adjust approach</p>
              <p className="hover:translate-x-2 transition-transform duration-300">🧠 <strong>Memory & Context:</strong> Maintain state across interactions</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Agentic AI Examples",
      subtitle: "Real-World Applications",
      icon: Network,
      content: (
        <div className="space-y-3">
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h4 className="font-bold mb-2 text-pink-900">AutoGPT & BabyAGI</h4>
            <p className="text-sm">Self-prompting systems that autonomously pursue goals by breaking them into tasks</p>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h4 className="font-bold mb-2 text-pink-900">Coding Agents</h4>
            <p className="text-sm">Systems like Devin and GitHub Copilot that can write, test, and debug entire codebases</p>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h4 className="font-bold mb-2 text-pink-900">Research Assistants</h4>
            <p className="text-sm">Agents that search literature, synthesize information, and generate hypotheses</p>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <h4 className="font-bold mb-2 text-pink-900">Multi-Agent Systems</h4>
            <p className="text-sm">Multiple AI agents collaborating, debating, and specializing in different roles</p>
          </div>
        </div>
      )
    },
    {
      title: "Key Paradigm Shifts in AI History",
      subtitle: "Fundamental Changes in Approach",
      icon: Zap,
      content: (
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="font-bold mb-1">Symbolic AI → Statistical ML</h4>
            <p className="text-sm">From hand-coded rules to learning from data</p>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="font-bold mb-1">Shallow → Deep Learning</h4>
            <p className="text-sm">From simple models to multi-layered neural networks</p>
          </div>
          <div className="bg-gradient-to-r from-pink-50 to-red-50 p-4 rounded-lg border-l-4 border-pink-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="font-bold mb-1">Task-Specific → Foundation Models</h4>
            <p className="text-sm">From specialized systems to general-purpose models</p>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg border-l-4 border-red-500 hover:shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="font-bold mb-1">Passive Models → Agentic Systems</h4>
            <p className="text-sm">From responding to queries to autonomous goal pursuit</p>
          </div>
        </div>
      )
    },
    {
      title: "Timeline: 70 Years of AI",
      subtitle: "Visual Overview",
      icon: Brain,
      content: (
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-blue-600 w-24">1950s</span>
            <div className="flex-1 bg-blue-200 h-8 rounded flex items-center px-3 hover:bg-blue-300 transition-colors duration-300">Foundations & Birth</div>
          </div>
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-yellow-600 w-24">1960s-70s</span>
            <div className="flex-1 bg-yellow-200 h-8 rounded flex items-center px-3 hover:bg-yellow-300 transition-colors duration-300">Golden Years</div>
          </div>
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-gray-600 w-24">1974-80</span>
            <div className="flex-1 bg-gray-300 h-8 rounded flex items-center px-3 hover:bg-gray-400 transition-colors duration-300">First AI Winter</div>
          </div>
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-green-600 w-24">1980s</span>
            <div className="flex-1 bg-green-200 h-8 rounded flex items-center px-3 hover:bg-green-300 transition-colors duration-300">Expert Systems</div>
          </div>
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-gray-600 w-24">Late 80s-90s</span>
            <div className="flex-1 bg-gray-300 h-8 rounded flex items-center px-3 hover:bg-gray-400 transition-colors duration-300">Second AI Winter</div>
          </div>
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-purple-600 w-24">1990s-2000s</span>
            <div className="flex-1 bg-purple-200 h-8 rounded flex items-center px-3 hover:bg-purple-300 transition-colors duration-300">ML Renaissance</div>
          </div>
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-indigo-600 w-24">2010s</span>
            <div className="flex-1 bg-indigo-200 h-8 rounded flex items-center px-3 hover:bg-indigo-300 transition-colors duration-300">Deep Learning Revolution</div>
          </div>
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-teal-600 w-24">2018-2023</span>
            <div className="flex-1 bg-teal-200 h-8 rounded flex items-center px-3 hover:bg-teal-300 transition-colors duration-300">LLM Era</div>
          </div>
          <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <span className="font-bold text-rose-600 w-24">2023-Now</span>
            <div className="flex-1 bg-rose-200 h-8 rounded flex items-center px-3 hover:bg-rose-300 transition-colors duration-300">Agentic AI</div>
          </div>
        </div>
      )
    },
    {
      title: "Future Directions",
      subtitle: "Where AI is Heading",
      icon: Zap,
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <h3 className="font-bold text-xl mb-3">Emerging Trends</h3>
            <div className="space-y-3">
              <p className="hover:translate-x-3 transition-transform duration-300">🔮 <strong>Multimodal AI:</strong> Models that seamlessly understand text, images, audio, and video</p>
              <p className="hover:translate-x-3 transition-transform duration-300">🤝 <strong>Human-AI Collaboration:</strong> AI as co-workers rather than just tools</p>
              <p className="hover:translate-x-3 transition-transform duration-300">🧪 <strong>AI in Scientific Discovery:</strong> Accelerating research in medicine, materials, and beyond</p>
              <p className="hover:translate-x-3 transition-transform duration-300">⚖️ <strong>Alignment & Safety:</strong> Ensuring AI systems remain beneficial and controllable</p>
              <p className="hover:translate-x-3 transition-transform duration-300">🌐 <strong>Embodied AI:</strong> Robots with advanced AI capabilities in the physical world</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Conclusion",
      subtitle: "The Journey Continues",
      icon: Brain,
      content: (
        <div className="space-y-6 text-center">
          <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-8 rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <p className="text-xl font-semibold mb-4">From symbolic reasoning to agentic systems...</p>
            <p className="text-lg text-gray-700 mb-4">AI has evolved through cycles of optimism and disappointment, each time emerging stronger with new paradigms.</p>
            <p className="text-lg font-medium text-blue-900">We now stand at the threshold of truly autonomous AI systems that can reason, plan, and act in the world.</p>
          </div>
          <Brain className="w-24 h-24 mx-auto text-blue-600 animate-bounce" />
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-110 transition-transform duration-300">The AI Revolution is Just Beginning</p>
        </div>
      )
    }
  ];

  const handleSlideChange = (newSlide, dir) => {
    if (isAnimating || newSlide === currentSlide) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(newSlide);
      setIsAnimating(false);
    }, 300);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      handleSlideChange(currentSlide + 1, 'next');
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      handleSlideChange(currentSlide - 1, 'prev');
    }
  };

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            <div className="flex items-center gap-4 mb-2">
              <Icon className="w-10 h-10 hover:rotate-12 hover:scale-110 transition-all duration-300" />
              <div>
                <h1 className="text-3xl font-bold hover:text-yellow-200 transition-colors duration-300">{currentSlideData.title}</h1>
                <p className="text-blue-100 text-lg">{currentSlideData.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Content with slide animation */}
          <div className="p-8 min-h-[400px] overflow-hidden">
            <div
              key={currentSlide}
              className={`${
                direction === 'next'
                  ? 'animate-slideInRight'
                  : 'animate-slideInLeft'
              }`}
            >
              {currentSlideData.content}
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="bg-gray-50 p-6 flex items-center justify-between border-t">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5 hover:animate-pulse" />
              Previous
            </button>

            <div className="flex items-center gap-2">
              <span className="text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <div className="flex gap-1 ml-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index, index > currentSlide ? 'next' : 'prev')}
                    className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentSlide
                        ? 'bg-blue-600 w-8'
                        : 'bg-gray-300 hover:bg-gray-400 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={currentSlide === slides.length - 1}
            >
              Next
              <ChevronRight className="w-5 h-5 hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom CSS for slide animations */}
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Presentation;