export const projectsData = [
  {
    id: 'nextorbit',
    title: 'NextOrbit — Career & Skill Learning Platform',
    description: 'Architected a multi-agent LLM system (Architect, Builder, Integrator) ingesting live market data via Tavily API to autonomously generate structured learning roadmaps. Engineered a semantic search pipeline (MongoDB Atlas Vector Index + BGE embeddings) to match user intent to relevant paths, optimized real-time streaming responses with context windowing to reduce latency, and implemented Clerk authentication, Cloudinary uploads, and Redux state management.',
    image: 'assets/images/nextorbit-mockup.png',
    url: 'nextorbit.learning',
    status: 'May 2026',
    categories: ['full-stack', 'ai-ml'],
    metrics: ['Multi-agent LLM System', 'MongoDB Atlas Vector Search', 'AI Orchestration', 'LLMs'],
    tech: ['MERN Stack', 'MongoDB Atlas Vector', 'LLM Orchestration', 'Tavily API', 'Redux Toolkit'],
    techSearch: 'mern,mongodb,llm,agents,redux,react,node,express,tavily,clerk,cloudinary,openai',
    repoUrl: 'https://github.com/tejwani-rahul/nextorbit',
    liveUrl: null,
    demoVideoUrl: 'https://github.com/tejwani-rahul/next-orbit-orchestrator/raw/main/demo.mp4',
    codeSnippet: `const agentSystem = new MultiAgentLLM({
  agents: [Architect, Builder, Integrator],
  retriever: "MongoDB Atlas Vector Search",
  liveFeeds: "Tavily API Market Data"
});`,
    codeSnippetLang: 'javascript',
    hoverText: 'Hover / Tap to View Interface Mockup'
  },
  {
    id: 'aerial-detection',
    title: 'Aerial Object Detection from Drone Footage',
    description: 'Trained YOLOv8 on the VisDrone dataset for real-time multi-class detection (pedestrians, cars, buses, trucks, vans, motorcycles, bicycles, tricycles) from drone/aerial imagery. Iteratively improving model performance through extended training epochs, mosaic augmentation, and multi-scale training strategies. Conducting ablation studies across dataset variants and hyperparameter configurations to optimize detection accuracy for low altitude aerial scenes.',
    image: 'assets/images/aerial-detection.png',
    url: 'aerial-detection.ai',
    status: '2026 (In Progress)',
    categories: ['ai-ml'],
    metrics: ['YOLOv8 Nano Model', 'Dataset: VisDrone', 'Augmentations: Mosaic & Mixup'],
    tech: ['YOLOv8', 'PyTorch', 'Python', 'VisDrone Dataset'],
    techSearch: 'yolov8,pytorch,python,visdrone,drone,object,detection,aerial,yolo',
    repoUrl: 'https://github.com/tejwani-rahul/aerial-object-detection',
    liveUrl: null,
    demoVideoUrl: 'https://github.com/tejwani-rahul/aerial-object-detection/raw/main/visdrone_demo.mp4',
    codeSnippet: `from ultralytics import YOLO

model = YOLO('yolov8n.yaml') # load model
results = model.train(
    data='VisDrone.yaml', 
    epochs=100, 
    imgsz=640,
    augment=True # Mosaic & MixUp
)`,
    codeSnippetLang: 'python',
    hoverText: 'Hover / Tap to View App Image'
  },
  {
    id: 'multimodal-commentary',
    title: 'Multimodal Commentary System',
    description: "Built an image-to-text transformer by projecting ViT encoder visual features into a GPT-2 decoder's attention context. Resolved label scarcity using CLIP-based zero-shot filtering to construct a high-quality dataset, with final speech output compiled via PyTorch-based neural TTS.",
    image: 'assets/images/commentary-mockup.png',
    url: 'multimodal-commentary.ai',
    status: 'Dec 2025',
    categories: ['ai-ml'],
    metrics: ['CLIP Zero-shot filtering', 'ViT + GPT-2 Context Projection', 'Output: Neural TTS Speech'],
    tech: ['PyTorch', 'ViT + GPT-2', 'CLIP', 'Neural TTS'],
    techSearch: 'pytorch,vit,gpt-2,clip,tts,python',
    repoUrl: 'https://github.com/tejwani-rahul/multimodal-image-commentary',
    liveUrl: null,
    demoVideoUrl: 'https://github.com/tejwani-rahul/multimodal-image-commentary/raw/main/demo.mp4',
    codeSnippet: `class CaptionModel(nn.Module):
    def __init__(self):
        super().__init__()
        self.encoder = ViTModel.from_pretrained('vit')
        self.decoder = GPT2LMHeadModel.from_pretrained('gpt2')
    
    def forward(self, img, tokens):
        return self.decoder(self.encoder(img), tokens)`,
    codeSnippetLang: 'python',
    hoverText: 'Hover / Tap to View Neural Visualizer Mockup'
  },
  {
    id: 'quiz-flashcards',
    title: 'Quiz-Flashcards Platform',
    description: 'Built a responsive Full-Stack application to optimize student retention using spaced repetition. Engineered RESTful CRUD APIs using Express/Node.js, secured session boundaries with cryptographic JWT signatures, and structured aggregations in MongoDB to track progress analytics.',
    image: 'assets/images/quiz-flashcards-app.png',
    url: 'quiz-flashcards.app',
    status: 'Oct 2025',
    categories: ['full-stack'],
    metrics: ['Database: MongoDB Atlas', 'Authentication: JWT Security', 'RESTful CRUD APIs'],
    tech: ['React.js', 'Node.js / Express', 'MongoDB Atlas', 'JWT Security'],
    techSearch: 'react,node,express,mongodb,jwt,tailwind',
    repoUrl: 'https://github.com/tejwani-rahul/mern-quiz-flashcards-app',
    liveUrl: 'https://mern-quiz-flashcards-app.vercel.app',
    codeSnippet: `{
  "client": "React.js + Tailwind",
  "server": "Node.js + Express.js",
  "db": "MongoDB (Atlas)",
  "security": "JWT Credentials",
  "deployment": "Vercel / Render"
}`,
    codeSnippetLang: 'json',
    hoverText: 'Hover / Tap to View App Image'
  },
  {
    id: 'skin-cancer',
    title: 'Skin Cancer Classifier',
    description: 'Developed a convolutional neural network (CNN) for dermatological screening on the HAM10000 dataset. Customized a pre-trained ResNet50 classifier with PyTorch, designed data-augmentation pipelines to address class imbalance, and published an interactive diagnostic UI using Gradio.',
    image: 'assets/images/skin-cancer-classifier.png',
    url: 'skin-cancer-classifier.ai',
    status: 'Jul 2025',
    categories: ['ai-ml'],
    metrics: ['ResNet50 Transfer Model', 'Dataset: HAM10000', 'UI Interface: Gradio'],
    tech: ['Python', 'PyTorch / ResNet', 'CNN Classification', 'Gradio App'],
    techSearch: 'pytorch,tensorflow,keras,gradio,python',
    repoUrl: 'https://github.com/tejwani-rahul/skin_cancer_classifier',
    liveUrl: null,
    codeSnippet: `import torch.nn as nn
from torchvision import models

class Classifier(nn.Module):
    def __init__(self):
        super().__init__()
        self.model = models.resnet50(pretrained=True)
        self.model.fc = nn.Linear(2048, 7)
    
    def forward(self, x):
        return self.model(x)`,
    codeSnippetLang: 'python',
    hoverText: 'Hover / Tap to View App Image'
  },
  {
    id: 'bookstore',
    title: 'Bookstore Management',
    description: 'Developed a desktop database client to manage retail inventories. Implemented the Data Access Object (DAO) pattern in Java SE, established database connectivity via JDBC connection pooling to MySQL, and designed Swing-based administrative control panels.',
    image: 'assets/images/bookstore-management.png',
    url: 'java-bookstore.sys',
    status: 'May 2025',
    categories: ['desktop'],
    metrics: ['Pattern: DAO Architecture', 'JDBC Connection Pooling', 'Database: MySQL Engine'],
    tech: ['Java SE', 'Swing UI', 'JDBC', 'MySQL Database'],
    techSearch: 'java,swing,mysql,jdbc',
    repoUrl: 'https://github.com/tejwani-rahul/book-store-app-jdbc',
    liveUrl: null,
    codeSnippet: `public interface BookDAO {
    Book getBookById(int id);
    boolean updateInventory(Book b);
}`,
    codeSnippetLang: 'java',
    hoverText: 'Hover / Tap to View App Image'
  },
  {
    id: 'chatbot',
    title: 'Java Chatbot App',
    description: 'Engineered a multi-threaded desktop assistant client linking Java SE Swing interfaces to OpenAI APIs. Implemented background HTTP requests using Java SwingWorker threads to prevent GUI locking, and integrated MySQL database for context caching.',
    image: 'assets/images/ai-chatbot.png',
    url: 'gpt-chatbot.sys',
    status: 'Mar 2025',
    categories: ['desktop', 'ai-ml'],
    metrics: ['Asynchronous SwingWorker', 'MySQL Database Caching', 'OpenAI API completion'],
    tech: ['Java SE', 'Swing UI', 'OpenAI API Connection', 'MySQL Database'],
    techSearch: 'java,swing,openai,api,mysql',
    repoUrl: 'https://github.com/tejwani-rahul/ai-chatbot-java',
    liveUrl: null,
    codeSnippet: `HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.openai.com/v1"))
    .header("Authorization", "Bearer " + apiKey)
    .POST(BodyPublishers.ofString(payload))
    .build();`,
    codeSnippetLang: 'java',
    hoverText: 'Hover / Tap to View App Image'
  }
];
