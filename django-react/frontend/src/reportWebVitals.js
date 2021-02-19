import { getCLS, getFID, getLCP, getTTFB, getFCP } from "web-vitals";

function sendToAnalytics(metric) {
  const body = JSON.stringify({[metric.name]: metric.value});
  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  (navigator.sendBeacon && navigator.sendBeacon('/__appsignal-web-vitals', body)) ||
      fetch('/__appsignal-web-vitals', {body, method: 'POST', keepalive: true});
}

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    
      // getCLS(onPerfEntry);
      // getFID(onPerfEntry);
      // getFCP(onPerfEntry);
      // getLCP(onPerfEntry);
      // getTTFB(onPerfEntry);
      getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
    ;
  }
};

export default reportWebVitals;
