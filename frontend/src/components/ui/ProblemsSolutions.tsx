import problem from "../../assets/problem.jpg";
import solution from "../../assets/solution.jpg"
function ProblemsSolutions() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">

          {/* Problems */}
          <div className="relative rounded-3xl border border-red-300 bg-white p-8">

            {/* Status Dot */}
            <span className="absolute -right-3 top-10 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-white text-xs">
              ✕
            </span>

            {/* Problem Images: Left & Right */}
            <div className="flex justify-between items-center mb-6">
              <img
                src={problem}
                alt="Learning problem"
                className="h-32 w-40 object-cover rounded-xl"
              />

              {/* <img
                src="/images/problem-right.jpg"
                alt="System problem"
                className="h-28 w-40 object-cover rounded-xl"
              /> */}
            </div>

            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Problems
            </h3>

            <p className="text-sm text-slate-500 mb-4">
              The previous product experience faced several UX challenges:
            </p>

            <ul className="space-y-3 text-sm text-slate-600 list-disc pl-5">
              <li>Textbook-centric learning with zero real-world exposure</li>
              <li>Parents demand competitiveness, schools lack tools</li>
              <li>No structured career pipeline for students</li>
              <li>Manual operations → no digital automation</li>
              <li>Outdated teaching systems & minimal innovation</li>
              <li>Lack of modern skills like AI, finance, entrepreneurship</li>
            </ul>
          </div>

          {/* Connector Line */}
          <div className="hidden md:block absolute left-[calc(50%-1rem)] 
  right-[calc(50%-3rem)] 
  top-13 
  h-[2px] 
  bg-slate-300" />

          {/* Solutions */}
          <div className="relative rounded-3xl border border-green-300 bg-white p-8">

            {/* Status Dot */}
            <span className="absolute -left-3 top-10 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-xs">
              ✓
            </span>

            {/* Solution Image */}
            <img
              src={solution}
              alt="Solution success"
              className="h-32 w-40 object-cover rounded-xl mb-6"
            />

            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Solutions
            </h3>

            <p className="text-sm text-slate-500 mb-4">
              All connected. All scalable. All future-proof.
            </p>

            <ul className="space-y-3 text-sm text-slate-600 list-disc pl-5">
              <li>Real-World Learning Ecosystem</li>
              <li>School Differentiation + Student Outcomes</li>
              <li>End-to-End Career Pathway Layer</li>
              <li>EliteVerse Digital Infrastructure</li>
              <li>Hybrid + Technology-Driven Learning</li>
              <li>50+ Future-Ready Skill Modules</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProblemsSolutions;
