import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("jobTitle", jobTitle);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("location", location);
    formData.append("about", about);
    formData.append("education", education);
    formData.append("skills", skills);
    formData.append("experience", experience);
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/api/resume", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/resume", {
          state: data.data,
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-100 py-12 px-4">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-indigo-600 font-semibold mb-2">
            CREATE YOUR FUTURE
          </p>

          <h1 className="text-5xl font-bold text-slate-800">
            Resume Maker
          </h1>

          <p className="text-slate-500 mt-3 text-lg">
            Build a professional resume in just a few minutes
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
              Personal Information
            </h2>

            <p className="text-slate-500 mt-1">
              Tell us a little about yourself
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="label">Full Name</label>

                <input
                  className="input"
                  type="text"
                  placeholder="e.g. Zohra Habib"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label">Job Title</label>

                <input
                  className="input"
                  type="text"
                  placeholder="e.g. Frontend Developer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label">Email</label>

                <input
                  className="input"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label">Phone</label>

                <input
                  className="input"
                  type="text"
                  placeholder="03XX XXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label">Location</label>

                <input
                  className="input"
                  type="text"
                  placeholder="e.g. Karachi, Pakistan"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="label">Profile Image</label>

                <input
                  className="input"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
              </div>

            </div>

            <div className="mt-6">
              <label className="label">About Me</label>

              <textarea
                className="input h-28"
                placeholder="Write a short introduction about yourself..."
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mt-6">
              <label className="label">Education</label>

              <textarea
                className="input h-24"
                placeholder="e.g. Intermediate in Computer Science"
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mt-6">
              <label className="label">Skills</label>

              <input
                className="input"
                type="text"
                placeholder="e.g. HTML, CSS, JavaScript, React, Tailwind"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                required
              />
            </div>

            <div className="mt-6">
              <label className="label">Experience</label>

              <textarea
                className="input h-28"
                placeholder="Write your work experience..."
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              Create My Resume →
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default App;