import Image from 'next/image';

const OFFERINGS = [
  { num: '01.', label: 'German Language Levels' },
  { num: '02.', label: 'Specialized Training' },
  { num: '03.', label: 'Goethe & TELC Exam Preparation' },
  { num: '04.', label: 'Placement Assistance' },
] as const;

export default function Offerings() {
  return (
    <section className="offerings-root">
      <div className="offerings-section-inner">
        <div className="offerings-text-col">
          <h2 className="offerings-title">
            Our Key <span className="offerings-title-accent">Offerings</span>
          </h2>
          <p className="offerings-desc">
            Comprehensive programs designed to support your learning journey, from classroom training to job placement, and visa assistance.
          </p>
          <ul className="offerings-list" role="list">
            {OFFERINGS.map((item) => (
              <li key={item.label} className="offerings-list-item">
                <span className="offerings-num" aria-hidden>
                  {item.num}
                </span>
                <span className="offerings-item-label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="offerings-image-col">
          <div className="offerings-image-frame">
            <Image
              src="/key_offerings_image.png"
              alt="Key offerings: language training, exams, and placement support"
              width={657}
              height={564}
              className="offerings-key-img"
              sizes="(max-width: 768px) min(100vw - 40px, 400px), (max-width: 1200px) 45vw, 480px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
