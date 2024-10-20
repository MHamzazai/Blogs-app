import Card from "../components/Card/Card";
import generative from "../app/public/photos/generativeai.jpeg";
import chatgpt from "../app/public/photos/chatgpt.jpeg";
import gemini from "../app/public/photos/gemini.jpeg";
import python from "../app/public/photos/python.jpeg";
import quantum from "../app/public/photos/quantumtechnology.jpeg";
import blockchain from "../app/public/photos/blockchain.jpeg";



export default function Home() {
  return (
    <main>
      <div className="bg-slate-50 lg:bg-transparent w-full h-44 lg:h-56 my-10 overflow-hidden rounded-lg
       ">
        <p className="text-center text-2xl font-bold my-4 text-black
          md:text-3xl md:tracking-wider lg:leading-loose lg:text-4xl lg:pb-11">
          Welcome To
          <br/>
          <span className="text-4xl border-b-2 text-black bg-slate-40 border-black">
            Tech Blogs
          </span>
          <br />
          The Blogs Website Based On Technology.</p>
      </div>
      <div className="flex flex-col">
        <div className="p-2 lg:bg-slate-300">
          <Card blogno={1} topicName="generative aI" imageType={generative}
            description="Generative AI refers to a class of artificial intelligence algorithms that cangenerate
         new content, including text, images, music, and more, based on training data. These models learn 
         patterns and structures from the input data, allowing them to create novel outputs that resemble
          the training data." link="/GenerativeAi"/>
        </div>
        <div className="p-2 lg:bg-slate-200">
          <Card blogno={2} topicName="chatGPT" description="   
          ChatGPT is an AI language model developed by OpenAI, designed to generate 
          human-like text based on the input it receives. It utilizes deep learning 
          techniques, particularly the transformer architecture, to understand and produce 
          coherent and contextually relevant responses in natural language.
              " imageType={chatgpt} link="/Chatgpt" />
        </div>
        <div className="p-2 lg:bg-slate-300">
          <Card blogno={3} topicName="python" description="          
            Python is a high-level, interpreted programming language known for its 
            simplicity and readability. It supports multiple programming paradigms,
            including procedural, object-oriented, and functional programming,making
            it popular for web development, data analysis, artificial intelligence,
            scientific computing, and more." imageType={python} link="/Python" />
        </div>
        <div className="p-2 lg:bg-slate-200">
          <Card blogno={4} topicName="quantum technology" description="          
           Quantum Technology refers to the application of quantum mechanics principles to develop new technologies,particularly in computing, communication, and sensing.Quantum computers 
           leverage the unique properties of quantum bits (qubits) to perform 
           calculations at speeds unattainable by classical computers, potentially 
           revolutionizing fields like cryptography and material science."
            imageType={quantum} link="/Quantum" />
        </div>
        <div className="p-2 lg:bg-slate-300">
          <Card blogno={5} topicName="blockchain" description="          
           Blockchain is a decentralized digital ledger technology that records transactions 
           across multiple computers in a way that ensures the security, transparency, andimmutability
           of the data. It is the foundational technology behind cryptocurrencies like Bitcoin and 
           enables various applications, including smart contracts and supply chain management."
            imageType={blockchain} link="/Blockchain" />
        </div>
        <div className="p-2 lg:bg-slate-200">
          <Card blogno={6} topicName="gemini ai" description="      
          Gemini AI is Google's next-generation artificial intelligence system, part of the company's broader push to advance its AI capabilities. The Gemini models are multimodal, meaning they can handle and process various types of data, including text, images, audio, video, and code. This versatility makes Gemini highly capable across a wide range of tasks, such as content generation, advanced reasoning, and even coding." imageType={gemini} link="/Gemini" />
        </div>
      </div>
    </main>

  );
}
