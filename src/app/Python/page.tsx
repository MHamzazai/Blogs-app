import Image from "next/image";
export default function GenerativeAi() {
    return (
        <main>
            <div className="w-full my-10 borde-4 flex flex-col">
                <div className="w-full h-fit">
                    <Image
                        src="data:image/png;base64,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"
                        width={400}
                        height={400}
                        alt="chatgpt photo" />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-700 rounded-md my-4 md:text-4xl"> Key Concepts of Python Programming.</h1>
                    <h2 className="text-2xl font-semibold p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        1. What is Python:
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl lg:text-2xl text-start lg:p-4">
                        Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. It was created by Guido van Rossum and first released in 1991. Python emphasizes code readability with its clean syntax, making it easier for developers to write and maintain code. Below is a detailed breakdown of various aspects of Python programming.
                    </p>
                    <h2 className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        2. Basic Features of Python:
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl lg:text-2xl text-start lg:p-4">
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:my-2 lg:my-4">
                            a. High-level language:
                        </h2>
                        Python abstracts the complexity of the computer's hardware, making it easier for developers to focus on coding logic.
                        the original data.
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            b. Interpreted:
                        </h2>
                        Python code is executed line-by-line by an interpreter, which makes debugging simpler.
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            c. Dynamically typed:
                        </h2>
                        You don't need to declare variable types explicitly. Python figures out the type at runtime.
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            d. Object-oriented: :
                        </h2>
                        Python supports object-oriented programming paradigms, enabling modular and reusable code.
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            e. Cross-platform:
                        </h2>
                        Python code runs on various operating systems, including Windows, macOS, and Linux.
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            f. Extensive Standard Library:
                        </h2>
                        Python has a large standard library that includes modules for handling file I/O, networking, regular expressions, and more.
                    </p>
                    <h2 className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        3. Libraries and Frameworks:
                    </h2>
                    <h1 className="text-2xl lg:font-semibold">
                        Python's extensive ecosystem includes libraries and frameworks for various domains:
                    </h1>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl text-start lg:text-2xl lg:p-4">
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            a. Web Development:
                        </h2>
                        Django, Flask.
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            b. Data Science:
                        </h2>
                        NumPy, Pandas, Matplotlib, SciPy.
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            c. Machine Learning: 
                        </h2>
                        TensorFlow, PyTorch, Scikit-learn.
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            d. Automation:
                        </h2>
                        Selenium, PyAutoGUI.
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            e. Testing:
                        </h2>
                        PyTest, Unittest.
                    </p>
                    <h2 className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        4. Advanced Features:
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl text-start lg:text-2xl lg:p-4">
                    <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            a. Generators and Iterators::
                    </h2>
                    Python supports lazy evaluation via generators.
                    <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            b. Decorators:
                    </h2>
                    Special functions that modify the behavior of other functions.
                    <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                            c. Context Managers:
                    </h2>
                    Using "with" statements to handle resources like file I/O.
                    </p>
                    <h2 className="text-2xl font-semibold p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg capitalize md:text-3xl md:text-start">
                        5. Use Cases of python:
                    </h2>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        a. Web Development.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest lg:text-2xl lg:p-4">
                    Building server-side web applications.
                    </p>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        b. Data Analysis.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:p-1 lg:text-2xl lg:p-4">
                    Python is a popular choice for data analysis, thanks to libraries like Pandas and NumPy..
                    </p>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        c. Machine Learning and AI.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest lg:text-2xl lg:p-4">
                    Python is heavily used in AI due to TensorFlow, Keras, PyTorch, etc.
                    </p>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        d. Automation.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest lg:text-2xl lg:p-4">
                    Python scripts are commonly used for automating repetitive tasks.
                    </p>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        e. Scripting.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest lg:text-2xl lg:p-4">
                    Python is used for simple automation scripts in various domains.
                    </p>
                </div>
            </div>
        </main>
    )
}