const initializeScrollspy = (onIntersecting) => {
  const firstSection = document.getElementById('section1');
  const secondSection = document.getElementById('section2');
  const thirdSection = document.getElementById('section3');

  const callbackFunction = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        onIntersecting(entry.target.id);
      }
    });
  };
  
  const options = {
    rootMargin: '0%',
    threshold: 0.5
  };

  const observer = new IntersectionObserver(callbackFunction, options);

  if (firstSection) observer.observe(firstSection);
  if (secondSection) observer.observe(secondSection);
  if (thirdSection) observer.observe(thirdSection);

  return observer;
};

export default initializeScrollspy;
