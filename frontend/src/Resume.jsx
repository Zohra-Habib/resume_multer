import { useLocation, useNavigate } from "react-router-dom";

function Resume() {
  const location = useLocation();
  const navigate = useNavigate();

  const resume = location.state;

  if (!resume) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800">
            No Resume Found
          </h2>

          <button
            onClick={() => navigate("/")}
            className="mt-5 bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            Create Resume
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">

        <div className="bg-slate-800 text-white p-10 flex flex-col md:flex-row items-center gap-8">

          <img
            src={`https://resume-multer-backend-production.up.railway.app${resume.image}`}
            alt={resume.name}
            className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
          />

          <div className="text-center md:text-left">

            <h1 className="text-4xl font-bold">
              {resume.name}
            </h1>

            <h2 className="text-xl text-indigo-300 mt-2">
              {resume.jobTitle}
            </h2>

            <div className="mt-4 text-slate-300 space-y-1">
              <p>{resume.email}</p>
              <p>{resume.phone}</p>
              <p>{resume.location}</p>
            </div>

          </div>

        </div>

        <div className="p-8 md:p-10">

          <section className="mb-8">

            <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-100 pb-2 mb-4">
              About Me
            </h2>

            <p className="text-slate-600 leading-7">
              {resume.about}
            </p>

          </section>

          <section className="mb-8">

            <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-100 pb-2 mb-4">
              Education
            </h2>

            <p className="text-slate-600 leading-7">
              {resume.education}
            </p>

          </section>

          <section className="mb-8">

            <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-100 pb-2 mb-4">
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">

              {resume.skills.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full font-medium"
                >
                  {skill.trim()}
                </span>
              ))}

            </div>

          </section>

          <section>

            <h2 className="text-2xl font-bold text-indigo-600 border-b-2 border-indigo-100 pb-2 mb-4">
              Experience
            </h2>

            <p className="text-slate-600 leading-7">
              {resume.experience || "No experience added."}
            </p>

          </section>

          <div className="text-center mt-10">

            <button
              onClick={() => navigate("/")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Create Another Resume
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Resume;