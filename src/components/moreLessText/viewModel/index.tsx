import React, {
    useState,
  } from 'react';
  const useMoreLessTextViewModels = () => {
    const [isTruncatedText, setIsTruncatedText] = useState(false);
    const [showMore, setShowMore] = useState(true);
    return {isTruncatedText, setIsTruncatedText, showMore, setShowMore};
  };
  export default useMoreLessTextViewModels;
  