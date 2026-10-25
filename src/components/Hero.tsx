import Image from "next/image";

export default function Hero({ nama, tagline }) {
    return (
        <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 border-2 border-red-500 shrink-0 flex items-center justify-center">
                <Image
                    src="/muhammad-izzul-faizin.jpg"
                    alt={nama}
                    width={128}
                    height={128}
                    className="object-cover 2-full h-full"
                />
            </div>

            <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800">
                    Halo, saya <span className="text-slate-900">{nama}</span>!
                </h1>
                <p className="text-sm text-gray-500 mt-1">{tagline}</p>
            </div>
        </section>
    );
}