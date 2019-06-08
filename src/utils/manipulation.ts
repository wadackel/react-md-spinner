export const injectStyles = (name: string, rules: string) => {
  const el = document.createElement("style");
  el.type = "text/css";
  el.setAttribute(`data-${name}`, "");
  el.innerHTML = rules;

  document.head.appendChild(el);
};

export const uninjectStyles = (name: string) => {
  const el = document.querySelector(`[data-${name}]`);
  if (el != null && el.parentNode != null) {
    el.parentNode.removeChild(el);
  }
};
