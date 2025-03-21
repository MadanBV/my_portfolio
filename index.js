import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Madan Venkatesh</h1>
        <p className="text-lg text-gray-600">
          Software Engineer | Machine Learning Practitioner
        </p>
        <div className="mt-4 space-x-4">
          <a href="mailto:madanballupetvenkat@csus.edu" className="text-blue-500 underline">Email</a>
          <a href="https://linkedin.com/in/madan-venkatesh-8852711b5" className="text-blue-500 underline">LinkedIn</a>
          <a href="https://github.com/MadanBV" className="text-blue-500 underline">GitHub</a>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I'm a results-driven Software Engineer and ML practitioner with 2+ years of experience building scalable AI systems, full-stack web apps, and GenAI-powered tools. Currently pursuing my Master's in Computer Science at CSU Sacramento.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li><strong>Languages:</strong> Python, Java, PHP, Node.js, C</li>
          <li><strong>ML & AI:</strong> TensorFlow, Keras, scikit-learn, OpenCV, Gen AI, LLMs</li>
          <li><strong>Web Dev:</strong> Flask, HTML, CSS, JavaScript</li>
          <li><strong>Databases:</strong> SQL, MongoDB</li>
          <li><strong>Cloud & Tools:</strong> AWS, GitHub, ServiceNow</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Software Engineer - Accenture (Sep 2021 – Sep 2023)</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Improved backend systems using Java and SQL</li>
              <li>Optimized database design reducing processing time by 40%</li>
              <li>Used ServiceNow to streamline operations</li>
            </ul>
          </li>
          <li>
            <strong>ML Intern - Loginware (Aug 2020 – Oct 2020)</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Built CV/NLP models with 95%+ accuracy</li>
              <li>Integrated YOLO for real-time object detection</li>
            </ul>
          </li>
          <li>
            <strong>Software Intern - Zerozilla (Mar 2021 – May 2021)</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Built Flask-based web app</li>
              <li>Improved load times by 20%</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Crop Disease Prediction (XAI)",
              url: "https://github.com/MadanBV/Intelligent-Agriculture-system",
              description: "Keras-based model with 99% accuracy, GenAI chatbot, and XAI integration"
            },
            {
              title: "Object Detection Bot",
              url: "https://github.com/MadanBV/Object-Detection-using-YOLO",
              description: "YOLO + LLM-based AI suggestion system"
            },
            {
              title: "Real-time Health Dashboard",
              url: "https://github.com/MadanBV/Real-time-Crop-Health-Dashboard.git",
              description: "FastAPI + React + AWS Lambda CI/CD system"
            },
            {
              title: "E-Commerce Catalog",
              url: "https://github.com/MadanBV/Ecommerce-Catalog-using-MongoDB",
              description: "MongoDB & Flask catalog with analytics"
            },
            {
              title: "AI Event Scheduler",
              url: "https://github.com/MadanBV/AI-event-scheduler",
              description: "Uses GenAI, Google Calendar, and NLP"
            },
            {
              title: "Sentiment Analysis",
              url: "https://github.com/MadanBV/Sentiment-Analysis-for-user-reviews",
              description: "NLP with BERT & LSTM deployed on AWS Lambda"
            },
            {
              title: "Airline Management System",
              url: "https://github.com/MadanBV/Airport-management-system",
              description: "PHP + SQL-based reservation system"
            }
          ].map((project, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Button>View on GitHub</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
