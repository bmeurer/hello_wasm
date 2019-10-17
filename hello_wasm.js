async function instantiate(url, imports) {
  const response = await fetch(url);
  const moduleData = await response.arrayBuffer();
  const module = await WebAssembly.compile(moduleData);
  return new WebAssembly.Instance(module, {imports});
}

(async function() {
  const {exports: {foo42}} = await instantiate('42.wasm', {global: 0, callback(arg) {
    console.log(`called from foo42: ${arg}`);
  }});

  const {exports: {foo43}} = await instantiate('43.wasm', {global: 1, callback(arg) {
    console.log(`called from foo43: ${arg}`);
    foo42();
  }});

  foo43();
})();
