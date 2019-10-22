(module $42.wasm
  (global $global (import "imports" "global") i32)
  (func $callback (import "imports" "callback") (param i32))
  (func $foo42 (export "foo42") (local i32)
    global.get $global
    local.set 0
    global.get $global
    i32.const 42
    i32.add
    call $callback))
