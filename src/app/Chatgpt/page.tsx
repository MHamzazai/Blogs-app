import Image from "next/image";
export default function GenerativeAi() {
    return (
        <main>
            <div className="w-full my-10 borde-4 flex flex-col">
                <div className="w-full h-fit">
                    <Image
                    src="data:image/jpeg;base64,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"
                        className="rounded-md text-center md:ml-10"
                        width={400}
                        height={400}
                        alt="chatgpt photo" />
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-700 rounded-md my-4 md:text-4xl"> Key Concepts of ChatGPT.</h1>
                    <h2 className="text-2xl font-semibold p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        1. Development and Foundation:
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl lg:text-2xl text-start lg:p-4">
                    ChatGPT is built on top of the GPT architecture, a model that uses a transformer neural network to process and generate human-like text. Specifically, the model you're interacting with is from the GPT-4 series, the fourth iteration of the GPT models. OpenAI has trained these models using vast amounts of data sourced from books, websites, articles, and other publicly available texts to help them understand and generate human language.
                    </p>
                    <h2 className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        2. How ChatGPT Works:
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl lg:text-2xl text-start lg:p-4">
                    ChatGPT is designed to generate human-like responses to text input based on patterns and examples it learned during training. The model operates through the following process:
                        <h2 className="text-xl font-bold bg-slate-100 rounded-md capitalize md:my-2 lg:my-4">
                            a. Input Processing: 
                        </h2>
                        You enter a prompt or question, which is processed as a sequence of words or tokens.
                        <h2 className="text-xl font-bold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                             b. Contextual Understanding:
                        </h2>
                        ChatGPT understands the context of your input based on the patterns it has learned. It breaks down the sequence of words and attempts to determine the meaning or context.
                        <h2 className="text-xl font-bold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                             c. Text Generation:
                        </h2>
                        Once it understands your input, the model generates a coherent response by predicting the next word or sequence of words based on the data it has been trained on. It iteratively builds a response token by token until it completes the thought.
                    </p>
                    <h2 className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        3. Transformer Architecture:
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl text-start lg:text-2xl lg:p-4">
                    The transformer architecture, introduced in the "Attention is All You Need" paper by Vaswani et al. in 2017, allows GPT models to handle long-range dependencies in text. The key mechanism behind transformers is the self-attention mechanism, which enables the model to focus on different parts of a sentence, regardless of their distance from one another. This makes transformers especially good at understanding context and generating text that remains coherent over longer interactions.
                    </p>
                    <h2 className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        4. Ethical Considerations:
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl text-start lg:text-2xl lg:p-4">
                    OpenAI has acknowledged the ethical challenges posed by large language models like ChatGPT. Concerns include:
                    <h2 className="text-xl font-bold bg-slate-100 rounded-md capitalize md:my-2 lg:my-4">
                            a. Misinformation: 
                    </h2>
                        The ability to generate text that seems plausible but is factually inaccurate.
                    <h2 className="text-xl font-bold bg-slate-100 rounded-md capitalize md:my-2 lg:my-4">
                            b. Bias: 
                    </h2>
                    Since the model is trained on human-written content, it may inherit and amplify biases present in that data (e.g., political, social, cultural biases).
                    <h2 className="text-xl font-bold bg-slate-100 rounded-md capitalize md:my-2 lg:my-4">
                            c. Misuse: 
                    </h2>
                    There is potential for misuse in generating harmful content, spam, or fake news.
                    To mitigate these issues, OpenAI has implemented safety mitigations, such as user feedback systems, to help prevent harmful or biased outputs.
                    </p>
                    <h2 className="text-2xl font-semibold p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg capitalize md:text-3xl md:text-start">
                        5. applications of ChatGPT:
                    </h2>
                    <h1 className="text-xl md:text-2xl font-semibold">ChatGPT is used in many industries and domains, such as:</h1>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                            a. Customer Support.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest lg:text-2xl lg:p-4">
                    Automated chatbots can handle basic customer service inquiries.
                    </p>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        b. Education.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:p-1 lg:text-2xl lg:p-4">
                    As an interactive learning tool, it can help explain concepts, assist with homework, or tutor students.
                    </p>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        c. Writing Assistance.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest lg:text-2xl lg:p-4">
                    It can help generate content for blogs, articles, and other written materials.
                    </p>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        d. Programming Help.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest lg:text-2xl lg:p-4">
                    It provides code snippets, helps with debugging, and explains programming concepts.
                    </p>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        e. Creative Industries.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest lg:text-2xl lg:p-4">
                    ChatGPT can help brainstorm ideas for creative projects, such as story writing or designing.
                    </p>
                </div>
            </div>
        </main>
    )
}