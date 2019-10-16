(module
  (global $global (import "imports" "global") i32)
  (func $callback (import "imports" "callback") (param i32))
  (func (export "level_down")
    global.get $global
    i32.const 43
    i32.add
    call $callback))
