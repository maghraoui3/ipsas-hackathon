"use client";

import { useEffect, useState } from 'react';

const PuterChatComponent = ({ message }: { message: string }) => {
  // State to store the response text
  const [responseText, setResponseText] = useState<string>('');

  useEffect(() => {
    // Dynamically load the Puter script
    const script = document.createElement('script');
    script.src = 'https://js.puter.com/v2/';
    script.async = true;
    document.body.appendChild(script);

    script.onload = async () => {
      try {
        const resp = await window.puter.ai.chat(message, { model: 'claude', stream: true });

        let fullResponse = '';
        for await (const part of resp) {
          const text = part?.text?.replaceAll('\n', '\n'); // Preserve line breaks
          fullResponse += text;
        }

        // Update the state with the full response text
        setResponseText(fullResponse);
      } catch (error) {
        console.error('Error while fetching response:', error);
      }
    };

    return () => {
      document.body.removeChild(script); // Clean up the script on component unmount
    };
  }, [message]);

  return (
    <div>
      <pre>{responseText}</pre> {/* Use <pre> to preserve formatting */}
    </div>
  );
};

export default PuterChatComponent;
