import 'remixicon/fonts/remixicon.css';
import Image from "next/image";
export default function About() {
  return (
    <div className="main h-full w-full">
      <section>
        <div className="content w-full h-[90%] flex flex-col sm:flex-row">
          <div className="left h-full w-full">
            <h1
              className="text-4xl p-2 mt-10 mb-4 font-sans text-center font-bold bg-slate-100
             tracking-wide hover:scale-95 hover:text-white hover:bg-red-400 hover:underline
             transition-all hover:uppercase sm:text-start sm:p-11 sm:text-5xl
             sm:bg-teal-100 sm:leading-relaxed sm:ml-9 sm:mb-0"
            >
              A-O-A.
              <br />
              <span className="p-0 sm:p-9">I Am</span>
              <br />
              <span className="pt-10">M.Hamza Zai</span>
            </h1>

            <div
              className="right mt-10 font-sans text-2xl p-2 text-center capitalize leading-relaxed sm:text-start sm:p-10
              sm:mt-0 sm:leading-loose"
            >
              <p>
                I am a <b>Front-End developer.</b>I learned Html,CSS and
                Typescript.And now i am learning Next.js14 from <b>GIAIC</b>
                <em> (Governer Initiative For Artificial intelligence And computing).</em>
                <br />
                I also learned some <b>FrameWorks</b> like "Bootstrap and Tailwind" for
                CSS.
                <br />
                My goal is to become a <b>Full-Stack Engineer.</b>
                <span className="block sm:hidden">
                  {" "}
                  Below is my photo:
                  <i className="ri-corner-right-down-line text-xl font-bold"></i>
                </span>
              </p>
            </div>
          </div>
          <div className="sm:w-[40%] sm:h-[30%]">
            <Image
              src="https://images.pexels.com/photos/28733009/pexels-photo-28733009.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="My Photo"
              width={600} // Adjust according to the real image size
              height={400} // Adjust according to the real image size
              className="w-4/5 mx-auto border-x-2 border-y-4 shadow-2xl shadow-black
     border-black mb-4 sm:mt-10 md:w-[90%] hover:scale-110 transition-all
      bg-slate-400"
            />
          </div>
        </div>
      </section>
      <footer className="mt-7 bg-slate-200 text-black text-center">
        <hr className="border-b-4 border-black" />
        <h1 className="font-sans font-semibold text-2xl p-9 underline">
          Thanks For Visiting !.
        </h1>
      </footer>
    </div>
  );
}
