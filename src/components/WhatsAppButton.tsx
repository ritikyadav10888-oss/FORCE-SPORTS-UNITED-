import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/917208829940?text=Hi%20Force%20Sports%20United%2C%20I%27d%20like%20to%20discuss%20an%20event."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-primary-foreground" />
  </a>
);

export default WhatsAppButton;
