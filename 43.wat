(module $43.wasm
  (global $global (import "imports" "global") i32)
  (func $callback (import "imports" "callback") (param i32))
  (func $foo43 (export "foo43")
    global.get $global
    i32.const 43
    i32.add
    call $callback))
