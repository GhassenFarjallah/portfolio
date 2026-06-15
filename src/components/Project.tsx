import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock11 from '../assets/images/ASR_Summarization_image.png';
import mock12 from '../assets/images/mock12.png';
import mock13 from '../assets/images/mock13.png';
import mock14 from '../assets/images/mock14.webp';
import mock15 from '../assets/images/mock15.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/GhassenFarjallah/AutomaticSpeechRecognition-ASR-_Summarization_Youtube_video/tree/main" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GhassenFarjallah/AutomaticSpeechRecognition-ASR-_Summarization_Youtube_video/tree/main" target="_blank" rel="noreferrer"><h2>Summarization System for Youtube Videos</h2></a>
                <p>I made an automatic speech recognition with Whisper hugging face model for a youtube video to get the text from the speech .Then we tried 3 different models for the summarization part ,2 models Unlimiformer and PRIMERA which are specific for text generation( supporting more than 1024 tokens ) and the other one ,supporting less than 1024 tokens, distilbart specific for this task.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GhassenFarjallah/CHAT_PDF_for_EDA_deep_learning_papers_books" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GhassenFarjallah/CHAT_PDF_for_EDA_deep_learning_papers_books" target="_blank" rel="noreferrer"><h2>CHAT_PDF for EDA deep learning papers books</h2></a>
                <p>A chatbot that can answer questions about deep learning papers and books, using PDF parsing and natural language processing.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GhassenFarjallah/Classification_Summarization_LLM_Models" target="_blank" rel="noreferrer"><img src={mock13} className="zoom" alt="thumbnail" width="80%"/></a>
                <a href="https://github.com/GhassenFarjallah/Classification_Summarization_LLM_Models" target="_blank" rel="noreferrer"><h2>Classification and Summarization on Enron Dataset</h2></a>
                <p>This project aims to evaluate the performance of small-scale Large Language Models (LLMs) with fewer than 4 billion parameters on tasks derived from the Enron Email Fraud Dataset. We experimented with four models — H2O, Minitron, StableLM Zephyr, and Phi-3 — using different prompt engineering strategies to perform two main tasks: email summarization and email classification (Spam vs. Ham).</p>
            </div>
            <div className="project">
                <a href="https://github.com/GhassenFarjallah/Langchain_chatbot_with_Mistral_Open_SourceLLM_model/tree/main" target="_blank" rel="noreferrer"><img src={mock14} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GhassenFarjallah/Langchain_chatbot_with_Mistral_Open_SourceLLM_model/tree/main" target="_blank" rel="noreferrer"><h2>OpenAI & Mistral Chatbot Integration with LangChain</h2></a>
                <p>Developed a conversational AI chatbot using LangChain with integration of both proprietary (OpenAI) and open-source (Mistral) language models. The project leverages LangSmith for monitoring and tracing interactions, and LangChain Community tools for open-source model integration and orchestration.</p>
            </div>
            <div className="project">
                <a href="https://github.com/GhassenFarjallah/Safe_rl_adaptation_SMBPO_Frozen_Lake" target="_blank" rel="noreferrer"><img src={mock15} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/GhassenFarjallah/Safe_rl_adaptation_SMBPO_Frozen_Lake" target="_blank" rel="noreferrer"><h2>Adaptation of SMBPO model for safe RL for Frozen Lake environment</h2></a>
                <p>The selected environment is Frozen Lake from the Toy Text environments, where the agent must reach the goal while navigating slippery tiles and avoiding holes. We extend the default 4×4 setting to a 15×15 grid and convert holes into non-absorbing obstacle states to better study safe reinforcement learning and obstacle avoidance. This project also adapts SMBPO for discrete state spaces by replacing the original continuous SAC design with two Q-networks. We reuse key components from Safe-MBPO and MBPO, including imagined rollouts, dynamic ensembles, and rollout scheduling, implemented using Gym and Gym Toy Text for both safe and standard MBPO evaluation.</p>
            </div>          
        </div>
    </div>
    );
}

export default Project;