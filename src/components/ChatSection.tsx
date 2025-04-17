
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const MOCK_RESPONSES = {
  // Mock responses for demo purposes - would be replaced with actual AI responses
  greetings: [
    "Jambo! (Hello!) How can I help you learn about Kenyan culture today?",
    "Karibu! (Welcome!) I'm excited to share about Kenya's rich heritage with you!",
  ],
  folklore: [
    "In Kenyan folklore, the hare (sungura) is often depicted as a clever trickster, similar to Br'er Rabbit in American folklore. These stories teach children about wit and resourcefulness.",
    "The Mijikenda people of coastal Kenya have stories about Katsumbakazi, a mythical monster that is said to devour disobedient children. These stories were traditionally used to teach children good behavior.",
    "The Kikuyu people tell the story of Gikuyu and Mumbi, who were created by God (Ngai) and became the ancestors of the Kikuyu nation. They had nine daughters who formed the nine clans of the Kikuyu.",
  ],
  traditions: [
    "The Maasai people are known for their unique jumping dance called 'Adumu'. Young warriors jump as high as possible to demonstrate their strength and agility.",
    "In many Kenyan communities, age-set systems mark the transition from childhood to adulthood. The Samburu, for instance, have the 'Moran' warriors who undergo various rituals and responsibilities.",
  ],
  nature: [
    "Kenya is home to the 'Big Five' game animals: lions, leopards, elephants, buffalo, and rhinoceros. These animals have deep cultural significance and feature prominently in many traditional stories.",
    "Mount Kenya is not just the highest mountain in Kenya, but also has spiritual significance. The Kikuyu people believe that their God (Ngai) lives on its peak.",
  ],
  default: [
    "That's an interesting question about Kenyan culture. While I continue to learn, I'd recommend exploring the rich traditions of different Kenyan communities like the Maasai, Kikuyu, Luo, and Swahili.",
    "Kenya has a diverse cultural landscape with over 40 ethnic groups. Each has unique traditions, crafts, and stories that contribute to Kenya's rich heritage.",
  ]
};

const getRandomResponse = (category: keyof typeof MOCK_RESPONSES) => {
  const responses = MOCK_RESPONSES[category] || MOCK_RESPONSES.default;
  return responses[Math.floor(Math.random() * responses.length)];
};

const ChatSection: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t('chat.intro'),
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  const getMockResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('hello') || lowerQuestion.includes('jambo') || lowerQuestion.includes('hi')) {
      return getRandomResponse('greetings');
    } else if (lowerQuestion.includes('story') || lowerQuestion.includes('myth') || lowerQuestion.includes('legend') || lowerQuestion.includes('folklore')) {
      return getRandomResponse('folklore');
    } else if (lowerQuestion.includes('tradition') || lowerQuestion.includes('custom') || lowerQuestion.includes('ritual')) {
      return getRandomResponse('traditions');
    } else if (lowerQuestion.includes('animal') || lowerQuestion.includes('nature') || lowerQuestion.includes('mountain')) {
      return getRandomResponse('nature');
    } else {
      return getRandomResponse('default');
    }
  };
  
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot thinking and then responding
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getMockResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <section id="chat" className="py-20 bg-muted pattern-overlay">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
              {t('chat.title')}
            </h2>
            <p className="text-lg text-clay max-w-2xl mx-auto">
              Explore Kenyan folklore, traditions, and cultural practices through our AI assistant powered by natural language processing.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-sand">
            <div className="h-[500px] flex flex-col">
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`
                        max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 
                        ${message.sender === 'user' 
                          ? 'bg-terracotta text-white rounded-tr-none' 
                          : 'bg-sand text-forest rounded-tl-none'}
                      `}
                    >
                      <div className="flex items-center mb-1">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2 bg-white/20">
                          {message.sender === 'user' 
                            ? <User className="h-3 w-3" /> 
                            : <Bot className="h-3 w-3" />
                          }
                        </div>
                        <span className="text-xs opacity-90">
                          {message.sender === 'user' ? 'You' : 'JamboAI'}
                        </span>
                      </div>
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-sand text-forest rounded-2xl rounded-tl-none px-4 py-3">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-clay animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-clay animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-clay animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              <div className="p-4 border-t border-sand bg-sand/20">
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    placeholder={t('chat.placeholder')}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-terracotta hover:bg-terracotta/90 text-white"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {t('chat.button')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            This is a demonstration version with pre-programmed responses. 
            A full implementation would connect to a natural language processing backend.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
