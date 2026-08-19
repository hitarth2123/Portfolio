import React from 'react';

// HighlightText component maps through text and wraps keywords matching the JD 
// in a special span. This is the "caching thing" for fast scanning by recruiters.
const HighlightText = ({ text, keywords }) => {
  if (!text || !keywords || keywords.length === 0) return <span>{text}</span>;

  // Escape keywords for regex and sort by length descending to match longest first (e.g. "System Design" before "Design")
  const escapedKeywords = keywords
    .map(kw => kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .sort((a, b) => b.length - a.length);

  const regex = new RegExp(`\\b(${escapedKeywords.join('|')})\\b`, 'gi');
  
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) => {
        const isMatch = keywords.some(
          kw => kw.toLowerCase() === part.toLowerCase()
        );
        
        return isMatch ? (
          <span key={index} className="jd-highlight" title="Matches JD Requirement">
            {part}
          </span>
        ) : (
          part
        );
      })}
    </span>
  );
};

export default HighlightText;
