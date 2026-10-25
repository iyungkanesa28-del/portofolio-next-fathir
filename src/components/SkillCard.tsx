export default function SkillCard({ nama, level }: { nama: string; level: string }) {
    return (
        <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-xs hover:border-emerald-300 transition-colors">
            <h3 className="font-bold text-sm text-slate-800">{nama}</h3>
            <p className="text-xs text-gray-500 mt-1">Level: {level}</p>
        </div>
    );
}