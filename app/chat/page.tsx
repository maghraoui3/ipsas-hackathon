import {Chatbot} from "@/components/Chatbot";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">IPSAS Chatbot</h1>
      <Chatbot />
    </div>
  );
}