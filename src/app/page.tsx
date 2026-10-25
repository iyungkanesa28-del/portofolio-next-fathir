import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" }
]

interface Jadwal {
  hari: string;
  waktu: string;
  kegiatan: string;
}

const dataJadwal: Jadwal[] = [
  { hari: 'Senin', waktu: '19.00 - 20.00', kegiatan: 'Membaca ulang modul' },
  { hari: 'Minggu', waktu: '10.00 - 15.00', kegiatan: 'Mengerjakan tugas praktik' },
  { hari: 'Minggu', waktu: '18.30 - 21.00', kegiatan: 'Merekam video dan menulis laporan' }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eaf5ed] p-6 md:p-12 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto space-y-6">
        <Hero
          nama="Fathir Azzikri Putra Wibowo"
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG"
        />

          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Tentang Saya</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Saya senang belajar melalui hal-hal yang saya sukai, mulai dari teknologi hingga dunia kreatif. Bagi saya, setiap proyek adalah kesempatan untuk mencoba, berkembang, dan menciptakan sesuatu yang baru.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Hobi</h2>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Bermain Gitar</li>
                <li>Bermain Game</li>
                <li>Membaca Komik</li>
              </ul>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Cita-cita</h2>
              <p className="text-sm text-gray-600 mb-3">
                Menjadi <strong className="font-semibold text-gray-800">Youtuber atau Vtuber</strong>. Langkah yang saya rencanakan:
              </p>
              <ol className="list-decinal list-inside text-sm text-gray-600 space-y-1">
                <li>Melatih public speaking</li>
                <li>Mencoba untuk konsisten upload di YouTube</li>
              </ol>
            </section>
          </div>

          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Keahlian</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
              ))}
            </div>
          </section>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Jadwal Belajar</h2>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-800 text-white font-semibold">
                    <th className="p-4 w-1/4">Hari</th>
                    <th className="p-4 w-1/4">Waktu</th>
                    <th className="p-4 w-1/4">Kegiatan</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100 text-gray-600">
                  { dataJadwal.map((item: Jadwal, index: number) => (
                    <tr key={index} className="hover:bg-gray-50 transition:-colors">
                      <td className="p-4 font-medium text-gray-700">{item.hari}</td>
                      <td className="p-4">{item.waktu}</td>
                      <td className="p-4">{item.kegiatan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
      </div>
    </main>
  );
}