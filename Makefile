TARGET=dist
FILES=index.html 43.wasm 42.wasm hello_wasm.js

all: $(addprefix $(TARGET)/,$(FILES))

$(TARGET)/%: %
	cp $^ $@

%.wasm: %.wat
	wat2wasm --debug-names $^

clean:
	rm -f $(addprefix $(TARGET)/,$(FILES))
