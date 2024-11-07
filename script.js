const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const btn = document.getElementById("btn");

btn.addEventListener(
  "click",
  debounce((e) => {
    console.log("Clicked");
  }, 1000)
);

const throttle = (fn, delay) => {
  let last = 0;
  return (...args) => {
    let now = new Date();
    if (now - last < delay) {
      return;
    }
    last = now;
    return fn(...args);
  };
};

const lengthOfLongestSubstring = (s) => {
  let start = 0;
  let end = 0;
  let maxLength = 0;

  let uniChars = new Set();

  while (end < s.length) {
    if (!uniChars.has(s[end])) {
      uniChars.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, uniChars.size);
    } else {
      uniChars.delete(s[start]);
      start++;
    }
  }

  return maxLength;
};

const mergeTwoSortedArray = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

const objectDeepCopy = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let copiedVal = Array.isArray(obj) ? [] : {};
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    copiedVal[keys[i]] = objectDeepCopy(obj[keys[i]]);
  }

  return copiedVal;
};
