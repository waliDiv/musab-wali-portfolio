    // ===== CHAT BOT LOGIC =====
    (function() {
      const chatToggle = document.getElementById('chatToggle');
      const chatWidget = document.getElementById('chatWidget');
      const chatClose = document.getElementById('chatClose');
      const chatMessages = document.getElementById('chatMessages');
      const chatInput = document.getElementById('chatInput');
      const chatSend = document.getElementById('chatSend');

      // ---- Open / Close ----
      chatToggle.addEventListener('click', () => {
        chatWidget.classList.toggle('open');
      });

      chatClose.addEventListener('click', () => {
        chatWidget.classList.remove('open');
      });

      // ---- Bot Knowledge Base ----
      const botKnowledge = [
        { keywords: ['service', 'services', 'offer', 'do you do'], reply: "I offer Web Design, Front-End Development, Graphic Design, and Responsive UI. Each is tailored to your needs." },
        { keywords: ['price', 'pricing', 'cost', 'how much', 'rates'], reply: "Pricing: Web Design from $300, Front-End Dev from $500, Graphic Design from $150, Responsive UI from $250. Contact me for a custom quote!" },
        { keywords: ['project', 'projects', 'portfolio', 'work'], reply: "I've built Luxury Nest Hotel, Wolf Vanguard Tyres, The Grand Horizon, NexoraDigital, Safe Driving Academy, Verizon, Nexa, and a Weather App. Check the Projects section!" },
        { keywords: ['guide', 'help', 'advice', 'recommend'], reply: "I can guide you: For a business site, start with Web Design + Responsive UI. For a web app, go with Front-End Dev. Let me know what you need!" },
        { keywords: ['front-end', 'frontend', 'developer', 'react'], reply: "I specialize in modern front-end: HTML5, CSS3, JavaScript, React, and responsive frameworks. I build fast, interactive UIs." },
        { keywords: ['graphic', 'logo', 'brand', 'design'], reply: "Graphic Design: logos, banners, social media kits, brand identity. Starting at $150. I'll create a visual identity that stands out." },
        { keywords: ['responsive', 'mobile', 'ui', 'ux'], reply: "Responsive UI: mobile-first, cross-browser, pixel-perfect. Starting at $250. I ensure your site looks great on any device." },
        { keywords: ['hello', 'hi', 'hey'], reply: "Hello! I'm Musab's assistant. Ask me about services, pricing, projects, or any guidance." },
        { keywords: ['thank', 'thanks'], reply: "You're welcome! If you need more details, just ask. 😊" }
      ];

      function getBotReply(userMsg) {
        const lower = userMsg.toLowerCase().trim();
        if (!lower) return "Please type something!";
        for (let entry of botKnowledge) {
          for (let kw of entry.keywords) {
            if (lower.includes(kw)) return entry.reply;
          }
        }
        return "I'm here to help! Try asking about services, pricing, projects, or guidance. Or tell me more about what you're looking for.";
      }

      // ---- Add message ----
      function addMessage(text, sender) {
        const div = document.createElement('div');
        div.classList.add('msg', sender === 'bot' ? 'msg-bot' : 'msg-user');
        div.textContent = text;
        chatMessages.appendChild(div);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }

      // ---- Send handler ----
      function handleSend() {
        const text = chatInput.value.trim();
        if (!text) return;
        addMessage(text, 'user');
        chatInput.value = '';
        chatInput.focus();
        setTimeout(() => {
          addMessage(getBotReply(text), 'bot');
        }, 350 + Math.random() * 300);
      }

      // ---- Event listeners ----
      chatSend.addEventListener('click', handleSend);
      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleSend();
        }
      });

      // Focus input on load
      window.addEventListener('load', () => chatInput.focus());
    })();
