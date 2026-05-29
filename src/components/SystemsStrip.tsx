import React from 'react';

const systems = [
  'FastAPI','LangGraph','RAG','Vector DBs','CUDA','Quantization','ONNX','Edge inference','Agent orchestration','Redis','PostgreSQL','Linux','Docker'
];

const SystemsStrip: React.FC = () => {
  return (
    <div className="w-full py-6 border-t border-b border-white/10 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
          {systems.map((s, i) => (
            <div key={i} className="flex-shrink-0 px-3 py-1.5 bg-white/5 text-white/70 text-sm rounded-md border border-white/10 hover:text-orange-200 hover:border-orange-500/30 transition-colors">
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemsStrip;
