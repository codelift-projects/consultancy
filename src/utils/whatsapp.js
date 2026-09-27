/**
 * Utility to build WhatsApp redirect URL with sanitized phone number & URI encoded text
 */
export const buildWhatsAppLink = (phone = '919511896416', text = '') => {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(text.trim());
  return `https://wa.me/${cleanPhone}${encodedText ? `?text=${encodedText}` : ''}`;
};
