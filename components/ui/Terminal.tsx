// components/ui/Terminal.tsx
export const Terminal = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-12 font-mono text-sm shadow-2xl rounded-lg overflow-hidden">
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-slate-400 ml-2">bash — ravisingh.dev</span>
      </div>
      <div className="bg-slate-900 p-6 text-emerald-400">
        <p><span className="text-blue-400">➜</span> <span className="text-purple-400">~</span> curl https://api.ravisingh.dev/stats</p>
        <p className="text-white mt-2">
          {"{"} <br />
          &nbsp;&nbsp;"status": "Available for high-impact roles",<br />
          &nbsp;&nbsp;"location": "Pune, MH",<br />
          &nbsp;&nbsp;"focus": ["Scalability", "Clean Architecture", "TDD"],<br />
          &nbsp;&nbsp;"aws_certification": "In Progress (Exp. June 2025)"<br />
          {"}"}
        </p>
        <p className="mt-4 animate-pulse"><span className="text-blue-400">➜</span> <span className="text-purple-400">~</span> <span className="bg-emerald-400 text-slate-900 px-1">_</span></p>
      </div>
    </div>
  );
};