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
                    <h1 className="text-2xl font-bold text-gray-700 rounded-md my-4 md:text-4xl"> Key Concepts of Generative AI.</h1>
                    <h2 className="text-2xl font-semibold p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        1. Machine Learning and Deep Learning:
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl lg:text-2xl text-start lg:p-4">
                        Generative AI systems typically use machine learning (ML) techniques, especially
                        deep learning, which involves training models on vast datasets.The models learn
                        patterns, relationships, and structures in the data. When presentedwith new
                        inputs, they can generate outputs that resemble the data they were trained on.
                    </p>
                    <h2 className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        2. Neural Networks:
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl lg:text-2xl text-start lg:p-4">
                        At the core of most generative AI systems
                        are artificial neural networks, which are computational models inspired by the human brain.
                        for generative tasks, neural networks like Variational Autoencoders (VAEs), Generative
                        Adversarial Networks (GANs), and Transformers are often used:
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:my-2 lg:my-4">
                            a. Variational Autoencoders (VAEs):
                        </h2>
                        These are generative models that work by encoding input
                        data into a compressed form and then decoding it to generate new content that resembles
                        the original data.
                        <h2 className="text-xl font-semibold bg-slate-100 rounded-md capitalize md:mt-2 lg:my-4">
                             b. Generative Adversarial Networks (GANs):
                        </h2>
                        GANs consist of two models, a generator and a discriminator.
                        The generator tries to create realistic data (e.g., images), while the discriminator tries to
                        distinguish between real and generated data. The two models compete and improve through training,
                        resulting in highly realistic outputs.
                    </p>
                    <h2 className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        3. Transformers:
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl text-start lg:text-2xl lg:p-4">
                        Transformers, particularly in models like GPT (Generative Pre-trained Transformer),
                        are widely used for generating text. These models rely on attention mechanisms that
                        allow them to focus on relevant parts of the input while generating contextually
                        coherent outputs.
                    </p>
                    <h2 className="text-2xl font-semibold  p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg md:text-3xl md:text-start">
                        4. Training Data:
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:leading-relaxed md:text-xl text-start lg:text-2xl lg:p-4">
                        The effectiveness of generative AI models depends on the quality
                        and diversity of the data they are trained on. These models learn from massive
                        datasets that include text, images, or other relevant data types, often scraped
                        from the internet or curated from specialized sources. This can lead to ethical
                        concerns, such as bias in the data or misuse of copyrighted content.
                    </p>
                    <h2 className="text-2xl font-semibold p-2 shadow-lg border-t-2
                    bg-slate-200 my-4 rounded-lg capitalize md:text-3xl md:text-start">
                        5. applications of generative ai:
                    </h2>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                            a. Art and Creativity.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest lg:text-2xl lg:p-4">
                        Generative AI can produce artwork, design prototypes, music, and fashion items.
                        Tools like DALL-E, MidJourney, and others allow users to generate unique and
                        creative visual art by providing text prompts.
                    </p>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        b. Content Creation.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest md:p-1 lg:text-2xl lg:p-4">
                        Tools like ChatGPT (from OpenAI) can generate human-like text for blog posts, marketing content, or social media. This speeds up content production while maintaining quality. AI can also assist in generating product descriptions, news summaries, or even entire articles based on a few inputs.
                    </p>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        c. Healthcare.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest lg:text-2xl lg:p-4">
                        Generative models help in the design of novel molecules and drugs by analyzing biological data and predicting the chemical structures likely to interact with specific disease targets.
                    </p>
                    <h2 className="text-xl p-2 text-left bg-teal-200 rounded-md capitalize underline
                    font-semibold md:text-2xl">
                        d. Design and Engineering.
                    </h2>
                    <p className="tracking-wider text-lg md:tracking-widest lg:text-2xl lg:p-4">
                        AI is used in product design to generate prototypes or optimize designs. For instance, in architecture, generative AI can suggest building layouts based on certain parameters like space and material use.
                    </p>
                </div>
            </div>
        </main>
    )
}