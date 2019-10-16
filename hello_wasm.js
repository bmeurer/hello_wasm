function print(arg) {
  console.log('level 2: ' + arg);
}

function load_module(module, imports) {
  return fetch(module)
      .then(response => response.arrayBuffer())
      .then(
          array_buffer =>
              WebAssembly.compile(array_buffer)
                  .then(module => new WebAssembly.Instance(module, imports)));
}


const print_module = load_module('42.wasm', {imports: {global: 0, callback: print}});

function proxy(arg) {
  console.log('level 1: ' + arg);
  print_module.then(module => module.exports.level_down());
}

const proxy_module = load_module('43.wasm', {imports: {global: 1, callback: proxy}});
proxy_module.then(module => module.exports.level_down());
